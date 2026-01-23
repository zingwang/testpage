import { Logo } from "./Logo";

export function About() {
  const highlights = [
    { number: "20+", label: "년 경력" },
    { number: "10,000+", label: "시술 고객" },
    { number: "98%", label: "재방문율" },
  ];

  return (
    <section id="about" className="section-padding bg-salon-cream">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-salon-warm via-white to-salon-cream shadow-lg flex items-center justify-center">
              <div className="text-center p-8">
                <Logo className="h-32 w-32 mx-auto mb-6" color="#7c5295" />
                <p className="text-2xl font-bold text-salon-text">Lee Jieyn Hair</p>
                <p className="mt-2 text-salon-primary">컷 & 펌 전문</p>
                <p className="mt-4 text-sm text-gray-500">원장 이지은</p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl bg-salon-primary/10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-salon-primary">
              About
            </span>
            <h2 className="mt-2 text-3xl font-bold text-salon-text sm:text-4xl">
              안녕하세요,
              <br />
              <span className="text-salon-primary">이지은</span>입니다
            </h2>

            <div className="mt-6 space-y-4 text-gray-600">
              <p>
                관양시장에서 20년 넘게 한 자리를 지키며 동네 주민분들의 머리를
                손질해 온 <strong className="text-salon-text">Lee Jieyn Hair (이지은헤어)</strong>입니다.
              </p>
              <p>
                &ldquo;자연스러움&rdquo;을 가장 중요하게 생각합니다.
                억지로 만든 컬이 아닌, 마치 타고난 것처럼 자연스럽게 떨어지는
                웨이브. 그것이 제가 추구하는 스타일입니다.
              </p>
              <p>
                고객님 한 분 한 분의 얼굴형, 모질, 라이프스타일을 고려한
                <strong className="text-salon-text"> 1:1 맞춤 상담</strong>으로
                가장 어울리는 스타일을 찾아드립니다.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-white p-4 text-center shadow-sm"
                >
                  <p className="text-2xl font-bold text-salon-primary sm:text-3xl">
                    {item.number}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <blockquote className="mt-8 border-l-4 border-salon-primary bg-white p-6 italic text-gray-600 shadow-sm rounded-r-xl">
              &ldquo;예쁜 펌은 시간이 지나도 예쁩니다.
              <br />
              손상 없이, 오래 유지되는 펌을 약속드립니다.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
