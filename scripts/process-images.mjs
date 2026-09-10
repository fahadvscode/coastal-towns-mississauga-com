import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assets = "/Users/fahadsold/.cursor/projects/Users-fahadsold-Documents-Documents-Fahad-s-Mac-mini-3-Jaydeep-Data-Landing-pages-Coastal-Towns-Coastaltownsmississauga-com/assets";
const publicDir = path.resolve("public");
const imagesDir = path.join(publicDir, "images");
const appDir = path.resolve("app");

await mkdir(imagesDir, { recursive: true });

async function photo(name, width, height) {
  const src = path.join(assets, `${name}.png`);
  const base = sharp(src).rotate().resize(width, height, { fit: "cover", position: "centre" });
  await base.clone().webp({ quality: 82 }).toFile(path.join(imagesDir, `${name}.webp`));
  await base.clone().jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(imagesDir, `${name}.jpg`));
}

await photo("south-banks-hero", 1920, 1080);
await photo("jim-tovey-conservation", 1920, 1080);
await photo("lakeview-pier", 1920, 1080);
await photo("lakefront-promenade", 1600, 1200);
await photo("waterfront-trail", 1920, 1080);
await photo("registration-waterfront", 1200, 1200);

await sharp(path.join(assets, "south-banks-hero.png"))
  .rotate()
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(path.join(imagesDir, "og.jpg"));

const iconSrc = sharp(path.join(assets, "icon-source.png")).rotate().resize(512, 512, { fit: "cover" });
await iconSrc.clone().png().toFile(path.join(publicDir, "icon-512.png"));
await iconSrc.clone().resize(192, 192).png().toFile(path.join(publicDir, "icon-192.png"));
await iconSrc.clone().resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
await iconSrc.clone().resize(48, 48).png().toFile(path.join(publicDir, "icon-48.png"));
await iconSrc.clone().png().toFile(path.join(appDir, "icon.png"));
await iconSrc.clone().resize(180, 180).png().toFile(path.join(appDir, "apple-icon.png"));

const png48 = await sharp(path.join(publicDir, "icon-48.png")).png().toBuffer();
const ico = buildIco(png48, 48);
await import("node:fs/promises").then(({ writeFile }) =>
  Promise.all([
    writeFile(path.join(publicDir, "favicon.ico"), ico),
    writeFile(path.join(appDir, "favicon.ico"), ico),
  ]),
);

function buildIco(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size === 256 ? 0 : size, 0);
  entry.writeUInt8(size === 256 ? 0 : size, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, png]);
}

console.log("images ready");
