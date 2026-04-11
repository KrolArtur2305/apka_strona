"use client";

import { useState, use } from "react";

import { locales, i18n, type Locale } from "@/lib/i18n";
import HeroAnimation from "@/components/HeroAnimation";
import Reveal from "@/components/Reveal";
import ScreenImageClient from "@/components/ScreenImageClient";
import TypewriterQuestions from "@/components/TypewriterQuestions";
import LocaleAccordion from "@/components/LocaleAccordion";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import ContactForm from "@/components/ContactForm";

const navLoginLabel: Record<Locale, string> = {
  pl: "Zaloguj",
  en: "Log in",
  de: "Anmelden",
  no: "Logg inn",
  sv: "Logga in",
};

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
      <circle cx="9" cy="9" r="8.25" stroke="var(--accent)" strokeWidth="1.5" />
      <path d="M5.5 9.25l2.5 2.5 4.5-4.5" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureSection({
  tagline, heading, body, bullets, screenSrc, screenAlt, screenLabel, reverse = false,
}: {
  tagline: string; heading: string; body: string; bullets: string[];
  screenSrc: string; screenAlt: string; screenLabel: string; reverse?: boolean;
}) {
  const textCol = (
    <Reveal direction="up">
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <span style={{ display: "block", width: "2.5rem", height: "2px", background: "var(--accent)", marginBottom: "0.75rem" }} />
          <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--accent)" }}>
            {tagline}
          </span>
        </div>
        <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.12, letterSpacing: "-0.025em", margin: 0 }}>
          {heading}
        </h2>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.8, margin: 0 }}>
          {body}
        </p>
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: 0, padding: 0, listStyle: "none" }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
              <CheckIcon />
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(0.9rem, 1.3vw, 1rem)", lineHeight: 1.6 }}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );

  const screenCol = (
    <Reveal direction={reverse ? "left" : "right"} delay={80}>
      <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)", filter: "drop-shadow(0 0 32px rgba(25,112,92,0.15))" }}>
        <ScreenImageClient src={screenSrc} alt={screenAlt} label={screenLabel} />
      </div>
    </Reveal>
  );

  return (
    <section className="feature-section section-noise">
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div className="feature-grid" style={{ alignItems: "center" }}>
          <div style={{ order: reverse ? 2 : 1 }}>{textCol}</div>
          <div style={{ order: reverse ? 1 : 2 }}>{screenCol}</div>
        </div>
      </div>
    </section>
  );
}

export default function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);

  if (!locales.includes(locale as Locale)) {
    return null;
  }

  return <LocalePageInner key={locale} locale={locale as Locale} />;
}

