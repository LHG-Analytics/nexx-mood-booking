import type { Metadata } from "next";
import { headers } from "next/headers";
import { getMotelConfigFromHostname } from "@/lib/getMotelConfig";
import { LOCALES, Locale } from "@/types/i18n";
import { notFound } from "next/navigation";

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const headersList = await headers();
  const hostname = headersList.get('host') || 'localhost';
  const config = getMotelConfigFromHostname(hostname);
  const baseUrl = `https://${config.domain}`;

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
      locale: locale.replace('-', '_'),
      alternateLocale: LOCALES.filter(l => l !== locale).map(l => l.replace('-', '_')),
      url: `${baseUrl}/${locale}`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "en-US": `${baseUrl}/en-US`,
        "pt-BR": `${baseUrl}/pt-BR`,
        "es-ES": `${baseUrl}/es-ES`,
        "x-default": `${baseUrl}/en-US`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  return (
    <>
      {/* hreflang tags for SEO */}
      <head>
        <link rel="alternate" hrefLang="en-US" href={`/${locale === 'en-US' ? '' : 'en-US'}`} />
        <link rel="alternate" hrefLang="pt-BR" href="/pt-BR" />
        <link rel="alternate" hrefLang="es-ES" href="/es-ES" />
        <link rel="alternate" hrefLang="x-default" href="/en-US" />
      </head>
      {children}
    </>
  );
}
