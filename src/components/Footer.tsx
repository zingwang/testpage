import Link from "next/link";
import { LogoSimple } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-salon-text to-[#2d1f38] py-16 overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        푸터
      </h2>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-salon-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-salon-light/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                <LogoSimple className="h-10 w-10" color="#a87fc2" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Lee Jieyn Hair</span>
                <span className="mt-0.5 block text-xs tracking-wider text-salon-light">
                  컷 & 펌 전문 · 이지은헤어
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-gray-400 leading-relaxed">
              20년 경력의 노하우로 자연스러운 스타일링을 선사합니다.
              <br />
              관양시장에서 만나요!
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="group flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:bg-[#03C75A] hover:scale-110"
                aria-label="네이버 블로그"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                </svg>
              </a>
              <a
                href="#"
                className="group flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:bg-[#FEE500] hover:text-[#3C1E1E] hover:scale-110"
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-salon-light to-transparent" />
              바로가기
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                { name: "서비스", href: "#services" },
                { name: "소개", href: "#about" },
                { name: "후기", href: "#reviews" },
                { name: "오시는 길", href: "#location" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                  >
                    <svg className="h-4 w-4 text-salon-light opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-salon-light to-transparent" />
              연락처
            </h3>
            <ul className="mt-6 space-y-4 text-gray-400">
              <li>
                <a href="tel:031-387-5117" className="group inline-flex items-center gap-2 hover:text-white transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-salon-light group-hover:bg-salon-primary group-hover:text-white transition-all">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-semibold">031-387-5117</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-salon-light mt-0.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="leading-relaxed">
                  경기도 안양시 동안구 관양동
                  <br />
                  관양시장 내
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Lee Jieyn Hair. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
