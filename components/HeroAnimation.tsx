"use client";

import { useState, useEffect, useRef } from "react";

const WORDS = ["TY", "MASZ", "KONTROLĘ"];
const WORD_DURATION = 650;
const WORD_GAP = 60;

interface Props {
  onDone: () => void;
}

export default function HeroAnimation({ onDone }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);
  // Use ref to hold the timeout chain — cleanup on double-invoke (React Strict Mode)
  const startedRef = useRef(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    // Guard against React Strict Mode double-invoke
    if (startedRef.current) return;
    startedRef.current = true;

    let idx = 0;
    let cancelled = false;

    const showNext = () => {
      if (cancelled) return;
      setCurrentIndex(idx);
      setKey(k => k + 1);
      idx++;
      if (idx < WORDS.length) {
        setTimeout(showNext, WORD_DURATION + WORD_GAP);
      } else {
        setTimeout(() => {
          if (!cancelled) onDoneRef.current();
        }, WORD_DURATION);
      }
    };

    showNext();

    return () => { cancelled = true; };
  }, []);

  // font size: clamp ensures "KONTROLĘ" never overflows on narrow screens
  const fontSize = currentIndex === 2
    ? "clamp(2.2rem, 10vw, 9rem)"   // KONTROLĘ — narrower
    : "clamp(3rem, 14vw, 11rem)";   // TY / MASZ — big

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 1rem" }} aria-hidden="true">
      <span
        key={key}
        className="word-animate"
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 800,
          fontSize,
          letterSpacing: "-0.03em",
          color: currentIndex === WORDS.length - 1 ? "var(--accent)" : "#fff",
          display: "block",
          lineHeight: 1,
          willChange: "transform, opacity",
          whiteSpace: "nowrap",
        }}
      >
        {WORDS[currentIndex]}
      </span>
    </div>
  );
}