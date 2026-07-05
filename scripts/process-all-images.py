#!/usr/bin/env python3
"""Batch clarity enhancement for all site image assets."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"

MIN_WIDTH = 1920
JPEG_QUALITY = 94
WEBP_QUALITY = 88

SKIP_NAMES = {"archdaily-logo.png"}
SKIP_DIRS = {"in"}


def denoise(image: Image.Image, alpha: float = 0.28) -> Image.Image:
    smoothed = image.filter(ImageFilter.MedianFilter(size=3))
    return Image.blend(image, smoothed, alpha=alpha)


def enhance(image: Image.Image, min_width: int = MIN_WIDTH) -> Image.Image:
    rgb = denoise(image.convert("RGB"))

    if rgb.width < min_width:
        height = round(rgb.height * min_width / rgb.width)
        rgb = rgb.resize((min_width, height), Image.Resampling.LANCZOS)

    rgb = rgb.filter(ImageFilter.UnsharpMask(radius=1.2, percent=145, threshold=2))
    rgb = ImageEnhance.Contrast(rgb).enhance(1.05)
    rgb = ImageEnhance.Sharpness(rgb).enhance(1.14)
    rgb = ImageEnhance.Color(rgb).enhance(1.04)
    return rgb


def save_image(image: Image.Image, path: Path) -> None:
    suffix = path.suffix.lower()
    if suffix in {".jpg", ".jpeg"}:
        image.save(path, quality=JPEG_QUALITY, subsampling=0, optimize=True)
    elif suffix == ".webp":
        image.save(path, quality=WEBP_QUALITY, method=6)
    elif suffix == ".png":
        image.save(path, optimize=True)
    else:
        raise ValueError(f"Unsupported format: {path}")


def should_process(path: Path) -> bool:
    if path.name in SKIP_NAMES:
        return False
    if any(part in SKIP_DIRS for part in path.parts):
        return False
    return path.suffix.lower() in {".jpg", ".jpeg", ".webp", ".png"}


def process_in_place(path: Path) -> None:
    with Image.open(path) as source:
        original_size = source.size
        target_min = MIN_WIDTH if max(source.size) >= 1200 else 1600
        result = enhance(source, min_width=target_min)
        save_image(result, path)
        print(
            f"[ok] {path.relative_to(ROOT)} "
            f"{original_size[0]}x{original_size[1]} -> {result.size[0]}x{result.size[1]}"
        )


def collect_in_place_targets() -> list[Path]:
    targets: list[Path] = []

    hero = ASSETS / "images" / "hero-chapel.jpg"
    if hero.exists():
        targets.append(hero)

    targets.extend(sorted((ASSETS / "images" / "brand-os").glob("*.jpg")))
    targets.extend(sorted(ASSETS.glob("*.webp")))

    return [path for path in targets if should_process(path)]


def sync_gallery_webp() -> None:
    for repo in (ROOT / "bg" / "_repo" / "dist", ROOT / "arch" / "_repo" / "dist", ROOT / "model" / "_repo" / "dist"):
        dist_assets = repo / "assets"
        if not dist_assets.exists():
            continue
        for webp in sorted(ASSETS.glob("*.webp")):
            dest = dist_assets / webp.name
            dest.write_bytes(webp.read_bytes())
        print(f"[sync] gallery webp -> {dist_assets.relative_to(ROOT)}")


def run_pipeline_script(name: str) -> None:
    script = ROOT / "scripts" / name
    print(f"\n--- {name} ---")
    subprocess.run([sys.executable, str(script)], check=True)


def main() -> None:
    run_pipeline_script("process-collage-images.py")
    run_pipeline_script("process-studio-images.py")

    print("\n--- in-place enhancement ---")
    for path in collect_in_place_targets():
        process_in_place(path)

    print("\n--- sync gallery ---")
    sync_gallery_webp()
    print("\nDone — all site images clarity-enhanced.")


if __name__ == "__main__":
    main()
