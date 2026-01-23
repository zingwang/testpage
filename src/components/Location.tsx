import Link from "next/link";

export function Location() {
  const businessHours = [
    { day: "월 - 금", hours: "10:00 - 20:00" },
    { day: "토요일", hours: "10:00 - 18:00" },
    { day: "일요일", hours: "휴무" },
  ];

  return (
    <section id="location" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-salon-cream to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-salon-warm to-transparent -z-10" />

      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Location</span>
          <h2 className="section-title">오시는 길</h2>
          <p className="section-description">
            관양시장 내에 위치해 있어 찾기 쉽습니다
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Map Placeholder */}
          <div className="group aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-salon-warm via-salon-cream to-white lg:aspect-auto lg:min-h-[480px] shadow-lg border border-gray-100/50">
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              {/* Animated pin */}
              <div className="relative mb-6">
                <div className="absolute inset-0 h-20 w-20 rounded-full bg-salon-primary/20 animate-ping" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-salon-primary to-salon-light shadow-lg">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-xl font-bold text-salon-text">Lee Jieyn Hair</p>
              <p className="mt-2 text-gray-500">
                경기도 안양시 동안구 관양동
                <br />
                관양시장 내
              </p>
              <a
                href="https://map.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-salon-primary shadow-sm border border-salon-primary/20 hover:bg-salon-primary hover:text-white transition-all duration-300"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                </svg>
                네이버 지도에서 보기
                <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            {/* Address Card */}
            <div className="rounded-3xl bg-gradient-to-br from-salon-cream via-white to-salon-warm p-8 sm:p-10 shadow-lg border border-gray-100/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-salon-primary to-salon-light text-white shadow-lg">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-salon-text">
                    Lee Jieyn Hair
                  </h3>
                  <p className="text-salon-primary font-medium">컷 & 펌 전문 · 이지은헤어</p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Address Detail */}
                <div className="flex gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-salon-cream text-salon-primary">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-salon-text">주소</p>
                    <p className="mt-1 text-gray-600">
                      경기도 안양시 동안구 관양동 관양시장 내
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-salon-cream text-salon-primary">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-salon-text">전화번호</p>
                    <a
                      href="tel:031-387-5117"
                      className="mt-1 inline-flex items-center gap-2 text-xl font-bold text-salon-primary hover:text-salon-dark transition-colors"
                    >
                      031-387-5117
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-salon-cream text-salon-primary">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-salon-text">영업시간</p>
                    <div className="mt-2 space-y-1.5">
                      {businessHours.map((item) => (
                        <div
                          key={item.day}
                          className="flex justify-between gap-8 text-gray-600"
                        >
                          <span className="font-medium">{item.day}</span>
                          <span className={item.hours === "휴무" ? "text-red-500 font-medium" : ""}>
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="tel:031-387-5117" className="btn-primary flex-1 justify-center text-base">
                  <svg
                    className="mr-2.5 h-5 w-5"
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
                  전화 예약
                </a>
                <Link href="#" className="btn-outline flex-1 justify-center text-base">
                  <svg
                    className="mr-2.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  카카오톡 문의
                </Link>
              </div>
            </div>

            {/* Parking Info */}
            <div className="mt-5 rounded-2xl bg-gradient-to-r from-salon-warm to-salon-cream p-5 border border-salon-primary/10">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-salon-primary shadow-sm">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-salon-text">주차 안내</p>
                  <p className="mt-1 text-gray-600">
                    관양시장 공영주차장 이용 가능 (도보 2분)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
