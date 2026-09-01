import fs from "fs";
import path from "path";
import sharp from "sharp";

const cardConfigs = [
  { id: 1, name: "Spiritual", file: "concept-spiritual.jpg", bg: { r: 243, g: 178, b: 2 } },
  { id: 2, name: "Cultural & Heritage", file: "concept-cultural-heritage.jpg", bg: { r: 77, g: 42, b: 2 } },
  { id: 3, name: "Sports", file: "concept-sports.jpg", bg: { r: 0, g: 40, b: 91 } },
  { id: 4, name: "Romantic", file: "concept-romantic.jpg", bg: { r: 201, g: 24, b: 76 } },
  { id: 5, name: "Women's Friendship", file: "concept-womens-friendship.jpg", bg: { r: 93, g: 56, b: 148 } },
  { id: 6, name: "Fun & Leisure", file: "concept-fun-leisure.jpg", bg: { r: 10, g: 10, b: 10 } },
  { id: 7, name: "Nature Trails", file: "concept-nature-trails.jpg", bg: { r: 1, g: 98, b: 53 } },
  { id: 8, name: "Business", file: "concept-business.jpg", bg: { r: 106, g: 185, b: 226 } },
  { id: 9, name: "MICE", file: "concept-mice.jpg", bg: { r: 255, g: 255, b: 255 } },
  { id: 10, name: "Happy Retirement", file: "concept-happy-retirement.jpg", bg: { r: 213, g: 213, b: 218 } },
];

async function run() {
  for (const c of cardConfigs) {
    const filePath = path.join("scripts/temp_originals", c.file);
    const image = sharp(filePath);
    const meta = await image.metadata();
    const { data } = await image.raw().toBuffer({ resolveWithObject: true });

    function getPixel(x, y) {
      if (x < 0 || x >= meta.width || y < 0 || y >= meta.height) return [255, 255, 255];
      const idx = (y * meta.width + x) * meta.channels;
      return [data[idx], data[idx + 1], data[idx + 2]];
    }

    function colorDist(p1, p2) {
      return Math.sqrt((p1[0]-p2[0])**2 + (p1[1]-p2[1])**2 + (p1[2]-p2[2])**2);
    }

    // Find the number bounds in the top third of the card
    // The number is contrasting color from the background
    let numMinX = meta.width, numMaxX = 0, numMinY = meta.height, numMaxY = 0;
    const topZoneH = Math.floor(meta.height * 0.28);

    for (let y = 10; y < topZoneH; y++) {
      for (let x = 10; x < meta.width - 10; x++) {
        const p = getPixel(x, y);
        // Distance from card bg
        const bgDist = colorDist(p, [c.bg.r, c.bg.g, c.bg.b]);
        // Also check not white border
        const whiteDist = colorDist(p, [255, 255, 255]);
        const darkDist = colorDist(p, [0, 0, 0]);

        // Contrast threshold
        if (bgDist > 60) {
          if (c.id === 9) {
            // For MICE, background is white, text is dark red
            if (p[0] > 100 && p[1] < 80 && p[2] < 80) {
              if (x < numMinX) numMinX = x;
              if (x > numMaxX) numMaxX = x;
              if (y < numMinY) numMinY = y;
              if (y > numMaxY) numMaxY = y;
            }
          } else if (c.id === 6) {
            // For fun leisure, background is black, text is white
            if (p[0] > 180 && p[1] > 180 && p[2] > 180) {
              if (x < numMinX) numMinX = x;
              if (x > numMaxX) numMaxX = x;
              if (y < numMinY) numMinY = y;
              if (y > numMaxY) numMaxY = y;
            }
          } else if (c.id === 10) {
            // For Happy retirement, background is light grey, text is purple
            if (p[0] < 120 && p[1] < 100 && p[2] > 80) {
              if (x < numMinX) numMinX = x;
              if (x > numMaxX) numMaxX = x;
              if (y < numMinY) numMinY = y;
              if (y > numMaxY) numMaxY = y;
            }
          } else if (c.id === 8) {
            // Business: bg sky blue, text dark blue
            if (p[0] < 60 && p[1] < 80 && p[2] > 60) {
              if (x < numMinX) numMinX = x;
              if (x > numMaxX) numMaxX = x;
              if (y < numMinY) numMinY = y;
              if (y > numMaxY) numMaxY = y;
            }
          } else {
            // Text is white
            if (p[0] > 200 && p[1] > 200 && p[2] > 200) {
              if (x < numMinX) numMinX = x;
              if (x > numMaxX) numMaxX = x;
              if (y < numMinY) numMinY = y;
              if (y > numMaxY) numMaxY = y;
            }
          }
        }
      }
    }

    console.log(`Card ${c.id} (${c.name}): Number bounds => Y: ${numMinY}..${numMaxY} (height=${numMaxY - numMinY}), X: ${numMinX}..${numMaxX}`);
  }
}

run();
