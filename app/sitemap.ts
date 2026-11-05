import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { getMotelConfigFromHostname } from '@/lib/getMotelConfig';
import { LOCALES } from '@/types/i18n';

/**
 * One sitemap per domain: every motel is served by the same app, so the Host
 * header decides whose home and suites are listed. URLs use config.domain, the
 * same base as the canonicals, so the sitemap never disagrees with them.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const config = getMotelConfigFromHostname(headersList.get('host') || 'localhost');
  const baseUrl = `https://${config.domain}`;

  const paths = ['', ...config.suites.map((suite) => `/suites/${suite.id}`)];

  return paths.flatMap((path) => {
    const languages = Object.fromEntries(
      LOCALES.map((locale) => [locale, `${baseUrl}/${locale}${path}`])
    );

    return LOCALES.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
      alternates: { languages },
    }));
  });
}
