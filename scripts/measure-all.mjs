import fs from "fs";
import path from "path";
import sharp from "sharp";

const files = [
  { name: "Spiritual (1)", file: "concept-spiritual.jpg" },
  { name: "Cultural & Heritage (2)", file: "concept-cultural-heritage.jpg" },
  { name: "Sports (3)", file: "concept-sports.jpg" },
  { name: "Romantic (4)", file: "concept-romantic.jpg" },
  { name: "Women's Friendship (5)", file: "concept-womens-friendship.jpg" },
  { name: "Fun & Leisure (6)", file: "concept-fun-leisure.jpg" },
  { name: "Nature Trails (7)", file: "concept-nature-trails.jpg" },
  { name: "Business (8)", file: "concept-business.jpg" },
  { name: "MICE (9)", file: "concept-mice.jpg" },
  { name: "Happy Retirement (10)", file: "concept-happy-retirement.jpg" },
];

async function run() {
  for (const item of files) {
    const filePath = path.join("scripts/temp_originals", item.file);
    const image = sharp(filePath);
    const meta = await image.metadata();
    const { data } = await image.raw().toBuffer({ resolveWithObject: true });

    function getPixel(x, y) {
      if (x < 0 || x >= meta.width || y < 0 || y >= meta.height) return [255, 255, 255];
      const idx = (y * meta.width + x) * meta.channels;
      return [data[idx], data[idx + 1], data[idx + 2]];
    }

    // Check center pixel for base card color
    const centerColor = getPixel(Math.floor(meta.width / 2), Math.floor(meta.height / 2));
    
    // Sample color near top center below the number (e.g. y = 140)
    const cardBgColor = getPixel(Math.floor(meta.width / 2), 140);

    console.log(`\n========================================`);
    console.log(`Card: ${item.name} (${meta.width}x${meta.height})`);
    console.log(`Estimated BG color at (center, 140): [${cardBgColor}]`);

    // Let's scan along horizontal and vertical center lines
    // Vertical center line
    const centerX = Math.floor(meta.width / 2);
    let topCardY = 0, bottomCardY = meta.height - 1;

    // Scan top down along centerX
    for (let y = 0; y < Math.floor(meta.height / 2); y++) {
      const [r, g, b] = getPixel(centerX, y);
      // If original image is on white background or has top border
      // Check difference from top border pixel [254, 254, 254]
      // or if item is MICE (white card with shadow outside)
      // We will print the transition points
    }

    // Print first 50 pixels down the center line
    const top50 = [];
    for (let y = 0; y < 60; y += 2) {
      top50.push(`y=${y}:[${getPixel(centerX, y).join(",")}]`);
    }
    console.log("Top 60px down center:", top50.join(" | "));

    // Print bottom 40 pixels
    const bottom40 = [];
    for (let y = meta.height - 40; y < meta.height; y += 2) {
      bottom40.push(`y=${y}:[${getPixel(centerX, y).join(",")}]`);
    }
    console.log("Bottom 40px up center:", bottom40.join(" | "));
  }
}

run();
