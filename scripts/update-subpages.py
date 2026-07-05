#!/usr/bin/env python3
"""Generate subpage gallery and detail HTML with chapel-themed content."""

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

PAGES = {
    "bg": {
        "title": "Saint Benedict Chapel — Background",
        "hero_title": "Background <br>Sumvitg · 1988",
        "para1": (
            "The Chapel of Saint Benedict stands in Sumvitg, a small village "
            "in the Surselva region of Graubünden, Switzerland. Nestled between "
            "steep alpine slopes and the Glenner valley, the site sits at roughly "
            "1,000 metres above sea level — remote, wind-exposed, and deeply tied "
            "to the rhythms of mountain life."
        ),
        "para2": (
            "In 1984 an avalanche destroyed the village's baroque church. Rather "
            "than replicate the past, the community asked Peter Zumthor to design "
            "a new chapel completed in 1988 — a quiet memorial to the disaster "
            "and a place where faith could meet the silence of the Alps."
        ),
        "items": [
            ("Sumvitg Valley", "/assets/images/collage/collage-02.jpg", "Sumvitg, Graubünden", "Site · Address"),
            ("Alpine Setting", "/assets/images/brand-os/alpine-01.jpg", "Surselva Region", "Surrounding landscape"),
            ("Village Hillside", "/assets/images/collage/collage-05.jpg", "Glenner Valley", "Site context"),
            ("Chapel Location", "/assets/images/collage/collage-03.jpg", "Plan · Grundriss", "Precise address"),
            ("Mountain Culture", "/assets/images/brand-os/alpine-03.jpg", "Graubünden Alps", "Surrounding culture"),
            ("Rural Community", "/assets/images/collage/collage-01.jpg", "Sumvitg Village", "Local traditions"),
            ("Winter Landscape", "/assets/images/brand-os/alpine-02.jpg", "High Alps", "Seasonal life"),
            ("Sacred Ground", "/assets/images/hero-chapel.jpg", "Chapel Site", "Background story"),
            ("Memorial Chapel", "/assets/images/collage/collage-04.jpg", "Rebuilt 1988", "Avalanche memorial"),
        ],
    },
    "arch": {
        "title": "Saint Benedict Chapel — Architecture",
        "hero_title": "Architecture <br>Peter Zumthor",
        "para1": (
            "Peter Zumthor (b. 1943) is a Swiss architect whose work privileges "
            "material presence, craft, and atmosphere over image. Trained as a "
            "cabinet-maker before studying design in Basel, he has built a "
            "practice in Haldenstein devoted to buildings that are felt before "
            "they are read — a philosophy that earned him the Pritzker Prize in 2009."
        ),
        "para2": (
            "For Sumvitg, Zumthor designed a teardrop-shaped chapel roughly thirty "
            "metres long, built from locally sourced larch wood. Narrow at the "
            "entrance and widening toward the altar, the form guides the body "
            "inward while vertical light slots and a layered timber shell create "
            "an interior of diffused, almost sacred calm."
        ),
        "items": [
            ("Chapel Exterior", "/assets/images/collage/collage-05.jpg", "Sumvitg 1988", "Architectural form"),
            ("Timber Shell", "/assets/images/collage/collage-01.jpg", "Larch Wood", "Architectural structure"),
            ("Teardrop Plan", "/assets/images/collage/collage-03.jpg", "Grundriss Study", "Architectural concept"),
            ("Interior Light", "/assets/images/collage/collage-04.jpg", "Diffused daylight", "Spatial atmosphere"),
            ("Bell Tower", "/assets/images/collage/collage-02.jpg", "Sumvitg Chapel", "Architectural purpose"),
            ("Wooden Structure", "/assets/images/collage/collage-06.jpg", "Frame study", "Construction logic"),
            ("Spatial Sequence", "/assets/images/collage/collage-07.jpg", "Nave to altar", "Circulation"),
            ("Material Philosophy", "/assets/images/updates/2.jpg", "Peter Zumthor", "Author introduction"),
            ("Alpine Chapel", "/assets/images/hero-chapel.jpg", "Saint Benedict", "Life's work"),
        ],
    },
    "model": {
        "title": "Saint Benedict Chapel — Model",
        "hero_title": "Model <br>Structure · Space · Detail",
        "para1": (
            "Zumthor's design process for the chapel relied on physical models "
            "to test the teardrop geometry, the layering of timber members, and "
            "the relationship between structure and the diffused light that "
            "defines the interior atmosphere."
        ),
        "para2": (
            "Spatial studies trace the narrowing entry, the widening volume "
            "toward the altar, and the vertical light slots cut through the "
            "shell. Material samples — larch boards, joints, and surface "
            "treatments — translate alpine craft into a building meant to be "
            "touched as much as seen."
        ),
        "items": [
            ("Structural Model", "/assets/images/collage/collage-06.jpg", "Wood study", "Structural model"),
            ("Frame Geometry", "/assets/images/collage/collage-06.jpg", "Teardrop frame", "Structural model"),
            ("Roof Study", "/assets/images/collage/collage-01.jpg", "Shell section", "Structural model"),
            ("Plan Drawing", "/assets/images/collage/collage-03.jpg", "Grundriss", "Spatial study"),
            ("Interior Section", "/assets/images/collage/collage-07.jpg", "Longitudinal cut", "Spatial study"),
            ("Light Volume", "/assets/images/collage/collage-04.jpg", "Daylight test", "Spatial study"),
            ("Timber Detail", "/assets/images/updates/3.jpg", "Larch joint", "Material detail"),
            ("Surface Layer", "/assets/images/collage/collage-05.jpg", "Wood cladding", "Material detail"),
            ("Craft Sample", "/assets/images/brand-os/alpine-04.jpg", "Alpine material", "Material detail"),
        ],
    },
}

