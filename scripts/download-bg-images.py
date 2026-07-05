#!/usr/bin/env python3
"""Download bg gallery images to local assets."""

import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "images" / "bg"
OUT.mkdir(parents=True, exist_ok=True)

IMAGES = {
    "bg-01-sumvitg-village.jpg": "https://archeyes.com/wp-content/uploads/2025/03/Landscape-Saint-Benedict-Chapel-by-Peter-Zumthor-Architectural-Presence-Trevor-Patt.jpg",
    "bg-05-reconstruction-site.jpg": "https://upload.wikimedia.org/wikipedia/commons/5/52/Sogn_Benedetg1.jpg",
    "bg-09-site-silence.jpg": "https://archeyes.com/wp-content/uploads/2025/03/Interior-6-Saint-Benedict-Chapel-by-Peter-Zumthor-Architectural-Presence-Trevor-Patt.jpg",
}

for name, url in IMAGES.items():
    dest = OUT / name
    print(f"Downloading {name} ...")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    data = urllib.request.urlopen(req, timeout=60).read()
    dest.write_bytes(data)
    print(f"  -> {dest} ({len(data) // 1024} KB)")
