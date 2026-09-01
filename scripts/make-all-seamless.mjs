import fs from "fs";
import path from "path";
import sharp from "sharp";

const cards = [
  {
    id: 1,
    name: "Spiritual",
    originalFile: "concept-spiritual.jpg",
    destAssetPath: "public/__l5e/assets-v1/37243ad9-712a-4cec-b3ca-b3147832b81b/concept-spiritual.jpg",
    crop: { left: 16, top: 40, width: 272, height: 456 },
  },
  {
    id: 2,
    name: "Cultural & Heritage",
    originalFile: "concept-cultural-heritage.jpg",
    destAssetPath: "public/__l5e/assets-v1/10449b48-c7de-4a1b-950d-34f6f7f328c4/concept-cultural-heritage.jpg",
    crop: { left: 24, top: 40, width: 280, height: 456 },
  },
  {
    id: 3,
    name: "Sports",
    originalFile: "concept-sports.jpg",
    destAssetPath: "public/__l5e/assets-v1/8966f125-d8be-4169-99c0-7a3660cc28a1/concept-sports.jpg",
    crop: { left: 20, top: 38, width: 264, height: 446 },
  },
  {
    id: 4,
    name: "Romantic",
    originalFile: "concept-romantic.jpg",
    destAssetPath: "public/__l5e/assets-v1/94a52418-c48b-4f49-b900-33be35a0aadf/concept-romantic.jpg",
    crop: { left: 18, top: 38, width: 256, height: 446 },
  },
  {
    id: 5,
    name: "Women's Friendship",
    originalFile: "concept-womens-friendship.jpg",
    destAssetPath: "public/__l5e/assets-v1/48af7e11-a5b5-4234-90c4-7980bfbcd042/concept-womens-friendship.jpg",
    crop: { left: 28, top: 38, width: 280, height: 448 },
  },
  {
    id: 6,
    name: "Fun & Leisure",
    originalFile: "concept-fun-leisure.jpg",
    destAssetPath: "public/__l5e/assets-v1/ccac1007-56a0-42d0-b520-e62b0ea5946c/concept-fun-leisure.jpg",
    crop: { left: 18, top: 24, width: 264, height: 448 },
  },
  {
    id: 7,
    name: "Nature Trails",
    originalFile: "concept-nature-trails.jpg",
    destAssetPath: "public/__l5e/assets-v1/669194c4-057d-4921-8071-7933673ca9a3/concept-nature-trails.jpg",
    crop: { left: 25, top: 36, width: 275, height: 450 },
  },
  {
    id: 8,
    name: "Business",
    originalFile: "concept-business.jpg",
    destAssetPath: "public/__l5e/assets-v1/57728023-6df5-46ae-81ad-61a0c5a2a372/concept-business.jpg",
    crop: { left: 20, top: 34, width: 262, height: 446 },
  },
  {
    id: 9,
    name: "MICE",
    originalFile: "concept-mice.jpg",
    destAssetPath: "public/__l5e/assets-v1/c5b7fe58-538b-4462-9075-0a96c173052f/concept-mice.jpg",
    crop: { left: 18, top: 30, width: 258, height: 420 },
  },
  {
    id: 10,
    name: "Happy Retirement",
    originalFile: "concept-happy-retirement.jpg",
    destAssetPath: "public/__l5e/assets-v1/6ca8287a-06e1-4886-9d26-c1f5969cfbe4/concept-happy-retirement.jpg",
    crop: { left: 26, top: 32, width: 272, height: 444 },
  },
];

async function run() {
  for (const c of cards) {
    const srcPath = path.join("scripts/temp_originals", c.originalFile);
    
    // 1. Crop to the clean inner card
    const croppedBuffer = await sharp(srcPath).extract(c.crop).toBuffer();
    const croppedMeta = await sharp(croppedBuffer).metadata();
    const { data } = await sharp(croppedBuffer).raw().toBuffer({ resolveWithObject: true });

    const srcW = croppedMeta.width;
    const srcH = croppedMeta.height;
    const channels = croppedMeta.channels;

    // We want output to be 3:4 aspect ratio.
    // Target height = srcH + 30 (giving ~20px top padding and ~10px bottom padding)
    // Target width = Math.round(targetH * (3 / 4))
    const topPad = 24;
    const botPad = 16;
    const targetH = srcH + topPad + botPad;
    const targetW = Math.round(targetH * 0.75); // 3:4

    const leftPad = Math.round((targetW - srcW) / 2);

    // Create raw output buffer
    const outData = Buffer.alloc(targetW * targetH * channels);

    function getSrcPixel(x, y) {
      const sx = Math.max(0, Math.min(srcW - 1, x));
      const sy = Math.max(0, Math.min(srcH - 1, y));
      const idx = (sy * srcW + sx) * channels;
      return [data[idx], data[idx + 1], data[idx + 2]];
    }

    for (let outY = 0; outY < targetH; outY++) {
      // Map outY to srcY
      const srcY = Math.min(srcH - 1, Math.max(0, outY - topPad));

      // Get left-edge pixel for this row and right-edge pixel for this row
      const leftPixel = getSrcPixel(0, srcY);
      const rightPixel = getSrcPixel(srcW - 1, srcY);

      for (let outX = 0; outX < targetW; outX++) {
        let r, g, b;
        if (outX < leftPad) {
          // Left extension: use left-edge pixel
          [r, g, b] = leftPixel;
        } else if (outX >= leftPad + srcW) {
          // Right extension: use right-edge pixel
          [r, g, b] = rightPixel;
        } else {
          const srcX = outX - leftPad;
          [r, g, b] = getSrcPixel(srcX, srcY);
        }

        const outIdx = (outY * targetW + outX) * channels;
        outData[outIdx] = r;
        outData[outIdx + 1] = g;
        outData[outIdx + 2] = b;
      }
    }

    // Save output
    await sharp(outData, {
      raw: {
        width: targetW,
        height: targetH,
        channels: channels,
      },
    })
      .jpeg({ quality: 96 })
      .toFile(c.destAssetPath);

    console.log(`Card ${c.id} (${c.name}) processed to ${targetW}x${targetH} seamlessly.`);
  }
}

run().catch(console.error);
