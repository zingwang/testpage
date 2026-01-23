const services = [
  {
    name: "자연스러운 펌",
    description: "얼굴형과 모질에 맞는 자연스러운 웨이브",
    price: "7만원~",
    popular: true,
  },
  {
    name: "볼륨펌",
    description: "뿌리부터 풍성한 볼륨감",
    price: "8만원~",
  },
  {
    name: "매직 셋팅",
    description: "차분하게 정돈된 스트레이트",
    price: "10만원~",
  },
  {
    name: "염색 · 탈색",
    description: "트렌디한 컬러, 두피 자극 최소화",
    price: "5만원~",
  },
  {
    name: "커트",
    description: "얼굴형 분석 후 맞춤 스타일링",
    price: "2만원~",
  },
  {
    name: "클리닉",
    description: "손상 모발 집중 케어",
    price: "3만원~",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            시술 메뉴
          </h2>
          <p className="mt-3 text-gray-500">
            모든 시술은 1:1 상담 후 고객님께 맞춤 시술해 드립니다
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative rounded-xl p-6 transition-shadow hover:shadow-md ${
                service.popular
                  ? "bg-black text-white"
                  : "bg-white border border-gray-200"
              }`}
            >
              {service.popular && (
                <span className="absolute top-4 right-4 bg-white/20 text-white text-xs font-medium px-2 py-1 rounded">
                  인기
                </span>
              )}
              <h3 className={`text-lg font-bold ${service.popular ? "text-white" : "text-gray-900"}`}>
                {service.name}
              </h3>
              <p className={`mt-2 text-sm ${service.popular ? "text-white/70" : "text-gray-500"}`}>
                {service.description}
              </p>
              <p className={`mt-4 text-2xl font-bold ${service.popular ? "text-white" : "text-gray-900"}`}>
                {service.price}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-sm text-gray-400">
          * 기장, 모량, 시술 난이도에 따라 가격이 변동될 수 있습니다
        </p>
      </div>
    </section>
  );
}
