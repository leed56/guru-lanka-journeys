import fs from "fs";
import path from "path";
import sharp from "sharp";

const dir = "scripts/temp_originals";
const files = fs.readdirSync(dir);

async function inspectAll() {
  for (const f of files) {
    const full = path.join(dir, f);
    const meta = await sharp(full).metadata();
    console.log(f, meta.width, "x", meta.height, "channels:", meta.channels);
  }
}

inspectAll();
