import fs from "fs";
import path from "path";
import sharp from "sharp";

const assetFiles = [
  "concept-spiritual.jpg.asset.json",
  "concept-cultural-heritage.jpg.asset.json",
  "concept-sports.jpg.asset.json",
  "concept-romantic.jpg.asset.json",
  "concept-womens-friendship.jpg.asset.json",
  "concept-fun-leisure.jpg.asset.json",
  "concept-nature-trails.jpg.asset.json",
  "concept-business.jpg.asset.json",
  "concept-mice.jpg.asset.json",
  "concept-happy-retirement.jpg.asset.json",
];

async function run() {
  for (const f of assetFiles) {
    const jsonPath = path.join("src/assets", f);
    const data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    const imgPath = path.join("public", data.url.replace(/^\//, ""));
    const meta = await sharp(imgPath).metadata();
    console.log(`${f}: ${data.url} => ${meta.width}x${meta.height}`);
  }
}

run();
