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
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-4 mt-4 sm:mx-6 lg:mx-8">
        <nav
          className="glass rounded-2xl border border-white/20 shadow-lg"
          aria-label="메인 네비게이션"
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <LogoSimple className="h-9 w-9 transition-transform group-hover:scale-105" color="#7c5295" />
                <div className="flex flex-col">
                  <span className="text-base font-bold text-salon-text lg:text-lg leading-tight">
                    Lee Jieyn Hair
                  </span>
                  <span className="text-[10px] tracking-wider text-salon-primary">
                    컷 & 펌 전문
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-1 lg:flex">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-salon-primary rounded-lg hover:bg-salon-primary/5"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button & Phone */}
              <div className="hidden items-center gap-3 lg:flex">
                <a
                  href="tel:031-387-5117"
                  className="flex items-center gap-2 text-sm font-medium text-salon-text hover:text-salon-primary transition-colors"
                >
                  <svg
                    className="h-4 w-4"
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
                <Link href="#location" className="btn-primary text-sm !py-2.5 !px-5">
                  예약하기
                </Link>
              </div>

              {/* Mobile Menu */}
              <MobileMenu navigation={navigation} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
