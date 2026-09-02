import fs from "fs";
import path from "path";
import sharp from "sharp";

const files = [
  "public/images/concept-covers/spiritual.jpg",
  "public/images/concept-covers/cultural-heritage.jpg",
  "public/images/concept-covers/sports.jpg",
  "public/images/concept-covers/romantic.jpg",
  "public/images/concept-covers/womens-friendship.jpg",
  "public/images/concept-covers/fun-leisure.jpg",
  "public/images/concept-covers/nature-trails.jpg",
  "public/images/concept-covers/business.jpg",
  "public/images/concept-covers/mice.jpg",
  "public/images/concept-covers/happy-retirement.jpg"
];

async function scanBorders() {
  for (const f of files) {
    const { data, info } = await sharp(f).raw().toBuffer({ resolveWithObject: true });
    const getPixel = (x, y) => {
      const idx = (y * info.width + x) * info.channels;
      return [data[idx], data[idx + 1], data[idx + 2]];
    };

    console.log(`\n=== ${path.basename(f)} (${info.width}x${info.height}) ===`);
    // Sample top edge at y = 0, 5, 10, 20
    console.log(" Top row (y=0, x=300):", getPixel(300, 0));
    console.log(" Top row (y=5, x=300):", getPixel(300, 5));
    console.log(" Top row (y=15, x=300):", getPixel(300, 15));
    
    // Sample left edge at x = 0, 5, 10, 20
    console.log(" Left edge (x=0, y=400):", getPixel(0, 400));
    console.log(" Left edge (x=5, y=400):", getPixel(5, 400));
    console.log(" Left edge (x=15, y=400):", getPixel(15, 400));

    // Sample right edge at x = width-1, width-6, width-16
    console.log(" Right edge (x=599, y=400):", getPixel(599, 400));
    console.log(" Right edge (x=594, y=400):", getPixel(594, 400));
    console.log(" Right edge (x=584, y=400):", getPixel(584, 400));

    // Sample bottom edge at y = 799, 794, 784
    console.log(" Bottom edge (y=799, x=300):", getPixel(300, 799));
    console.log(" Bottom edge (y=794, x=300):", getPixel(300, 794));
    console.log(" Bottom edge (y=784, x=300):", getPixel(300, 784));
  }
}

scanBorders();
