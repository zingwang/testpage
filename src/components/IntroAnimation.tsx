"use client";

import { useState, useEffect } from "react";
import { LogoSimple } from "./Logo";

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<"initial" | "logo" | "text" | "fadeOut">("initial");

  useEffect(() => {
    // Prevent scroll during intro
    document.body.style.overflow = "hidden";

    // Start immediately
    const startTimer = setTimeout(() => {
      setPhase("logo");
    }, 100);

    // Phase 1: Show logo (100ms - 900ms)
    const logoTimer = setTimeout(() => {
      setPhase("text");
    }, 900);

    // Phase 2: Show text (900ms - 2400ms)
    const textTimer = setTimeout(() => {
      setPhase("fadeOut");
    }, 2400);

    // Phase 3: Fade out and complete (2400ms - 3000ms)
    const completeTimer = setTimeout(() => {
      document.body.style.overflow = "";
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(logoTimer);
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
        background: "linear-gradient(135deg, #3d2352 0%, #4a2d5e 50%, #2a1a3a 100%)",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative circles */}
      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-400/5 blur-3xl" />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div
          className={`transition-all duration-700 ease-out ${
            phase === "initial"
              ? "scale-75 opacity-0"
              : phase === "logo"
              ? "scale-100 opacity-100"
              : "scale-90 opacity-100"
          }`}
        >
          <LogoSimple
            className={`h-24 w-24 sm:h-32 sm:w-32 transition-all duration-700 ${
              phase === "text" || phase === "fadeOut" ? "mb-6" : "mb-0"
            }`}
            color="white"
          />
        </div>

        {/* Brand Name - English */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-out ${
            phase === "initial" || phase === "logo"
              ? "max-h-0 opacity-0"
              : "max-h-40 opacity-100"
          }`}
        >
          <h1 className="text-center">
            <span
              className={`block text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight transition-all duration-700 ${
                phase === "text" || phase === "fadeOut"
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Lee Jieyn Hair
            </span>
            <span
              className={`block mt-3 text-lg sm:text-xl text-white/70 tracking-[0.3em] uppercase transition-all duration-700 delay-150 ${
                phase === "text" || phase === "fadeOut"
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Cut & Perm Specialist
            </span>
          </h1>
        </div>

        {/* Tagline - Korean */}
        <div
          className={`mt-8 transition-all duration-500 delay-300 ${
            phase === "text"
              ? "opacity-100 translate-y-0"
              : phase === "fadeOut"
              ? "opacity-0 translate-y-2"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-white/50 text-sm tracking-widest">이지은헤어</p>
        </div>

        {/* Loading bar */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-24">
          <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-white/60 to-white/80 rounded-full transition-all ease-out"
              style={{
                width:
                  phase === "initial" ? "0%" :
                  phase === "logo" ? "30%" :
                  phase === "text" ? "100%" : "100%",
                transitionDuration:
                  phase === "logo" ? "800ms" :
                  phase === "text" ? "1500ms" : "200ms",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
