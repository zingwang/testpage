interface LogoProps {
  className?: string;
  color?: string;
}

/**
 * Lee Jieyn Hair 로고 - 여성 실루엣과 흐르는 머리카락 디자인
 */
export function Logo({ className = "h-12 w-12", color = "currentColor" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lee Jieyn Hair 로고"
    >
      {/* 달/원형 프레임 */}
      <path
        d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45c6.627 0 12-5.373 12-12s-5.373-12-12-12c-11.598 0-21-9.402-21-21s9.402-21 21-21c24.853 0 45 20.147 45 45"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* 여성 얼굴 실루엣 */}
      <ellipse
        cx="50"
        cy="45"
        rx="12"
        ry="15"
        fill={color}
      />
      {/* 목 */}
      <path
        d="M46 58 L46 68 Q46 72 50 72 Q54 72 54 68 L54 58"
        fill={color}
      />
      {/* 흐르는 머리카락 */}
      <path
        d="M38 30 Q30 35 28 50 Q26 65 35 75"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M42 28 Q32 40 32 55 Q32 70 40 78"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M62 30 Q72 38 74 50 Q76 62 70 72"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * 간단한 버전의 로고 (헤더용)
 */
export function LogoSimple({ className = "h-10 w-10", color = "currentColor" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lee Jieyn Hair"
    >
      {/* 크레센트 문 형태의 프레임 */}
      <path
        d="M25 3C12.85 3 3 12.85 3 25s9.85 22 22 22c3.314 0 6-2.686 6-6s-2.686-6-6-6c-5.523 0-10-4.477-10-10s4.477-10 10-10c12.15 0 22 9.85 22 22"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* 여성 실루엣 */}
      <ellipse cx="25" cy="22" rx="6" ry="7.5" fill={color} />
      <path d="M23 28.5v5c0 1.5 1 2 2 2s2-.5 2-2v-5" fill={color} />
      {/* 머리카락 */}
      <path
        d="M19 15q-5 5-5 12t4 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M31 15q5 5 5 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
