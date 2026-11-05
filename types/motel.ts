/**
 * Multi-tenant Motel Configuration Types
 * Defines the structure for each motel's configuration
 */

export type MotelId = 'mood' | 'yes' | 'calle8' | 'scape' | 'nexx' | 'aqua';

/**
 * Theme colors in HSL format (hue saturation lightness)
 * Example: "328 86% 70%" for pink
 */
export interface MotelTheme {
  light: {
    primary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    border: string;
    ring: string;
  };
  dark: {
    primary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    border: string;
    ring: string;
  };
  custom: {
    motelPink: string;
    motelPurple: string;
    adaPurple: string;
    checkIn: string;
    checkOut: string;
    services: string;
    price: string;
  };
}

/**
 * Assets paths for logos and images
 */
export interface MotelAssets {
  logo: {
    light: string;
    dark: string;
  };
  heroImages: string[];
  favicon: string;
}

/**
 * Suite amenities
 */
export interface SuiteAmenity {
  name: string;
  icon?: string;
}

/**
 * Suite pricing structure
 */
export interface SuitePricing {
  weekdays: {
    fractional: number;
    daily: number;
    overnight: number;
  };
  weekend: {
    fractional: number;
    daily: number;
    overnight: number;
  };
}

/**
 * Suite/Room configuration
 */
export interface Suite {
  id: string;
  name: string;
  image: string;
  price: number; // Lowest price for display in carousel
  rating: number;
  amenities: string[];
  description?: string;
  images?: string[];
  pricing?: SuitePricing; // Optional detailed pricing
}

/**
 * Contact information
 */
export interface MotelContact {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  phone: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  facebookUrl?: string;
  mapsUrl: string;
  hours: string;
}

/**
 * SEO Configuration
 */
export interface MotelSEO {
  title: string;
  description: string;
  keywords: string[];
  organizationName?: string; // Group the motel belongs to, emitted as a Schema.org Organization
  googleAnalytics?: string; // Google Analytics ID (e.g., G-HT367PH646)
  googleTagManager?: string; // Google Tag Manager ID (e.g., GTM-MD7LXG3S)
}

/**
 * Extra cards a motel can add to the Important Info section.
 * Each key maps to an `importantInfo.<key>` entry in the locale files.
 */
export type ImportantInfoExtra = 'flexibleRates';

/**
 * Complete Motel Configuration
 */
export interface MotelConfig {
  id: MotelId;
  name: string;
  displayName: string;
  domain: string;
  theme: MotelTheme;
  assets: MotelAssets;
  suites: Suite[];
  contact: MotelContact;
  seo: MotelSEO;
  importantInfoExtras?: ImportantInfoExtra[]; // Extra Important Info cards for this motel
}

/**
 * Map of all motel configurations
 */
export type MotelsConfigMap = Record<MotelId, MotelConfig>;
