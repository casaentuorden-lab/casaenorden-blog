// Genera un pin de Pinterest (1000x1500) a partir de una foto real de producto
// + overlay de marca (paleta Casa en Orden) montado con código via sharp/SVG.
//
// Uso: node scripts/build-pin.mjs --photo <ruta.jpg> --headline "Titular corto" --out <ruta-pin.jpg>

import sharp from "sharp";
import { readFileSync } from "fs";
import path from "path";
import { pathToFileURL } from "url";

const WIDTH = 1000;
const HEIGHT = 1500;

const BOTTLE = "#2F4A3C";
const BONE = "#F1E9D8";
const BRASS = "#C4923D";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i].replace(/^--/, "");
    args[key] = argv[i + 1];
  }
  return args;
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Envuelve el titular en varias lineas segun un ancho maximo de caracteres aproximado.
function wrapText(text, maxCharsPerLine) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

// Icono de bolsa (usado por defecto, ya en produccion en productos-pin/).
const BAG_ICON = `
      <path d="M4 8 H24 L22 22 A2.2 2.2 0 0 1 19.8 24 H8.2 A2.2 2.2 0 0 1 6 22 Z" />
      <path d="M9.5 8 V6.5 A4.5 4.5 0 0 1 18.5 6.5 V8" />`;

// Icono de carrito de la compra.
const CART_ICON = `
      <circle cx="10" cy="24" r="1.8" fill="${BONE}" stroke="none" />
      <circle cx="20" cy="24" r="1.8" fill="${BONE}" stroke="none" />
      <path d="M3 4 H6 L9.2 18.5 H21 L24 8 H7.2" />`;

function buildBadgeSvg(badgeText, icon = "bag") {
  const text = escapeXml(badgeText);
  const paddingX = 26;
  const iconW = 30;
  const gap = 10;
  const fontSize = 24;
  // Estimacion aproximada del ancho de texto en negrita a este tamano.
  const textWidth = text.length * (fontSize * 0.56);
  const badgeW = Math.round(paddingX * 2 + iconW + gap + textWidth);
  const badgeH = 66;
  const badgeX = WIDTH - badgeW - 50;
  const badgeY = 56;
  const cx = badgeX + badgeW / 2;
  const cy = badgeY + badgeH / 2;

  const iconX = badgeX + paddingX;
  const iconY = badgeY + (badgeH - 24) / 2;
  const textX = iconX + iconW + gap;
  const textY = badgeY + badgeH / 2 + fontSize * 0.35;
  const iconSvg = icon === "cart" ? CART_ICON : BAG_ICON;

  return `
  <g transform="rotate(-6 ${cx} ${cy})">
    <rect x="${badgeX}" y="${badgeY}" width="${badgeW}" height="${badgeH}" rx="16" fill="${BRASS}" />
    <g transform="translate(${iconX}, ${iconY})" fill="none" stroke="${BONE}" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round">
      ${iconSvg}
    </g>
    <text x="${textX}" y="${textY}" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="700" fill="${BONE}">${text}</text>
  </g>`;
}

function buildOverlaySvg(headline, badgeText, badgeIcon) {
  const lines = wrapText(headline, 20);
  const fontSize = 62;
  const lineHeight = 74;
  const bandHeight = 210 + lines.length * lineHeight;
  const bandTop = HEIGHT - bandHeight;

  const textStartY = HEIGHT - bandHeight + 110;
  const tspans = lines
    .map(
      (line, i) =>
        `<tspan x="60" y="${textStartY + i * lineHeight}">${escapeXml(line)}</tspan>`
    )
    .join("");

  return `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${BOTTLE}" stop-opacity="0"/>
      <stop offset="100%" stop-color="${BOTTLE}" stop-opacity="0.92"/>
    </linearGradient>
  </defs>

  <!-- degradado superior para legibilidad del wordmark -->
  <rect x="0" y="0" width="${WIDTH}" height="160" fill="${BOTTLE}" opacity="0.28"/>

  <!-- wordmark -->
  <text x="60" y="90" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-weight="700" fill="${BONE}">Casa en Orden</text>
  <rect x="60" y="110" width="90" height="6" fill="${BRASS}"/>

  <!-- banda inferior degradada -->
  <rect x="0" y="${bandTop - 90}" width="${WIDTH}" height="${bandHeight + 90}" fill="url(#fade)"/>

  <!-- linea de acento sobre el titular -->
  <rect x="60" y="${bandTop + 40}" width="70" height="8" fill="${BRASS}"/>

  <!-- titular -->
  <text font-family="Georgia, 'Times New Roman', serif" font-size="${fontSize}" font-weight="700" fill="${BONE}">
    ${tspans}
  </text>

  <!-- distintivo "esto se compra" -->
  ${buildBadgeSvg(badgeText || "Disponible en Amazon", badgeIcon)}
</svg>`;
}

export async function buildPin({ photoPath, headline, outPath, badgeText, badgeIcon }) {
  const overlaySvg = Buffer.from(buildOverlaySvg(headline, badgeText, badgeIcon));

  const photo = await sharp(photoPath)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "attention" })
    .toBuffer();

  await sharp(photo)
    .composite([{ input: overlaySvg, top: 0, left: 0 }])
    .jpeg({ quality: 90 })
    .toFile(outPath);

  console.log(`Pin generado: ${outPath}`);
}

// CLI
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = parseArgs(process.argv.slice(2));
  if (!args.photo || !args.headline || !args.out) {
    console.error(
      "Uso: node scripts/build-pin.mjs --photo <ruta.jpg> --headline \"Titular\" --out <ruta.jpg>"
    );
    process.exit(1);
  }
  buildPin({
    photoPath: path.resolve(args.photo),
    headline: args.headline,
    outPath: path.resolve(args.out),
    badgeText: args.badge,
    badgeIcon: args.icon,
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
