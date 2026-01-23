import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        salon: {
          // 보라색 브랜드 컬러 (이미지 기반)
          primary: "#7c5295",    // 메인 퍼플
          dark: "#5a3d6e",       // 다크 퍼플
          light: "#a87fc2",      // 라이트 퍼플
          accent: "#9966cc",     // 액센트 퍼플
          cream: "#faf8fc",      // 연한 라벤더 배경
          warm: "#f3eef7",       // 따뜻한 라벤더 배경
          text: "#3d2a4d",       // 다크 퍼플 텍스트
          // 서브 컬러
          gray: "#6b5b73",       // 그레이 퍼플
          brown: "#4a3f3a",      // 간판의 브라운
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-kr)", "Apple SD Gothic Neo", "Malgun Gothic", "sans-serif"],
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #faf8fc 0%, #f3eef7 50%, #ebe4f2 100%)',
        'gradient-hero': 'linear-gradient(180deg, #f3eef7 0%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
