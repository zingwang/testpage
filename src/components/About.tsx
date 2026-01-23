export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - Stats */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <p className="text-3xl font-bold text-black">20+</p>
                <p className="text-sm text-gray-500 mt-1">년 경력</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <p className="text-3xl font-bold text-black">10K+</p>
                <p className="text-sm text-gray-500 mt-1">시술 고객</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <p className="text-3xl font-bold text-black">98%</p>
                <p className="text-sm text-gray-500 mt-1">재방문율</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              20년의 노하우
            </h2>

            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                관양시장에서 20년 넘게 한 자리를 지키며
                동네 주민분들의 머리를 손질해 온 이지은헤어입니다.
              </p>
              <p>
                <strong className="text-gray-900">&ldquo;자연스러움&rdquo;</strong>을
                가장 중요하게 생각합니다. 억지로 만든 컬이 아닌,
                마치 타고난 것처럼 자연스럽게 떨어지는 웨이브.
              </p>
              <p>
                예쁜 펌은 시간이 지나도 예쁩니다.
              </p>
            </div>

            {/* Owner */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center text-white font-bold">
                이
              </div>
              <div>
                <p className="font-bold text-gray-900">이지은</p>
                <p className="text-sm text-gray-500">Lee Jieyn Hair 원장</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
