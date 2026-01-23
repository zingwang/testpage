import Link from "next/link";
import { LogoSimple } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-salon-text py-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        푸터
      </h2>

      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <LogoSimple className="h-10 w-10" color="#a87fc2" />
              <div>
                <span className="text-xl font-bold text-white">Lee Jieyn Hair</span>
                <span className="mt-0.5 block text-xs tracking-wider text-salon-light">
                  컷 & 펌 전문 · 이지은헤어
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-gray-400">
              20년 경력의 노하우로 자연스러운 스타일링을 선사합니다.
              <br />
              관양시장에서 만나요!
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-salon-primary"
                aria-label="네이버 블로그"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-salon-primary"
                aria-label="카카오톡"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c-5.523 0-10 3.582-10 8 0 2.786 1.785 5.234 4.485 6.648l-.912 3.352 3.883-2.557c.822.126 1.673.193 2.544.193 5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              바로가기
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: "서비스", href: "#services" },
                { name: "소개", href: "#about" },
                { name: "후기", href: "#reviews" },
                { name: "오시는 길", href: "#location" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              연락처
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:031-387-5117" className="hover:text-white font-medium">
                  031-387-5117
                </a>
              </li>
              <li>경기도 안양시 동안구 관양동</li>
              <li>관양시장 내</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Lee Jieyn Hair. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <Link href="#" className="hover:text-white">
                개인정보처리방침
              </Link>
              <Link href="#" className="hover:text-white">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
