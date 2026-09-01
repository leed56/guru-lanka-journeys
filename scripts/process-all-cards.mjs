import fs from "fs";
import path from "path";
import sharp from "sharp";

const cards = [
  {
    id: 1,
    name: "Spiritual",
    originalFile: "concept-spiritual.jpg",
    destAssetPath: "public/__l5e/assets-v1/37243ad9-712a-4cec-b3ca-b3147832b81b/concept-spiritual.jpg",
    bg: { r: 243, g: 178, b: 2 }, // Gold Yellow
    crop: { left: 16, top: 40, width: 272, height: 456 },
  },
  {
    id: 2,
    name: "Cultural & Heritage",
    originalFile: "concept-cultural-heritage.jpg",
    destAssetPath: "public/__l5e/assets-v1/10449b48-c7de-4a1b-950d-34f6f7f328c4/concept-cultural-heritage.jpg",
    bg: { r: 77, g: 42, b: 2 }, // Dark Brown
    crop: { left: 24, top: 40, width: 280, height: 456 },
  },
  {
    id: 3,
    name: "Sports",
    originalFile: "concept-sports.jpg",
    destAssetPath: "public/__l5e/assets-v1/8966f125-d8be-4169-99c0-7a3660cc28a1/concept-sports.jpg",
    bg: { r: 0, g: 40, b: 91 }, // Dark Navy Blue
    crop: { left: 18, top: 38, width: 268, height: 446 },
  },
  {
    id: 4,
    name: "Romantic",
    originalFile: "concept-romantic.jpg",
    destAssetPath: "public/__l5e/assets-v1/94a52418-c48b-4f49-b900-33be35a0aadf/concept-romantic.jpg",
    bg: { r: 201, g: 24, b: 76 }, // Crimson Rose
    crop: { left: 16, top: 38, width: 260, height: 446 },
  },
  {
    id: 5,
    name: "Women's Friendship",
    originalFile: "concept-womens-friendship.jpg",
    destAssetPath: "public/__l5e/assets-v1/48af7e11-a5b5-4234-90c4-7980bfbcd042/concept-womens-friendship.jpg",
    bg: { r: 93, g: 56, b: 148 }, // Purple
    crop: { left: 28, top: 38, width: 280, height: 448 },
  },
  {
    id: 6,
    name: "Fun & Leisure",
    originalFile: "concept-fun-leisure.jpg",
    destAssetPath: "public/__l5e/assets-v1/ccac1007-56a0-42d0-b520-e62b0ea5946c/concept-fun-leisure.jpg",
    bg: { r: 10, g: 10, b: 10 }, // Black
    crop: { left: 18, top: 22, width: 264, height: 456 },
  },
  {
    id: 7,
    name: "Nature Trails",
    originalFile: "concept-nature-trails.jpg",
    destAssetPath: "public/__l5e/assets-v1/669194c4-057d-4921-8071-7933673ca9a3/concept-nature-trails.jpg",
    bg: { r: 1, g: 98, b: 53 }, // Forest Green
    crop: { left: 25, top: 36, width: 275, height: 450 },
  },
  {
    id: 8,
    name: "Business",
    originalFile: "concept-business.jpg",
    destAssetPath: "public/__l5e/assets-v1/57728023-6df5-46ae-81ad-61a0c5a2a372/concept-business.jpg",
    bg: { r: 106, g: 185, b: 226 }, // Sky Blue
    crop: { left: 18, top: 34, width: 266, height: 448 },
  },
  {
    id: 9,
    name: "MICE",
    originalFile: "concept-mice.jpg",
    destAssetPath: "public/__l5e/assets-v1/c5b7fe58-538b-4462-9075-0a96c173052f/concept-mice.jpg",
    bg: { r: 255, g: 255, b: 255 }, // Pure White
    crop: { left: 18, top: 30, width: 258, height: 440 },
  },
  {
    id: 10,
    name: "Happy Retirement",
    originalFile: "concept-happy-retirement.jpg",
    destAssetPath: "public/__l5e/assets-v1/6ca8287a-06e1-4886-9d26-c1f5969cfbe4/concept-happy-retirement.jpg",
    bg: { r: 213, g: 213, b: 218 }, // Soft Lavender Grey
    crop: { left: 26, top: 32, width: 272, height: 444 },
  },
];

async function processAll() {
  const targetW = 600;
  const targetH = 800; // Exact 3:4 aspect ratio

  for (const c of cards) {
    const srcPath = path.join("scripts/temp_originals", c.originalFile);
    
    // Step 1: Crop the inner content
    const croppedBuffer = await sharp(srcPath)
      .extract(c.crop)
      .toBuffer();

    const croppedMeta = await sharp(croppedBuffer).metadata();

    // Scale factor so the card contents scale to fit nicely in 600x800 canvas
    // We want the inner content height to be around 710px leaving ~45px at top for number and ~45px at bottom
    const scale = 710 / croppedMeta.height;
    const scaledW = Math.round(croppedMeta.width * scale);
    const scaledH = Math.round(croppedMeta.height * scale);

    const resizedBuffer = await sharp(croppedBuffer)
      .resize(scaledW, scaledH, { fit: "contain" })
      .toBuffer();

    const leftPos = Math.round((targetW - scaledW) / 2);
    const topPos = 45; // Uniform top margin for all cards!

    // Step 2: Composite onto solid background of target 600x800
    await sharp({
      create: {
        width: targetW,
        height: targetH,
        channels: 3,
        background: c.bg,
      },
    })
      .composite([
        {
          input: resizedBuffer,
          top: topPos,
          left: leftPos,
        },
      ])
      .jpeg({ quality: 96 })
      .toFile(c.destAssetPath);

    console.log(`Processed Card ${c.id} (${c.name}) => ${c.destAssetPath}`);
  }
}

processAll().catch(console.error);
