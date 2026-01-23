import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leejieun-salon.netlify.app"),
  title: {
    default: "이지은헤어 (Lee Jieyn Hair) | 관양시장 미용실 · 컷 & 펌 전문",
    template: "%s | 이지은헤어",
  },
  description:
    "안양 관양동 관양시장 미용실 이지은헤어입니다. 컷 & 펌 전문, 자연스러운 펌, 볼륨펌, 매직, 염색 등 1:1 맞춤 시술로 고객님께 어울리는 스타일을 제안해 드립니다. 20년 경력의 노하우.",
  keywords: [
    "관양동미용실",
    "관양시장미용실",
    "이지은헤어",
    "Lee Jieyn Hair",
    "컷앤펌",
    "자연스러운펌",
    "안양미용실",
    "볼륨펌",
    "매직",
    "염색",
    "동안구미용실",
    "안양펌",
    "관양동펌",
  ],
  authors: [{ name: "이지은헤어" }],
  creator: "Lee Jieyn Hair",
  publisher: "Lee Jieyn Hair",
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://leejieun-salon.netlify.app",
    title: "이지은헤어 (Lee Jieyn Hair) | 관양시장 미용실",
    description:
      "안양 관양동 관양시장 미용실. 컷 & 펌 전문, 20년 경력 1:1 맞춤 상담. 자연스러운 펌, 볼륨펌, 매직, 염색.",
    siteName: "Lee Jieyn Hair",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "이지은헤어 - 관양시장 미용실",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이지은헤어 (Lee Jieyn Hair) | 관양시장 미용실",
    description: "안양 관양동 관양시장 미용실. 컷 & 펌 전문, 20년 경력.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // 네이버, 구글 웹마스터 도구 인증 코드 추가 시 사용
    // google: "구글-인증-코드",
    // other: { "naver-site-verification": "네이버-인증-코드" },
  },
  alternates: {
    canonical: "https://leejieun-salon.netlify.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKr.variable}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
