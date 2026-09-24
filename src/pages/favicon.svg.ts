/** Schlichtes SVG-Favicon: Initialen aus dem Namen in Fraunces auf Cream – zur Build-Zeit erzeugt. */
import type { APIRoute } from 'astro';
import { initials } from '../config';
import { loadFont, textPath } from '../lib/glyphs';

export const GET: APIRoute = async () => {
  const font = await loadFont('fraunces-latin-opsz-normal.woff2', { wght: 560, opsz: 48 });
  const size = initials.length > 1 ? 32 : 40;
  const { d, width } = textPath(initials, font, size, 0, 0, -0.5);
  // horizontal zentrieren, Grundlinie so setzen, dass Versalien optisch mittig sitzen
  const capHeight = ((font.capHeight ?? font.ascent * 0.7) / font.unitsPerEm) * size;
  const x = (64 - width) / 2;
  const y = 32 + capHeight / 2;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
<rect width="64" height="64" rx="14" fill="#fffbf5"/>
<rect x="1" y="1" width="62" height="62" rx="13" fill="none" stroke="#e8e0d4" stroke-width="2"/>
<path d="${d}" fill="#2e2e3a" transform="translate(${x.toFixed(2)} ${y.toFixed(2)})"/>
</svg>
`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' } });
};
