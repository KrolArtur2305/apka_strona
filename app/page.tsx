"use client";

import { useState } from "react";
import HeroAnimation from "@/components/HeroAnimation";
import Accordion from "@/components/Accordion";
import Reveal from "@/components/Reveal";
import ScreenImageClient from "@/components/ScreenImageClient";

// ─── ICONS ────────────────────────────────────────────────────────────────────

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
      <circle cx="9" cy="9" r="8.25" stroke="var(--accent)" strokeWidth="1.5" />
      <path d="M5.5 9.25l2.5 2.5 4.5-4.5" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── FEATURE SECTION ──────────────────────────────────────────────────────────

interface FeatureSectionProps {
  tagline: string;
  heading: string;
  body: string;
  bullets?: string[];
  screenSrc: string;
  screenAlt: string;
  screenLabel: string;
  /** true = screen LEFT, text RIGHT on desktop */
  reverse?: boolean;
}

function FeatureSection({
  tagline,
  heading,
  body,
  bullets,
  screenSrc,
  screenAlt,
  screenLabel,
  reverse = false,
}: FeatureSectionProps) {
  // On desktop: reverse=false → text left / screen right
  //             reverse=true  → screen left / text right
  // On mobile: always text first, then screen (DOM order controls this)

  const textCol = (
    <Reveal direction="up" className="space-y-6">
      <div>
        <span className="accent-line block" />
        <span
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "0.72rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            color: "var(--accent)",
          }}
        >
          {tagline}
        </span>
      </div>
      <h2
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 800,
          fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
        }}
      >
        {heading}
      </h2>
      <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: 1.75 }}>
        {body}
      </p>
      {bullets && (
        <ul className="space-y-2.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckIcon />
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  );

  // Screen slides in from the side it visually appears on (desktop)
  const screenCol = (
    <Reveal direction={reverse ? "left" : "right"} delay={80}>
      <div
        style={{
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
          filter: "drop-shadow(0 0 32px rgba(25,112,92,0.15))",
        }}
      >
        <ScreenImageClient src={screenSrc} alt={screenAlt} label={screenLabel} />
      </div>
    </Reveal>
  );

  return (
    <section className="feature-section section-noise">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="feature-grid" style={{ alignItems: "center" }}>
          <div style={{ order: reverse ? 2 : 1 }}>
            {textCol}
          </div>
          <div style={{ order: reverse ? 1 : 2 }}>
            {screenCol}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function Page() {
  const [animDone, setAnimDone] = useState(false);

  return (
    <main>
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background */}
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-noise" />
        </div>

        {/* Nav */}
        <nav
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "1.05rem",
              letterSpacing: "-0.01em",
              color: "#fff",
            }}
          >
          Nazwa<span style={{ color: "var(--accent)" }}>Apki</span>
          </span>
          <a href="#cta" className="btn-primary" style={{ padding: "0.55rem 1.25rem", fontSize: "0.82rem" }}>
            Zacznij teraz
          </a>
        </nav>

        {/* Hero content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            width: "100%",
            padding: "0 1.5rem",
          }}
        >
          {!animDone ? (
            <HeroAnimation onDone={() => setAnimDone(true)} />
          ) : (
            <div className="space-y-6 md:space-y-8">
              <h1
                className="hero-final-enter"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem, 7vw, 6rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.035em",
                  maxWidth: "14ch",
                  margin: "0 auto",
                }}
              >
                Przejmij kontrolę<br />
                <span style={{ color: "var(--accent)" }}>nad swoją budową</span>
              </h1>
              <p
                className="hero-subtitle-enter"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  maxWidth: "44ch",
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Budżet, dokumenty i projekt — wszystko w jednym miejscu, zawsze pod ręką.
              </p>
              <div
                className="hero-cta-enter flex flex-col sm:flex-row items-center justify-center gap-5"
              >
                <a href="#cta" className="btn-primary">
                  Zacznij teraz — pobierz aplikację <ArrowRight size={15} />
                </a>
                <a href="#jak-dziala" className="btn-secondary">
                  Zobacz jak działa <ArrowRight size={14} />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        {animDone && (
          <div
            className="scroll-bounce"
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
              opacity: 0.5,
            }}
            aria-hidden="true"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 4v14M5 13l6 6 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </section>

      {/* ── PROBLEM STRIP ───────────────────────────────────────────── */}
      <section
        id="jak-dziala"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(25,112,92,0.04)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-14">
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                lineHeight: 1.55,
                color: "rgba(255,255,255,0.85)",
                maxWidth: "60ch",
              }}
            >
              Faktury w szufladzie. Wykonawca mówi, że zrobił. Budżet gdzieś w Excelu.{" "}
              <span style={{ color: "var(--accent)" }}>
                Budowa powinna być budowaniem — nie zarządzaniem bałaganem.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION A: BUDŻET ───────────────────────────────────────── */}
      <FeatureSection
        tagline="Budżet i koszty"
        heading="Wiesz ile wydałeś. Wiesz ile zostało."
        body="Każda faktura, każdy przelew — przypisane do etapu i kategorii. Nie musisz liczyć z pamięci. NAZWAAPKI pilnuje budżetu za Ciebie i ostrzega, zanim przekroczysz limit."
        bullets={[
          "Budżet planowany vs. rzeczywisty — zawsze aktualny",
          "Alert przy przekroczeniu progów wydatków",
          "Podgląd kosztów per wykonawca i etap",
        ]}
        screenSrc="/screens/budget1.png"
        screenAlt="Widok budżetu budowy z podziałem na etapy i kategorie"
        screenLabel="Budżet i kontrola kosztów"
      />

      {/* ── SECTION B: DOKUMENTY ────────────────────────────────────── */}
      <FeatureSection
        tagline="Dokumenty i faktury"
        heading="Koniec z papierami w szufladzie."
        body="Zrób zdjęcie faktury na budowie — znajdziesz ją za rok. Pozwolenia, umowy, gwarancje, projekty — wszystko w jednym miejscu, dostępne z telefonu."
        bullets={[
          "Skanowanie faktur zdjęciem telefonem",
          "Automatyczne przypisanie do etapu",
          "Wyszukiwanie po dacie, wykonawcy, kwocie",
        ]}
        screenSrc="/screens/documents.png"
        screenAlt="Lista dokumentów i faktur z budowy"
        screenLabel="Dokumenty i faktury"
        reverse
      />

      {/* ── SECTION C: POSTĘPY ──────────────────────────────────────── */}
      <FeatureSection
        tagline="Postępy i etapy"
        heading="Widzisz co jest zrobione. Co czeka. Co się opóźnia."
        body="Etapy prac rozpisane w czasie. Zaznaczasz ukończenie, dodajesz zdjęcia z postępu robót. Masz czarno na białym, kiedy co miało być gotowe."
        bullets={[
          "Harmonogram z etapami i terminami",
          "Foto-dziennik budowy przy każdym etapie",
          "Widok opóźnień i blokad",
        ]}
        screenSrc="/screens/progress.png"
        screenAlt="Harmonogram etapów budowy z postępami"
        screenLabel="Postępy i etapy"
      />

      {/* ── SECTION D: PROJEKT ──────────────────────────────────────── */}
      <FeatureSection
        tagline="Projekt i dokumentacja"
        heading="Rzuty, model 3D i dane — zawsze przy sobie."
        body="Projekt budowlany, rzuty kondygnacji, specyfikacje materiałów. Nie szukasz na komputerze — masz to przy sobie na budowie, w telefonie."
        bullets={[
          "Rzuty kondygnacji z możliwością adnotacji",
          "Model 3D poglądowy budynku",
          "Specyfikacja materiałów i dostawców",
        ]}
        screenSrc="/screens/project.png"
        screenAlt="Widok projektu budynku z rzutami i modelem 3D"
        screenLabel="Projekt i rzuty"
        reverse
      />

      {/* ── SECTION E: DLA KOGO ─────────────────────────────────────── */}
      <section className="feature-section section-noise">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <Reveal className="mb-14">
            <span className="accent-line block" />
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              Dla kogo
            </span>
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginTop: "0.5rem",
              }}
            >
              Zrobione dla ludzi, którzy budują sami.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "🏗️",
                title: "Budujesz dla siebie",
                desc: "Budujesz dom dla siebie i rodziny. Chcesz wiedzieć, że wszystko idzie zgodnie z planem i budżetem.",
              },
              {
                icon: "🔨",
                title: "Budowa systemem gospodarczym",
                desc: "Koordynujesz kilku wykonawców jednocześnie. Sam planujesz zakupy i dostawy. Każdy robi swoje — Ty musisz widzieć całość. NAZWAAPKI daje Ci ten widok.",
              },
              {
                icon: "📋",
                title: "Kontrola bez chaosu",
                desc: "Chcesz podejść do budowy domu profesjonalnie. Zależy Ci na archiwizacji dokumentów i faktur. Chcesz mieć porządek, ale bez dodatkowej pracy. NAZWAAPKI robi to za Ciebie",
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="for-whom-card h-full">
                  <div className="for-whom-icon">{card.icon}</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION F: FAQ ──────────────────────────────────────────── */}
      <section className="feature-section">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <Reveal className="mb-12">
            <span className="accent-line block" />
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Często zadawane pytania
            </h2>
          </Reveal>
          <Accordion />
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section
        id="cta"
        className="section-noise"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(25,112,92,0.08) 0%, transparent 65%)",
        }}
      >
        <div
          className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center"
        >
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1.25rem",
              }}
            >
              Zacznij teraz
            </p>
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
              }}
            >
              Twoja budowa.<br />
              <span style={{ color: "var(--accent)" }}>Twoje zasady.</span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: "38ch",
                margin: "0 auto 2.5rem",
              }}
            >
              Przestań zarządzać chaosem. Zacznij zarządzać budową.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}>
                Przejmij kontrolę nad swoją budową <ArrowRight size={16} />
              </a>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: "0.78rem",
                marginTop: "1.25rem",
              }}
            >
              Nie pozwól na chaos. Zainstaluj aplikację i ciesz się budową.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "2rem 1.5rem",
        }}
      >
        <div
          className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}
        >
          <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "rgba(255,255,255,0.4)" }}>
            Build<span style={{ color: "rgba(25,112,92,0.8)" }}>Control</span>
          </span>
          <span>© {new Date().getFullYear()} NAZWAAPKI. Wszelkie prawa zastrzeżone.</span>
          <div className="flex gap-5">
            <a href="#" style={{ color: "inherit", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}>
              Polityka prywatności
            </a>
            <a href="#" style={{ color: "inherit", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}>
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}