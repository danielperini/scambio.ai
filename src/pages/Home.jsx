import BrandIntro from "@/components/scambio/BrandIntro";
import Navbar from "@/components/scambio/Navbar";
import Hero from "@/components/scambio/Hero";
import Modules from "@/components/scambio/Modules";
import PublicData from "@/components/scambio/PublicData";
import Comparative from "@/components/scambio/Comparative";
import AiEngine from "@/components/scambio/AiEngine";
import NaturalLanguage from "@/components/scambio/NaturalLanguage";
import Memory from "@/components/scambio/Memory";
import Dashboards from "@/components/scambio/Dashboards";
import Reports from "@/components/scambio/Reports";
import EsgReports from "@/components/scambio/EsgReports";
import Availability from "@/components/scambio/Availability";
import PlatformShowcase from "@/components/scambio/PlatformShowcase";
import FinalCta from "@/components/scambio/FinalCta";
import Footer from "@/components/scambio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BrandIntro />
      <Navbar />
      <main>
        <Hero />
        <Modules />
        <PublicData />
        <Comparative />
        <AiEngine />
        <NaturalLanguage />
        <Memory />
        <Dashboards />
        <Reports />
        <EsgReports />
        <Availability />
        <PlatformShowcase />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}