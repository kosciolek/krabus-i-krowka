import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site?: URL }) {
  const posts = (await getCollection('posts'))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Krabuś, Krówka i ich wędrówka',
    description: 'Przygody Krabusia, Krówki i spółki.',
    site: context.site ?? 'http://localhost:4321',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/#${post.id}`,
      description: post.body
        ?.split(/\n\s*\n/)
        .find((paragraph) => paragraph.trim() && !paragraph.trim().startsWith('#'))
        ?.replace(/[*_`>#]/g, '')
        .trim(),
    })),
    customData: '<language>pl-PL</language>',
    trailingSlash: false,
  });
}
