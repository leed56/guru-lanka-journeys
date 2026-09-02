import fs from "fs";
import path from "path";
import sharp from "sharp";

const dir = "scripts/temp_originals";

async function inspectSpiritual() {
  const file = path.join(dir, "concept-spiritual.jpg");
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  const getPixel = (x, y) => {
    const idx = (y * info.width + x) * info.channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  };

  console.log(`=== Original spiritual (${info.width}x${info.height}) ===`);
  console.log("Top-Left [0,0]:", getPixel(0, 0));
  console.log("Top-Center [150,0]:", getPixel(150, 0));
  console.log("Center [150,250]:", getPixel(150, 250));
  console.log("Left-Center [0,250]:", getPixel(0, 250));
  console.log("Right-Center [304,250]:", getPixel(304, 250));
  console.log("Bottom-Center [150,522]:", getPixel(150, 522));
}

async function inspectSports() {
  const file = path.join(dir, "concept-sports.jpg");
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  const getPixel = (x, y) => {
    const idx = (y * info.width + x) * info.channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  };

  console.log(`=== Original sports (${info.width}x${info.height}) ===`);
  console.log("Top-Left [0,0]:", getPixel(0, 0));
  console.log("Top-Center [150,0]:", getPixel(150, 0));
  console.log("Center [150,250]:", getPixel(150, 250));
  console.log("Left-Center [0,250]:", getPixel(0, 250));
  console.log("Right-Center [304,250]:", getPixel(304, 250));
  console.log("Bottom-Center [150,502]:", getPixel(150, 502));
}

async function inspectCultural() {
  const file = path.join(dir, "concept-cultural-heritage.jpg");
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  const getPixel = (x, y) => {
    const idx = (y * info.width + x) * info.channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  };

  console.log(`=== Original cultural (${info.width}x${info.height}) ===`);
  console.log("Top-Left [0,0]:", getPixel(0, 0));
  console.log("Top-Center [160,0]:", getPixel(160, 0));
  console.log("Center [160,250]:", getPixel(160, 250));
  console.log("Left-Center [0,250]:", getPixel(0, 250));
  console.log("Right-Center [326,250]:", getPixel(326, 250));
  console.log("Bottom-Center [160,520]:", getPixel(160, 520));
}

async function run() {
  await inspectSpiritual();
  await inspectSports();
  await inspectCultural();
}

run();
