"use client";

import { useState, useEffect, useRef } from "react";

const WORDS = ["TY", "MASZ", "KONTROLĘ"];
const WORD_DURATION = 600; // ms per word (enter + hold + exit in one animation)
const WORD_GAP = 50;       // ms between words

interface Props {
  onDone: () => void;
}

export default function HeroAnimation({ onDone }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    if (doneRef.current) return;

    let idx = 0;

    const showNext = () => {
      if (doneRef.current) return;
      setCurrentIndex(idx);
      setKey((k) => k + 1);
      idx++;
      if (idx < WORDS.length) {
        setTimeout(showNext, WORD_DURATION + WORD_GAP);
      } else {
        // after last word finishes
        setTimeout(() => {
          doneRef.current = true;
          onDone();
        }, WORD_DURATION);
      }
    };

    showNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center justify-center" aria-hidden="true">
      <span
        key={key}
        className="word-animate"
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 800,
          fontSize: "clamp(3.5rem, 14vw, 11rem)",
          letterSpacing: "-0.03em",
          color: currentIndex === WORDS.length - 1 ? "var(--accent)" : "#fff",
          display: "block",
          lineHeight: 1,
          willChange: "transform, opacity",
        }}
      >
        {WORDS[currentIndex]}
      </span>
    </div>
  );
}
