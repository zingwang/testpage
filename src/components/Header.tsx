import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { LogoSimple } from "./Logo";

const navigation = [
  { name: "홈", href: "#" },
  { name: "서비스", href: "#services" },
  { name: "소개", href: "#about" },
  { name: "후기", href: "#reviews" },
  { name: "오시는 길", href: "#location" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-salon-light/30 bg-white/95 backdrop-blur-md">
      <nav className="container-custom" aria-label="메인 네비게이션">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <LogoSimple className="h-10 w-10 lg:h-12 lg:w-12" color="#7c5295" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-salon-text lg:text-xl">
                Lee Jieyn Hair
              </span>
              <span className="text-[10px] tracking-wider text-salon-primary lg:text-xs">
                컷 & 펌 전문
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-salon-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Phone */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:031-387-5117"
              className="flex items-center gap-2 text-sm font-medium text-salon-text"
            >
              <svg
                className="h-4 w-4 text-salon-primary"
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
            <Link href="#location" className="btn-primary text-sm">
              예약하기
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu navigation={navigation} />
        </div>
      </nav>
    </header>
  );
}
