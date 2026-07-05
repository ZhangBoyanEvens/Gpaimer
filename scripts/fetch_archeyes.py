import re
import urllib.request

url = "https://archeyes.com/saint-benedict-chapel-by-peter-zumthor-a-study-in-architectural-presence/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req, timeout=20).read().decode("utf-8", "ignore")
patterns = [
    r"https://archeyes\.com/wp-content/uploads/[^\"'\s>]+\.(?:jpg|jpeg|webp)",
    r"//archeyes\.com/wp-content/uploads/[^\"'\s>]+\.(?:jpg|jpeg|webp)",
    r"/wp-content/uploads/[^\"'\s>]+\.(?:jpg|jpeg|webp)",
]
seen = set()
for pat in patterns:
    for m in re.findall(pat, html):
        if m.startswith("//"):
            m = "https:" + m
        elif m.startswith("/"):
            m = "https://archeyes.com" + m
        if m not in seen:
            seen.add(m)
            print(m)
