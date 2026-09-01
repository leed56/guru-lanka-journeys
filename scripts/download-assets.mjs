import fs from "fs";
import path from "path";
import https from "https";

const assetsDir = path.resolve("src/assets");
const publicDir = path.resolve("public");

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
      return resolve(false); // Already exists
    }

    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        return reject(new Error(`Failed to download ${url}: HTTP ${response.statusCode}`));
      }
      response.pipe(file);
      file.on("finish", () => {
        file.close(() => resolve(true));
      });
    }).on("error", (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

async function main() {
  const files = fs.readdirSync(assetsDir).filter(f => f.endsWith(".asset.json"));
  console.log(`Found ${files.length} asset metadata files.`);

  let downloaded = 0;
  let skipped = 0;

  for (const file of files) {
    const jsonPath = path.join(assetsDir, file);
    try {
      const data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
      if (data.url) {
        const remoteUrl = `https://guru-lanka-journeys.lovable.app${data.url}`;
        const localRelPath = data.url.replace(/^\//, "");
        const localDestPath = path.join(publicDir, localRelPath);

        const wasDownloaded = await downloadFile(remoteUrl, localDestPath);
        if (wasDownloaded) {
          downloaded++;
          console.log(`[Downloaded] ${data.original_filename || file}`);
        } else {
          skipped++;
        }
      }
    } catch (e) {
      console.error(`Error processing ${file}:`, e.message);
    }
  }

  console.log(`Finished: ${downloaded} downloaded, ${skipped} skipped.`);
}

main().catch(console.error);
