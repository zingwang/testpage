import Link from "next/link";

export function Location() {
  const businessHours = [
    { day: "월 - 금", hours: "10:00 - 20:00" },
    { day: "토요일", hours: "10:00 - 18:00" },
    { day: "일요일", hours: "휴무" },
  ];

  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-salon-primary">
            Location
          </span>
          <h2 className="mt-2 text-3xl font-bold text-salon-text sm:text-4xl">
            오시는 길
          </h2>
          <p className="mt-4 text-gray-600">
            관양시장 내에 위치해 있어 찾기 쉽습니다.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Map Placeholder */}
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-salon-warm lg:aspect-auto lg:min-h-[400px]">
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <div className="mb-4 h-16 w-16 rounded-full bg-salon-primary/20 flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-salon-primary"
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
              <p className="text-lg font-medium text-salon-text">지도 영역</p>
              <p className="mt-2 text-sm text-gray-500">
                네이버/카카오 지도 임베드
              </p>
              <a
                href="https://map.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-4 text-sm"
              >
                네이버 지도에서 보기
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            {/* Address */}
            <div className="rounded-2xl bg-salon-cream p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-salon-text">
                Lee Jieyn Hair · 이지은헤어
              </h3>
              <p className="mt-1 text-sm text-salon-primary">컷 & 펌 전문</p>

              <div className="mt-6 space-y-4">
                {/* Address Detail */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-salon-primary">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-salon-text">주소</p>
                    <p className="mt-1 text-gray-600">
                      경기도 안양시 동안구 관양동 관양시장 내
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-salon-primary">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-salon-text">전화번호</p>
                    <a
                      href="tel:031-387-5117"
                      className="mt-1 text-lg font-semibold text-salon-primary hover:underline"
                    >
                      031-387-5117
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-salon-primary">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-salon-text">영업시간</p>
                    <div className="mt-1 space-y-1">
                      {businessHours.map((item) => (
                        <div
                          key={item.day}
                          className="flex justify-between gap-8 text-gray-600"
                        >
                          <span>{item.day}</span>
                          <span className={item.hours === "휴무" ? "text-red-500" : ""}>
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
                <a href="tel:031-387-5117" className="btn-primary flex-1 justify-center">
                  <svg
                    className="mr-2 h-5 w-5"
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
                <Link href="#" className="btn-outline flex-1 justify-center">
                  <svg
                    className="mr-2 h-5 w-5"
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
            <div className="mt-4 rounded-xl bg-salon-warm p-4 text-sm">
              <div className="flex gap-2">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-salon-primary"
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
                <div className="text-salon-text">
                  <p className="font-medium">주차 안내</p>
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
