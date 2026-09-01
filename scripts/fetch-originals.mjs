import fs from "fs";
import path from "path";
import https from "https";

const assetFiles = [
  "concept-spiritual.jpg.asset.json",
  "concept-cultural-heritage.jpg.asset.json",
  "concept-sports.jpg.asset.json",
  "concept-romantic.jpg.asset.json",
  "concept-womens-friendship.jpg.asset.json",
  "concept-fun-leisure.jpg.asset.json",
  "concept-nature-trails.jpg.asset.json",
  "concept-business.jpg.asset.json",
  "concept-mice.jpg.asset.json",
  "concept-happy-retirement.jpg.asset.json",
];

fs.mkdirSync("scripts/temp_originals", { recursive: true });

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed ${url}: ${response.statusCode}`));
      }
      response.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", reject);
  });
}

async function run() {
  for (const f of assetFiles) {
    const jsonPath = path.join("src/assets", f);
    const data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    const remoteUrl = `https://guru-lanka-journeys.lovable.app${data.url}`;
    const dest = path.join("scripts/temp_originals", data.original_filename);
    await downloadFile(remoteUrl, dest);
    console.log(`Downloaded fresh original: ${data.original_filename}`);
  }
}

run();
