import fs from "fs";
import path from "path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public", "images", "concept-covers");

const concepts = [
  { slug: "spiritual", src: "public/__l5e/assets-v1/37243ad9-712a-4cec-b3ca-b3147832b81b/concept-spiritual.jpg" },
  { slug: "cultural-heritage", src: "public/__l5e/assets-v1/10449b48-c7de-4a1b-950d-34f6f7f328c4/concept-cultural-heritage.jpg" },
  { slug: "sports", src: "public/__l5e/assets-v1/8966f125-d8be-4169-99c0-7a3660cc28a1/concept-sports.jpg" },
  { slug: "romantic", src: "public/__l5e/assets-v1/94a52418-c48b-4f49-b900-33be35a0aadf/concept-romantic.jpg" },
  { slug: "womens-friendship", src: "public/__l5e/assets-v1/48af7e11-a5b5-4234-90c4-7980bfbcd042/concept-womens-friendship.jpg" },
  { slug: "fun-leisure", src: "public/__l5e/assets-v1/ccac1007-56a0-42d0-b520-e62b0ea5946c/concept-fun-leisure.jpg" },
  { slug: "nature-trails", src: "public/__l5e/assets-v1/669194c4-057d-4921-8071-7933673ca9a3/concept-nature-trails.jpg" },
  { slug: "business", src: "public/__l5e/assets-v1/57728023-6df5-46ae-81ad-61a0c5a2a372/concept-business.jpg" },
  { slug: "mice", src: "public/__l5e/assets-v1/c5b7fe58-538b-4462-9075-0a96c173052f/concept-mice.jpg" },
  { slug: "happy-retirement", src: "public/__l5e/assets-v1/6ca8287a-06e1-4886-9d26-c1f5969cfbe4/concept-happy-retirement.jpg" },
];

async function cleanAllCovers() {
  for (const c of concepts) {
    const dest = path.join(outDir, `${c.slug}.jpg`);
    const img = sharp(c.src);
    const meta = await img.metadata();
    
    // For cultural-heritage, it has a white border on top of about 15-20px
    // For spiritual, sports, and all concepts, let's extract inner content (trim 4% padding from all sides)
    const cropX = Math.round(meta.width * 0.03);
    const cropY = Math.round(meta.height * 0.03);
    const width = meta.width - (cropX * 2);
    const height = meta.height - (cropY * 2);

    await sharp(c.src)
      .extract({ left: cropX, top: cropY, width, height })
      .resize(600, 800, { fit: "cover" })
      .jpeg({ quality: 95 })
      .toFile(dest);

    console.log(`Cleaned & cropped ${c.slug} -> 600x800 borderless`);
  }
}

cleanAllCovers().catch(console.error);
