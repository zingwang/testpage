const services = [
  {
    name: "자연스러운 펌",
    description: "얼굴형과 모질에 맞는 자연스러운 웨이브로 세련된 스타일을 완성합니다.",
    price: "7만원~",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    name: "볼륨펌",
    description: "뿌리부터 자연스러운 볼륨감을 주어 풍성하고 생기있는 헤어를 연출합니다.",
    price: "8만원~",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    name: "매직 셋팅",
    description: "곱슬기를 잡아주고 차분하게 정돈된 스트레이트 스타일을 만들어 드립니다.",
    price: "10만원~",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "염색 · 탈색",
    description: "트렌디한 컬러부터 자연스러운 새치 커버까지, 두피 자극 최소화 시술.",
    price: "5만원~",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    name: "커트",
    description: "얼굴형 분석 후 가장 어울리는 길이와 레이어로 완벽한 실루엣을 제안합니다.",
    price: "2만원~",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    name: "클리닉 · 트리트먼트",
    description: "손상된 모발에 깊은 영양을 공급하여 건강하고 윤기있는 머릿결로 가꿔드립니다.",
    price: "3만원~",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-salon-primary">
            Services
          </span>
          <h2 className="mt-2 text-3xl font-bold text-salon-text sm:text-4xl">
            시술 메뉴
          </h2>
          <p className="mt-4 text-gray-600">
            모든 시술은 1:1 상담 후 고객님께 맞춤 시술해 드립니다.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="group relative rounded-2xl border border-salon-light/50 bg-white p-6 transition-all hover:border-salon-primary/30 hover:shadow-lg sm:p-8"
            >
              {/* Icon */}
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-salon-cream text-salon-primary transition-colors group-hover:bg-salon-primary group-hover:text-white">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="mt-4 text-xl font-semibold text-salon-text">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-salon-primary">
                  {service.price}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-sm text-gray-500">
          * 기장, 모량, 시술 난이도에 따라 가격이 변동될 수 있습니다.
          <br />
          정확한 가격은 방문 상담 시 안내해 드립니다.
        </p>
      </div>
    </section>
  );
}
