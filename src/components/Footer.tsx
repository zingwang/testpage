import Link from "next/link";

const NAVER_PLACE_URL = "https://map.naver.com/p/search/%EC%9D%B4%EC%A7%80%EC%9D%80%ED%97%A4%EC%96%B4%ED%8E%8C/place/1249725075?placePath=/review";

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-lg font-bold text-white">Lee Jieyn Hair</span>
              <span className="block text-xs text-gray-400">이지은헤어 · 컷 & 펌 전문</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              20년 경력의 노하우로 자연스러운 스타일링을 선사합니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-4">바로가기</h3>
            <ul className="space-y-2">
              {[
                { name: "시술 메뉴", href: "#services" },
                { name: "소개", href: "#about" },
                { name: "후기", href: "#reviews" },
                { name: "오시는 길", href: "#location" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-4">연락처</h3>
            <div className="space-y-3">
              <a href="tel:031-387-5117" className="flex items-center gap-2 text-white font-medium hover:text-white transition-colors">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                031-387-5117
              </a>
              <p className="text-sm text-gray-400">
                경기도 안양시 동안구 관양동<br />
                관양시장 내
              </p>
              <a
                href={NAVER_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#03C75A] hover:underline"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                </svg>
                네이버 플레이스
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Lee Jieyn Hair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
