import SectionHead from "@/components/scambio/SectionHead";

export default function Dashboards() {
  return (
    <section id="gestao" className="relative py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionHead
          title="Da informação à gestão."
          subtitle="Informações organizadas podem ser acompanhadas de forma mais clara. Dashboards e indicadores ajudam as equipes a visualizar demandas, interações, temas, compromissos e informações territoriais, permitindo acompanhar sua evolução e identificar aquilo que merece atenção."
        />
      </div>
    </section>
  );
}