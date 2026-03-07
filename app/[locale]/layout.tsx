import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "@/app/globals.css";
import { locales, i18n, type Locale } from "@/lib/i18n";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
  display: "swap",
});

const BASE_URL = "https://mybuildiq.com";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const config = i18n[locale as Locale];
  const { seo } = config;
  const canonicalUrl = `${BASE_URL}/${locale}/${config.slug}`;
  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[i18n[l].hreflang] = `${BASE_URL}/${l}/${i18n[l].slug}`;
  });
  languages["x-default"] = `${BASE_URL}/en/${i18n.en.slug}`;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: canonicalUrl, languages },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName: "MyBuildIQ",
      locale: seo.ogLocale,
      type: "website",
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const config = locales.includes(locale as Locale)
    ? i18n[locale as Locale]
    : i18n["en"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MyBuildIQ",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: config.seo.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <html lang={config.lang} className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}