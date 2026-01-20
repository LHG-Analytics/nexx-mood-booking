import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Motel Booking",
  description: "Luxury boutique motel experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className="overflow-x-hidden antialiased" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
