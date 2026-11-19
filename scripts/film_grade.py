"""De-AI photograph treatment: subtle film grain, gentle vignette, soft tone grade.

Processes every photo-like image in assets/img (skips poster-* renders and brand
items), re-saving in place as WebP with matching dimensions so srcset stays valid.
"""
from pathlib import Path
import random
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "assets" / "img"

def add_grain(arr, strength=7.0):
    h, w, _ = arr.shape
    rng = np.random.default_rng(1337 + w + h)
    noise = rng.normal(0, strength, (h, w, 1)).astype(np.float32)
    out = arr.astype(np.float32)
    out += noise
    # Luma-weighted to stay subtle in shadows and highlights alike
    return np.clip(out, 0, 255)

def vignette(img, strength=0.18):
    w, h = img.size
    xs = np.linspace(-1, 1, w, dtype=np.float32)
    ys = np.linspace(-1, 1, h, dtype=np.float32)
    xx, yy = np.meshgrid(xs, ys)
    r = np.sqrt(xx ** 2 + yy ** 2) / np.sqrt(2)
    mask = 1.0 - strength * np.clip(r, 0, 1) ** 2
    arr = np.asarray(img).astype(np.float32)
    arr *= mask[:, :, None]
    return np.clip(arr, 0, 255)

def tone_grade(img):
    """Slight S-curve + gentle warmth-neutral shift, film-like but restrained."""
    arr = np.asarray(img).astype(np.float32) / 255.0
    # soft-contrast S curve
    arr = arr * (arr * (2.0 - arr))  # smooth curve, more in mids
    arr = arr * 0.72 + (arr ** 1.0) * 0.28  # blend keeps blacks/blacks clean
    # lift shadows a hair, hold highlights
    shadows = arr ** 0.94
    arr = np.where(arr < 0.5, shadows, arr)
    out = (np.clip(arr, 0, 1) * 255)
    return Image.fromarray(out.astype(np.uint8))

def process(path, is_dark_bg=False):
    im = Image.open(path).convert("RGB")
    # grade
    graded = tone_grade(im)
    graded = ImageEnhance.Color(graded).enhance(0.94)  # desaturate very slightly
    # grain
    arr = np.asarray(graded).astype(np.float32)
    strength = 4.0 if is_dark_bg else 6.0
    arr = add_grain(arr, strength)
    img = Image.fromarray(arr.astype(np.uint8))
    # vignette
    img = Image.fromarray(vignette(img, 0.16 if not is_dark_bg else 0.11).astype(np.uint8))
    img.save(path, "WEBP", quality=78, method=6)
    print(f"graded {path.name}")

def main():
    names = set()
    for p in sorted(IMG.glob("*.webp")):
        n = p.name
        if n.startswith("poster-") or n.startswith("brand-"):
            continue
        names.add(p)
    # Dark hero/background images get an even lighter hand.
    darkish = {"cta-dark", "abstract-", "tyaga-hero", "sloy-hero", "vecher-hero", "studio-hero"}
    for p in sorted(names):
        base = p.stem.split("-")[0]
        is_bg = any(base.startswith(d) for d in darkish)
        process(p, is_dark_bg=is_bg)

if __name__ == "__main__":
    main()