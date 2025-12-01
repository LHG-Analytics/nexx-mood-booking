import { MotelTheme } from '@/types/motel';
import { hexToHSL } from '@/lib/themeUtils';

/**
 * Helper function to create a motel theme from HEX colors
 * This makes it easier to configure colors without manually converting to HSL
 *
 * @example
 * const theme = createMotelTheme({
 *   primaryColor: "#D946EF",  // Purple
 *   accentColor: "#F472B6",   // Pink
 * })
 */
export function createMotelTheme(colors: {
  primaryColor: string;
  accentColor: string;
  backgroundColor?: string;
  foregroundColor?: string;
}): MotelTheme {
  const primary = hexToHSL(colors.primaryColor);
  const accent = hexToHSL(colors.accentColor);
  const background = colors.backgroundColor ? hexToHSL(colors.backgroundColor) : '0 0% 100%';
  const foreground = colors.foregroundColor ? hexToHSL(colors.foregroundColor) : '0 0% 10%';

  return {
    light: {
      primary,
      accent,
      background,
      foreground,
      muted: '30 5% 96%',
      mutedForeground: '0 0% 45%',
      border: '0 0% 90%',
      ring: primary,
    },
    dark: {
      primary: accent,
      accent: primary,
      background: '0 0% 6%',
      foreground: '0 0% 98%',
      muted: '0 0% 15%',
      mutedForeground: '0 0% 65%',
      border: '0 0% 15%',
      ring: accent,
    },
    custom: {
      motelPink: accent,
      motelPurple: primary,
      adaPurple: primary,
      checkIn: '48 96% 53%',
      checkOut: primary,
      services: '25 95% 53%',
      price: primary,
    },
  };
}
