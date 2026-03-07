"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

export type RevealDirection = "up" | "left" | "right";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: RevealDirection;
}

const TRANSLATE: Record<RevealDirection, string> = {
  up:    "translateY(28px)",
  left:  "translateX(-40px)",
  right: "translateX(40px)",
};

export default function Reveal({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const trigger = () => {
              el.style.opacity = "1";
              el.style.transform = "none";
            };
            if (delay) {
              setTimeout(trigger, delay);
            } else {
              trigger();
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: TRANSLATE[direction],
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "transform, opacity",
        ...style,
      }}
    >
      {children}
    </div>
  );
}