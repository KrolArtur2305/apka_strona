import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuildIQ Terms of Service",
  description: "Terms of Service for BuildIQ – Construction Management App.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#fff", fontFamily: "var(--font-dm, system-ui, sans-serif)" }}>
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontFamily: "var(--font-syne, system-ui)", fontWeight: 800, fontSize: "1.1rem", color: "#fff", textDecoration: "none", letterSpacing: "-0.01em" }}>
          Build<span style={{ color: "#19705C" }}>IQ</span>
        </a>
        <a href="/" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>← Back to home</a>
      </nav>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
        <p style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#19705C", marginBottom: "1rem", fontWeight: 600 }}>Legal</p>
        <h1 style={{ fontFamily: "var(--font-syne, system-ui)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
          Terms of Service
        </h1>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", marginBottom: "3.5rem" }}>Last updated: March 2025</p>

        <Section title="1. Service Description">
          BuildIQ is a construction project management application that helps individual home builders track budgets, documents, and project progress. By accessing or using BuildIQ at mybuildiq.com, you agree to be bound by these Terms of Service.
          The service is currently in early access. Features and availability may change over time.
        </Section>

        <Section title="2. User Responsibilities">
          By using BuildIQ, you agree to:
          <ul>
            <li>Provide accurate information when registering or contacting us</li>
            <li>Use the service only for lawful purposes</li>
            <li>Not attempt to gain unauthorized access to the system or other users' data</li>
            <li>Not use the service to store or share illegal content</li>
            <li>Keep your account credentials secure and confidential</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
          </ul>
        </Section>

        <Section title="3. User Content">
          You retain ownership of all content you upload to BuildIQ — including documents, photos, budget data, and notes. By uploading content, you grant BuildIQ a limited license to store and display that content solely for the purpose of providing the service to you.
          We do not claim ownership of your data and will not share it with third parties without your consent, except as required by law.
        </Section>

        <Section title="4. Service Availability">
          We strive to maintain high availability of the service but do not guarantee uninterrupted access. BuildIQ may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.
          We reserve the right to modify, suspend, or discontinue any part of the service at any time, with reasonable notice where possible.
        </Section>

        <Section title="5. Limitation of Liability">
          BuildIQ is provided "as is" without warranties of any kind, either express or implied. To the fullest extent permitted by law, BuildIQ and its team shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.
          We strongly recommend maintaining your own backups of critical project documents and data.
        </Section>

        <Section title="6. Changes to the Service">
          We may update these Terms of Service from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of the service after changes constitutes acceptance of the new terms.
          For significant changes, we will make reasonable efforts to notify users by email.
        </Section>

        <Section title="7. Contact">
          For any questions about these Terms of Service, contact us at:{" "}
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