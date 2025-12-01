import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { headers } from "next/headers";
import { getMotelConfigFromHostname } from "@/lib/getMotelConfig";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const hostname = headersList.get('host') || 'localhost';
  const config = getMotelConfigFromHostname(hostname);

  return {
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
    authors: [{ name: config.name }],
    icons: {
      icon: [
        { url: config.assets.favicon },
        { url: config.assets.favicon, sizes: "16x16", type: "image/x-icon" },
        { url: config.assets.favicon, sizes: "32x32", type: "image/x-icon" },
      ],
      shortcut: config.assets.favicon,
      apple: config.assets.favicon,
    },
    openGraph: {
      title: config.name,
      description: config.seo.description,
      type: "website",
      locale: "en_US",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden antialiased" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
