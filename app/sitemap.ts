import { MetadataRoute } from "next";
import { locales, i18n, type Locale } from "@/lib/i18n";

const BASE_URL = "https://mybuildiq.com";

// Priority per market: EN (USA) and PL highest, then DE, NO, FR
const PRIORITY: Record<string, number> = {
  en: 1.0,
  pl: 1.0,
  de: 0.9,
  no: 0.85,
  fr: 0.85,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale: Locale) => {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified,
      changeFrequency: "monthly",
      priority: PRIORITY[locale] ?? 0.8,
    });
  });

  return entries;
}