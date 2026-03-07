"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function LocaleAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
            <span>{item.question}</span>
            <span className={`accordion-icon${openIndex === i ? " open" : ""}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          <div className={`accordion-content${openIndex === i ? " open" : ""}`}>
            <p className="accordion-body">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}