#!/usr/bin/env python3
"""Sharpen and crop studio window + documentation card images."""

from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
IN_DIR = ROOT / "assets" / "images" / "studio" / "in"
STUDIO_OUT = ROOT / "assets" / "images" / "studio"
UPDATES_OUT = ROOT / "assets" / "images" / "updates"

MIN_WIDTH = 1920
STUDIO_ASPECT = 16 / 10
CARD_ASPECT = 4 / 5
WEBP_QUALITY = 88
JPEG_QUALITY = 94

SLOTS = {
    "1": {
        "label": "Context — alpine village and Matterhorn",
        "focus": (0.5, 0.38),
    },
    "2": {
        "label": "Form — timber architecture detail",
        "focus": (0.42, 0.48),
    },
    "3": {
        "label": "Experience — structural study drawing",
        "focus": (0.5, 0.58),
        "crop_window": (0.0, 0.08, 1.0, 0.92),
    },
}


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
    return Image.blend(image, smoothed, alpha=0.28)


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

    studio = enhance(focal_crop(image, STUDIO_ASPECT, meta["focus"]))
    card = enhance(focal_crop(image, CARD_ASPECT, meta["focus"]))

    studio_path = STUDIO_OUT / f"{slot}.webp"
    card_path = UPDATES_OUT / f"{slot}.jpg"

    studio.save(studio_path, quality=WEBP_QUALITY, method=6)
    card.save(card_path, quality=JPEG_QUALITY, subsampling=0, optimize=True)

    print(
        f"[ok] {source.name} -> {studio_path.name} ({studio.size[0]}x{studio.size[1]}), "
        f"{card_path.name} ({card.size[0]}x{card.size[1]}) — {meta['label']}"
    )


def main() -> None:
    IN_DIR.mkdir(parents=True, exist_ok=True)
    STUDIO_OUT.mkdir(parents=True, exist_ok=True)
    UPDATES_OUT.mkdir(parents=True, exist_ok=True)

    for slot in ("1", "2", "3"):
        source = IN_DIR / f"{slot}.png"
        if not source.exists():
            raise FileNotFoundError(f"Missing source image: {source}")
        process_slot(slot, source)

    print("Done — 3 studio windows + 3 documentation cards processed.")


if __name__ == "__main__":
    main()
