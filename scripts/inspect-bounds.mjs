import sharp from "sharp";

const file = "public/__l5e/assets-v1/37243ad9-712a-4cec-b3ca-b3147832b81b/concept-spiritual-cropped.jpg";

async function run() {
  const image = sharp(file);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  function getPixel(x, y) {
    const idx = (y * width + x) * channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  }

  // Find where white text starts from the top
  let topTextY = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const [r, g, b] = getPixel(x, y);
      if (r > 250 && g > 250 && b > 250) {
        topTextY = y;
        break;
      }
    }
    if (topTextY !== -1) break;
  }

  // Find where white graphic ends at the bottom
  let bottomGraphicY = -1;
  for (let y = height - 1; y >= 0; y--) {
    for (let x = 0; x < width; x++) {
      const [r, g, b] = getPixel(x, y);
      if (r > 250 && g > 250 && b > 250) {
        bottomGraphicY = y;
        break;
      }
    }
    if (bottomGraphicY !== -1) break;
  }

  console.log(`Cropped image size: ${width}x${height}`);
  console.log(`Top white element y=${topTextY}, Bottom white element y=${bottomGraphicY}`);
}

run();
