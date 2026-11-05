import { MotelConfig } from '@/types/motel';

/**
 * Generates Schema.org JSON-LD structured data for a motel.
 * Used by AI crawlers (ChatGPT, Gemini, Perplexity, etc.) and search engines
 * to understand the motel's identity, location, suites, and pricing.
 */
export function generateMotelSchema(config: MotelConfig, locale: string) {
  const baseUrl = `https://${config.domain}`;

  const sameAs = [config.contact.instagramUrl];
  if (config.contact.facebookUrl) {
    sameAs.push(config.contact.facebookUrl);
  }

  const motel = {
    '@type': 'Motel',
    name: config.name,
    url: `${baseUrl}/${locale}`,
    telephone: config.contact.phone,
    email: config.contact.email,
    openingHours: 'Mo-Su 00:00-24:00',
    sameAs,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.contact.address.street,
      addressLocality: config.contact.address.city,
      addressRegion: config.contact.address.state,
      postalCode: config.contact.address.zip,
      addressCountry: 'US',
    },
    containsPlace: config.suites.map((suite) => ({
      '@type': 'HotelRoom',
      name: suite.name,
      amenityFeature: suite.amenities.map((amenity) => ({
        '@type': 'LocationFeatureSpecification',
        name: amenity,
        value: true,
      })),
      ...(suite.pricing && {
        offers: {
          '@type': 'Offer',
          price: suite.pricing.weekdays.fractional.toString(),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      }),
    })),
  };

  if (!config.seo.organizationName) {
    return { '@context': 'https://schema.org', ...motel };
  }

  // Motels that belong to a group also describe the group, so a search for
  // the group's name (e.g. "Nexx Motels") can resolve to this site.
  const organizationId = `${baseUrl}/#organization`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: config.seo.organizationName,
        url: baseUrl,
        logo: `${baseUrl}${config.assets.logo.light}`,
        sameAs,
      },
      { ...motel, parentOrganization: { '@id': organizationId } },
    ],
  };
}

/**
 * One Schema.org node per extra unit of the brand (contact.otherLocations).
 * Each unit is its own place for search engines, so it gets its own Motel node
 * rather than a second address on the main one. Phone and hours are only
 * emitted when the config has them.
 */
export function generateOtherLocationSchemas(config: MotelConfig, locale: string) {
  const baseUrl = `https://${config.domain}`;

  return (config.contact.otherLocations ?? []).map((location) => ({
    '@context': 'https://schema.org',
    '@type': 'Motel',
    name: location.name,
    url: `${baseUrl}/${locale}`,
    hasMap: location.mapsUrl,
    ...(location.phone && { telephone: location.phone }),
    ...(location.hours === '24/7' && { openingHours: 'Mo-Su 00:00-24:00' }),
    brand: { '@type': 'Brand', name: config.name },
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address.street,
      addressLocality: location.address.city,
      addressRegion: location.address.state,
      postalCode: location.address.zip,
      addressCountry: 'US',
    },
  }));
}
