import { MotelTheme } from '@/types/motel';

/**
 * Convert HEX color to HSL format for CSS variables
 * @param hex - Hex color (e.g., "#D946EF")
 * @returns HSL string (e.g., "281 89% 56%")
 */
export function hexToHSL(hex: string): string {
  // Remove # if present
  hex = hex.replace(/^#/, '');

  // Parse hex values
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  const lPercent = Math.round(l * 100);

  return `${h} ${s}% ${lPercent}%`;
}

/**
 * Generate CSS variables string from theme configuration
 * @param theme - Motel theme configuration
 * @returns CSS string with all theme variables
 */
export function generateThemeCSS(theme: MotelTheme): string {
  return `
    :root {
      --background: ${theme.light.background};
      --foreground: ${theme.light.foreground};
      --primary: ${theme.light.primary};
      --accent: ${theme.light.accent};
      --muted: ${theme.light.muted};
      --muted-foreground: ${theme.light.mutedForeground};
      --border: ${theme.light.border};
      --ring: ${theme.light.ring};

      /* Custom motel colors */
      --motel-pink: ${theme.custom.motelPink};
      --motel-purple: ${theme.custom.motelPurple};
      --ada-purple: ${theme.custom.adaPurple};
      --check-in: ${theme.custom.checkIn};
      --check-out: ${theme.custom.checkOut};
      --services: ${theme.custom.services};
      --price: ${theme.custom.price};
    }

    .dark {
      --background: ${theme.dark.background};
      --foreground: ${theme.dark.foreground};
      --primary: ${theme.dark.primary};
      --accent: ${theme.dark.accent};
      --muted: ${theme.dark.muted};
      --muted-foreground: ${theme.dark.mutedForeground};
      --border: ${theme.dark.border};
      --ring: ${theme.dark.ring};
    }
  `;
}
