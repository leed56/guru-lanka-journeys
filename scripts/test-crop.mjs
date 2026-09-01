import sharp from "sharp";

const file = "public/__l5e/assets-v1/37243ad9-712a-4cec-b3ca-b3147832b81b/concept-spiritual.jpg";

async function run() {
  const left = 18;
  const top = 46;
  const w = 268;
  const h = 442;

  await sharp(file)
    .extract({ left, top, width: w, height: h })
    .toFile("public/__l5e/assets-v1/37243ad9-712a-4cec-b3ca-b3147832b81b/concept-spiritual-cropped.jpg");

  console.log("Cropped tighter sample saved.");
}

run();
