const serviceCategories = [
  {
    category: "Cut",
    name: "커트",
    popular: false,
    items: [
      { name: "남성컷", price: "14,000" },
      { name: "여성컷", price: "15,000" },
      { name: "디자인컷", price: "20,000" },
      { name: "주니어", price: "13,000" },
    ],
  },
  {
    category: "Perm",
    name: "펌",
    note: "Short 기준",
    popular: true,
    items: [
      { name: "디자인펌", price: "45,000" },
      { name: "드라이펌", price: "50,000" },
      { name: "매직펌", price: "100,000" },
      { name: "코팅펌 추가", price: "+10,000" },
    ],
  },
  {
    category: "Color",
    name: "염색",
    note: "Short 기준",
    popular: false,
    items: [
      { name: "염색(뿌리)", price: "33,000" },
      { name: "염색(뿌리)+컷", price: "42,000" },
      { name: "매니큐어 · 왁싱", price: "50,000" },
      { name: "앰플 추가", price: "+10,000" },
    ],
  },
  {
    category: "Dry & Up Style",
    name: "드라이 · 업스타일",
    popular: false,
    items: [
      { name: "드라이", price: "15,000" },
      { name: "업스타일", price: "50,000" },
      { name: "샴푸", price: "10,000" },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-100">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            시술 메뉴
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500">
            모든 시술은 1:1 상담 후 고객님께 맞춤 시술해 드립니다
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
          {serviceCategories.map((cat) => (
            <div
              key={cat.category}
              className={`relative rounded-xl p-4 sm:p-6 transition-shadow hover:shadow-md ${
                cat.popular
                  ? "bg-black text-white"
                  : "bg-white border border-gray-200"
              }`}
            >
              {cat.popular && (
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/20 text-white text-[10px] sm:text-xs font-medium px-2 py-0.5 sm:py-1 rounded">
                  인기
                </span>
              )}
              <div className="flex items-baseline gap-2">
                <h3 className={`text-sm sm:text-lg font-bold ${cat.popular ? "text-white" : "text-gray-900"}`}>
                  {cat.name}
                </h3>
                <span className={`text-[10px] sm:text-xs ${cat.popular ? "text-white/40" : "text-gray-400"}`}>
                  {cat.category}
                </span>
              </div>
              {cat.note && (
                <p className={`mt-0.5 text-[10px] sm:text-xs ${cat.popular ? "text-white/50" : "text-gray-400"}`}>
                  {cat.note}
                </p>
              )}

              <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className={`text-xs sm:text-sm ${cat.popular ? "text-white/80" : "text-gray-600"}`}>
                      {item.name}
                    </span>
                    <span className={`text-xs sm:text-sm font-semibold ${cat.popular ? "text-white" : "text-gray-900"}`}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-400">
          * 상기 가격은 기본 가격으로 상담 후 최종 가격이 결정됩니다
        </p>
      </div>
    </section>
  );
}
