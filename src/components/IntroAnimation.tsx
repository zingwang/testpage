"use client";

import { useState, useEffect } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<"initial" | "text" | "fadeOut">("initial");

  useEffect(() => {
    // Prevent scroll during intro
    document.body.style.overflow = "hidden";

    // Start immediately
    const startTimer = setTimeout(() => {
      setPhase("text");
    }, 100);

    // Phase: Show text (100ms - 2000ms)
    const textTimer = setTimeout(() => {
      setPhase("fadeOut");
    }, 2000);

    // Fade out and complete (2000ms - 2600ms)
    const completeTimer = setTimeout(() => {
      document.body.style.overflow = "";
      onComplete();
    }, 2600);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-600 ease-out ${
        phase === "fadeOut" ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      style={{
        background: "#000000",
      }}
    >
      <div className="w-full text-center px-4">
        {/* Brand Name */}
        <div
          className={`transition-all duration-700 ease-out ${
            phase === "initial"
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          <p className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Lee Jieyn Hair
          </p>
          <p className="mt-2 sm:mt-3 text-base sm:text-xl text-white/70 tracking-[0.2em]">
            컷 & 펌 전문
          </p>
        </div>

        {/* Tagline */}
        <div
          className={`mt-4 sm:mt-6 transition-all duration-500 delay-300 ${
            phase === "text"
              ? "opacity-100 translate-y-0"
              : phase === "fadeOut"
              ? "opacity-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-white/50 text-xs sm:text-sm tracking-widest">
            이지은헤어 · 관양동
          </p>
        </div>
      </div>
    </div>
  );
}
