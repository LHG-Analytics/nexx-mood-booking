import { MotelsConfigMap } from '@/types/motel';

/**
 * Central configuration for all motels
 * Each motel has its own complete configuration
 */
export const motelsConfig: MotelsConfigMap = {
  mood: {
    id: 'mood',
    name: 'Mood Motel',
    displayName: 'MOOD MOTEL',
    domain: 'moodmotel.com',

    theme: {
      light: {
        primary: '281 89% 56%',
        accent: '328 86% 70%',
        background: '0 0% 100%',
        foreground: '0 0% 10%',
        muted: '30 5% 96%',
        mutedForeground: '0 0% 45%',
        border: '0 0% 90%',
        ring: '281 89% 56%',
      },
      dark: {
        primary: '328 86% 70%',
        accent: '281 89% 56%',
        background: '0 0% 6%',
        foreground: '0 0% 98%',
        muted: '0 0% 15%',
        mutedForeground: '0 0% 65%',
        border: '0 0% 15%',
        ring: '328 86% 70%',
      },
      custom: {
        motelPink: '328 86% 70%',
        motelPurple: '281 89% 56%',
        adaPurple: '271 81% 56%',
        checkIn: '48 96% 53%',
        checkOut: '271 81% 56%',
        services: '25 95% 53%',
        price: '271 81% 56%',
      },
    },

    assets: {
      logo: {
        light: '/assets/mood/logo-light.webp',
        dark: '/assets/mood/logo-dark.webp',
      },
      heroImages: [
        '/assets/mood/suite-mood/principal.jpg',
        '/assets/mood/suite-mood-plus/principal.jpg',
        '/assets/mood/suite-jacuzzi/principal.jpg',
        '/assets/mood/suite-vip/principal.jpg',
      ],
      favicon: '/assets/mood/favicon/favicon.ico',
    },

    suites: [
      {
        id: 'mood',
        name: 'Suite Mood',
        image: '/assets/mood/suite-mood/principal.jpg',
        images: [
          '/assets/mood/suite-mood/room-1.jpg',
          '/assets/mood/suite-mood/room-2.jpg',
          '/assets/mood/suite-mood/room-3.jpg',
        ],
        price: 55, // Lowest price (fractional weekday)
        rating: 5,
        amenities: ['TV', 'RADIO', 'SINGLE SHOWER', 'MINI BAR'],
        pricing: {
          weekdays: {
            fractional: 55,
            daily: 218,
            overnight: 109,
          },
          weekend: {
            fractional: 59,
            daily: 230,
            overnight: 115,
          },
        },
      },
      {
        id: 'mood-plus',
        name: 'Suite Mood Plus',
        image: '/assets/mood/suite-mood-plus/principal.jpg',
        images: [
          '/assets/mood/suite-mood-plus/room-1.jpg',
          '/assets/mood/suite-mood-plus/room-2.jpg',
          '/assets/mood/suite-mood-plus/room-3.jpg',
          '/assets/mood/suite-mood-plus/room-4.jpg',
          '/assets/mood/suite-mood-plus/room-5.jpg',
          '/assets/mood/suite-mood-plus/room-6.jpg',
          '/assets/mood/suite-mood-plus/room-7.jpg',
          '/assets/mood/suite-mood-plus/room-8.jpg',
        ],
        price: 59, // Lowest price (fractional weekday)
        rating: 5,
        amenities: ['TV', 'RADIO', 'POLE', 'MINI BAR', 'DOUBLE SHOWER'],
        pricing: {
          weekdays: {
            fractional: 59,
            daily: 230,
            overnight: 115,
          },
          weekend: {
            fractional: 65,
            daily: 244,
            overnight: 122,
          },
        },
      },
      {
        id: 'jacuzzi',
        name: 'Suite Jacuzzi',
        image: '/assets/mood/suite-jacuzzi/principal.jpg',
        images: [
          '/assets/mood/suite-jacuzzi/room-1.jpg',
          '/assets/mood/suite-jacuzzi/room-2.jpg',
          '/assets/mood/suite-jacuzzi/room-3.jpg',
        ],
        price: 79, // Lowest price (fractional weekday)
        rating: 5,
        amenities: ['TV', 'RADIO', 'MINI BAR', 'LOVE SEAT', 'DOUBLE SHOWER', 'POLE', 'JACUZZI'],
        pricing: {
          weekdays: {
            fractional: 79,
            daily: 278,
            overnight: 139,
          },
          weekend: {
            fractional: 85,
            daily: 290,
            overnight: 145,
          },
        },
      },
      {
        id: 'vip',
        name: 'Suite VIP',
        image: '/assets/mood/suite-vip/principal.jpg',
        images: [
          '/assets/mood/suite-vip/room-1.jpg',
          '/assets/mood/suite-vip/room-2.jpg',
          '/assets/mood/suite-vip/room-3.jpg',
          '/assets/mood/suite-vip/room-4.jpg',
        ],
        price: 125, // Lowest price (fractional weekday)
        rating: 5,
        amenities: ['TV', 'RADIO', 'MINI BAR', 'LOVE SEAT', 'DOUBLE SHOWER', 'POLE', 'JACUZZI'],
        pricing: {
          weekdays: {
            fractional: 125,
            daily: 370,
            overnight: 185,
          },
          weekend: {
            fractional: 139,
            daily: 395,
            overnight: 199,
          },
        },
      },
    ],

    contact: {
      address: {
        street: '11102 Biscayne Blvd',
        city: 'Miami',
        state: 'FL',
        zip: '33181',
        full: '11102 Biscayne Blvd, Miami, FL 33181',
      },
      phone: '(305) 893-4540',
      email: 'info@moodmotel.com',
      instagram: '@mood.motel',
      instagramUrl: 'https://www.instagram.com/mood.motel',
      mapsUrl: 'https://google.com/maps/dir//11102+Biscayne+Blvd,+Miami,+FL+33181/@25.8784223,-80.1683391,15z',
      hours: '24/7',
    },

    seo: {
      title: 'Mood Motel - Luxury Suites in Miami',
      description: 'Experience luxury at MOOD MOTEL - Premium suites with LED lighting, smart TV, high-speed WiFi, and more. Located in Miami, FL.',
      keywords: ['motel', 'hotel', 'luxury suites', 'Miami', 'accommodation', 'LED lighting'],
    },
  },

  // Placeholder configurations for other motels
  yes: {
    id: 'yes',
    name: 'Yes Motel',
    displayName: 'YES MOTEL',
    domain: 'yesmotels.com',

    theme: {
      light: {
        primary: '281 89% 56%',
        accent: '328 86% 70%',
        background: '0 0% 100%',
        foreground: '0 0% 10%',
        muted: '30 5% 96%',
        mutedForeground: '0 0% 45%',
        border: '0 0% 90%',
        ring: '281 89% 56%',
      },
      dark: {
        primary: '328 86% 70%',
        accent: '281 89% 56%',
        background: '0 0% 6%',
        foreground: '0 0% 98%',
        muted: '0 0% 15%',
        mutedForeground: '0 0% 65%',
        border: '0 0% 15%',
        ring: '328 86% 70%',
      },
      custom: {
        motelPink: '328 86% 70%',
        motelPurple: '281 89% 56%',
        adaPurple: '271 81% 56%',
        checkIn: '48 96% 53%',
        checkOut: '271 81% 56%',
        services: '25 95% 53%',
        price: '271 81% 56%',
      },
    },

    assets: {
      logo: {
        light: '/assets/yes/logo-light.png',
        dark: '/assets/yes/logo-dark.png',
      },
      heroImages: [
        '/assets/yes/suite-yes/principal.jpg',
        '/assets/yes/suite-yes-plus/principal.jpg',
        '/assets/yes/suite-jacuzzi/principal.jpg',
        '/assets/yes/suite-jacuzzi/room-7.jpg',
      ],
      favicon: '/assets/yes/favicon/favicon.ico',
    },

    suites: [
      {
        id: 'yes',
        name: 'Suite Yes',
        image: '/assets/yes/suite-yes/principal.jpg',
        images: [
          '/assets/yes/suite-yes/room-1.jpg',
          '/assets/yes/suite-yes/room-2.jpg',
          '/assets/yes/suite-yes/room-3.jpg',
          '/assets/yes/suite-yes/room-4.jpg',
          '/assets/yes/suite-yes/room-5.jpg',
          '/assets/yes/suite-yes/room-6.jpg',
        ],
        price: 42,
        rating: 5,
        amenities: ['TV', 'RADIO', 'SHOWER', 'MINI BAR'],
        pricing: {
          weekdays: {
            fractional: 42,
            daily: 198,
            overnight: 99,
          },
          weekend: {
            fractional: 49,
            daily: 210,
            overnight: 105,
          },
        },
      },
      {
        id: 'yes-plus',
        name: 'Suite Yes Plus',
        image: '/assets/yes/suite-yes-plus/principal.jpg',
        images: [
          '/assets/yes/suite-yes-plus/room-1.jpg',
          '/assets/yes/suite-yes-plus/room-2.jpg',
          '/assets/yes/suite-yes-plus/room-3.jpg',
          '/assets/yes/suite-yes-plus/room-4.jpg',
          '/assets/yes/suite-yes-plus/room-5.jpg',
        ],
        price: 49,
        rating: 5,
        amenities: ['TV', 'RADIO', 'DOUBLE SHOWER', 'MINI BAR', 'LOVE SEAT'],
        pricing: {
          weekdays: {
            fractional: 49,
            daily: 210,
            overnight: 105,
          },
          weekend: {
            fractional: 55,
            daily: 224,
            overnight: 112,
          },
        },
      },
      {
        id: 'yes-jacuzzi',
        name: 'Suite Jacuzzi',
        image: '/assets/yes/suite-jacuzzi/principal.jpg',
        images: [
          '/assets/yes/suite-jacuzzi/room-1.jpg',
          '/assets/yes/suite-jacuzzi/room-2.jpg',
          '/assets/yes/suite-jacuzzi/room-3.jpg',
          '/assets/yes/suite-jacuzzi/room-4.jpg',
          '/assets/yes/suite-jacuzzi/room-5.jpg',
          '/assets/yes/suite-jacuzzi/room-6.jpg',
          '/assets/yes/suite-jacuzzi/room-7.jpg',
          '/assets/yes/suite-jacuzzi/room-8.jpg',
          '/assets/yes/suite-jacuzzi/room-9.jpg',
        ],
        price: 65,
        rating: 5,
        amenities: ['TV', 'RADIO', 'DOUBLE SHOWER', 'MINI BAR', 'LOVE SEAT', 'JACUZZI'],
        pricing: {
          weekdays: {
            fractional: 65,
            daily: 230,
            overnight: 115,
          },
          weekend: {
            fractional: 72,
            daily: 244,
            overnight: 122,
          },
        },
      },
    ],

    contact: {
      address: {
        street: '28475 S Dixie Hwy',
        city: 'Homestead',
        state: 'FL',
        zip: '33033',
        full: '28475 S Dixie Hwy, Homestead, FL 33033',
      },
      phone: '(305) 248-5622',
      email: 'info@yesmotel.com',
      instagram: '@yesmotel.fl',
      instagramUrl: 'https://www.instagram.com/yesmotel.fl',
      mapsUrl: 'https://maps.google.com/?q=28475+S+Dixie+Hwy,+Homestead,+FL+33033',
      hours: '24/7',
    },

    seo: {
      title: 'Yes Motel - Miami',
      description: 'Yes Motel - Premium accommodation in Miami',
      keywords: ['yes motel', 'miami motel'],
    },
  },

  calle8: {
    id: 'calle8',
    name: 'Calle 8 Motel',
    displayName: 'CALLE 8 MOTEL',
    domain: 'motelcalle8.com',

    theme: {
      light: {
        primary: '281 89% 56%',
        accent: '328 86% 70%',
        background: '0 0% 100%',
        foreground: '0 0% 10%',
        muted: '30 5% 96%',
        mutedForeground: '0 0% 45%',
        border: '0 0% 90%',
        ring: '281 89% 56%',
      },
      dark: {
        primary: '328 86% 70%',
        accent: '281 89% 56%',
        background: '0 0% 6%',
        foreground: '0 0% 98%',
        muted: '0 0% 15%',
        mutedForeground: '0 0% 65%',
        border: '0 0% 15%',
        ring: '328 86% 70%',
      },
      custom: {
        motelPink: '328 86% 70%',
        motelPurple: '281 89% 56%',
        adaPurple: '271 81% 56%',
        checkIn: '48 96% 53%',
        checkOut: '271 81% 56%',
        services: '25 95% 53%',
        price: '271 81% 56%',
      },
    },

    assets: {
      logo: {
        light: '/assets/calle8/logo-light.png',
        dark: '/assets/calle8/logo-dark.png',
      },
      heroImages: [
        '/assets/calle8/suite-calle8/principal.jpg',
        '/assets/calle8/suite-calle8-plus/principal.jpg',
        '/assets/calle8/suite-calle8-plus/room-1.jpg',
        '/assets/calle8/suite-calle8-plus/room-2.jpg',
      ],
      favicon: '/assets/calle8/favicon/favicon.png',
    },

    suites: [
      {
        id: 'calle8',
        name: 'Suite Calle 8',
        image: '/assets/calle8/suite-calle8/principal.jpg',
        images: [
          '/assets/calle8/suite-calle8/room-1.jpg',
          '/assets/calle8/suite-calle8/room-2.jpg',
          '/assets/calle8/suite-calle8/room-3.jpg',
          '/assets/calle8/suite-calle8/room-4.jpg',
        ],
        price: 45,
        rating: 5,
        amenities: ['TV', 'RADIO', 'DOUBLE SHOWER', 'MINI BAR', 'LOVE SEAT'],
        pricing: {
          weekdays: {
            fractional: 45,
            daily: 210,
            overnight: 105,
          },
          weekend: {
            fractional: 52,
            daily: 218,
            overnight: 109,
          },
        },
      },
      {
        id: 'calle8-plus',
        name: 'Suite Calle 8 Plus',
        image: '/assets/calle8/suite-calle8-plus/principal.jpg',
        images: [
          '/assets/calle8/suite-calle8-plus/room-1.jpg',
          '/assets/calle8/suite-calle8-plus/room-2.jpg',
          '/assets/calle8/suite-calle8-plus/room-3.jpg',
          '/assets/calle8/suite-calle8-plus/room-4.jpg',
          '/assets/calle8/suite-calle8-plus/room-5.jpg',
          '/assets/calle8/suite-calle8-plus/room-6.jpg',
          '/assets/calle8/suite-calle8-plus/room-7.jpg',
          '/assets/calle8/suite-calle8-plus/room-8.jpg',
          '/assets/calle8/suite-calle8-plus/room-9.jpg',
        ],
        price: 52,
        rating: 5,
        amenities: ['TV', 'RADIO', 'DOUBLE SHOWER', 'MINI BAR', 'LOVE SEAT', 'POLE'],
        pricing: {
          weekdays: {
            fractional: 52,
            daily: 218,
            overnight: 109,
          },
          weekend: {
            fractional: 57,
            daily: 230,
            overnight: 115,
          },
        },
      },
    ],

    contact: {
      address: {
        street: '7290 SW 8th St',
        city: 'Miami',
        state: 'FL',
        zip: '33144',
        full: '7290 SW 8th St, Miami, FL 33144',
      },
      phone: '(786) 632-6399',
      email: 'info@motelcalle8.com',
      instagram: '@motelcalle8',
      instagramUrl: 'https://www.instagram.com/motelcalle8/',
      mapsUrl: 'https://maps.app.goo.gl/ezGoSAt2aRhPHxLg7',
      hours: '24/7',
    },

    seo: {
      title: 'Motel Calle 8 - Miami',
      description: 'Motel Calle 8 - Premium accommodation in Miami',
      keywords: ['motel calle 8', 'miami motel'],
    },
  },

  scape: {
    id: 'scape',
    name: 'Scape Motel',
    displayName: 'SCAPE MOTEL',
    domain: 'motelscape.com',

    theme: {
      light: {
        primary: '281 89% 56%',
        accent: '328 86% 70%',
        background: '0 0% 100%',
        foreground: '0 0% 10%',
        muted: '30 5% 96%',
        mutedForeground: '0 0% 45%',
        border: '0 0% 90%',
        ring: '281 89% 56%',
      },
      dark: {
        primary: '328 86% 70%',
        accent: '281 89% 56%',
        background: '0 0% 6%',
        foreground: '0 0% 98%',
        muted: '0 0% 15%',
        mutedForeground: '0 0% 65%',
        border: '0 0% 15%',
        ring: '328 86% 70%',
      },
      custom: {
        motelPink: '328 86% 70%',
        motelPurple: '281 89% 56%',
        adaPurple: '271 81% 56%',
        checkIn: '48 96% 53%',
        checkOut: '271 81% 56%',
        services: '25 95% 53%',
        price: '271 81% 56%',
      },
    },

    assets: {
      logo: {
        light: '/assets/scape/logo-light.png',
        dark: '/assets/scape/logo-dark.png',
      },
      heroImages: [
        '/assets/scape/suite-scape/principal.jpg',
        '/assets/scape/suite-scape-plus/principal.jpg',
        '/assets/scape/suite-vip/principal.jpg',
        '/assets/scape/suite-jacuzzi/principal.jpg',
      ],
      favicon: '/assets/scape/favicon/favicon.ico',
    },

    suites: [
      {
        id: 'scape',
        name: 'Suite Scape',
        image: '/assets/scape/suite-scape/principal.jpg',
        images: [
          '/assets/scape/suite-scape/room-1.jpg',
          '/assets/scape/suite-scape/room-2.jpg',
          '/assets/scape/suite-scape/room-3.jpg',
          '/assets/scape/suite-scape/room-4.jpg',
          '/assets/scape/suite-scape/room-5.jpg',
          '/assets/scape/suite-scape/room-6.jpg',
        ],
        price: 45,
        rating: 5,
        amenities: ['TV', 'RADIO', 'SHOWER', 'MINI BAR', 'LOVE SEAT'],
        pricing: {
          weekdays: {
            fractional: 45,
            daily: 210,
            overnight: 105,
          },
          weekend: {
            fractional: 52,
            daily: 218,
            overnight: 109,
          },
        },
      },
      {
        id: 'scape-plus',
        name: 'Suite Scape Plus',
        image: '/assets/scape/suite-scape-plus/principal.jpg',
        images: [
          '/assets/scape/suite-scape-plus/room-1.jpg',
          '/assets/scape/suite-scape-plus/room-2.jpg',
          '/assets/scape/suite-scape-plus/room-3.jpg',
          '/assets/scape/suite-scape-plus/room-4.jpg',
          '/assets/scape/suite-scape-plus/room-5.jpg',
        ],
        price: 52,
        rating: 5,
        amenities: ['TV', 'RADIO', 'DOUBLE SHOWER', 'MINI BAR', 'LOVE SEAT', 'POLE'],
        pricing: {
          weekdays: {
            fractional: 52,
            daily: 218,
            overnight: 109,
          },
          weekend: {
            fractional: 57,
            daily: 230,
            overnight: 115,
          },
        },
      },
      {
        id: 'scape-jacuzzi',
        name: 'Suite Jacuzzi',
        image: '/assets/scape/suite-jacuzzi/principal.jpg',
        images: [
          '/assets/scape/suite-jacuzzi/room-1.jpg',
          '/assets/scape/suite-jacuzzi/room-2.jpg',
          '/assets/scape/suite-jacuzzi/room-3.jpg',
          '/assets/scape/suite-jacuzzi/room-4.jpg',
          '/assets/scape/suite-jacuzzi/room-5.jpg',
        ],
        price: 69,
        rating: 5,
        amenities: ['TV', 'RADIO', 'DOUBLE SHOWER', 'MINI BAR', 'LOVE SEAT', 'JACUZZI'],
        pricing: {
          weekdays: {
            fractional: 69,
            daily: 238,
            overnight: 119,
          },
          weekend: {
            fractional: 77,
            daily: 250,
            overnight: 125,
          },
        },
      },
      {
        id: 'scape-vip',
        name: 'Suite Vip',
        image: '/assets/scape/suite-vip/principal.jpg',
        images: [
          '/assets/scape/suite-vip/room-1.jpg',
          '/assets/scape/suite-vip/room-2.jpg',
          '/assets/scape/suite-vip/room-3.jpg',
        ],
        price: 79,
        rating: 5,
        amenities: ['TV', 'RADIO', 'DOUBLE SHOWER', 'MINI BAR', 'LOVE SEAT', 'JACUZZI'],
        pricing: {
          weekdays: {
            fractional: 79,
            daily: 258,
            overnight: 129,
          },
          weekend: {
            fractional: 89,
            daily: 278,
            overnight: 139,
          },
        },
      },
    ],

    contact: {
      address: {
        street: '22345 S Dixie Hwy',
        city: 'Miami',
        state: 'FL',
        zip: '33170',
        full: '22345 S Dixie Hwy, Miami, FL 33170',
      },
      phone: '(305) 258-2114',
      email: 'info@motelscape.com',
      instagram: '@scape.motel',
      instagramUrl: 'https://www.instagram.com/scape.motel',
      mapsUrl: 'https://maps.app.goo.gl/LquWA2vqNqqyJfZy8',
      hours: '24/7',
    },

    seo: {
      title: 'Scape Motel - Miami',
      description: 'Scape Motel - Premium accommodation in Miami',
      keywords: ['scape motel', 'miami motel'],
    },
  },

  nexx: {
    id: 'nexx',
    name: 'Nexx Motel',
    displayName: 'NEXX MOTEL',
    domain: 'nexxmotel.com',

    theme: {
      light: {
        primary: '281 89% 56%',
        accent: '328 86% 70%',
        background: '0 0% 100%',
        foreground: '0 0% 10%',
        muted: '30 5% 96%',
        mutedForeground: '0 0% 45%',
        border: '0 0% 90%',
        ring: '281 89% 56%',
      },
      dark: {
        primary: '328 86% 70%',
        accent: '281 89% 56%',
        background: '0 0% 6%',
        foreground: '0 0% 98%',
        muted: '0 0% 15%',
        mutedForeground: '0 0% 65%',
        border: '0 0% 15%',
        ring: '328 86% 70%',
      },
      custom: {
        motelPink: '328 86% 70%',
        motelPurple: '281 89% 56%',
        adaPurple: '271 81% 56%',
        checkIn: '48 96% 53%',
        checkOut: '271 81% 56%',
        services: '25 95% 53%',
        price: '271 81% 56%',
      },
    },

    assets: {
      logo: {
        light: '/assets/nexx/logo-light.webp',
        dark: '/assets/nexx/logo-dark.webp',
      },
      heroImages: [
        '/assets/nexx/room-1.jpg',
        '/assets/nexx/room-2.jpg',
        '/assets/nexx/room-3.jpg',
        '/assets/nexx/room-4.jpg',
      ],
      favicon: '/favicon.ico',
    },

    suites: [
      {
        id: 'standard',
        name: 'Standard Suite',
        image: '/assets/nexx/room-1.jpg',
        price: 55,
        rating: 5,
        amenities: ['TV', 'RADIO', 'SHOWER', 'MINI BAR'],
      },
    ],

    contact: {
      address: {
        street: 'TBD',
        city: 'Miami',
        state: 'FL',
        zip: '00000',
        full: 'TBD, Miami, FL',
      },
      phone: '(305) 000-0000',
      email: 'info@nexxmotel.com',
      instagram: '@nexx.motel',
      instagramUrl: 'https://www.instagram.com/nexx.motel',
      mapsUrl: '#',
      hours: '24/7',
    },

    seo: {
      title: 'Nexx Motel - Miami',
      description: 'Nexx Motel - Premium accommodation in Miami',
      keywords: ['nexx motel', 'miami motel'],
    },
  },

  aqua: {
    id: 'aqua',
    name: 'Aqua Motel',
    displayName: 'AQUA MOTEL',
    domain: 'aquamotel.com',

    theme: {
      light: {
        primary: '281 89% 56%',
        accent: '328 86% 70%',
        background: '0 0% 100%',
        foreground: '0 0% 10%',
        muted: '30 5% 96%',
        mutedForeground: '0 0% 45%',
        border: '0 0% 90%',
        ring: '281 89% 56%',
      },
      dark: {
        primary: '328 86% 70%',
        accent: '281 89% 56%',
        background: '0 0% 6%',
        foreground: '0 0% 98%',
        muted: '0 0% 15%',
        mutedForeground: '0 0% 65%',
        border: '0 0% 15%',
        ring: '328 86% 70%',
      },
      custom: {
        motelPink: '328 86% 70%',
        motelPurple: '281 89% 56%',
        adaPurple: '271 81% 56%',
        checkIn: '48 96% 53%',
        checkOut: '271 81% 56%',
        services: '25 95% 53%',
        price: '271 81% 56%',
      },
    },

    assets: {
      logo: {
        light: '/assets/aqua/logo-light.webp',
        dark: '/assets/aqua/logo-dark.webp',
      },
      heroImages: [
        '/assets/aqua/room-1.jpg',
        '/assets/aqua/room-2.jpg',
        '/assets/aqua/room-3.jpg',
        '/assets/aqua/room-4.jpg',
      ],
      favicon: '/favicon.ico',
    },

    suites: [
      {
        id: 'standard',
        name: 'Standard Suite',
        image: '/assets/aqua/room-1.jpg',
        price: 55,
        rating: 5,
        amenities: ['TV', 'RADIO', 'SHOWER', 'MINI BAR'],
      },
    ],

    contact: {
      address: {
        street: 'TBD',
        city: 'Miami',
        state: 'FL',
        zip: '00000',
        full: 'TBD, Miami, FL',
      },
      phone: '(305) 000-0000',
      email: 'info@aquamotel.com',
      instagram: '@aqua.motel',
      instagramUrl: 'https://www.instagram.com/aqua.motel',
      mapsUrl: '#',
      hours: '24/7',
    },

    seo: {
      title: 'Aqua Motel - Miami',
      description: 'Aqua Motel - Premium accommodation in Miami',
      keywords: ['aqua motel', 'miami motel'],
    },
  },
};

/**
 * Get configuration for a specific motel
 */
export function getMotelConfigById(id: string) {
  return motelsConfig[id as keyof typeof motelsConfig] || motelsConfig.mood;
}
