"use client";

import { useState, useEffect, useRef } from "react";

const WORD_DURATION = 650;
const WORD_GAP = 60;

interface Props {
  onDone: () => void;
  words?: string[];
}

const DEFAULT_WORDS = ["TY", "MASZ", "KONTROLĘ"];

export default function HeroAnimation({ onDone, words = DEFAULT_WORDS }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);
  const startedRef = useRef(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    // Reset and restart when words change (locale switch)
    startedRef.current = false;
    setCurrentIndex(0);
    setKey(0);
  }, [words]);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    let idx = 0;
    let cancelled = false;

    const showNext = () => {
      if (cancelled) return;
      setCurrentIndex(idx);
      setKey(k => k + 1);
      idx++;
      if (idx < words.length) {
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

  const fontSize = words[currentIndex]?.length > 7
    ? "clamp(2.2rem, 10vw, 9rem)"
    : "clamp(3.5rem, 16vw, 13rem)";

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
          color: currentIndex === words.length - 1 ? "var(--accent)" : "#fff",
          display: "block",
          lineHeight: 1,
          willChange: "transform, opacity",
          whiteSpace: "nowrap",
        }}
      >
        {words[currentIndex]}
      </span>
    </div>
  );
}