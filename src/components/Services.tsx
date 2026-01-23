const services = [
  {
    name: "자연스러운 펌",
    description: "얼굴형과 모질에 맞는 자연스러운 웨이브로 세련된 스타일을 완성합니다.",
    price: "7만원~",
    popular: true,
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    name: "볼륨펌",
    description: "뿌리부터 자연스러운 볼륨감을 주어 풍성하고 생기있는 헤어를 연출합니다.",
    price: "8만원~",
    popular: false,
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    name: "매직 셋팅",
    description: "곱슬기를 잡아주고 차분하게 정돈된 스트레이트 스타일을 만들어 드립니다.",
    price: "10만원~",
    popular: false,
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "염색 · 탈색",
    description: "트렌디한 컬러부터 자연스러운 새치 커버까지, 두피 자극 최소화 시술.",
    price: "5만원~",
    popular: false,
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    name: "커트",
    description: "얼굴형 분석 후 가장 어울리는 길이와 레이어로 완벽한 실루엣을 제안합니다.",
    price: "2만원~",
    popular: false,
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    name: "클리닉",
    description: "손상된 모발에 깊은 영양을 공급하여 건강하고 윤기있는 머릿결로 가꿔드립니다.",
    price: "3만원~",
    popular: false,
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-salon-cream to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-salon-warm to-transparent -z-10" />

      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Services</span>
          <h2 className="section-title">시술 메뉴</h2>
          <p className="section-description">
            모든 시술은 1:1 상담 후 고객님께 맞춤 시술해 드립니다
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.name}
              className="group relative card border border-gray-100/80 hover:border-salon-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 right-6">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-salon-primary to-salon-light px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    인기
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-salon-cream to-salon-warm text-salon-primary transition-all duration-300 group-hover:from-salon-primary group-hover:to-salon-light group-hover:text-white group-hover:shadow-lg group-hover:shadow-salon-primary/25">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg font-bold text-salon-text">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {service.description}
              </p>

              {/* Price */}
              <div className="mt-5 flex items-baseline gap-1 pt-4 border-t border-gray-100">
                <span className="text-2xl font-bold text-salon-primary">
                  {service.price}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-gray-500 bg-salon-cream/50 px-4 py-2 rounded-full">
            <svg className="h-4 w-4 text-salon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            기장, 모량, 시술 난이도에 따라 가격이 변동될 수 있습니다
          </p>
        </div>
      </div>
    </section>
  );
}
