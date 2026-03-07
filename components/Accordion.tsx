"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Czy poradzę sobie bez specjalistycznej wiedzy?",
    answer:
      "Tak. Aplikacja jest zaprojektowana dla inwestora budującego dom, nie dla księgowego ani kierownika budowy. Dodajesz fakturę, wpisujesz kwotę, zaznaczasz etap. Resztę system porządkuje za Ciebie.",
  },
  {
    question: "Czy to ma sens, jeśli buduję systemem gospodarczym?",
    answer:
      "Właśnie wtedy ma największy sens. Gdy sam zarządzasz budową, potrzebujesz jednego miejsca do kontroli wydatków, dokumentów i postępów. Inaczej chaos rośnie z każdym tygodniem.",
  },
  {
    question: "Mam już Excela do budżetu. Po co mi to?",
    answer:
      "Excel nie wysyła alertów, gdy przekraczasz budżet etapu. Nie przechowuje zdjęć postępów przy każdym wpisie. Nie łączy faktury z konkretnym wykonawcą i etapem. NAZWAAPKI robi to wszystko — i sprawdza się gdy to TY rządzisz budową.",
  },
  {
    question: "Na jakich urządzeniach działa aplikacja?",
    answer:
      "Na telefonie, tablecie i komputerze. Sprawdzasz budżet na budowie, przeglądasz dokumenty w domu, planujesz kolejne etapy gdziekolwiek jesteś.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="accordion-item">
          <button
            className="accordion-trigger"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
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
