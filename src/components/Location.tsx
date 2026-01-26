const NAVER_MAP_URL = "https://map.naver.com/p/search/%EC%9D%B4%EC%A7%80%EC%9D%80%ED%97%A4%EC%96%B4%ED%8E%8C?c=15.15,0,0,0,dh";

export function Location() {
  return (
    <section id="location" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            오시는 길
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Map Placeholder */}
          <div className="rounded-xl bg-gray-100 min-h-[200px] sm:min-h-[300px] flex items-center justify-center">
            <div className="text-center p-6 sm:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-black flex items-center justify-center mb-3 sm:mb-4">
                <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="font-bold text-gray-900 text-base sm:text-lg">Lee Jieyn Hair</p>
              <p className="text-gray-500 text-sm mt-1">관양동</p>
              <a
                href={NAVER_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 sm:mt-4 text-xs sm:text-sm text-[#03C75A] font-medium hover:underline"
              >
                <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                </svg>
                네이버 지도에서 보기
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-3 sm:space-y-4">
            {/* Address */}
            <div className="rounded-xl bg-gray-50 p-4 sm:p-5">
              <div className="flex gap-3 sm:gap-4">
                <div className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 rounded-lg bg-white flex items-center justify-center text-black">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-400 uppercase">주소</p>
                  <p className="mt-0.5 sm:mt-1 text-sm sm:text-base font-medium text-gray-900">경기도 안양시 동안구 관양동</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:010-9800-7160"
              className="block rounded-xl p-4 sm:p-5 text-white bg-black"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-3 sm:gap-4">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 rounded-lg bg-white/10 flex items-center justify-center">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-white/60 uppercase">전화</p>
                    <p className="mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">010-9800-7160</p>
                  </div>
                </div>
                <svg className="h-4 w-4 sm:h-5 sm:w-5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Hours */}
            <div className="rounded-xl bg-gray-50 p-4 sm:p-5">
              <div className="flex gap-3 sm:gap-4">
                <div className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 rounded-lg bg-white flex items-center justify-center text-black">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] sm:text-xs text-gray-400 uppercase">영업시간</p>
                  <div className="mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">월 - 금</span>
                      <span className="font-medium text-gray-900">10:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">토요일</span>
                      <span className="font-medium text-gray-900">10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">일요일</span>
                      <span className="font-medium text-red-500">휴무</span>
                    </div>
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
