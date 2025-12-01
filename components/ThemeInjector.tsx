"use client";

import { useMotel } from "@/contexts/MotelContext";
import { generateThemeCSS } from "@/lib/themeUtils";

/**
 * Component that injects dynamic theme CSS based on motel configuration
 * This allows each motel to have its own color scheme
 */
export function ThemeInjector() {
  const config = useMotel();
  const themeCSS = generateThemeCSS(config.theme);

  return (
    <style
      id="dynamic-theme"
      dangerouslySetInnerHTML={{ __html: themeCSS }}
    />
  );
}
