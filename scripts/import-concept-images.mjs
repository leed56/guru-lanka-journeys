import fs from "fs";
import path from "path";
import sharp from "sharp";

const conceptFolders = [
  { folder: "no1", slug: "spiritual", id: 1 },
  { folder: "no2", slug: "cultural-heritage", id: 2 },
  { folder: "no3", slug: "sports", id: 3 },
  { folder: "no4", slug: "romantic", id: 4 },
  { folder: "no5", slug: "womens-friendship", id: 5 },
  { folder: "no6", slug: "fun-leisure", id: 6 },
  { folder: "no7", slug: "nature-trails", id: 7 },
  { folder: "no8", slug: "business", id: 8 },
  { folder: "no9", slug: "mice", id: 9 },
  { folder: "no10", slug: "happy-retirement", id: 10 },
];

async function run() {
  const result = {};

  for (const c of conceptFolders) {
    const srcDir = path.join("C:\\Concept", c.folder);
    const destDir = path.join("public", "images", "concepts", c.slug);
    fs.mkdirSync(destDir, { recursive: true });

    if (!fs.existsSync(srcDir)) {
      console.warn(`Source folder ${srcDir} not found`);
      continue;
    }

    const files = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png|webp|avif)$/i.test(f));
    console.log(`Processing ${c.folder} (${c.slug}): ${files.length} images...`);

    const imageList = [];

    let count = 1;
    for (const f of files) {
      const srcFile = path.join(srcDir, f);
      const outName = `photo-${String(count).padStart(2, "0")}.jpg`;
      const destFile = path.join(destDir, outName);

      try {
        // Optimize to standard web dimensions (max 1200px width/height, 88% quality)
        await sharp(srcFile)
          .rotate() // auto-orient based on EXIF
          .resize(1200, 900, { fit: "inside", withoutEnlargement: true })
          .jpeg({ quality: 88, progressive: true })
          .toFile(destFile);

        imageList.push(`/images/concepts/${c.slug}/${outName}`);
        count++;
      } catch (err) {
        console.error(`Error optimizing ${srcFile}:`, err.message);
      }
    }

    result[c.slug] = imageList;
  }

  // Save the manifest JSON file
  fs.writeFileSync(
    "src/data/conceptGalleryManifest.json",
    JSON.stringify(result, null, 2)
  );

  console.log("Finished copying and optimizing all concept images!");
}

run().catch(console.error);
