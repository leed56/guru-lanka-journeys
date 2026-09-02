import fs from "fs";
import path from "path";
import sharp from "sharp";

const dir = "scripts/temp_originals";
const outDir = "public/images/concept-covers";

// Exact true card boundaries from the original source brochure scans:
const cardBoxes = {
  "spiritual": { file: "concept-spiritual.jpg", left: 16, top: 41, width: 274, height: 456 },
  "cultural-heritage": { file: "concept-cultural-heritage.jpg", left: 13, top: 41, width: 298, height: 456 },
  "sports": { file: "concept-sports.jpg", left: 24, top: 25, width: 268, height: 454 },
  "romantic": { file: "concept-romantic.jpg", left: 13, top: 29, width: 268, height: 454 },
  "womens-friendship": { file: "concept-womens-friendship.jpg", left: 19, top: 27, width: 295, height: 457 },
  "fun-leisure": { file: "concept-fun-leisure.jpg", left: 18, top: 16, width: 269, height: 458 },
  "nature-trails": { file: "concept-nature-trails.jpg", left: 11, top: 26, width: 297, height: 457 },
  "business": { file: "concept-business.jpg", left: 14, top: 25, width: 274, height: 458 },
  "mice": { file: "concept-mice.jpg", left: 12, top: 24, width: 270, height: 458 },
  "happy-retirement": { file: "concept-happy-retirement.jpg", left: 24, top: 20, width: 275, height: 458 },
};

async function generatePerfectCovers() {
  for (const [slug, box] of Object.entries(cardBoxes)) {
    const src = path.join(dir, box.file);
    const dest = path.join(outDir, `${slug}.jpg`);

    await sharp(src)
      .extract({
        left: box.left,
        top: box.top,
        width: box.width,
        height: box.height,
      })
      .resize(600, 800, {
        fit: "fill", // Fills the exact 3:4 aspect ratio cleanly
      })
      .jpeg({ quality: 96 })
      .toFile(dest);

    console.log(`Successfully generated perfect true-crop cover for ${slug}`);
  }
}

generatePerfectCovers().catch(console.error);
