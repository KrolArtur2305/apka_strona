import { MetadataRoute } from "next";
import { locales, i18n } from "@/lib/i18n";

const BASE_URL = "https://mybuildiq.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale: typeof locales[number]) => {
    const config = i18n[locale];
    entries.push({
      url: `${BASE_URL}/${locale}/${config.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: locale === "pl" ? 1.0 : 0.9,
    });
  });

  return entries;
}