const reviews = [
  {
    id: 1,
    content:
      "컷트 + 자연스러운 펌 받았어요. 58번째 방문인데 매번 만족합니다! 원장님이 제 머리 스타일을 너무 잘 아셔서 말 안해도 딱 원하는 대로 해주세요.",
    author: "소비천재제이",
    visitCount: "58번째 방문",
    visitDate: "2025.10.11",
    service: "컷트 + 자연스러운펌",
    rating: 5,
    badge: "리뷰왕",
  },
  {
    id: 2,
    content:
      "염색이 잘 되었어요! 원하는 스타일로 잘해줘요. 57번째 방문인데 항상 결과물이 만족스러워서 계속 다니게 됩니다.",
    author: "viv****",
    visitCount: "57번째 방문",
    visitDate: "2025.09.17",
    service: "염색",
    rating: 5,
    badge: null,
  },
  {
    id: 3,
    content:
      "언제나 신경써서 예쁘게 만져 주시는 원장님 짱!!~~~ 손님 한 분 한 분 정성껏 해주셔서 늘 감사해요.",
    author: "viv****",
    visitCount: "단골 고객",
    visitDate: "2025.09",
    service: "헤어 시술",
    rating: 5,
    badge: null,
  },
  {
    id: 4,
    content:
      "관양시장 오시면 꼭 여기 가보세요! 20년 넘게 한자리에서 하신 실력이 확실히 다릅니다. 자연스러운 펌 전문이라 억지스럽지 않아요.",
    author: "리뷰수확제이",
    visitCount: "재방문",
    visitDate: "2025.10",
    service: "자연스러운펌",
    rating: 5,
    badge: "블로그 리뷰",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-gradient-to-b from-white via-salon-cream to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-salon-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-salon-light/10 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Reviews</span>
          <h2 className="section-title">고객 후기</h2>
          <p className="section-description">
            이지은헤어펌을 방문해주신 고객님들의 솔직한 후기입니다
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-sm border border-gray-100/50 hover:shadow-md hover:border-salon-primary/20 transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-salon-primary to-salon-light text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <span className="text-2xl font-bold text-salon-primary">50+</span>
              <span className="ml-1 text-sm text-gray-600">회 이상 재방문</span>
            </div>
          </div>
          <div className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-sm border border-gray-100/50 hover:shadow-md hover:border-salon-primary/20 transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-salon-primary to-salon-light text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <span className="text-2xl font-bold text-salon-primary">98%</span>
              <span className="ml-1 text-sm text-gray-600">고객 만족도</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <article
              key={review.id}
              className="group relative rounded-2xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/50 hover:border-salon-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-salon-primary/5 via-transparent to-salon-light/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Badge */}
              {review.badge && (
                <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-salon-primary to-salon-light px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  {review.badge}
                </span>
              )}

              {/* Rating */}
              <div className="relative flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400 drop-shadow-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="relative mt-4">
                <p className="text-gray-700 leading-relaxed text-base">&ldquo;{review.content}&rdquo;</p>
              </blockquote>

              {/* Service Tag */}
              <div className="relative mt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-salon-warm px-3 py-1.5 text-xs font-medium text-salon-text">
                  <svg className="h-3 w-3 text-salon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {review.service}
                </span>
              </div>

              {/* Author */}
              <div className="relative mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-salon-cream to-salon-warm text-salon-primary font-bold text-lg">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-salon-text">{review.author}</p>
                    <p className="text-sm text-gray-400">{review.visitDate}</p>
                  </div>
                </div>
                <span className="rounded-full bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-1.5 text-xs font-semibold text-green-700 border border-green-100">
                  {review.visitCount}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* More Reviews CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-5">
            네이버 플레이스에서 더 많은 후기를 확인하세요
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#03C75A] px-7 py-4 text-white font-semibold hover:bg-[#02b351] transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
            </svg>
            네이버 후기 더보기
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
