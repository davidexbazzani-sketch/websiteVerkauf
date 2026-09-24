import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { config } from './src/config.ts';

export default defineConfig({
  site: config.site,
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [sitemap()],
  vite: { ssr: { external: ['fontkit', 'sharp', 'wawoff2'] } },
});
