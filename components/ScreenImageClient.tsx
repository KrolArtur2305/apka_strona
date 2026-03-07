"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  label: string;
}

const SCREEN_ICON = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="28" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 27h12M16 23v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function ScreenImageClient({ src, alt, label }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="screen-placeholder w-full"
        style={{ aspectRatio: "16/10", minHeight: 220 }}
      >
        {SCREEN_ICON}
        <span className="label">{label}</span>
        <span style={{ fontSize: "0.72rem", opacity: 0.5 }}>
          Tu będzie screen: {src.split("/").pop()}
        </span>
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      style={{
        aspectRatio: "16/10",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setError(true)}
        priority={false}
      />
    </div>
  );
}
