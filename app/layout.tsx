import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Mood Motel",
  description:
    "Experience luxury at MOOD MOTEL - Premium suites with LED lighting, smart TV, high-speed WiFi, and more. Located in Miami, FL.",
  keywords: ["motel", "hotel", "luxury suites", "Miami", "accommodation", "LED lighting"],
  authors: [{ name: "MOOD MOTEL" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
      <body className="overflow-x-hidden antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
