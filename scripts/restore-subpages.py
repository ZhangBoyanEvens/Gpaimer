#!/usr/bin/env python3
"""Restore subpage gallery content to original; keep hero injection unchanged."""

import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

ORIGINAL_TITLE = "WebGL Pixel Effect on Scroll with GSAP, Three.js and Astro"

ORIGINAL_GRID = """<div class="grid"> <h1 class="grid__item" style="--r: 1; --c: 5; --s: 5;" data-text-animation-in-duration="0.5" data-text-animation-out-duration="0.4" data-text-animation-in-delay="0.4" data-text-animation data-text-animation-split>
Northern <br>Expeditions <br>1970–1978
</h1> <a class="grid__item" href="/1" style="--r: 1; --c: 1; --s: 4"> <img loading="eager" src="/assets/1.webp" alt=""> <p data-text-animation> Morning Ascent </p> </a> <a class="grid__item" href="/2" style="--r: 2; --c: 4; --s: 3"> <img loading="eager" src="/assets/2.webp" alt=""> <p data-text-animation> Camp at Dusk </p> </a> <a class="grid__item" href="/3" style="--r: 2; --c: 7; --s: 2"> <img loading="eager" src="/assets/3.webp" alt=""> <p data-text-animation> Crossing the Valley </p> </a> <a class="grid__item" href="/4" style="--r: 3; --c: 3; --s: 4"> <img loading="eager" src="/assets/4.webp" alt=""> <p data-text-animation> Quiet Plateau </p> </a> <a class="grid__item" href="/5" style="--r: 4; --c: 1; --s: 4"> <img loading="eager" src="/assets/5.webp" alt=""> <p data-text-animation> Rest Stop </p> </a> <p class="grid__item" style="font-size: 1.45rem; --r: 5; --c: 4; --s: 4;" data-text-animation-out-stagger="-0.03" data-text-animation data-text-animation-split>
Dark spruce forest frowned on either side the frozen waterway. The
          trees had been stripped by a recent wind of their white covering of
          frost, and they seemed to lean toward each other, black and ominous,
          in the fading light. A vast silence reigned over the land. The land
          itself was a desolation, lifeless, without movement, so lonely and
          cold that the spirit of it was not even that of sadness. There was a
          hint in it of laughter, but a laughter more terrible than any
          sadness—a laughter that was mirthless as the smile of the sphinx, a
          laughter cold as the frost and partaking of the grimness of
          infallibility. It was the masterful and incommunicable wisdom of
          eternity laughing at the futility of life and the effort of life. It
          was the Wild, the savage, frozen-hearted Northland Wild.
</p> <a class="grid__item" href="/6" style="--r: 6; --c: 3; --s: 5"> <img loading="eager" src="/assets/6.webp" alt=""> <p data-text-animation> Evening Descent </p> </a> <a class="grid__item" href="/7" style="--r: 7; --c: 4; --s: 4"> <img loading="eager" src="/assets/7.webp" alt=""> <p data-text-animation> Along the Ridge </p> </a> <a class="grid__item" href="/8" style="--r: 8; --c: 1; --s: 3"> <img loading="eager" src="/assets/8.webp" alt=""> <p data-text-animation> Shelter from the Wind </p> </a> <p class="grid__item" style="--r: 9; --c: 4; --s: 3;" data-text-animation-out-stagger="-0.03" data-text-animation data-text-animation-split>
The man strode ahead of the team. He was a young man, tall, strong,
          with light hair and blue eyes, and his face was expressionless as the
          land he traversed. He carried his rifle loosely in his hand, as though
          it were part of his body, and he swung along with the ease of long
          familiarity. The woman followed the sled. She was young, too, and her
          face bore the stamp of the Northland—endurance and patience, and a
          vague hint of suffering. The child, wrapped in furs, slept in the
          sled, its face peaceful and unconscious of the grim struggle being
          waged on its behalf.
</p> <a class="grid__item" href="/9" style="--r: 10; --c: 4; --s: 5"> <img loading="eager" src="/assets/9.webp" alt=""> <p data-text-animation> Last Light </p> </a> </div> </div> </div>  </div> </div>"""

TAIL = """ <canvas id="webgl"></canvas> <div class="transition__overlay team__transition" aria-hidden="true"> <h1 class="title__destination">Architecture is not seen, it is felt as atmosphere.</h1> </div> <script type="module" src="/js/subpage-hero.js"></script> <script type="module" src="/_astro/Layout.astro_astro_type_script_index_0_lang.BS-Q_rAI.js"></script> </body> </html>"""


def restore_index(section: str) -> None:
    path = ROOT / section / "index.html"
    html = path.read_text(encoding="utf-8")
    head_end = html.index("</style></head>")
    head = html[: head_end + len("</style></head>")]
    body_start = head + ' <body data-barba="wrapper"> <div id="app" data-barba="container" data-barba-namespace="home"> <div id="smooth-content" data-page-template="home">  <div class="page-hero content team"> <h1 class="title" data-subpage-hero-title data-motion-text="true" data-motion-text-split="chars" data-motion-text-duration="0.75"></h1> </div> <div data-gallery-container class="container"> <div class="grid-container"> '
    import re
    head = re.sub(r"<title>.*?</title>", f"<title>{ORIGINAL_TITLE}</title>", head)
    path.write_text(body_start + ORIGINAL_GRID + TAIL, encoding="utf-8")
    print(f"Restored {path}")


def remove_detail_dirs(section: str) -> None:
    for i in range(1, 10):
        detail_dir = ROOT / section / str(i)
        if detail_dir.exists():
            shutil.rmtree(detail_dir)
            print(f"Removed {detail_dir}")


def main() -> None:
    for section in ("bg", "arch", "model"):
        restore_index(section)
        remove_detail_dirs(section)


if __name__ == "__main__":
    main()
