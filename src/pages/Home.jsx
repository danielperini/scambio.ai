import BrandIntro from "@/components/scambio/BrandIntro";
import Navbar from "@/components/scambio/Navbar";
import Hero from "@/components/scambio/Hero";
import Knowledge from "@/components/scambio/Knowledge";
import DispersedInfo from "@/components/scambio/DispersedInfo";
import Listen from "@/components/scambio/Listen";
import MultipleSources from "@/components/scambio/MultipleSources";
import PublicData from "@/components/scambio/PublicData";
import Relationship from "@/components/scambio/Relationship";
import Evidence from "@/components/scambio/Evidence";
import Territory from "@/components/scambio/Territory";
import Comparative from "@/components/scambio/Comparative";
import AiEngine from "@/components/scambio/AiEngine";
import NaturalLanguage from "@/components/scambio/NaturalLanguage";
import Memory from "@/components/scambio/Memory";
import Dashboards from "@/components/scambio/Dashboards";
import Reports from "@/components/scambio/Reports";
import PlatformShowcase from "@/components/scambio/PlatformShowcase";
import Modules from "@/components/scambio/Modules";
import Flow from "@/components/scambio/Flow";
import Audience from "@/components/scambio/Audience";
import Positioning from "@/components/scambio/Positioning";
import FinalCta from "@/components/scambio/FinalCta";
import Footer from "@/components/scambio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BrandIntro />
      <Navbar />
      <main>
        <Hero />
        <Knowledge />
        <DispersedInfo />
        <Listen />
        <MultipleSources />
        <PublicData />
        <Relationship />
        <Evidence />
        <Territory />
        <Comparative />
        <AiEngine />
        <NaturalLanguage />
        <Memory />
        <Dashboards />
        <Reports />
        <Modules />
        <PlatformShowcase />
        <Flow />
        <Audience />
        <Positioning />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}