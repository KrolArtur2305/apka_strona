"use client";

import { useEffect, useRef, useState } from "react";

const TYPE_SPEED = 38;
const PAUSE_AFTER = 180;

interface Props {
  questions?: string[];
}

const DEFAULT_QUESTIONS = [
  "Boisz się chaosu na swojej budowie?",
  "Martwisz się, że źle zarządzisz budżetem?",
  "Obawiasz się zgubionych dokumentów?",
];

export default function TypewriterQuestions({ questions = DEFAULT_QUESTIONS }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || done) return;
    if (lineIndex >= questions.length) { setDone(true); return; }
    const target = questions[lineIndex];
    if (charIndex < target.length) {
      const t = setTimeout(() => {
        setCurrentLine(target.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, TYPE_SPEED);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLines(prev => [...prev, target]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex(i => i + 1);
      }, PAUSE_AFTER);
      return () => clearTimeout(t);
    }
  }, [started, done, lineIndex, charIndex, questions]);

  return (
    <div ref={containerRef} style={{ minHeight: "7rem" }}>
      {lines.map((line, i) => (
        <p key={i} style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", lineHeight: 1.5, color: "#fff", marginBottom: "0.5rem" }}>
          <span style={{ color: "var(--accent)", marginRight: "0.5rem" }}>—</span>{line}
        </p>
      ))}
      {!done && lineIndex < questions.length && (
        <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", lineHeight: 1.5, color: "#fff", marginBottom: "0.5rem" }}>
          <span style={{ color: "var(--accent)", marginRight: "0.5rem" }}>—</span>
          {currentLine}
          <span style={{ display: "inline-block", width: "2px", height: "1.1em", background: "var(--accent)", marginLeft: "2px", verticalAlign: "middle", animation: "cursorBlink 0.7s step-end infinite" }} />
        </p>
      )}
    </div>
  );
}