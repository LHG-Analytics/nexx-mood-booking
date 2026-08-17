"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { MotelProvider } from "@/contexts/MotelContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeInjector } from "@/components/ThemeInjector";
import { LanguageHtmlUpdater } from "@/components/LanguageHtmlUpdater";
import { useState } from "react";
import type { MotelConfig } from "@/types/motel";

/**
 * `initialConfig` comes from the server layout, which resolves the motel from the
 * request hostname. Without it MotelProvider falls back to its localhost default
 * during SSR, so every domain would server-render Nexx and only correct itself
 * after hydration.
 */
export function Providers({
  children,
  initialConfig,
}: {
  children: React.ReactNode;
  initialConfig?: MotelConfig;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <LanguageHtmlUpdater />
        <MotelProvider initialConfig={initialConfig}>
          <ThemeInjector />
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </MotelProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
