#!/usr/bin/env python3
"""Crop, denoise, upscale and sharpen collage images for Silence section."""

from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
IN_DIR = ROOT / "assets" / "images" / "collage" / "in"
OUT_DIR = ROOT / "assets" / "images" / "collage"

MIN_WIDTH = 1600
JPEG_QUALITY = 94

# aspect width/height, optional focal point (0..1), optional vertical crop window for composites
SLOTS = {
    "01": {
        "label": "top-left — roof and bell tower",
        "aspect": 270 / 210,
        "focus": (0.52, 0.38),
    },
    "02": {
        "label": "top-right — chapel in mist",
        "aspect": 290 / 260,
        "focus": (0.42, 0.48),
    },
    "03": {
        "label": "left-middle — plan drawing",
        "aspect": 330 / 200,
        "focus": (0.5, 0.22),
        "crop_window": (0.0, 0.0, 1.0, 0.52),
    },
    "04": {
        "label": "right-middle — interior light",
        "aspect": 250 / 330,
        "focus": (0.5, 0.55),
    },
    "05": {
        "label": "center — chapel on hillside",
        "aspect": 370 / 250,
        "focus": (0.58, 0.52),
    },
    "06": {
        "label": "bottom-left — structure model",
        "aspect": 340 / 250,
        "focus": (0.46, 0.5),
    },
    "07": {
        "label": "bottom-right — interior aisle",
        "aspect": 410 / 300,
        "focus": (0.5, 0.58),
    },
}


def find_source(index: int) -> Path | None:
    keys = (str(index), f"{index:02d}")
    for key in keys:
        for path in sorted(IN_DIR.glob(f"{key}.*")):
            if path.is_file():
                return path
        for path in sorted(IN_DIR.glob(f"collage-{key}.*")):
            if path.is_file():
                return path
    return None


def window_crop(image: Image.Image, window: tuple[float, float, float, float]) -> Image.Image:
    x0, y0, x1, y1 = window
    w, h = image.size
    return image.crop((int(w * x0), int(h * y0), int(w * x1), int(h * y1)))


def focal_crop(image: Image.Image, aspect: float, focus: tuple[float, float]) -> Image.Image:
    width, height = image.size
    current = width / height
    fx, fy = focus

    if current > aspect:
        crop_w = int(height * aspect)
        crop_h = height
        left = int((width - crop_w) * fx)
        top = 0
    else:
        crop_w = width
        crop_h = int(width / aspect)
        left = 0
        top = int((height - crop_h) * fy)

    left = max(0, min(left, width - crop_w))
    top = max(0, min(top, height - crop_h))
    return image.crop((left, top, left + crop_w, top + crop_h))


def denoise(image: Image.Image) -> Image.Image:
    smoothed = image.filter(ImageFilter.MedianFilter(size=3))
    return Image.blend(image, smoothed, alpha=0.34)


def enhance(image: Image.Image) -> Image.Image:
    rgb = denoise(image.convert("RGB"))

    if rgb.width < MIN_WIDTH:
        height = round(rgb.height * MIN_WIDTH / rgb.width)
        rgb = rgb.resize((MIN_WIDTH, height), Image.Resampling.LANCZOS)

    rgb = rgb.filter(ImageFilter.UnsharpMask(radius=1.2, percent=145, threshold=2))
    rgb = ImageEnhance.Contrast(rgb).enhance(1.05)
    rgb = ImageEnhance.Sharpness(rgb).enhance(1.14)
    rgb = ImageEnhance.Color(rgb).enhance(1.04)
    return rgb


def process_slot(slot: str, source: Path) -> None:
    meta = SLOTS[slot]
    image = Image.open(source)

    if meta.get("crop_window"):
        image = window_crop(image, meta["crop_window"])

    image = focal_crop(image, meta["aspect"], meta["focus"])
    result = enhance(image)

    output = OUT_DIR / f"collage-{slot}.jpg"
    result.save(output, quality=JPEG_QUALITY, subsampling=0, optimize=True)
    print(f"[ok] {source.name} -> {output.name} ({result.size[0]}x{result.size[1]}) — {meta['label']}")


def main() -> None:
    IN_DIR.mkdir(parents=True, exist_ok=True)
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    processed = 0
    for index in range(1, 8):
        slot = f"{index:02d}"
        source = find_source(index)
        if source is None:
            print(f"[skip] {slot} — missing source in {IN_DIR}")
            continue
        process_slot(slot, source)
        processed += 1

    print(f"Done — {processed}/7 images processed.")


if __name__ == "__main__":
    main()
