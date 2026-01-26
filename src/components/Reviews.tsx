const NAVER_PLACE_URL = "https://map.naver.com/p/search/%EC%9D%B4%EC%A7%80%EC%9D%80%ED%97%A4%EC%96%B4%ED%8E%8C/place/1249725075?placePath=/review";

const reviews = [
  {
    id: 1,
    content: "이번에도 믿고 방문한 이지은 헤어펌에서 컷트 후 자연스러운 펌 시술을 받았어요. 지난 방문에 이어 이번에도 세심한 상담과 꼼꼼한 시술 덕분에 편안하게 맡길 수 있었습니다. 원장님께서 제 모발 상태를 꼼꼼히 체크해주시고, 손상 없이 자연스러운 웨이브가 나오도록 신경 써주셨어요. 관양동에서 믿고 방문할 미용실을 찾고 있다면 강력 추천드립니다!",
    author: "소비천재제이",
    visitCount: "단골 고객",
    service: "컷트 + 펌",
  },
  {
    id: 2,
    content: "모발 손상이 안되도록 세심한 배려 감사합니다. 이쁘게 만들어 주셔서 좋아요! 원하는 스타일로 잘해주시고, 트렌디하면서도 고급스러운 느낌으로 완성해주셨어요. 염색 후에도 머릿결이 부드럽고 윤기가 나서 정말 만족스럽습니다. 다음에도 또 방문할게요!",
    author: "viv****",
    visitCount: "62번째 방문",
    service: "염색",
  },
  {
    id: 3,
    content: "집 근처에서 머리를 정리하려고 방문했는데, 원장님이 세심한 상담을 통해 내 얼굴형과 스타일에 맞는 헤어를 추천해 주셔서 만족스러웠어요. 단순한 커트가 아니라, 어떤 스타일이 잘 어울릴지 세심하게 제안해 주시는 점이 인상적이었고, 친절한 서비스 덕분에 편안하게 머리를 맡길 수 있었습니다. 관양동에서 믿고 방문할 미용실을 찾고 있다면 추천드립니다!",
    author: "인사이트박스",
    visitCount: "단골 고객",
    service: "컷트 + 스타일링",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            고객 후기
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500">
            <span className="text-xl sm:text-2xl font-bold text-black">50+</span>회 이상 재방문 고객
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200"
            >
              {/* Rating */}
              <div className="flex gap-0.5 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                &ldquo;{review.content}&rdquo;
              </p>

              {/* Service Tag */}
              <span className="inline-block mt-3 sm:mt-4 bg-gray-100 text-gray-600 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                {review.service}
              </span>

              {/* Author */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] sm:text-xs font-bold text-gray-500">
                    {review.author.charAt(0)}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700">{review.author}</span>
                </div>
                <span className="text-[10px] sm:text-xs text-green-600 font-medium">{review.visitCount}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href={NAVER_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#03C75A] px-4 sm:px-5 py-2 sm:py-2.5 text-white text-xs sm:text-sm font-medium hover:bg-[#02b351] transition-colors"
          >
            <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
            </svg>
            네이버에서 더 많은 후기 보기
          </a>
        </div>
      </div>
    </section>
  );
}
