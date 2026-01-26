export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Stats */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="text-center p-3 sm:p-6 rounded-xl bg-gray-50">
                <p className="text-xl sm:text-3xl font-bold text-black">30+</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">년 경력</p>
              </div>
              <div className="text-center p-3 sm:p-6 rounded-xl bg-gray-50">
                <p className="text-xl sm:text-3xl font-bold text-black">10K+</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">시술 고객</p>
              </div>
              <div className="text-center p-3 sm:p-6 rounded-xl bg-gray-50">
                <p className="text-xl sm:text-3xl font-bold text-black">1:1</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">맞춤 상담</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              30년 이상의 노하우
            </h2>

            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                관양동에서 30년 넘게
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
            <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black flex items-center justify-center text-white text-sm sm:text-base font-bold">
                강
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm sm:text-base">강인선</p>
                <p className="text-xs sm:text-sm text-gray-500">Lee Jieyn Hair 원장</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
