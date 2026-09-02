import fs from "fs";
import path from "path";
import https from "https";

const dir = path.join(process.cwd(), "public", "images", "testimonials");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const avatars = [
  {
    name: "marie-tom.jpg",
    url: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "priya-singapore.jpg",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "the-ahmeds.jpg",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
  },
];

function fetchWithRedirect(url, dest) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchWithRedirect(res.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
          return;
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", reject);
  });
}

async function run() {
  for (const item of avatars) {
    const dest = path.join(dir, item.name);
    console.log(`Downloading ${item.name}...`);
    await fetchWithRedirect(item.url, dest);
  }
  console.log("All testimonial portraits downloaded successfully!");
}

run().catch(console.error);
