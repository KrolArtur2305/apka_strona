"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { locales, i18n, type Locale } from "@/lib/i18n";

export default function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const switchTo = (locale: Locale) => {
    setOpen(false);
    router.push(`/${locale}`);
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6, padding: "0.4rem 0.75rem", color: "#fff", fontSize: "0.82rem", fontFamily: "var(--font-syne)", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "0.4rem", transition: "background 0.15s" }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
      >
        {i18n[currentLocale].flag} {currentLocale.toUpperCase()}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.5 }}>
          <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div style={{ position: "absolute", top: "calc(100% + 6px)", right: 0, background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, overflow: "hidden", minWidth: 140, zIndex: 100, boxShadow: "0 16px 40px rgba(0,0,0,0.5)" }}>
          {locales.map((locale: Locale) => (
            <button
              key={locale}
              onClick={() => switchTo(locale)}
              style={{ display: "flex", alignItems: "center", gap: "0.6rem", width: "100%", padding: "0.65rem 1rem", background: locale === currentLocale ? "rgba(25,112,92,0.15)" : "transparent", border: "none", color: locale === currentLocale ? "var(--accent)" : "rgba(255,255,255,0.7)", fontSize: "0.85rem", fontFamily: "var(--font-dm)", cursor: "pointer", textAlign: "left", transition: "background 0.12s" }}
              onMouseEnter={e => { if (locale !== currentLocale) e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={e => { if (locale !== currentLocale) e.currentTarget.style.background = "transparent"; }}
            >
              {i18n[locale].flag} {i18n[locale].nativeName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}