import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuildIQ Support",
  description: "Get help with BuildIQ – Construction Management App. Contact our support team.",
  robots: { index: true, follow: true },
};

export default function SupportPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#fff", fontFamily: "var(--font-dm, system-ui, sans-serif)" }}>
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontFamily: "var(--font-syne, system-ui)", fontWeight: 800, fontSize: "1.1rem", color: "#fff", textDecoration: "none", letterSpacing: "-0.01em" }}>
          Build<span style={{ color: "#19705C" }}>IQ</span>
        </a>
        <a href="/" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>← Back to home</a>
      </nav>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
        <p style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#19705C", marginBottom: "1rem", fontWeight: 600 }}>Help</p>
        <h1 style={{ fontFamily: "var(--font-syne, system-ui)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
          Support
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "3.5rem", maxWidth: "540px" }}>
          Need help with BuildIQ? We're here for you. Whether you have a question about the app, need help with your account, or want to report an issue — just reach out.
        </p>

        {/* Contact card */}
        <div style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "2.5rem", marginBottom: "2.5rem", background: "rgba(255,255,255,0.02)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ fontSize: "1.5rem" }}>✉️</span>
            <h2 style={{ fontFamily: "var(--font-syne, system-ui)", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.01em" }}>Email Support</h2>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Send us a message and we'll get back to you as soon as possible.
          </p>
          <a
            href="mailto:support@mybuildiq.com"
            style={{
              display: "inline-block",
              background: "#19705C",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            support@mybuildiq.com
          </a>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem", marginTop: "1rem" }}>
            ⏱ We typically respond within 48 hours.
          </p>
        </div>

        {/* FAQ shortcuts */}
        <h2 style={{ fontFamily: "var(--font-syne, system-ui)", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.01em", marginBottom: "1.25rem" }}>
          Common questions
        </h2>

        {[
          { q: "How do I get started with BuildIQ?", a: "Sign up for early access and we'll guide you through the setup. The app is designed to be intuitive — no technical knowledge required." },
          { q: "Is my construction data safe?", a: "Yes. All data is encrypted in transit and at rest. You can export or delete your data at any time." },
          { q: "What devices does BuildIQ work on?", a: "BuildIQ works on any device with a modern web browser — phone, tablet, or desktop." },
          { q: "How do I delete my account?", a: "Send an email to support@mybuildiq.com with the subject 'Account Deletion Request' and we'll process it within 30 days." },
        ].map(({ q, a }) => (
          <div key={q} style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "1.25rem 0" }}>
            <p style={{ fontWeight: 600, fontSize: "0.97rem", marginBottom: "0.5rem", color: "#fff" }}>{q}</p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.93rem", lineHeight: 1.7 }}>{a}</p>
          </div>
        ))}

        <p style={{ marginTop: "2.5rem", color: "rgba(255,255,255,0.35)", fontSize: "0.9rem" }}>
          Didn't find your answer?{" "}
          <a href="mailto:support@mybuildiq.com" style={{ color: "#19705C", textDecoration: "none" }}>
            Email us directly →
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "1.75rem 1.5rem" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}>
        <span style={{ fontFamily: "var(--font-syne, system-ui)", fontWeight: 700, color: "rgba(255,255,255,0.4)" }}>
          Build<span style={{ color: "rgba(25,112,92,0.8)" }}>IQ</span>
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="/privacy" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Privacy Policy</a>
          <a href="/terms" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Terms</a>
          <a href="/support" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Support</a>
        </div>
      </div>
    </footer>
  );
}