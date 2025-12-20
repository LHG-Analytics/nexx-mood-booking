"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { MotelProvider } from "@/contexts/MotelContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeInjector } from "@/components/ThemeInjector";
import { LanguageHtmlUpdater } from "@/components/LanguageHtmlUpdater";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
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
        <MotelProvider>
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
