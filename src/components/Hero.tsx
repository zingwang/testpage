"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    content: "컷트 + 자연스러운 펌 받았어요. 58번째 방문인데 매번 만족합니다!",
    author: "소비천재제이",
    visitCount: "58번째 방문",
  },
  {
    id: 2,
    content: "염색이 잘 되었어요! 원하는 스타일로 잘해줘요. 항상 만족스러워요.",
    author: "viv****",
    visitCount: "57번째 방문",
  },
  {
    id: 3,
    content: "언제나 신경써서 예쁘게 만져 주시는 원장님 짱!!~~~",
    author: "viv****",
    visitCount: "단골 고객",
  },
];

export function Hero() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-20 bg-black">
      <div className="container-custom flex min-h-[calc(100vh-5rem)] flex-col justify-center py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - Main Content */}
          <div className="text-center lg:text-left">
            <p className="text-xs sm:text-sm text-white/50 mb-2 sm:mb-3">관양시장 · Since 2004</p>

            <h1 className="text-3xl sm:text-4xl font-bold text-white lg:text-6xl">
              컷 & 펌 전문
            </h1>
            <p className="mt-1 sm:mt-2 text-xl sm:text-2xl font-semibold text-white/90 lg:text-4xl">
              Lee Jieyn Hair
            </p>
            <p className="mt-1 text-sm sm:text-base text-white/40">이지은헤어</p>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/60 leading-relaxed max-w-md mx-auto lg:mx-0 lg:text-lg">
              20년 경력의 노하우로 고객님의 얼굴형과 모질에 맞는
              자연스러운 스타일링을 제공합니다.
            </p>

            {/* 특징 - 모바일에서는 숨김 */}
            <div className="hidden sm:flex mt-6 flex-wrap justify-center gap-2 lg:justify-start">
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
            <div className="mt-6 sm:mt-8 flex justify-center gap-8 lg:justify-start">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">20+</p>
                <p className="text-xs sm:text-sm text-white/50">년 경력</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">50+</p>
                <p className="text-xs sm:text-sm text-white/50">재방문 단골</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
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

          {/* Right - Review Slider */}
          <div className="w-full">
            <div className="relative">
              {/* Review Card */}
              <div className="rounded-xl lg:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 sm:p-6 lg:p-8">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-white/50">고객 후기</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-green-400 font-medium">
                    {reviews[currentReview].visitCount}
                  </span>
                </div>

                {/* Review Content with Animation */}
                <div className="relative h-[60px] sm:h-[70px] lg:h-[80px] overflow-hidden">
                  {reviews.map((review, index) => (
                    <div
                      key={review.id}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === currentReview
                          ? "opacity-100 translate-y-0"
                          : index < currentReview
                          ? "opacity-0 -translate-y-4"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                        &ldquo;{review.content}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>

                {/* Author Info & Dots */}
                <div className="mt-4 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/10 flex items-center justify-center text-white text-sm sm:text-base font-medium">
                      {reviews[currentReview].author.charAt(0)}
                    </div>
                    <p className="text-white text-sm sm:text-base font-medium">{reviews[currentReview].author}</p>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex gap-1.5 sm:gap-2">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentReview(index)}
                        className={`h-1.5 sm:h-2 rounded-full transition-all ${
                          index === currentReview
                            ? "w-4 sm:w-6 bg-white"
                            : "w-1.5 sm:w-2 bg-white/30"
                        }`}
                        aria-label={`리뷰 ${index + 1}번 보기`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
