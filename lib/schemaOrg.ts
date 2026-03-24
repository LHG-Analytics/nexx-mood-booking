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

  return {
    '@context': 'https://schema.org',
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
}
