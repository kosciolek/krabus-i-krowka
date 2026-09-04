import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? '/').split('/');
const isUserSite = repository === `${owner}.github.io`;
const base = process.env.BASE_PATH || (repository && !isUserSite ? `/${repository}` : '/');
const site = process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'http://localhost:4321');

function rehypeBasePaths() {
  return (tree) => {
    const walk = (node) => {
      if (node?.type === 'element' && node.properties) {
        if (/^h[1-5]$/.test(node.tagName)) {
          node.tagName = `h${Number(node.tagName[1]) + 1}`;
        }
        for (const property of ['src', 'href']) {
          const value = node.properties[property];
          if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
            node.properties[property] = `${base.replace(/\/$/, '')}${value}`;
          }
        }
      }
      node?.children?.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  markdown: {
    processor: unified({ rehypePlugins: [rehypeBasePaths] }),
  },
});
