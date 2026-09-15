import BrandIntro from "@/components/scambio/BrandIntro";
import Navbar from "@/components/scambio/Navbar";
import Hero from "@/components/scambio/Hero";
import Knowledge from "@/components/scambio/Knowledge";
import Modules from "@/components/scambio/Modules";
import AiEngine from "@/components/scambio/AiEngine";
import Economy from "@/components/scambio/Economy";
import Footer from "@/components/scambio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BrandIntro />
      <Navbar />
      <main>
        <Hero />
        <Knowledge />
        <Modules />
        <AiEngine />
        <Economy />
      </main>
      <Footer />
    </div>
  );
}