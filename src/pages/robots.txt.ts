import { withBase } from '../lib/paths';

export function GET({ site }: { site?: URL }) {
  const sitemap = new URL(withBase('sitemap-index.xml'), site ?? 'http://localhost:4321');
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
