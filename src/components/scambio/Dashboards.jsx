import SectionHead from "@/components/scambio/SectionHead";
import ProductShot from "@/components/scambio/ProductShot";

const SHOT =
  "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/b75570384_5bf617207_preview-lens-b17e181e-bb92-4f4c-b9f7-9f16b073f9e2.png";

export default function Dashboards() {
  return (
    <section id="gestao" className="relative py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionHead
          title="Da informação à gestão."
          subtitle="Informações organizadas podem ser acompanhadas de forma mais clara. Dashboards e indicadores ajudam as equipes a visualizar demandas, interações, temas, compromissos e informações territoriais, permitindo acompanhar sua evolução e identificar aquilo que merece atenção."
        />
        <ProductShot
          src={SHOT}
          alt="Dashboard da SCAMBIO.IA"
          tag="SCAMBIO.IA · Dashboard — Inteligência Social e Territorial"
          caption="Vozes do território, dicas de relacionamento e indicadores em uma mesma visão."
        />
      </div>
    </section>
  );
}