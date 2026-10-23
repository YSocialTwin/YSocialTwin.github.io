#!/usr/bin/env python3
"""Generate the social-preview (og:image) cards, 1200x630.

Run from the repository root:  python3 scripts/make_og_images.py
Needs Pillow. Rewrites assets/images/og-*.png and assets/images/og/*.png.
Posts get one card each (title + date); a few pages get a dedicated card.
Set `header_img: assets/images/og/<name>.png` in a page front matter to use it.
"""
import glob, os, re
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
B = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
R = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
if not os.path.exists(B):  # macOS fallback
    B = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
    R = "/System/Library/Fonts/Supplemental/Arial.ttf"
TEAL, VIOLET, ORANGE = (94, 200, 214), (138, 128, 210), (255, 138, 76)


def background():
    bg = Image.new("RGB", (W, H))
    px = bg.load()
    for y in range(H):
        for x in range(W):
            t = x / W * 0.6 + y / H * 0.4
            px[x, y] = (int(11 + 14 * t), int(16 + 18 * t), int(32 + 34 * t))
    g = Image.new("RGB", (W, H), (0, 0, 0))
    d = ImageDraw.Draw(g)
    d.ellipse((-150, -200, 450, 360), fill=(30, 130, 150))
    d.ellipse((760, -220, 1360, 300), fill=(90, 70, 170))
    d.ellipse((620, 430, 1100, 820), fill=(170, 80, 40))
    g = g.filter(ImageFilter.GaussianBlur(120))
    return ImageChops.add(bg, g.point(lambda v: int(v * 0.55)))


def clean(s):
    s = re.sub(r"[^\x20-\x7EÀ-ſ–—’“”]", "", s or "")
    return re.sub(r"\s+", " ", s).strip()


def wrap(d, text, font, width):
    lines, cur = [], ""
    for w in text.split():
        t = (cur + " " + w).strip()
        if d.textlength(t, font=font) <= width:
            cur = t
        else:
            lines.append(cur)
            cur = w
    return lines + [cur] if cur else lines


def card(out, label, title, sub="", logo=True):
    img = background()
    d = ImageDraw.Draw(img)
    x0 = 90
    if logo:
        lg = Image.open("assets/images/Ysocial_logo_color.png").convert("RGBA").resize((84, 84))
        c = Image.new("RGBA", (112, 112), (0, 0, 0, 0))
        ImageDraw.Draw(c).rounded_rectangle((0, 0, 111, 111), radius=22, fill=(255, 255, 255, 235))
        c.alpha_composite(lg, (14, 14))
        img.paste(c, (x0, 70), c)
        d.text((x0 + 134, 98), "YSocial", font=ImageFont.truetype(B, 46), fill=(245, 247, 252))
    tag = label.upper()
    tf = ImageFont.truetype(B, 26)
    tw = d.textlength(tag, font=tf)
    d.rounded_rectangle((x0, 228, x0 + tw + 36, 272), radius=22, outline=TEAL, width=2)
    d.text((x0 + 18, 235), tag, font=tf, fill=TEAL)
    size = 84
    while True:
        tfont = ImageFont.truetype(B, size)
        lines = wrap(d, clean(title), tfont, W - 2 * x0)
        if len(lines) <= 3 and size * 1.12 * len(lines) <= 270 or size <= 48:
            break
        size -= 4
    y = 296
    for ln in lines:
        d.text((x0, y), ln, font=tfont, fill=(245, 247, 252))
        y += int(size * 1.12)
    if sub:
        sf = ImageFont.truetype(R, 32)
        for ln in wrap(d, clean(sub), sf, W - 2 * x0)[:2]:
            d.text((x0, y + 8), ln, font=sf, fill=(190, 200, 220))
            y += 42
    for i, col in enumerate((TEAL, VIOLET, ORANGE)):
        d.rounded_rectangle((x0 + i * 86, 566, x0 + i * 86 + 78, 572), radius=3, fill=col)
    d.text((W - x0, 556), "y-not.social", font=ImageFont.truetype(B, 28), fill=TEAL, anchor="ra")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    img.save(out, optimize=True)
    print("wrote", out)


def front(path):
    t = open(path, encoding="utf-8").read().split("---", 2)[1]
    return {m.group(1): m.group(2).strip().strip('"') for m in re.finditer(r"^(\w+):\s*(.*)$", t, re.M)}


# site-wide default (logo + tagline)
card("assets/images/og-default.png", "Open source", "A digital twin of social media, populated by AI agents.", logo=True)
# blog default and index
card("assets/images/og-blog.png", "Blog", "News from the agents", "Releases, features and research notes from the YSocial team.")
# one card per post
for p in sorted(glob.glob("_posts/*.md")):
    fm = front(p)
    slug = re.sub(r"^\d{4}-\d{2}-\d{2}-|\.md$", "", os.path.basename(p))
    date = os.path.basename(p)[:10]
    title = fm.get("header_title") or fm.get("title", slug)
    sub = fm.get("subtitle", "")
    card(f"assets/images/og/blog-{slug}.png", "Blog · " + date, title, sub)
# dedicated page cards
for page, label in [("download", "Download"), ("whats_new", "Release 4.0.0"), ("stress_reward", "Agents"), ("plugins", "Plugins")]:
    fm = front(f"_pages/{page}.markdown")
    card(f"assets/images/og/{page}.png", label, fm.get("title", page), fm.get("subtitle", ""))
