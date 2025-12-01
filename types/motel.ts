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
  mapsUrl: string;
  hours: string;
}

/**
 * SEO Configuration (for future implementation)
 */
export interface MotelSEO {
  title: string;
  description: string;
  keywords: string[];
}

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
}

/**
 * Map of all motel configurations
 */
export type MotelsConfigMap = Record<MotelId, MotelConfig>;
