import Link from "next/link";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16 lg:pt-20">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-hero"
        aria-hidden="true"
      />

      {/* Decorative Elements */}
      <div
        className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-salon-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-salon-light/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-custom flex min-h-[calc(100vh-4rem)] flex-col justify-center py-12 lg:min-h-[calc(100vh-5rem)] lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-salon-primary/30 bg-white px-4 py-2 text-sm font-medium text-salon-primary shadow-sm">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-salon-primary animate-pulse" />
              관양시장 미용실
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight text-salon-text sm:text-5xl lg:text-6xl">
              <span className="text-salon-primary">컷 & 펌</span> 전문
              <br />
              Lee Jieyn Hair
            </h1>

            {/* Korean Name */}
            <p className="mt-4 text-xl text-salon-gray lg:text-2xl">
              이지은헤어
            </p>

            {/* Subheadline */}
            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              20년 경력의 노하우로 고객님의 얼굴형과 모질에 맞는
              <br className="hidden sm:block" />
              <strong className="text-salon-text">자연스러운 스타일링</strong>을 제공합니다.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              {["자연스러운 펌", "손상 최소화", "오래 유지"].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a href="tel:031-387-5117" className="btn-primary w-full sm:w-auto">
                <svg
                  className="mr-2 h-5 w-5"
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
              <Link href="#services" className="btn-outline w-full sm:w-auto">
                시술 메뉴 보기
              </Link>
            </div>
          </div>

          {/* Logo Visual */}
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Main Logo Circle */}
            <div className="relative aspect-square">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-salon-light/50 animate-[spin_20s_linear_infinite]" />

              {/* Main Circle */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-salon-cream via-white to-salon-warm shadow-2xl flex items-center justify-center">
                <div className="animate-float">
                  <Logo className="h-40 w-40 sm:h-52 sm:w-52 lg:h-64 lg:w-64" color="#7c5295" />
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 h-4 w-4 rounded-full bg-salon-primary" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 h-4 w-4 rounded-full bg-salon-light" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 h-4 w-4 rounded-full bg-salon-accent" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 h-4 w-4 rounded-full bg-salon-primary" />
            </div>

            {/* Floating Card - 경력 */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl sm:-left-8 sm:p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-salon-cream">
                  <svg
                    className="h-6 w-6 text-salon-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-salon-text">20+</p>
                  <p className="text-sm text-gray-500">년 경력</p>
                </div>
              </div>
            </div>

            {/* Floating Card - 재방문 */}
            <div className="absolute -right-4 top-8 rounded-2xl bg-white p-4 shadow-xl sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white bg-salon-light"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-salon-text">
                    50회+ 재방문
                  </p>
                  <p className="text-xs text-gray-500">단골 고객</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-salon-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
