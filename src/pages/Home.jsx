import { lazy, Suspense } from "react";
import BrandIntro from "@/components/scambio/BrandIntro";
import Navbar from "@/components/scambio/Navbar";
import Hero from "@/components/scambio/Hero";
import Modules from "@/components/scambio/Modules";

const PublicData = lazy(() => import("@/components/scambio/PublicData"));
const Comparative = lazy(() => import("@/components/scambio/Comparative"));
const AiEngine = lazy(() => import("@/components/scambio/AiEngine"));
const NaturalLanguage = lazy(() => import("@/components/scambio/NaturalLanguage"));
const Memory = lazy(() => import("@/components/scambio/Memory"));
const Dashboards = lazy(() => import("@/components/scambio/Dashboards"));
const Reports = lazy(() => import("@/components/scambio/Reports"));
const EsgReports = lazy(() => import("@/components/scambio/EsgReports"));
const Availability = lazy(() => import("@/components/scambio/Availability"));
const PlatformShowcase = lazy(() => import("@/components/scambio/PlatformShowcase"));
const FinalCta = lazy(() => import("@/components/scambio/FinalCta"));
const Footer = lazy(() => import("@/components/scambio/Footer"));

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BrandIntro />
      <Navbar />
      <main>
        <Hero />
        <Modules />
        <Suspense fallback={null}>
          <PublicData />
          <Comparative />
          <AiEngine />
          <NaturalLanguage />
          <Memory />
          <Dashboards />
          <Reports />
          <EsgReports />
          <Availability />
          <FinalCta />
          <PlatformShowcase />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}