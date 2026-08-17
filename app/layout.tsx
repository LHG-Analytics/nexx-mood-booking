import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { Providers } from "./providers";
import { getMotelConfigFromHostname } from "@/lib/getMotelConfig";

export const metadata: Metadata = {
  title: "Motel Booking",
  description: "Luxury boutique motel experience",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get motel config for GTM noscript
  const headersList = await headers();
  const hostname = headersList.get('host') || 'localhost';
  const config = getMotelConfigFromHostname(hostname);

  return (
    <html suppressHydrationWarning>
      <body className="overflow-x-hidden antialiased" suppressHydrationWarning>
        {/* Google Tag Manager noscript - immediately after body tag */}
        {config.seo.googleTagManager && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${config.seo.googleTagManager}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Providers initialConfig={config}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
