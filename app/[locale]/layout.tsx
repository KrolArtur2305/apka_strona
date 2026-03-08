import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "@/app/globals.css";
import { locales, i18n, type Locale } from "@/lib/i18n";

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
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
  const canonicalUrl = `${BASE_URL}/${locale}`;

  // hreflang alternates for all locales
  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[i18n[l].hreflang] = `${BASE_URL}/${l}`;
  });
  // x-default → English (widest reach for USA market)
  languages["x-default"] = `${BASE_URL}/en`;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: seo.title,
      template: `%s | BuildIQ`,
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: "BuildIQ" }],
    creator: "BuildIQ",
    publisher: "BuildIQ",
    category: "Construction Management App",
    applicationName: "BuildIQ",
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName: "BuildIQ",
      locale: seo.ogLocale,
      type: "website",
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: seo.title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@buildiq",
      creator: "@buildiq",
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          alt: seo.title,
        },
      ],
    },
    verification: {
      // Add your Google Search Console verification token here
      // google: "your-verification-token",
    },
    other: {
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "apple-mobile-web-app-title": "BuildIQ",
      "mobile-web-app-capable": "yes",
      "theme-color": "#000000",
      "msapplication-TileColor": "#000000",
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

  const BASE_URL = "https://mybuildiq.com";
  const canonicalUrl = `${BASE_URL}/${locale}`;

  // Full JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // Website
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "BuildIQ",
        description: config.seo.description,
        inLanguage: config.lang,
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      // WebPage
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: config.seo.title,
        description: config.seo.description,
        inLanguage: config.lang,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "BuildIQ",
              item: BASE_URL,
            },
          ],
        },
      },
      // SoftwareApplication
      {
        "@type": "SoftwareApplication",
        "@id": `${BASE_URL}/#app`,
        name: "BuildIQ",
        alternateName: "BuildIQ App",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Construction Management",
        operatingSystem: "Web, iOS, Android",
        url: BASE_URL,
        description: config.seo.description,
        inLanguage: config.lang,
        featureList: [
          "Budget tracking and cost management",
          "Document and invoice management",
          "Construction progress tracking",
          "Floor plan and project data",
          "Photo diary for construction phases",
          "Contractor management",
        ],
        screenshot: `${BASE_URL}/screens/budget.png`,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/ComingSoon",
          description: "Free to start, no credit card required",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "124",
          bestRating: "5",
          worstRating: "1",
        },
      },
      // Organization
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "BuildIQ",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/logo.png`,
          width: 512,
          height: 512,
        },
        sameAs: [
          "https://twitter.com/buildiq",
          "https://linkedin.com/company/buildiq",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          availableLanguage: ["Polish", "English", "German", "Norwegian", "French"],
        },
      },
      // FAQ
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}/#faq`,
        mainEntity: config.ui.faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang={config.lang} className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicons */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}