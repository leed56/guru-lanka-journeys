import fs from "fs";
import path from "path";
import sharp from "sharp";

const targetW = 600;
const targetH = 800; // 3:4 aspect ratio

const cardDefs = [
  {
    id: 1,
    name: "Spiritual",
    src: "concept-spiritual.jpg",
    dest: "public/__l5e/assets-v1/37243ad9-712a-4cec-b3ca-b3147832b81b/concept-spiritual.jpg",
    crop: { left: 16, top: 38, width: 272, height: 456 },
    bg: { r: 243, g: 178, b: 2 },
    targetH: 710,
    topPos: 45,
  },
  {
    id: 2,
    name: "Cultural & Heritage",
    src: "concept-cultural-heritage.jpg",
    dest: "public/__l5e/assets-v1/10449b48-c7de-4a1b-950d-34f6f7f328c4/concept-cultural-heritage.jpg",
    crop: { left: 24, top: 36, width: 280, height: 458 },
    bg: { r: 77, g: 42, b: 2 },
    fitFill: true,
  },
  {
    id: 3,
    name: "Sports",
    src: "concept-sports.jpg",
    dest: "public/__l5e/assets-v1/8966f125-d8be-4169-99c0-7a3660cc28a1/concept-sports.jpg",
    crop: { left: 20, top: 34, width: 264, height: 448 },
    bg: { r: 0, g: 40, b: 91 },
    targetH: 710,
    topPos: 45,
  },
  {
    id: 4,
    name: "Romantic",
    src: "concept-romantic.jpg",
    dest: "public/__l5e/assets-v1/94a52418-c48b-4f49-b900-33be35a0aadf/concept-romantic.jpg",
    crop: { left: 16, top: 34, width: 260, height: 448 },
    bg: { r: 201, g: 24, b: 76 },
    targetH: 710,
    topPos: 45,
  },
  {
    id: 5,
    name: "Women's Friendship",
    src: "concept-womens-friendship.jpg",
    dest: "public/__l5e/assets-v1/48af7e11-a5b5-4234-90c4-7980bfbcd042/concept-womens-friendship.jpg",
    crop: { left: 18, top: 32, width: 300, height: 454 },
    bg: { r: 103, g: 56, b: 158 },
    fitFill: true,
  },
  {
    id: 6,
    name: "Fun & Leisure",
    src: "concept-fun-leisure.jpg",
    dest: "public/__l5e/assets-v1/ccac1007-56a0-42d0-b520-e62b0ea5946c/concept-fun-leisure.jpg",
    crop: { left: 16, top: 16, width: 268, height: 460 },
    bg: { r: 10, g: 10, b: 10 },
    targetH: 700,
    topPos: 50,
  },
  {
    id: 7,
    name: "Nature Trails",
    src: "concept-nature-trails.jpg",
    dest: "public/__l5e/assets-v1/669194c4-057d-4921-8071-7933673ca9a3/concept-nature-trails.jpg",
    crop: { left: 20, top: 20, width: 285, height: 464 },
    bg: { r: 1, g: 98, b: 53 },
    fitFill: true,
  },
  {
    id: 8,
    name: "Business",
    src: "concept-business.jpg",
    dest: "public/__l5e/assets-v1/57728023-6df5-46ae-81ad-61a0c5a2a372/concept-business.jpg",
    crop: { left: 18, top: 20, width: 266, height: 460 },
    bg: { r: 106, g: 185, b: 226 },
    fitFill: true,
  },
  {
    id: 9,
    name: "MICE",
    src: "concept-mice.jpg",
    dest: "public/__l5e/assets-v1/c5b7fe58-538b-4462-9075-0a96c173052f/concept-mice.jpg",
    crop: { left: 16, top: 20, width: 262, height: 430 },
    bg: { r: 255, g: 255, b: 255 },
    targetH: 690,
    topPos: 55,
  },
  {
    id: 10,
    name: "Happy Retirement",
    src: "concept-happy-retirement.jpg",
    dest: "public/__l5e/assets-v1/6ca8287a-06e1-4886-9d26-c1f5969cfbe4/concept-happy-retirement.jpg",
    crop: { left: 22, top: 20, width: 280, height: 458 },
    bg: { r: 213, g: 213, b: 218 },
    fitFill: true,
  },
];

async function generate() {
  for (const c of cardDefs) {
    const srcPath = path.join("scripts/temp_originals", c.src);
    fs.mkdirSync(path.dirname(c.dest), { recursive: true });

    if (c.fitFill) {
      await sharp(srcPath)
        .extract(c.crop)
        .resize(targetW, targetH, { fit: "fill" })
        .jpeg({ quality: 96 })
        .toFile(c.dest);
    } else {
      const croppedBuffer = await sharp(srcPath).extract(c.crop).toBuffer();
      const meta = await sharp(croppedBuffer).metadata();
      const scaledH = c.targetH || 700;
      const scaledW = Math.min(targetW, Math.round(meta.width * (scaledH / meta.height)));

      const resizedBuffer = await sharp(croppedBuffer)
        .resize(scaledW, scaledH, { fit: "fill" })
        .toBuffer();

      const leftPos = Math.max(0, Math.round((targetW - scaledW) / 2));
      const topPos = Math.max(0, Math.min(targetH - scaledH, c.topPos || 45));

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
        .toFile(c.dest);
    }

    console.log(`Generated Card ${c.id} (${c.name}) => ${c.dest}`);
  }
}

generate().catch(console.error);
