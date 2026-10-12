#!/usr/bin/env python3
"""Turn an owned Tiqnora source logo into Windows ICO without retrieving third-party assets."""
import sys
from pathlib import Path
from PIL import Image, ImageOps

if len(sys.argv) != 3:
    raise SystemExit("usage: create-windows-icon.py IN_PNG OUT_ICO")
src, dest = Path(sys.argv[1]), Path(sys.argv[2])
if not src.is_file() or src.suffix.lower() != ".png":
    raise SystemExit("A Tiqnora-owned PNG is required")
source = Image.open(src).convert("RGBA")
if source.width < 256 or source.height < 96:
    raise SystemExit("The logo is too small for an application icon")
backdrop = Image.new("RGBA", (512, 512), (6, 11, 30, 255))
mark = ImageOps.contain(source, (470, 370), Image.Resampling.LANCZOS)
backdrop.alpha_composite(mark, ((512 - mark.width) // 2, (512 - mark.height) // 2))
dest.parent.mkdir(parents=True, exist_ok=True)
backdrop.save(dest, format="ICO", sizes=[(16,16),(24,24),(32,32),(48,48),(64,64),(128,128),(256,256)])
print(f"Generated developer icon: {dest}")
