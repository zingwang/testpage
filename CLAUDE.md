# 이지은헤어펌 - 랜딩 페이지

## 프로젝트 개요
관양시장 미용실 "이지은헤어펌"의 Next.js 15 기반 랜딩 페이지

## 기술 스택
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **Runtime**: React 19
- **Font**: Noto Sans KR (Google Fonts)

## 프로젝트 구조
```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (SEO 메타데이터, 폰트)
│   ├── page.tsx            # 메인 랜딩 페이지
│   └── globals.css         # 전역 스타일 + CSS 변수
└── components/
    ├── Header.tsx          # 네비게이션 헤더 (Server)
    ├── MobileMenu.tsx      # 모바일 메뉴 (Client - useState)
    ├── Hero.tsx            # 히어로 섹션
    ├── Services.tsx        # 시술 메뉴 섹션
    ├── About.tsx           # 원장 소개 섹션
    ├── Gallery.tsx         # 시술 갤러리 (Client - 필터링)
    ├── Reviews.tsx         # 고객 후기 섹션
    ├── Location.tsx        # 오시는 길 + 연락처
    └── Footer.tsx          # 푸터
```

## 디자인 시스템

### 색상 팔레트 (CSS Variables)
```css
--salon-primary: #be8b74;   /* 메인 로즈골드 */
--salon-dark: #a67563;      /* 다크 로즈골드 */
--salon-light: #d4b5a5;     /* 라이트 로즈골드 */
--salon-cream: #faf7f5;     /* 크림 배경 */
--salon-warm: #f5ebe6;      /* 따뜻한 배경 */
--salon-text: #4a3f3a;      /* 다크 브라운 텍스트 */
```

### Tailwind 커스텀 색상
```js
colors: {
  salon: {
    primary: "#be8b74",
    dark: "#a67563",
    light: "#d4b5a5",
    cream: "#faf7f5",
    warm: "#f5ebe6",
    text: "#4a3f3a",
  }
}
```

## 코딩 컨벤션

### 컴포넌트 작성
- **Server Component 기본**: 모든 컴포넌트는 기본적으로 Server Component
- **Client Component**: `"use client"` 지시어는 상태/이벤트가 필요할 때만 사용
  - `MobileMenu.tsx` - 메뉴 토글 상태
  - `Gallery.tsx` - 카테고리 필터링 상태
- **함수형 컴포넌트**: Class Component 사용 금지
- **Named Export**: 컴포넌트는 named export 사용

### TypeScript
- **Strict Mode**: 항상 활성화
- **타입 추론 활용**: 명시적 타입은 필요한 경우만

### 파일 네이밍
- **컴포넌트**: PascalCase (`Services.tsx`)
- **CSS 클래스**: kebab-case (`.btn-primary`)

## 주요 명령어
```bash
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
npm run lint     # ESLint 검사
```

## SEO 설정 (layout.tsx)
- **Title**: "이지은헤어펌 | 관양시장 미용실 · 자연스러운 펌 전문"
- **Keywords**: 관양동미용실, 관양시장미용실, 이지은헤어펌, 자연스러운펌, 안양미용실
- **Open Graph**: 카카오톡/페이스북 공유 최적화

## 수정 필요 항목 (배포 전)
- [ ] 전화번호 실제 번호로 변경 (`031-000-0000`)
- [ ] 실제 주소 정보 입력
- [ ] 네이버/카카오 지도 API 연동
- [ ] 실제 시술 사진 추가
- [ ] 인스타그램/네이버 블로그 링크 연결
- [ ] 가격표 실제 가격으로 수정
- [ ] 영업시간 확인 및 수정

## 금지 사항
- ❌ `pages/` 라우터 사용
- ❌ Class Component 사용
- ❌ `getServerSideProps`, `getStaticProps` 사용
- ❌ `next/head` 사용 (메타데이터 API 사용)
- ❌ 불필요한 `"use client"` 지시어
