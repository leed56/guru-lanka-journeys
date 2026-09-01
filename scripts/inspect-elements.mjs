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

    // Number is strictly inside y=30..90 and around horizontal center +/- 40px
    const centerX = Math.floor(meta.width / 2);
    let digitMinY = 999, digitMaxY = -1, digitMinX = 999, digitMaxX = -1;

    for (let y = 30; y <= 90; y++) {
      for (let x = centerX - 40; x <= centerX + 40; x++) {
        const p = getPixel(x, y);
        let isText = false;
        if (c.isWhiteText) {
          if (p[0] > 210 && p[1] > 210 && p[2] > 210) isText = true;
        } else if (c.textColor) {
          if (colorDist(p, c.textColor) < 90) isText = true;
        }

        if (isText) {
          if (y < digitMinY) digitMinY = y;
          if (y > digitMaxY) digitMaxY = y;
          if (x < digitMinX) digitMinX = x;
          if (x > digitMaxX) digitMaxX = x;
        }
      }
    }

    // Find title text (e.g. "SPIRITUAL TOURISM", etc.) between y=90..160
    let titleMinY = 999, titleMaxY = -1;
    for (let y = 90; y <= 160; y++) {
      for (let x = 20; x < meta.width - 20; x++) {
        const p = getPixel(x, y);
        let isText = false;
        if (c.isWhiteText) {
          if (p[0] > 210 && p[1] > 210 && p[2] > 210) isText = true;
        } else if (c.textColor) {
          if (colorDist(p, c.textColor) < 90) isText = true;
        }
        if (isText) {
          if (y < titleMinY) titleMinY = y;
          if (y > titleMaxY) titleMaxY = y;
        }
      }
    }

    // Find artwork bottom (bottom-most artwork element) between y=300..meta.height - 15
    let artMaxY = -1;
    for (let y = meta.height - 15; y >= 300; y--) {
      for (let x = 20; x < meta.width - 20; x++) {
        const p = getPixel(x, y);
        let isArt = false;
        if (c.isWhiteText) {
          if (p[0] > 210 && p[1] > 210 && p[2] > 210) isArt = true;
        } else if (c.textColor) {
          if (colorDist(p, c.textColor) < 90) isArt = true;
        }
        if (isArt) {
          artMaxY = y;
          break;
        }
      }
      if (artMaxY !== -1) break;
    }

    console.log(`Card ${c.id.toString().padStart(2)}: Digit Y: ${digitMinY}..${digitMaxY} (H=${digitMaxY - digitMinY}), Title Y: ${titleMinY}..${titleMaxY}, Art bottom: ${artMaxY}`);
  }
}

run();
