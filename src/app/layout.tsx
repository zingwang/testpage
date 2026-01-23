import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "이지은헤어 (Lee Jieyn Hair) | 관양시장 미용실 · 컷 & 펌 전문",
  description:
    "안양 관양동 관양시장 미용실 이지은헤어입니다. 컷 & 펌 전문, 자연스러운 펌, 볼륨펌, 매직, 염색 등 1:1 맞춤 시술로 고객님께 어울리는 스타일을 제안해 드립니다.",
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
  ],
  authors: [{ name: "이지은헤어" }],
  creator: "Lee Jieyn Hair",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://leejieyn-hair.com",
    title: "이지은헤어 (Lee Jieyn Hair) | 관양시장 미용실",
    description:
      "안양 관양동 관양시장 미용실. 컷 & 펌 전문, 1:1 맞춤 상담",
    siteName: "Lee Jieyn Hair",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#7c5295",
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
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
