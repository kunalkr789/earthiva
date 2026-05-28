import { readdir, stat, rename } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const targets = [
  "public/generated/earthiva-hero-banner-v6.png",
  "public/generated",
  "public/products/main/neem.png",
  "public/products",
];

const toProcess = [];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }
    if (/\.(png|jpg|jpeg|webp)$/i.test(entry.name)) {
      toProcess.push(fullPath);
    }
  }
}

for (const target of targets) {
  const absolute = path.join(root, target);
  try {
    const info = await stat(absolute);
    if (info.isDirectory()) {
      await walk(absolute);
    } else {
      toProcess.push(absolute);
    }
  } catch {
    // Skip targets that no longer exist after cleanup.
  }
}

const uniqueFiles = [...new Set(toProcess)];
let totalBefore = 0;
let totalAfter = 0;

for (const src of uniqueFiles) {
  const ext = path.extname(src);
  const isWebp = ext.toLowerCase() === ".webp";
  const finalOut = isWebp ? src : src.slice(0, -ext.length) + ".webp";
  const out = isWebp ? `${src}.tmp` : finalOut;
  const before = (await stat(src)).size;
  const inProductsRoot = src.includes(`${path.sep}public${path.sep}products${path.sep}`) &&
    !src.includes(`${path.sep}public${path.sep}products${path.sep}main${path.sep}`);

  let pipeline = sharp(src).rotate();
  if (inProductsRoot) {
    // 3000x4800 assets are oversized for card + modal usage; cap them for faster delivery.
    pipeline = pipeline.resize({ width: 1400, height: 2240, fit: "inside", withoutEnlargement: true });
  }

  await pipeline
    .webp({
      quality: src.includes("hero-banner") ? 82 : 80,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(out);

  if (isWebp) {
    await rename(out, finalOut);
  }

  const after = (await stat(finalOut)).size;
  totalBefore += before;
  totalAfter += after;
  const saved = (((before - after) / before) * 100).toFixed(1);
  console.log(
    `${path.relative(root, src)} -> ${path.relative(root, finalOut)} | ${saved}% smaller`,
  );
}

const totalSaved = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(
    2,
  )}MB (${totalSaved}% smaller)`,
);
