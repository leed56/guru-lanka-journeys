import sharp from "sharp";

const file = "public/__l5e/assets-v1/37243ad9-712a-4cec-b3ca-b3147832b81b/concept-spiritual-cropped.jpg";

async function run() {
  const croppedBuffer = await sharp(file).toBuffer();

  const width = 332;
  const height = 442;

  await sharp({
    create: {
      width,
      height,
      channels: 3,
      background: { r: 243, g: 178, b: 2 }
    }
  })
  .composite([
    {
      input: croppedBuffer,
      top: 0,
      left: Math.round((width - 268) / 2)
    }
  ])
  .jpeg({ quality: 95 })
  .toFile("public/__l5e/assets-v1/37243ad9-712a-4cec-b3ca-b3147832b81b/concept-spiritual.jpg");

  console.log("Created 3:4 seamless edge-to-edge concept-spiritual.jpg");
}

run();
