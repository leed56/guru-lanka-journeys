import fs from "fs";
import path from "path";

const src = "public/__l5e/assets-v1/37243ad9-712a-4cec-b3ca-b3147832b81b/concept-spiritual-cropped.jpg";
const dest = "public/__l5e/assets-v1/37243ad9-712a-4cec-b3ca-b3147832b81b/concept-spiritual.jpg";

fs.copyFileSync(src, dest);
console.log("Updated concept-spiritual.jpg with cropped image");
