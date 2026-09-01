import fs from "fs";
import path from "path";
import sharp from "sharp";

const files = [
  "concept-spiritual.jpg",
  "concept-cultural-heritage.jpg",
  "concept-sports.jpg",
  "concept-romantic.jpg",
  "concept-womens-friendship.jpg",
  "concept-fun-leisure.jpg",
  "concept-nature-trails.jpg",
  "concept-business.jpg",
  "concept-mice.jpg",
  "concept-happy-retirement.jpg",
];

async function run() {
  for (const f of files) {
    const filePath = path.join("scripts/temp_originals", f);
    const image = sharp(filePath);
    const meta = await image.metadata();
    const { data } = await image.raw().toBuffer({ resolveWithObject: true });

    function getPixel(x, y) {
      const idx = (y * meta.width + x) * meta.channels;
      return [data[idx], data[idx + 1], data[idx + 2]];
    }

    // Sample center pixel for background color
    const centerColor = getPixel(Math.floor(meta.width / 2), Math.floor(meta.height / 2));
    const topColor = getPixel(Math.floor(meta.width / 2), 5);
    const bottomColor = getPixel(Math.floor(meta.width / 2), meta.height - 5);

    console.log(`\n=== ${f} (${meta.width}x${meta.height}) ===`);
    console.log(`Top pixel: [${topColor}], Center: [${centerColor}], Bottom: [${bottomColor}]`);
  }
}

run();
