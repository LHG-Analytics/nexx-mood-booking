import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { getMotelConfigFromHostname } from '@/lib/getMotelConfig';

// Same crawlers the old static public/robots.txt allowed by name
const NAMED_CRAWLERS = [
  'Googlebot',
  'Bingbot',
  'Twitterbot',
  'facebookexternalhit',
  'GPTBot',
  'OAI-SearchBot',
  'PerplexityBot',
  'ClaudeBot',
  'anthropic-ai',
  'Google-Extended',
];

/**
 * Served per Host, like the sitemap, so each domain points crawlers at its own
 * sitemap. Replaces the static public/robots.txt, which could not name one.
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const config = getMotelConfigFromHostname(headersList.get('host') || 'localhost');

  return {
    rules: [
      ...NAMED_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `https://${config.domain}/sitemap.xml`,
  };
}
