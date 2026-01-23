"use client";

import { useState, useCallback, useEffect } from "react";
import { IntroAnimation } from "./IntroAnimation";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleIntroComplete = useCallback(() => {
    // Add loaded class to body to transition background
    document.body.classList.add("loaded");

    setShowIntro(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setContentVisible(true);
    }, 50);
  }, []);

  // Ensure body starts without loaded class
  useEffect(() => {
    document.body.classList.remove("loaded");
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <div
        className={`transition-all duration-700 ease-out ${
          contentVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
        style={{
          visibility: contentVisible ? "visible" : "hidden",
          pointerEvents: contentVisible ? "auto" : "none"
        }}
      >
        {children}
      </div>
    </>
  );
}
