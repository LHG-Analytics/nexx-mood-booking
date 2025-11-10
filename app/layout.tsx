import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Mood Motel",
  description:
    "Experience luxury at MOOD MOTEL - Premium suites with LED lighting, smart TV, high-speed WiFi, and more. Located in Miami, FL.",
  keywords: ["motel", "hotel", "luxury suites", "Miami", "accommodation", "LED lighting"],
  authors: [{ name: "MOOD MOTEL" }],
  openGraph: {
    title: "Mood Motel",
    description:
      "Experience luxury at MOOD MOTEL - Premium suites with LED lighting, smart TV, high-speed WiFi, and more.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
