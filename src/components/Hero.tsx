import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 bg-black">
      <div className="container-custom flex min-h-[calc(100vh-5rem)] flex-col justify-center py-16">
        <div className="max-w-2xl mx-auto text-center lg:mx-0 lg:text-left">
          <p className="text-sm text-white/50 mb-3">관양시장 · Since 2004</p>

          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            컷 & 펌 전문
          </h1>
          <p className="mt-2 text-2xl font-semibold text-white/90 sm:text-3xl lg:text-4xl">
            Lee Jieyn Hair
          </p>
          <p className="mt-1 text-base text-white/40 lg:text-lg">이지은헤어</p>

          <p className="mt-6 text-white/60 leading-relaxed max-w-md mx-auto lg:mx-0 lg:text-lg">
            20년 경력의 노하우로 고객님의 얼굴형과 모질에 맞는
            자연스러운 스타일링을 제공합니다.
          </p>

          {/* 특징 */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {["자연스러운 펌", "손상 최소화", "오래 유지"].map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 rounded border border-white/20 px-3 py-1.5 text-sm text-white/70"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 flex justify-center gap-8 lg:justify-start">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">20+</p>
              <p className="text-sm text-white/50">년 경력</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-white/50">재방문 단골</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="tel:031-387-5117"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              031-387-5117
            </a>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              시술 메뉴 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
