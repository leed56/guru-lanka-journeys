import sharp from "sharp";

const file = "public/__l5e/assets-v1/37243ad9-712a-4cec-b3ca-b3147832b81b/concept-spiritual.jpg";

async function run() {
  const image = sharp(file);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  function getPixel(x, y) {
    const idx = (y * width + x) * channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  }

  // Sample row 200 (middle of the card vertically)
  const yMid = 250;
  console.log("Row 250 from x=0 to x=30:");
  for (let x = 0; x < 30; x++) {
    console.log(`x=${x}:`, getPixel(x, yMid));
  }
  console.log("Row 250 near right edge:");
  for (let x = width - 30; x < width; x++) {
    console.log(`x=${x}:`, getPixel(x, yMid));
  }

  // Sample col 150 (middle of the card horizontally)
  console.log("Col 150 from y=0 to y=50:");
  for (let y = 0; y < 50; y++) {
    console.log(`y=${y}:`, getPixel(150, y));
  }
  console.log("Col 150 near bottom:");
  for (let y = height - 50; y < height; y++) {
    console.log(`y=${y}:`, getPixel(150, y));
  }
}

run();
