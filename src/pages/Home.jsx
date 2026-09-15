import Navbar from "@/components/scambio/Navbar";
import Hero from "@/components/scambio/Hero";
import Modules from "@/components/scambio/Modules";
import AiEngine from "@/components/scambio/AiEngine";
import Economy from "@/components/scambio/Economy";
import Footer from "@/components/scambio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Modules />
        <AiEngine />
        <Economy />
      </main>
      <Footer />
    </div>
  );
}