"use client";

import { useState } from "react";
import Link from "next/link";

interface MobileMenuProps {
  navigation: { name: string; href: string }[];
}

export function MobileMenu({ navigation }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center rounded-md p-2 text-salon-text hover:bg-salon-cream"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
      >
        {isOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-16 border-b border-salon-light/30 bg-white p-4 shadow-lg"
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-gray-600 transition-colors hover:bg-salon-cream hover:text-salon-primary"
              >
                {item.name}
              </Link>
            ))}
            <hr className="my-2 border-salon-light/50" />
            <a
              href="tel:031-387-5117"
              className="flex items-center gap-2 px-4 py-3 text-base font-medium text-salon-text"
            >
              <svg
                className="h-5 w-5 text-salon-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              031-387-5117
            </a>
            <Link
              href="#location"
              onClick={() => setIsOpen(false)}
              className="btn-primary mx-4 mt-2 text-center"
            >
              예약하기
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
