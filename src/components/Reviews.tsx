const NAVER_PLACE_URL = "https://map.naver.com/p/search/%EC%9D%B4%EC%A7%80%EC%9D%80%ED%97%A4%EC%96%B4%ED%8E%8C/place/1249725075?placePath=/review";

const reviews = [
  {
    id: 1,
    content: "컷트 + 자연스러운 펌 받았어요. 58번째 방문인데 매번 만족합니다! 원장님이 제 머리 스타일을 너무 잘 아셔서 말 안해도 딱 원하는 대로 해주세요.",
    author: "소비천재제이",
    visitCount: "58번째 방문",
    service: "컷트 + 자연스러운펌",
  },
  {
    id: 2,
    content: "염색이 잘 되었어요! 원하는 스타일로 잘해줘요. 57번째 방문인데 항상 결과물이 만족스러워서 계속 다니게 됩니다.",
    author: "viv****",
    visitCount: "57번째 방문",
    service: "염색",
  },
  {
    id: 3,
    content: "언제나 신경써서 예쁘게 만져 주시는 원장님 짱!!~~~ 손님 한 분 한 분 정성껏 해주셔서 늘 감사해요.",
    author: "viv****",
    visitCount: "단골 고객",
    service: "헤어 시술",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            고객 후기
          </h2>
          <p className="mt-3 text-gray-500">
            <span className="text-2xl font-bold text-black">50+</span>회 이상 재방문 고객
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed">
                "{review.content}"
              </p>

              {/* Service Tag */}
              <span className="inline-block mt-4 bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                {review.service}
              </span>

              {/* Author */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                    {review.author.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-700">{review.author}</span>
                </div>
                <span className="text-xs text-green-600 font-medium">{review.visitCount}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={NAVER_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#03C75A] px-5 py-2.5 text-white text-sm font-medium hover:bg-[#02b351] transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
            </svg>
            네이버에서 더 많은 후기 보기
          </a>
        </div>
      </div>
    </section>
  );
}
