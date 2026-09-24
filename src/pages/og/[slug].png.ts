/**
 * Open-Graph-Bilder (1200×630) zur Build-Zeit: Wortmarke in Fraunces, Untertitel in Inter,
 * rechts die Pastellhäuser aus dem Design-Cover. Alle Texte aus src/config.ts.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import { config } from '../../config';
import { loadFont, textPath, wrap, escapeXml } from '../../lib/glyphs';

const VARIANTS: Record<string, string> = {
  start: config.description,
  impressum: 'Impressum',
  datenschutz: 'Datenschutzerklärung',
};

export const getStaticPaths: GetStaticPaths = () => Object.keys(VARIANTS).map((slug) => ({ params: { slug } }));

// Häuser aus dem Cover, Ursprung oben links, Größe 450 × 238
const HOUSES = `
<g>
  <rect x="0" y="170" width="97" height="68" rx="24" fill="#d6eaf8"/>
  <path d="M113 238 V175 a48 48 0 0 1 96 0 V238 Z" fill="#f7c8a8"/>
  <path d="M137 205 V165 a24 24 0 0 1 48 0 V205 Z" fill="#fffbf5"/>
  <path d="M225 238 V90 a35 35 0 0 1 96 0 V238 Z" fill="#9cc5a1"/>
  <path d="M240 140 V102 a17 17 0 0 1 34 0 V140 Z" fill="#fffbf5"/>
  <path d="M282 190 V152 a15 15 0 0 1 30 0 V190 Z" fill="#fffbf5"/>
  <path d="M337 238 V56 a56 56 0 0 1 112 0 V238 Z" fill="#cdb4db"/>
  <path d="M365 115 V78 a13 13 0 0 1 26 0 V115 Z" fill="#fffbf5"/>
  <path d="M400 115 V78 a13 13 0 0 1 26 0 V115 Z" fill="#fffbf5"/>
  <path d="M375 238 V178 a18 18 0 0 1 36 0 V238 Z" fill="#fffbf5"/>
  <rect x="-40" y="237" width="530" height="1.5" fill="#8c8a94" opacity=".5"/>
</g>`;

export const GET: APIRoute = async ({ params }) => {
  const subtitle = VARIANTS[params.slug ?? 'start'] ?? config.description;
  const display = await loadFont('fraunces-latin-opsz-normal.woff2', { wght: 480, opsz: 144 });
  const body = await loadFont('inter-latin-wght-normal.woff2', { wght: 450 });

  // Wortmarke: ein Wort pro Zeile, wenn der Name aus zwei Wörtern besteht
  const nameLines = wrap(config.name, display, 104, 560);
  const nameStart = 190;
  const namePaths = nameLines.map((line, i) => textPath(line, display, 104, 80, nameStart + i * 108, -2).d);
  const nameBottom = nameStart + (nameLines.length - 1) * 108;

  const subLines = wrap(subtitle, body, 30, 560).slice(0, 3);
  const subPaths = subLines.map((line, i) => textPath(line, body, 30, 80, nameBottom + 64 + i * 42).d);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#fffbf5"/>
<g transform="translate(700 150) scale(1.05)">${HOUSES}</g>
<g fill="#2e2e3a">${namePaths.map((d) => `<path d="${d}"/>`).join('')}</g>
<g fill="#585866">${subPaths.map((d) => `<path d="${d}"/>`).join('')}</g>
<rect x="80" y="540" width="1040" height="1.5" fill="#e8e0d4"/>
<title>${escapeXml(config.name)}</title>
</svg>`;

  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
