import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    name: "자연스러운 펌",
    nameEn: "Natural Perm",
    description: "얼굴형과 모질에 맞는 자연스러운 웨이브",
    price: "7만원~",
    featured: true,
    size: "large",
  },
  {
    name: "볼륨펌",
    nameEn: "Volume Perm",
    description: "뿌리부터 풍성한 볼륨감",
    price: "8만원~",
    featured: false,
    size: "small",
  },
  {
    name: "매직 셋팅",
    nameEn: "Magic Setting",
    description: "차분하게 정돈된 스트레이트",
    price: "10만원~",
    featured: false,
    size: "small",
  },
  {
    name: "염색 · 탈색",
    nameEn: "Color & Bleach",
    description: "트렌디한 컬러, 두피 자극 최소화",
    price: "5만원~",
    featured: false,
    size: "medium",
  },
  {
    name: "커트",
    nameEn: "Cut",
    description: "얼굴형 분석 후 맞춤 스타일링",
    price: "2만원~",
    featured: false,
    size: "small",
  },
  {
    name: "클리닉",
    nameEn: "Clinic",
    description: "손상 모발 집중 케어",
    price: "3만원~",
    featured: false,
    size: "small",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#fafafa] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-salon-cream to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-salon-warm to-transparent" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="text-sm font-medium text-salon-primary tracking-[0.2em] uppercase">
                Services
              </span>
              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-salon-text tracking-tight">
                시술 메뉴
              </h2>
            </div>
            <p className="text-lg text-gray-500 lg:max-w-md lg:text-right">
              모든 시술은 1:1 상담 후<br className="hidden sm:block" />
              고객님께 맞춤 시술해 드립니다
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Large Featured Card */}
          <ScrollReveal className="col-span-2 row-span-2" delay={0}>
            <div className="group h-full min-h-[400px] relative rounded-3xl p-8 sm:p-10 overflow-hidden transition-transform duration-500 hover:scale-[1.02]" style={{ background: 'linear-gradient(to bottom right, #7c5295, #5a3d6e, #3d2352)' }}>
              {/* Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 border border-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 border border-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative h-full flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-salon-primary shadow-lg">
                    <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Most Popular
                  </span>
                  <h3 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
                    {services[0].name}
                  </h3>
                  <p className="mt-1 text-lg text-white/50">{services[0].nameEn}</p>
                  <p className="mt-4 text-white/70 leading-relaxed max-w-sm">
                    {services[0].description}. 타고난 것처럼 자연스럽게 떨어지는 웨이브로 세련된 스타일을 완성합니다.
                  </p>
                </div>
                <div className="mt-8 flex items-end justify-between">
                  <p className="text-4xl sm:text-5xl font-bold text-white">{services[0].price}</p>
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Medium Card */}
          <ScrollReveal className="col-span-2" delay={100}>
            <div className="group h-full min-h-[180px] relative rounded-3xl bg-white border border-gray-100 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-salon-primary/5 hover:border-salon-primary/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 h-full">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-salon-text">{services[3].name}</h3>
                  <p className="text-sm text-gray-400">{services[3].nameEn}</p>
                  <p className="mt-2 text-gray-500">{services[3].description}</p>
                </div>
                <p className="text-3xl font-bold text-salon-primary whitespace-nowrap">{services[3].price}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Small Cards */}
          {services.slice(1, 3).map((service, index) => (
            <ScrollReveal key={service.name} className="col-span-1" delay={150 + index * 50}>
              <div className="group h-full min-h-[180px] relative rounded-3xl bg-white border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-salon-primary/5 hover:border-salon-primary/20">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg font-bold text-salon-text">{service.name}</h3>
                    <p className="text-xs text-gray-400">{service.nameEn}</p>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">{service.description}</p>
                  </div>
                  <p className="mt-4 text-2xl font-bold text-salon-primary">{service.price}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Bottom Small Cards */}
          {services.slice(4).map((service, index) => (
            <ScrollReveal key={service.name} className="col-span-1" delay={250 + index * 50}>
              <div className="group h-full min-h-[180px] relative rounded-3xl bg-white border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-salon-primary/5 hover:border-salon-primary/20">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg font-bold text-salon-text">{service.name}</h3>
                    <p className="text-xs text-gray-400">{service.nameEn}</p>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">{service.description}</p>
                  </div>
                  <p className="mt-4 text-2xl font-bold text-salon-primary">{service.price}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <p className="inline-flex items-center gap-2 text-sm text-gray-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              기장, 모량, 시술 난이도에 따라 가격이 변동될 수 있습니다
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
