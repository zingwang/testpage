import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

/**
 * Lee Jieyn Hair - 관양시장 미용실 랜딩 페이지
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  );
}