GRID_LAYOUT = [
    ("h1", 1, 5, 5, None),
    ("a", 1, 1, 4, 0),
    ("a", 2, 4, 3, 1),
    ("a", 2, 7, 2, 2),
    ("a", 3, 3, 4, 3),
    ("a", 4, 1, 4, 4),
    ("p", 5, 4, 4, "para1"),
    ("a", 6, 3, 5, 5),
    ("a", 7, 4, 4, 6),
    ("a", 8, 1, 3, 7),
    ("p", 9, 4, 3, "para2"),
    ("a", 10, 4, 5, 8),
]


def build_grid(section: str, data: dict) -> str:
    parts = ['<div class="grid">']
    for kind, r, c, s, idx in GRID_LAYOUT:
        style = f'--r: {r}; --c: {c}; --s: {s};'
        if kind == "h1":
            parts.append(
                f'<h1 class="grid__item" style="{style}" '
                f'data-text-animation-in-duration="0.5" data-text-animation-out-duration="0.4" '
                f'data-text-animation-in-delay="0.4" data-text-animation data-text-animation-split>'
                f'{data["hero_title"]}</h1>'
            )
        elif kind == "p":
            text = data[idx]
            extra = 'font-size: 1.45rem; ' if idx == "para1" else ""
            parts.append(
                f'<p class="grid__item" style="{extra}{style}" '
                f'data-text-animation-out-stagger="-0.03" data-text-animation data-text-animation-split>'
                f'{text}</p>'
            )
        else:
            name, img, location, date = data["items"][idx]
            n = idx + 1
            parts.append(
                f'<a class="grid__item" href="/{section}/{n}" style="{style}">'
                f'<img loading="eager" src="{img}" alt="{name}">'
                f'<p data-text-animation> {name} </p></a>'
            )
    parts.append("</div>")
    return "".join(parts)


def build_detail(section: str, index: int, data: dict) -> str:
    name, img, location, date = data["items"][index - 1]
    return f"""<!DOCTYPE html><html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="preload" href="/fonts/satoshi/Satoshi-Variable.ttf" as="font" type="font/ttf" crossorigin><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator" content="Astro v5.16.15"><link rel="stylesheet" href="https://use.typekit.net/gwa0xin.css"><link rel="stylesheet" href="/css/page-transition.css"><title>{data['title']} — {name}</title><style>@font-face{{font-family:Satoshi;src:url(/fonts/satoshi/Satoshi-Variable.ttf) format("truetype");font-weight:100 900;font-style:normal;font-display:swap}}:root{{font-size:13px;--color-text: #000000;--color-bg: #ffffff;--color-link: #000000;--color-link-hover: #000000;--page-padding: 2rem}}*,*:before,*:after{{margin:0;padding:0;box-sizing:border-box}}body{{margin:0;color:var(--color-text);background-color:var(--color-bg);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-y:auto;overflow-x:clip;scrollbar-width:none;-ms-overflow-style:none;font-family:Satoshi,system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif}}a{{text-decoration:none;color:var(--color-link);outline:none;cursor:pointer;&:hover{{text-decoration:none;color:var(--color-link-hover)}}&:focus{{outline:none;background:#d3d3d3;&:not(:focus-visible){{background:transparent}}&:focus-visible{{outline:2px solid red;background:transparent}}}}}}#app{{position:relative;z-index:10}}#webgl{{position:fixed;z-index:0;inset:0;pointer-events:none}}.details{{max-width:100%;padding:var(--page-padding)}}.details-container{{width:100%;height:100dvh;overflow:hidden}}.details img{{width:100%;height:100%;object-fit:cover;opacity:0}}.details-data{{display:grid;grid-template-columns:1fr auto auto auto;gap:2rem;padding-bottom:.5rem;align-items:end}}[data-text-animation],[data-icon]{{visibility:hidden}}</style></head> <body data-barba="wrapper"> <div id="app" data-barba="container" data-barba-namespace="detail-{index}"> <div id="smooth-content" data-page-template="detail">  <div class="details"> <div data-text-animation class="details-data"> <a href="/{section}/">← Index</a> <p>{date}</p> <p>{location}</p> <p>{name}</p> </div> <div class="details-container"> <img data-detail-media loading="eager" src="{img}" alt="{name}"> </div> </div>  </div> </div> <canvas id="webgl"></canvas> <div class="transition__overlay team__transition" aria-hidden="true"> <h1 class="title__destination">Architecture is not seen, it is felt as atmosphere.</h1> </div> <script type="module" src="/js/subpage-hero.js"></script> <script type="module" src="/_astro/Layout.astro_astro_type_script_index_0_lang.BS-Q_rAI.js"></script> </body> </html>"""


def update_index(section: str, data: dict) -> None:
    path = ROOT / section / "index.html"
    html = path.read_text(encoding="utf-8")
    start = html.index('<div class="grid">')
    end = html.index("</div> </div> </div>  </div>", start) + len("</div> </div> </div>")
    new_grid = build_grid(section, data)
    html = html[:start] + new_grid + html[end:]
    html = html.replace(
        "<title>WebGL Pixel Effect on Scroll with GSAP, Three.js and Astro</title>",
        f"<title>{data['title']}</title>",
    )
    path.write_text(html, encoding="utf-8")
    print(f"Updated {path}")


def create_details(section: str, data: dict) -> None:
    for i in range(1, 10):
        out = ROOT / section / str(i) / "index.html"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(build_detail(section, i, data), encoding="utf-8")
        print(f"Created {out}")


def main() -> None:
    for section, data in PAGES.items():
        update_index(section, data)
        create_details(section, data)


if __name__ == "__main__":
    main()
