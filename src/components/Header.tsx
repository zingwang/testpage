import Link from "next/link";

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
            <div className="flex h-14 sm:h-16 items-center justify-between">
              {/* Brand */}
              <Link href="/" className="flex flex-col">
                <span className="text-sm sm:text-base font-bold text-gray-900 lg:text-lg leading-tight">
                  Lee Jieyn Hair
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-wider text-gray-600">
                  컷 & 펌 전문
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Phone Button - Always visible */}
              <a
                href="tel:010-9800-7160"
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-900"
              >
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5"
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
                <span className="hidden sm:inline">010-9800-7160</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
