import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export function Location() {
  return (
    <section id="location" className="py-24 sm:py-32 bg-[#fafafa] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-salon-cream to-transparent" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-salon-primary tracking-[0.2em] uppercase">
              Location
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-salon-text tracking-tight">
              오시는 길
            </h2>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map Area */}
          <ScrollReveal className="lg:col-span-3" direction="left">
            <div className="h-full min-h-[400px] lg:min-h-[500px] rounded-3xl bg-gradient-to-br from-salon-warm via-white to-salon-cream overflow-hidden relative group">
              {/* Placeholder Map Design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Animated Location Pin */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-salon-primary/20 animate-ping" />
                    <div className="relative w-24 h-24 mx-auto rounded-full flex items-center justify-center shadow-2xl" style={{ background: 'linear-gradient(to bottom right, #7c5295, #5a3d6e)' }}>
                      <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-salon-text">Lee Jieyn Hair</h3>
                  <p className="mt-2 text-gray-500">관양시장 내</p>

                  <a
                    href="https://map.naver.com/p/search/%EC%9D%B4%EC%A7%80%EC%9D%80%ED%97%A4%EC%96%B4%ED%8E%8C?c=15.15,0,0,0,dh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-salon-text shadow-lg hover:shadow-xl transition-all group-hover:scale-105"
                  >
                    <svg className="h-4 w-4 text-[#03C75A]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                    </svg>
                    네이버 지도에서 보기
                  </a>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute top-10 left-10 w-20 h-20 border border-salon-primary/10 rounded-full" />
              <div className="absolute bottom-10 right-10 w-32 h-32 border border-salon-primary/10 rounded-full" />
            </div>
          </ScrollReveal>

          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Address */}
            <ScrollReveal direction="right" delay={0}>
              <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex gap-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-2xl bg-salon-cream flex items-center justify-center text-salon-primary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Address</p>
                    <p className="mt-1 font-medium text-salon-text">
                      경기도 안양시 동안구 관양동
                    </p>
                    <p className="text-gray-500">관양시장 내</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Phone */}
            <ScrollReveal direction="right" delay={100}>
              <a
                href="tel:031-387-5117"
                className="block rounded-3xl p-6 text-white group hover:scale-[1.02] transition-transform"
                style={{ background: 'linear-gradient(to bottom right, #7c5295, #5a3d6e)' }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex-shrink-0 rounded-2xl bg-white/10 flex items-center justify-center">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 uppercase tracking-wide">Phone</p>
                      <p className="mt-1 text-2xl font-bold">031-387-5117</p>
                    </div>
                  </div>
                  <svg className="h-6 w-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>

            {/* Hours */}
            <ScrollReveal direction="right" delay={200}>
              <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex gap-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-2xl bg-salon-cream flex items-center justify-center text-salon-primary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Hours</p>
                    <div className="mt-2 space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">월 - 금</span>
                        <span className="font-medium text-salon-text">10:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">토요일</span>
                        <span className="font-medium text-salon-text">10:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">일요일</span>
                        <span className="font-medium text-red-500">휴무</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Parking Info */}
            <ScrollReveal direction="right" delay={300}>
              <div className="rounded-2xl bg-salon-warm/50 p-4 flex items-center gap-3">
                <svg className="h-5 w-5 text-salon-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-salon-text">주차 안내</span> · 관양시장 공영주차장 (도보 2분)
                </p>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal direction="right" delay={400}>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:031-387-5117"
                  className="flex items-center justify-center gap-2 rounded-2xl py-4 text-white font-medium transition-colors"
                  style={{ backgroundColor: '#3d2a4d' }}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  전화
                </a>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 py-4 text-salon-text font-medium hover:bg-salon-cream transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  카톡
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
