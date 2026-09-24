/**
 * Text als SVG-Pfade – nur zur Build-Zeit (Favicon, Open-Graph-Bilder).
 * Liest die WOFF2-Dateien aus public/fonts, entpackt sie nach TTF (wawoff2) und
 * setzt den Text mit fontkit, damit Fraunces und Inter auch ohne installierte
 * Systemschriften exakt gerendert werden.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';
import type { Font } from 'fontkit';

// fontkit und wawoff2 sind CommonJS-Module – über require laden, damit der Build sie findet
const require = createRequire(import.meta.url);
const fontkit = require('fontkit') as { create(buffer: Buffer): Font };
const { decompress } = require('wawoff2') as { decompress(buf: Uint8Array): Promise<Uint8Array> };

// Build läuft im Projektordner – der Pfad zeigt auf public/fonts
const FONT_DIR = resolve(process.cwd(), 'public/fonts') + '/';

export type FontFile = 'fraunces-latin-opsz-normal.woff2' | 'fraunces-latin-opsz-italic.woff2' | 'inter-latin-wght-normal.woff2';

const cache = new Map<string, Promise<Font>>();

/** Lädt eine Schrift, optional als Instanz der variablen Achsen (z. B. { wght: 560, opsz: 48 }). */
export function loadFont(file: FontFile, variation?: Record<string, number>): Promise<Font> {
  const key = `${file}:${JSON.stringify(variation ?? {})}`;
  let p = cache.get(key);
  if (!p) {
    p = (async () => {
      const ttf = Buffer.from(await decompress(readFileSync(FONT_DIR + file)));
      const base = fontkit.create(ttf) as Font;
      if (!variation || !Object.keys(base.variationAxes ?? {}).length) return base;
      try { return base.getVariation(variation); } catch { return base; }
    })();
    cache.set(key, p);
  }
  return p;
}

export interface TextPath { d: string; width: number }

/** Setzt `text` bei (x, y = Grundlinie) in `size` px und liefert den SVG-Pfad. */
export function textPath(text: string, font: Font, size: number, x = 0, y = 0, letterSpacing = 0): TextPath {
  const scale = size / font.unitsPerEm;
  const run = font.layout(text);
  let cursor = 0;
  const parts: string[] = [];
  run.glyphs.forEach((glyph, i) => {
    const pos = run.positions[i]!;
    const d = glyph.path
      .translate(pos.xOffset + cursor, pos.yOffset)
      .scale(scale, -scale)
      .translate(x, y)
      .toSVG();
    if (d) parts.push(d);
    cursor += pos.xAdvance + letterSpacing / scale;
  });
  return { d: parts.join(' '), width: cursor * scale };
}

/** Breite eines Textes in px (für Zeilenumbrüche). */
export function measure(text: string, font: Font, size: number): number {
  return (font.layout(text).advanceWidth / font.unitsPerEm) * size;
}

/** Bricht einen Text in Zeilen um, die `maxWidth` nicht überschreiten. */
export function wrap(text: string, font: Font, size: number, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (measure(test, font, size) <= maxWidth || !line) line = test;
    else { lines.push(line); line = w; }
  }
  if (line) lines.push(line);
  return lines;
}

export function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
