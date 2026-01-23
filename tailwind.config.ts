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
          // 블랙앤화이트 컬러
          primary: "#000000",    // 메인 블랙
          dark: "#1a1a1a",       // 다크 그레이
          light: "#4a4a4a",      // 라이트 그레이
          accent: "#333333",     // 액센트
          cream: "#f5f5f5",      // 연한 그레이 배경
          warm: "#ebebeb",       // 따뜻한 그레이 배경
          text: "#111111",       // 다크 텍스트
          gray: "#666666",       // 그레이
          brown: "#4a3f3a",      // 간판의 브라운
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-kr)", "Apple SD Gothic Neo", "Malgun Gothic", "sans-serif"],
      },
      backgroundImage: {
        'gradient-gray': 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 50%, #ebebeb 100%)',
        'gradient-hero': 'linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
