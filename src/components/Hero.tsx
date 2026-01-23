import Link from "next/link";
import { Logo } from "./Logo";
import { Marquee } from "./Marquee";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 lg:pt-24">
      {/* Background - 보라색 그라데이션 */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(to bottom right, #8b5fa8, #7c5295, #4a2d5e)' }}
        aria-hidden="true"
      />

      {/* 패턴 오버레이 */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Decorative Elements */}
      <div
        className="absolute right-0 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-40 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-salon-light/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-custom flex min-h-[calc(100vh-5rem)] flex-col justify-center py-12 lg:min-h-[calc(100vh-6rem)] lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white/90">
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              관양시장 미용실 · Since 2004
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl tracking-tight">
              <span className="block">컷 & 펌 전문</span>
              <span className="mt-2 block bg-gradient-to-r from-white via-salon-cream to-white/80 bg-clip-text text-transparent">
                Lee Jieyn Hair
              </span>
            </h1>

            {/* Korean Name */}
            <p className="mt-4 text-xl text-white/60 tracking-wide lg:text-2xl">
              이지은헤어
            </p>

            {/* Subheadline */}
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg lg:max-w-md">
              20년 경력의 노하우로 고객님의 얼굴형과 모질에 맞는
              <strong className="text-white font-medium"> 자연스러운 스타일링</strong>을 제공합니다.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["자연스러운 펌", "손상 최소화", "오래 유지"].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white/90 border border-white/10"
                >
                  <svg
                    className="h-4 w-4 text-salon-cream"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="tel:031-387-5117"
                className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-salon-primary transition-all duration-300 hover:bg-salon-cream hover:shadow-2xl hover:shadow-white/20 hover:scale-105 w-full sm:w-auto"
              >
                <svg
                  className="mr-2.5 h-5 w-5"
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
                href="#services"
                className="group inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10 w-full sm:w-auto"
              >
                시술 메뉴 보기
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Logo Visual */}
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl scale-75" />

            {/* Main Logo Circle */}
            <div className="relative aspect-square p-6 sm:p-8">
              {/* Outer Ring - animated */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-[spin_30s_linear_infinite]" />

              {/* Second Ring */}
              <div className="absolute inset-4 sm:inset-6 rounded-full border border-white/10" />

              {/* Main Circle */}
              <div className="absolute inset-10 sm:inset-14 rounded-full bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-sm flex items-center justify-center shadow-2xl">
                <div className="animate-float">
                  <Logo className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40" color="white" />
                </div>
              </div>

              {/* Floating Card - 경력 */}
              <div className="absolute bottom-4 left-0 sm:bottom-6 glass rounded-2xl p-3 sm:p-4 shadow-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-salon-primary/20">
                    <svg
                      className="h-5 w-5 sm:h-6 sm:w-6 text-salon-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-salon-text">20+</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">년 경력</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - 재방문 */}
              <div className="absolute right-0 top-8 sm:top-12 glass rounded-2xl p-3 sm:p-4 shadow-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1.5">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-white bg-gradient-to-br from-salon-light to-salon-primary"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-bold text-salon-text">50회+</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">재방문 단골</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-white/5 backdrop-blur-sm py-4">
        <Marquee speed={30} className="text-white/40">
          <span className="mx-8 text-sm sm:text-base font-light tracking-wide">자연스러운 펌</span>
          <span className="mx-3 text-white/20">✦</span>
          <span className="mx-8 text-sm sm:text-base font-light tracking-wide">볼륨펌</span>
          <span className="mx-3 text-white/20">✦</span>
          <span className="mx-8 text-sm sm:text-base font-light tracking-wide">매직 셋팅</span>
          <span className="mx-3 text-white/20">✦</span>
          <span className="mx-8 text-sm sm:text-base font-light tracking-wide">염색 · 탈색</span>
          <span className="mx-3 text-white/20">✦</span>
          <span className="mx-8 text-sm sm:text-base font-light tracking-wide">커트</span>
          <span className="mx-3 text-white/20">✦</span>
          <span className="mx-8 text-sm sm:text-base font-light tracking-wide">클리닉</span>
          <span className="mx-3 text-white/20">✦</span>
        </Marquee>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
          <div className="h-2 w-2 rounded-full bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}
