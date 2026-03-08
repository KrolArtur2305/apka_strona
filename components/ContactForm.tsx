"use client";

import { useState } from "react";

interface Props {
  labels: {
    sectionLabel: string;
    heading: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    successMsg: string;
    errorMsg: string;
  };
}

export default function ContactForm({ labels: l }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 8,
    padding: "0.85rem 1rem",
    color: "#fff",
    fontSize: "0.95rem",
    fontFamily: "var(--font-dm)",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.8rem",
    fontFamily: "var(--font-syne)",
    fontWeight: 600,
    letterSpacing: "0.05em",
    color: "rgba(255,255,255,0.5)",
    marginBottom: "0.5rem",
    textTransform: "uppercase" as const,
  };

  return (
    <section id="kontakt" className="feature-section section-noise">
      <div style={{ maxWidth: "44rem", margin: "0 auto", padding: "5rem 1.5rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span style={{ display: "block", width: "2.5rem", height: "2px", background: "var(--accent)", marginBottom: "0.75rem" }} />
          <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--accent)", display: "block", marginBottom: "0.75rem" }}>
            {l.sectionLabel}
          </span>
          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 0.75rem" }}>
            {l.heading}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
            {l.subtitle}
          </p>
        </div>

        {/* Form */}
        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "3rem 2rem", background: "rgba(25,112,92,0.08)", border: "1px solid rgba(25,112,92,0.25)", borderRadius: 12 }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
            <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.1rem", color: "var(--accent)" }}>
              {l.successMsg}
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Row: name + email */}
            <div className="contact-row">
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>{l.nameLabel}</label>
                <input
                  type="text"
                  placeholder={l.namePlaceholder}
                  value={form.name}
                  onChange={e => set("name", e.target.value)}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "rgba(25,112,92,0.6)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>{l.emailLabel} *</label>
                <input
                  type="email"
                  placeholder={l.emailPlaceholder}
                  value={form.email}
                  onChange={e => set("email", e.target.value)}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "rgba(25,112,92,0.6)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label style={labelStyle}>{l.phoneLabel}</label>
              <input
                type="tel"
                placeholder={l.phonePlaceholder}
                value={form.phone}
                onChange={e => set("phone", e.target.value)}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "rgba(25,112,92,0.6)")}
                onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* Message */}
            <div>
              <label style={labelStyle}>{l.messageLabel} *</label>
              <textarea
                placeholder={l.messagePlaceholder}
                value={form.message}
                onChange={e => set("message", e.target.value)}
                rows={5}
                style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                onFocus={e => (e.target.style.borderColor = "rgba(25,112,92,0.6)")}
                onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {status === "error" && (
              <p style={{ color: "#f87171", fontSize: "0.85rem" }}>{l.errorMsg}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "sending" || !form.name || !form.email || !form.message}
              className="btn-primary"
              style={{ alignSelf: "flex-start", opacity: (!form.name || !form.email || !form.message) ? 0.5 : 1, cursor: (!form.name || !form.email || !form.message) ? "not-allowed" : "pointer", transition: "opacity 0.2s" }}
            >
              {status === "sending" ? "..." : l.submitBtn}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}