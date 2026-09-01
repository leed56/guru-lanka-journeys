import fs from "fs";
import path from "path";
import sharp from "sharp";

const cardConfigs = [
  { id: 1, name: "Spiritual", file: "concept-spiritual.jpg", bg: [243, 178, 2], isWhiteText: true },
  { id: 2, name: "Cultural & Heritage", file: "concept-cultural-heritage.jpg", bg: [77, 42, 2], isWhiteText: true },
  { id: 3, name: "Sports", file: "concept-sports.jpg", bg: [0, 40, 91], isWhiteText: true },
  { id: 4, name: "Romantic", file: "concept-romantic.jpg", bg: [201, 24, 76], isWhiteText: true },
  { id: 5, name: "Women's Friendship", file: "concept-womens-friendship.jpg", bg: [93, 56, 148], isWhiteText: true },
  { id: 6, name: "Fun & Leisure", file: "concept-fun-leisure.jpg", bg: [10, 10, 10], isWhiteText: true },
  { id: 7, name: "Nature Trails", file: "concept-nature-trails.jpg", bg: [1, 98, 53], isWhiteText: true },
  { id: 8, name: "Business", file: "concept-business.jpg", bg: [106, 185, 226], textColor: [0, 36, 85] },
  { id: 9, name: "MICE", file: "concept-mice.jpg", bg: [255, 255, 255], textColor: [150, 0, 2] },
  { id: 10, name: "Happy Retirement", file: "concept-happy-retirement.jpg", bg: [213, 213, 218], textColor: [66, 45, 114] },
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

    // Number is near the horizontal center (between 30% and 70% width)
    // and between y=20 and y=120
    let digitMinY = meta.height, digitMaxY = 0, digitMinX = meta.width, digitMaxX = 0;
    const minXSearch = Math.floor(meta.width * 0.30);
    const maxXSearch = Math.floor(meta.width * 0.70);

    for (let y = 15; y < 100; y++) {
      for (let x = minXSearch; x < maxXSearch; x++) {
        const p = getPixel(x, y);
        let isText = false;
        if (c.isWhiteText) {
          if (p[0] > 220 && p[1] > 220 && p[2] > 220) isText = true;
        } else if (c.textColor) {
          if (colorDist(p, c.textColor) < 80) isText = true;
        }

        if (isText) {
          if (y < digitMinY) digitMinY = y;
          if (y > digitMaxY) digitMaxY = y;
          if (x < digitMinX) digitMinX = x;
          if (x > digitMaxX) digitMaxX = x;
        }
      }
    }

    console.log(`Card ${c.id.toString().padStart(2)}: Digit Y: ${digitMinY.toString().padStart(3)}..${digitMaxY.toString().padStart(3)} (height=${(digitMaxY - digitMinY).toString().padStart(2)}), X: ${digitMinX.toString().padStart(3)}..${digitMaxX.toString().padStart(3)} (width=${(digitMaxX - digitMinX).toString().padStart(2)})`);
  }
}

run();
