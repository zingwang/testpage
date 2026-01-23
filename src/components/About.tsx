import { Logo } from "./Logo";
import { ScrollReveal } from "./ScrollReveal";
import { Marquee } from "./Marquee";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Split Screen Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Dark */}
        <div className="relative py-24 lg:py-32 flex items-center" style={{ backgroundColor: '#3d2a4d' }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white rounded-full" />
          </div>

          <div className="container-custom lg:pr-16">
            <ScrollReveal direction="left">
              <span className="text-sm font-medium text-salon-light tracking-[0.2em] uppercase">
                About
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                20년의
                <br />
                <span className="text-salon-light">노하우</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100}>
              <div className="mt-8 space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  관양시장에서 20년 넘게 한 자리를 지키며
                  동네 주민분들의 머리를 손질해 온 이지은헤어입니다.
                </p>
                <p>
                  <span className="text-white font-medium">&ldquo;자연스러움&rdquo;</span>을
                  가장 중요하게 생각합니다. 억지로 만든 컬이 아닌,
                  마치 타고난 것처럼 자연스럽게 떨어지는 웨이브.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div className="mt-12 flex items-center gap-6">
                <div className="h-px flex-1 bg-white/20" />
                <span className="text-white/40 text-sm">Since 2004</span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Side - Light */}
        <div className="relative py-24 lg:py-32 flex items-center" style={{ background: 'linear-gradient(to bottom right, #faf8fc, #ffffff, #f3eef7)' }}>
          <div className="container-custom lg:pl-16">
            {/* Logo Card */}
            <ScrollReveal direction="right">
              <div className="relative mb-12">
                <div className="inline-block p-8 rounded-3xl bg-white shadow-2xl shadow-salon-primary/10">
                  <Logo className="h-24 w-24 sm:h-32 sm:w-32" color="#7c5295" />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-3xl border-2 border-dashed border-salon-primary/20" />
              </div>
            </ScrollReveal>

            {/* Quote */}
            <ScrollReveal direction="right" delay={100}>
              <p className="text-2xl sm:text-3xl font-medium text-salon-text leading-relaxed">
                예쁜 펌은<br />
                시간이 지나도<br />
                <span className="text-salon-primary">예쁩니다.</span>
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="right" delay={200}>
              <div className="mt-12 grid grid-cols-3 gap-4">
                {[
                  { number: "20+", label: "년 경력" },
                  { number: "10K+", label: "시술 고객" },
                  { number: "98%", label: "재방문율" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/50">
                    <p className="text-2xl sm:text-3xl font-bold text-salon-primary">{stat.number}</p>
                    <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Owner */}
            <ScrollReveal direction="right" delay={300}>
              <div className="mt-12 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: 'linear-gradient(to bottom right, #7c5295, #a87fc2)' }}>
                  이
                </div>
                <div>
                  <p className="font-bold text-salon-text">이지은</p>
                  <p className="text-sm text-gray-500">Lee Jieyn Hair 원장</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="py-4" style={{ backgroundColor: '#7c5295' }}>
        <Marquee speed={20} direction="right">
          <span className="mx-12 text-lg text-white/80 font-light">손상 최소화</span>
          <span className="mx-4 text-white/40">•</span>
          <span className="mx-12 text-lg text-white/80 font-light">오래 유지</span>
          <span className="mx-4 text-white/40">•</span>
          <span className="mx-12 text-lg text-white/80 font-light">1:1 맞춤 상담</span>
          <span className="mx-4 text-white/40">•</span>
          <span className="mx-12 text-lg text-white/80 font-light">자연스러운 스타일</span>
          <span className="mx-4 text-white/40">•</span>
        </Marquee>
      </div>
    </section>
  );
}
