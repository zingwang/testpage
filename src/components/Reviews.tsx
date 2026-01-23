"use client";

import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";

const NAVER_PLACE_URL = "https://map.naver.com/p/search/%EC%9D%B4%EC%A7%80%EC%9D%80%ED%97%A4%EC%96%B4%ED%8E%8C/place/1249725075?placePath=/review";

const reviews = [
  {
    id: 1,
    content:
      "컷트 + 자연스러운 펌 받았어요. 58번째 방문인데 매번 만족합니다! 원장님이 제 머리 스타일을 너무 잘 아셔서 말 안해도 딱 원하는 대로 해주세요.",
    author: "소비천재제이",
    visitCount: "58번째 방문",
    service: "컷트 + 자연스러운펌",
    highlight: true,
  },
  {
    id: 2,
    content:
      "염색이 잘 되었어요! 원하는 스타일로 잘해줘요. 57번째 방문인데 항상 결과물이 만족스러워서 계속 다니게 됩니다.",
    author: "viv****",
    visitCount: "57번째 방문",
    service: "염색",
    highlight: false,
  },
  {
    id: 3,
    content:
      "언제나 신경써서 예쁘게 만져 주시는 원장님 짱!!~~~ 손님 한 분 한 분 정성껏 해주셔서 늘 감사해요.",
    author: "viv****",
    visitCount: "단골 고객",
    service: "헤어 시술",
    highlight: false,
  },
  {
    id: 4,
    content:
      "관양시장 오시면 꼭 여기 가보세요! 20년 넘게 한자리에서 하신 실력이 확실히 다릅니다. 자연스러운 펌 전문이라 억지스럽지 않아요.",
    author: "리뷰수확제이",
    visitCount: "재방문",
    service: "자연스러운펌",
    highlight: false,
  },
];

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-salon-cream to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-salon-warm to-transparent" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <span className="text-sm font-medium text-salon-primary tracking-[0.2em] uppercase">
                  Reviews
                </span>
                <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-salon-text tracking-tight">
                  고객 후기
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-500">
                  <span className="text-3xl font-bold text-salon-primary">50+</span>
                  <span className="ml-2">회 이상 재방문 고객</span>
                </p>
                {/* Navigation Arrows */}
                <div className="hidden sm:flex gap-2 ml-8">
                  <button
                    onClick={() => scroll("left")}
                    className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-salon-primary hover:border-salon-primary hover:text-white transition-all"
                    aria-label="이전"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-salon-primary hover:border-salon-primary hover:text-white transition-all"
                    aria-label="다음"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontal Scroll Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-8 lg:px-[calc((100vw-72rem)/2+2rem)] pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`flex-shrink-0 w-[85vw] sm:w-[400px] snap-start ${
                review.highlight ? "sm:w-[500px]" : ""
              }`}
            >
              <ScrollReveal delay={index * 100}>
                <div
                  className={`h-full rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
                    review.highlight
                      ? "text-white"
                      : "bg-white border border-gray-100 hover:shadow-xl"
                  }`}
                  style={review.highlight ? { background: 'linear-gradient(to bottom right, #7c5295, #5a3d6e, #3d2352)' } : undefined}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${review.highlight ? "text-yellow-300" : "text-yellow-400"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote>
                    <p
                      className={`text-lg leading-relaxed ${
                        review.highlight ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </blockquote>

                  {/* Service Tag */}
                  <div className="mt-6">
                    <span
                      className={`inline-block rounded-full px-4 py-1.5 text-sm font-medium ${
                        review.highlight
                          ? "bg-white/10 text-white/80"
                          : "bg-salon-cream text-salon-text"
                      }`}
                    >
                      {review.service}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${
                          review.highlight
                            ? "bg-white/20 text-white"
                            : "bg-salon-cream text-salon-primary"
                        }`}
                      >
                        {review.author.charAt(0)}
                      </div>
                      <span className={review.highlight ? "text-white" : "text-salon-text"}>
                        {review.author}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        review.highlight ? "text-white/60" : "text-green-600"
                      }`}
                    >
                      {review.visitCount}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="container-custom mt-12">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="text-gray-500">네이버 플레이스에서 더 많은 후기 확인</p>
              <a
                href={NAVER_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#03C75A] px-6 py-3 text-white font-medium hover:bg-[#02b351] transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                </svg>
                네이버 후기
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
