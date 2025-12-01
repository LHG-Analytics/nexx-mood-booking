import { MotelId, MotelConfig } from '@/types/motel';
import { motelsConfig } from '@/config/motels.config';

/**
 * Map of domains to motel IDs
 * Supports both production domains and local development
 */
const DOMAIN_TO_MOTEL: Record<string, MotelId> = {
  // Production domains
  'moodmotel.com': 'mood',
  'www.moodmotel.com': 'mood',

  'yesmotel.com': 'yes',
  'www.yesmotel.com': 'yes',

  'calle8motel.com': 'calle8',
  'www.calle8motel.com': 'calle8',

  'scapemotel.com': 'scape',
  'www.scapemotel.com': 'scape',

  'nexxmotel.com': 'nexx',
  'www.nexxmotel.com': 'nexx',

  'aquamotel.com': 'aqua',
  'www.aquamotel.com': 'aqua',

  // Local development
  'localhost': 'mood',
  '127.0.0.1': 'mood',

  // Local testing with hosts file
  'moodmotel.local': 'mood',
  'yesmotel.local': 'yes',
  'calle8motel.local': 'calle8',
  'scapemotel.local': 'scape',
  'nexxmotel.local': 'nexx',
  'aquamotel.local': 'aqua',
};

/**
 * Extract motel ID from hostname
 * @param hostname - The hostname (e.g., "moodmotel.com" or "localhost:4000")
 * @returns The motel ID
 */
export function getMotelIdFromHostname(hostname: string): MotelId {
  // Remove port if present (e.g., "localhost:4000" -> "localhost")
  const cleanHostname = hostname.split(':')[0];

  // Look up in domain map
  const motelId = DOMAIN_TO_MOTEL[cleanHostname];

  // Default to mood if not found
  return motelId || 'mood';
}

/**
 * Get motel configuration from hostname
 * @param hostname - The hostname (e.g., "moodmotel.com")
 * @returns The complete motel configuration
 */
export function getMotelConfigFromHostname(hostname: string): MotelConfig {
  const motelId = getMotelIdFromHostname(hostname);
  return motelsConfig[motelId];
}

/**
 * Get motel configuration by ID
 * @param motelId - The motel ID
 * @returns The complete motel configuration
 */
export function getMotelConfig(motelId: MotelId): MotelConfig {
  return motelsConfig[motelId];
}

/**
 * Get all available motel IDs
 */
export function getAllMotelIds(): MotelId[] {
  return Object.keys(motelsConfig) as MotelId[];
}
