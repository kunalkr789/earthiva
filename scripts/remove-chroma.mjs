import sharp from "sharp";

const [, , input, output, keyHex = "", transparentArg = "24", opaqueArg = "120"] = process.argv;

if (!input || !output) {
  console.error(
    "Usage: node scripts/remove-chroma.mjs <input> <output> [#rrggbb] [transparentThreshold] [opaqueThreshold]",
  );
  process.exit(1);
}

const transparentThreshold = Number.parseFloat(transparentArg);
const opaqueThreshold = Number.parseFloat(opaqueArg);

function hexToRgb(hex) {
  const cleaned = hex.replace("#", "");
  if (!/^[\da-fA-F]{6}$/.test(cleaned)) return null;
  return [
    Number.parseInt(cleaned.slice(0, 2), 16),
    Number.parseInt(cleaned.slice(2, 4), 16),
    Number.parseInt(cleaned.slice(4, 6), 16),
  ];
}

const image = sharp(input).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

const key =
  hexToRgb(keyHex) ??
  [data[0] ?? 0, data[1] ?? 255, data[2] ?? 0];

for (let i = 0; i < data.length; i += info.channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  const distance = Math.sqrt(
    (r - key[0]) ** 2 +
      (g - key[1]) ** 2 +
      (b - key[2]) ** 2,
  );

  let alpha = 255;
  if (distance <= transparentThreshold) {
    alpha = 0;
  } else if (distance < opaqueThreshold) {
    alpha =
      ((distance - transparentThreshold) / (opaqueThreshold - transparentThreshold)) * 255;
  }

  data[i + 3] = Math.max(0, Math.min(255, Math.round(alpha)));

  if (alpha < 255) {
    const blend = alpha / 255;
    data[i] = Math.round(r * blend);
    data[i + 1] = Math.round(g * blend);
    data[i + 2] = Math.round(b * blend);
  }
}

await sharp(data, {
  raw: {
    width: info.width,
    height: info.height,
    channels: info.channels,
  },
})
  .png()
  .toFile(output);
