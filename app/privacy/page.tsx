import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuildIQ Privacy Policy",
  description: "Privacy Policy for BuildIQ – Construction Management App.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#fff", fontFamily: "var(--font-dm, system-ui, sans-serif)" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontFamily: "var(--font-syne, system-ui)", fontWeight: 800, fontSize: "1.1rem", color: "#fff", textDecoration: "none", letterSpacing: "-0.01em" }}>
          Build<span style={{ color: "#19705C" }}>IQ</span>
        </a>
        <a href="/" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>← Back to home</a>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
        <p style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#19705C", marginBottom: "1rem", fontWeight: 600 }}>Legal</p>
        <h1 style={{ fontFamily: "var(--font-syne, system-ui)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", marginBottom: "3.5rem" }}>Last updated: March 2025</p>

        <Section title="1. Introduction">
          BuildIQ ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and store data when you use our construction management application and website at mybuildiq.com.
          By using BuildIQ, you agree to the collection and use of information as described in this policy.
        </Section>

        <Section title="2. Information We Collect">
          We may collect the following types of information:
          <ul>
            <li><strong>Contact information</strong> — name, email address, phone number (when you submit a contact form)</li>
            <li><strong>Usage data</strong> — pages visited, time spent, browser type, device type</li>
            <li><strong>Construction project data</strong> — budget entries, documents, photos, and notes you add within the app</li>
            <li><strong>Technical data</strong> — IP address, cookies, and similar tracking technologies</li>
          </ul>
          We do not collect sensitive financial information such as credit card numbers directly.
        </Section>

        <Section title="3. How We Use Information">
          We use collected information to:
          <ul>
            <li>Provide, maintain, and improve the BuildIQ service</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Send service-related notifications (not marketing without your consent)</li>
            <li>Analyze usage patterns to improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
          We will never sell your personal data to third parties.
        </Section>

        <Section title="4. Data Storage">
          Your data is stored securely on servers located within the European Union. We implement industry-standard security measures including encryption in transit (HTTPS) and encryption at rest.
          We retain your data for as long as your account is active or as needed to provide services. You may request deletion at any time (see Account Deletion below).
        </Section>

        <Section title="5. Third-Party Services">
          BuildIQ uses the following third-party services which may process your data:
          <ul>
            <li><strong>Vercel</strong> — website hosting and infrastructure</li>
            <li><strong>Resend</strong> — transactional email delivery</li>
            <li><strong>Google Analytics</strong> — anonymous usage analytics (if enabled)</li>
          </ul>
          Each of these providers has their own privacy policy and data processing terms.
        </Section>

        <Section title="6. Account Deletion">
          You have the right to request deletion of your personal data at any time. To delete your account and all associated data, send an email to{" "}
          <a href="mailto:support@mybuildiq.com" style={{ color: "#19705C" }}>support@mybuildiq.com</a>{" "}
          with the subject line "Account Deletion Request". We will process your request within 30 days.
        </Section>

        <Section title="7. Your Rights">
          Under GDPR and applicable data protection laws, you have the right to:
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability — receive your data in a machine-readable format</li>
          </ul>
        </Section>

        <Section title="8. Contact">
          For any privacy-related questions or requests, contact us at:{" "}
          <a href="mailto:support@mybuildiq.com" style={{ color: "#19705C" }}>support@mybuildiq.com</a>
        </Section>
      </div>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontFamily: "var(--font-syne, system-ui)", fontWeight: 700, fontSize: "1.15rem", letterSpacing: "-0.01em", marginBottom: "0.9rem", color: "#fff" }}>
        {title}
      </h2>
      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.97rem", lineHeight: 1.8 }}>
        {children}
      </div>
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