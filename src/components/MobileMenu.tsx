"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface MobileMenuProps {
  navigation: { name: string; href: string }[];
}

export function MobileMenu({ navigation }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl text-salon-text hover:bg-salon-cream/50 transition-colors"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
      >
        <span className="sr-only">{isOpen ? "메뉴 닫기" : "메뉴 열기"}</span>
        <div className="relative w-5 h-4 flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </div>
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="text-lg font-bold text-salon-text">메뉴</span>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="메뉴 닫기"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 transition-all hover:bg-gradient-to-r hover:from-salon-cream hover:to-transparent hover:text-salon-primary"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                  <svg
                    className="h-4 w-4 text-gray-300 transition-all group-hover:text-salon-primary group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </nav>

          {/* Bottom CTA */}
          <div className="p-4 border-t border-gray-100 bg-gradient-to-t from-salon-cream/50 to-transparent">
            <a
              href="tel:031-387-5117"
              className="flex items-center justify-center gap-3 rounded-xl bg-white px-4 py-3.5 text-base font-medium text-salon-text shadow-sm border border-gray-100"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-salon-cream text-salon-primary">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-sm text-gray-500">전화 문의</span>
                <span className="font-bold text-salon-primary">031-387-5117</span>
              </div>
            </a>
            <Link
              href="#location"
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-3 w-full text-center"
            >
              예약하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
