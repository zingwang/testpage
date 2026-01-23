import Link from "next/link";
import { LogoSimple } from "./Logo";
import { Marquee } from "./Marquee";

const NAVER_PLACE_URL = "https://map.naver.com/p/search/%EC%9D%B4%EC%A7%80%EC%9D%80%ED%97%A4%EC%96%B4%ED%8E%8C/place/1249725075?placePath=/review";

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#3d2a4d' }}>
      {/* Top Marquee */}
      <div className="border-b border-white/10 py-4">
        <Marquee speed={40}>
          <span className="mx-12 text-sm text-white/30 uppercase tracking-[0.3em]">Lee Jieyn Hair</span>
          <span className="mx-4 text-salon-light/50">✦</span>
          <span className="mx-12 text-sm text-white/30 uppercase tracking-[0.3em]">관양시장</span>
          <span className="mx-4 text-salon-light/50">✦</span>
          <span className="mx-12 text-sm text-white/30 uppercase tracking-[0.3em]">Since 2004</span>
          <span className="mx-4 text-salon-light/50">✦</span>
          <span className="mx-12 text-sm text-white/30 uppercase tracking-[0.3em]">Cut & Perm</span>
          <span className="mx-4 text-salon-light/50">✦</span>
        </Marquee>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                <LogoSimple className="h-10 w-10" color="#a87fc2" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Lee Jieyn Hair</span>
                <span className="mt-0.5 block text-sm text-white/40">이지은헤어 · 컷 & 펌 전문</span>
              </div>
            </Link>

            <p className="mt-6 text-white/50 leading-relaxed max-w-sm">
              20년 경력의 노하우로 자연스러운 스타일링을 선사합니다.
              관양시장에서 만나요.
            </p>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              <a
                href={NAVER_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#03C75A] hover:text-white transition-all"
                aria-label="네이버 플레이스"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#FEE500] hover:text-[#3C1E1E] transition-all"
                aria-label="카카오톡"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c-5.523 0-10 3.582-10 8 0 2.786 1.785 5.234 4.485 6.648l-.912 3.352 3.883-2.557c.822.126 1.673.193 2.544.193 5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "서비스", href: "#services" },
                { name: "소개", href: "#about" },
                { name: "후기", href: "#reviews" },
                { name: "오시는 길", href: "#location" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="tel:031-387-5117"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-lg font-medium">031-387-5117</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p>경기도 안양시 동안구 관양동</p>
                  <p>관양시장 내</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Lee Jieyn Hair. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <Link href="#" className="hover:text-white/60 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="#" className="hover:text-white/60 transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
