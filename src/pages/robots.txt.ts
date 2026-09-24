import type { APIRoute } from 'astro';
import { config } from '../config';

export const GET: APIRoute = () => {
  const body = ['User-agent: *', 'Allow: /', 'Disallow: /danke', '', `Sitemap: ${config.site}/sitemap-index.xml`, ''].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
