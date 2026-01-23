import { Logo } from "./Logo";

export function About() {
  const highlights = [
    { number: "20+", label: "년 경력", icon: "star" },
    { number: "10,000+", label: "시술 고객", icon: "users" },
    { number: "98%", label: "재방문율", icon: "heart" },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-salon-cream to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-salon-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-salon-light/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <div className="relative group">
            {/* Main Card */}
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-white via-salon-warm to-salon-cream shadow-xl flex items-center justify-center relative">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-salon-primary/5 via-transparent to-salon-light/10" />

              <div className="text-center p-8 relative z-10">
                <div className="animate-float">
                  <Logo className="h-36 w-36 mx-auto mb-8 drop-shadow-lg" color="#7c5295" />
                </div>
                <p className="text-3xl font-bold text-salon-text">Lee Jieyn Hair</p>
                <p className="mt-3 text-lg text-salon-primary font-medium">컷 & 펌 전문</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-gray-600">원장 이지은</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-salon-primary/20 to-salon-light/10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-3xl border-2 border-dashed border-salon-primary/20" />
          </div>

          {/* Content Side */}
          <div>
            <span className="section-label">About</span>
            <h2 className="mt-2 text-3xl font-bold text-salon-text sm:text-4xl lg:text-5xl leading-tight">
              안녕하세요,
              <br />
              <span className="bg-gradient-to-r from-salon-primary to-salon-light bg-clip-text text-transparent">이지은</span>입니다
            </h2>

            <div className="mt-8 space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                관양시장에서 20년 넘게 한 자리를 지키며 동네 주민분들의 머리를
                손질해 온 <strong className="text-salon-text font-semibold">Lee Jieyn Hair (이지은헤어)</strong>입니다.
              </p>
              <p>
                <span className="text-salon-primary font-medium">&ldquo;자연스러움&rdquo;</span>을 가장 중요하게 생각합니다.
                억지로 만든 컬이 아닌, 마치 타고난 것처럼 자연스럽게 떨어지는
                웨이브. 그것이 제가 추구하는 스타일입니다.
              </p>
              <p>
                고객님 한 분 한 분의 얼굴형, 모질, 라이프스타일을 고려한
                <strong className="text-salon-text font-semibold"> 1:1 맞춤 상담</strong>으로
                가장 어울리는 스타일을 찾아드립니다.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="group/card relative rounded-2xl bg-white p-5 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/50 hover:border-salon-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-salon-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                  <p className="relative text-3xl font-bold text-salon-primary sm:text-4xl">
                    {item.number}
                  </p>
                  <p className="relative mt-2 text-sm text-gray-500 font-medium">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <blockquote className="mt-10 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-salon-primary to-salon-light rounded-full" />
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100/50">
                <svg className="h-8 w-8 text-salon-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-gray-700 leading-relaxed">
                  예쁜 펌은 시간이 지나도 예쁩니다.
                  <br />
                  <span className="text-salon-primary font-medium">손상 없이, 오래 유지되는 펌</span>을 약속드립니다.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
