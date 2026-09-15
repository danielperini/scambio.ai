import SectionHead from "@/components/scambio/SectionHead";
import ProductShot from "@/components/scambio/ProductShot";

const SHOT =
  "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/42964d71d_2027f2c5b_preview-lens-625ce2ff-a510-4cf4-84a3-ba50125b1228.png";

export default function Reports() {
  return (
    <section id="relatorios" className="relative py-20 lg:py-28 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionHead
          title="Conhecimento organizado para diferentes níveis de decisão."
          subtitle="Os registros estruturados na plataforma podem apoiar análises, acompanhamentos gerenciais e elaboração de relatórios. A informação pode ser organizada segundo diferentes necessidades de gestão, relacionamento comunitário, investimento social, sustentabilidade e ESG."
        />
        <ProductShot
          src={SHOT}
          alt="Matriz de Materialidade da SCAMBIO.IA"
          tag="SCAMBIO.IA · Matriz de Materialidade"
          caption="Análise de relevância dos temas para comunidade e empresa."
        />
      </div>
    </section>
  );
}