function LocalePageInner({ locale }: { locale: Locale }) {
  const [animDone, setAnimDone] = useState(false);
  const config = i18n[locale];
  const t = config.ui;
  return (
    <main>
      {/* HERO */}
      <section id="hero" style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div className="hero-bg"><div className="hero-grid" /><div className="hero-noise" /></div>

        <nav style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <img src="/logo.png" alt="BuildIQ logo" style={{ height: 42, width: "auto" }} />
            <span style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.01em" }}>
              Build<span style={{ color: "var(--accent)" }}>IQ</span>
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <LocaleSwitcher currentLocale={locale as Locale} />
            <a
              href="https://app.mybuildiq.com/login"
              className="btn-primary"
              style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}
            >
              {navLoginLabel[locale]}
            </a>
          </div>
        </nav>

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", width: "100%", padding: "0 1.25rem" }}>
          {!animDone ? (
            <HeroAnimation onDone={() => setAnimDone(true)} words={t.heroWords} />
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h1 className="hero-final-enter" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 7vw, 6rem)", lineHeight: 1.06, letterSpacing: "-0.035em", margin: "0 auto" }}>
                {config.seo.h1.split(" ").slice(0, -2).join(" ")}<br />
                <span style={{ color: "var(--accent)" }}>{config.seo.h1.split(" ").slice(-2).join(" ")}</span>
              </h1>
              <p className="hero-subtitle-enter" style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.95rem, 2vw, 1.15rem)", maxWidth: "40ch", margin: "0 auto", lineHeight: 1.65 }}>
                {t.heroSubtitle}
              </p>
              <div className="hero-cta-enter" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                <a href="#cta" className="btn-primary" style={{ width: "fit-content" }}>
                  {t.heroCtaPrimary} <ArrowRight size={15} />
                </a>
                <a href="#jak-dziala" className="btn-secondary">
                  {t.heroCtaSecondary} <ArrowRight size={14} />
                </a>
              </div>
            </div>
          )}
        </div>

        {animDone && (
          <div className="scroll-bounce" aria-hidden="true" style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 1, opacity: 0.5 }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 4v14M5 13l6 6 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </section>

      {/* QUESTIONS */}
      <section id="jak-dziala" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "4rem 1.5rem 8rem" }}>
          <Reveal>
            <p style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.5rem" }}>
              {t.problemIntro}
            </p>
          </Reveal>
          <TypewriterQuestions questions={[t.question1, t.question2, t.question3]} />
          <Reveal delay={2800} style={{ textAlign: "center", marginTop: "4rem" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2.5rem, 8vw, 6.5rem)", lineHeight: 1.0, letterSpacing: "-0.04em", color: "#fff", marginBottom: "2rem" }}>
              {t.appName}
            </h2>
            <a href="#cta" className="btn-primary" style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)", padding: "0.9rem 2rem" }}>
              {t.appCtaBtn}
            </a>
          </Reveal>
        </div>
      </section>

      {/* FEATURE SECTIONS */}
      <FeatureSection tagline={t.taglineBudget} heading={t.headingBudget} body={t.bodyBudget} bullets={t.bulletsBudget}
        screenSrc="/screens/budget.png" screenAlt={t.headingBudget} screenLabel={t.taglineBudget} />
      <FeatureSection tagline={t.taglineDocs} heading={t.headingDocs} body={t.bodyDocs} bullets={t.bulletsDocs}
        screenSrc="/screens/documents.png" screenAlt={t.headingDocs} screenLabel={t.taglineDocs} reverse />
      <FeatureSection tagline={t.taglineProgress} heading={t.headingProgress} body={t.bodyProgress} bullets={t.bulletsProgress}
        screenSrc="/screens/progress.png" screenAlt={t.headingProgress} screenLabel={t.taglineProgress} />
      <FeatureSection tagline={t.taglineProject} heading={t.headingProject} body={t.bodyProject} bullets={t.bulletsProject}
        screenSrc="/screens/project.png" screenAlt={t.headingProject} screenLabel={t.taglineProject} reverse />

      {/* DLA KOGO */}
      <section className="feature-section section-noise">
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem" }}>
          <Reveal style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ display: "block", width: "2.5rem", height: "2px", background: "var(--accent)", margin: "0 auto 0.75rem" }} />
            <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--accent)", display: "block", marginBottom: "0.75rem" }}>
              {t.forWhomLabel}
            </span>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2.2rem, 6vw, 5rem)", lineHeight: 1.08, letterSpacing: "-0.035em" }}>
              {t.forWhomHeading}
            </h2>
          </Reveal>
          <Reveal>
            <div className="for-whom-grid-responsive">
              {t.cards.map((card, i) => (
                <div key={i}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(25,112,92,0.8)"; el.style.background = "rgba(25,112,92,0.15)"; el.style.boxShadow = "0 0 48px rgba(25,112,92,0.25), inset 0 0 32px rgba(25,112,92,0.08)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.background = "rgba(255,255,255,0.02)"; el.style.boxShadow = "none"; }}
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px", padding: "2.25rem 1.75rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", transition: "border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease" }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: 10, background: "rgba(25,112,92,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1.25rem" }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(1rem, 1.5vw, 1.25rem)", marginBottom: "0.65rem", lineHeight: 1.25, color: "#fff" }}>{card.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.88rem, 1.2vw, 0.98rem)", lineHeight: 1.75, margin: 0 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="feature-section">
        <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "5rem 1.5rem" }}>
          <Reveal style={{ marginBottom: "3rem" }}>
            <span style={{ display: "block", width: "2.5rem", height: "2px", background: "var(--accent)", marginBottom: "0.75rem" }} />
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              {t.faqLabel}
            </h2>
          </Reveal>
          <LocaleAccordion items={t.faqItems} />
        </div>
      </section>

      {/* CONTACT */}
      <ContactForm labels={t.contact} />

      {/* FINAL CTA */}
      <section id="cta" className="section-noise" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(25,112,92,0.08) 0%, transparent 65%)" }}>
        <div style={{ maxWidth: "44rem", margin: "0 auto", padding: "6rem 1.5rem", textAlign: "center" }}>
          <Reveal>
            <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.25rem" }}>{t.ctaLabel}</p>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
              {t.ctaHeading}<br /><span style={{ color: "var(--accent)" }}>BuildIQ.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.95rem, 1.5vw, 1rem)", lineHeight: 1.7, maxWidth: "36ch", margin: "0 auto 2.5rem" }}>{t.ctaBody}</p>
            <a href="#" className="btn-primary" style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", padding: "0.9rem 2rem" }}>
              {t.ctaBtn} <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img src="/logo.png" alt="BuildIQ logo" style={{ height: 24, width: "auto", opacity: 0.6 }} />
            <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "rgba(255,255,255,0.4)" }}>
              Build<span style={{ color: "rgba(25,112,92,0.8)" }}>IQ</span>
            </span>
          </div>
          <span>© {new Date().getFullYear()} BuildIQ. {t.footerRights}</span>
          <a href="#kontakt" style={{ color: "inherit", transition: "color 0.15s" }} onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}>{t.footerContact}</a>
        </div>
      </footer>
    </main>
  );
}
