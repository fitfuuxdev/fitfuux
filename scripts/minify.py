"""Create production minified CSS / JS next to the readable sources."""
from pathlib import Path
import csscompressor
import rjsmin

ROOT = Path(__file__).resolve().parent.parent

def min_css(rel_in: str, rel_out: str):
    src = (ROOT / rel_in).read_text(encoding="utf-8")
    out = csscompressor.compress(src)
    (ROOT / rel_out).write_text(out, encoding="utf-8")
    print(rel_out, len(src), "->", len(out))

def min_js(rel_in: str, rel_out: str, replace=None):
    src = (ROOT / rel_in).read_text(encoding="utf-8")
    if replace:
        for a, b in replace:
            src = src.replace(a, b)
    out = rjsmin.jsmin(src)
    (ROOT / rel_out).write_text(out, encoding="utf-8")
    print(rel_out, len(src), "->", len(out))

min_css("assets/css/site.css", "assets/css/site.min.css")
min_css("assets/css/cases.css", "assets/css/cases.min.css")
min_css("assets/fonts/fonts.css", "assets/fonts/fonts.min.css")
min_js("assets/js/app.js", "assets/js/app.min.js", [("./scene.js", "./scene.min.js")])
min_js("assets/js/scene.js", "assets/js/scene.min.js")
