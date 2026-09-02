import fs from "fs";
import path from "path";
import sharp from "sharp";

// Let's write a script that analyzes the exact bounding box of the colored poster in each original image
const dir = "scripts/temp_originals";

async function findCardBox(filename, targetColorFn) {
  const file = path.join(dir, filename);
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  const getPixel = (x, y) => {
    const idx = (y * info.width + x) * info.channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  };

  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const p = getPixel(x, y);
      if (targetColorFn(p)) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`${filename}: Box=[left:${minX}, top:${minY}, width:${maxX - minX + 1}, height:${maxY - minY + 1}] (orig: ${info.width}x${info.height})`);
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

async function run() {
  // Spiritual: yellow/gold (r > 180, g > 120, b < 100)
  await findCardBox("concept-spiritual.jpg", ([r, g, b]) => r > 180 && g > 120 && b < 100);
  
  // Cultural: brown (r > 40 && r < 140, g > 20 && g < 90, b < 40)
  await findCardBox("concept-cultural-heritage.jpg", ([r, g, b]) => r > 40 && r < 160 && g > 20 && g < 100 && b < 50);

  // Sports: navy blue (r < 40, g < 70, b > 60)
  await findCardBox("concept-sports.jpg", ([r, g, b]) => r < 40 && g < 70 && b > 60);

  // Romantic: crimson (r > 160, g < 60, b > 40 && b < 120)
  await findCardBox("concept-romantic.jpg", ([r, g, b]) => r > 160 && g < 60 && b > 40 && b < 120);

  // Womens: purple (r > 60 && r < 140, g < 80, b > 100)
  await findCardBox("concept-womens-friendship.jpg", ([r, g, b]) => r > 60 && r < 140 && g < 80 && b > 100);

  // Fun: black/dark (r < 30 && g < 30 && b < 30)
  await findCardBox("concept-fun-leisure.jpg", ([r, g, b]) => r < 30 && g < 30 && b < 30);

  // Nature: green (r < 50, g > 50, b < 60)
  await findCardBox("concept-nature-trails.jpg", ([r, g, b]) => r < 50 && g > 50 && b < 60);

  // Business: cyan/blue (r > 100, g > 160, b > 200)
  await findCardBox("concept-business.jpg", ([r, g, b]) => r > 100 && g > 160 && b > 200);
}

run();
