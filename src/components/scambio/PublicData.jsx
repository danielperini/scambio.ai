import SectionHead from "@/components/scambio/SectionHead";
import ProductShot from "@/components/scambio/ProductShot";

const SHOT =
  "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/d070f9227_234706ab4_preview-lens-8382cf32-18b5-4184-950a-c2bb7418a834.png";

const BODY = [
  "Uma percepção registrada em uma entrevista pode ser analisada junto a indicadores públicos. Uma demanda identificada em uma comunidade pode ser relacionada a informações sobre população, renda, educação, saúde, infraestrutura, mobilidade, meio ambiente ou atividade econômica.",
  "Essa combinação permite contextualizar aquilo que foi observado no campo.",
];

export default function PublicData() {
  return (
    <section id="dados-publicos" className="relative py-20 lg:py-28 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionHead title="O conhecimento do campo encontra os dados disponíveis." />
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          {BODY.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border bg-background p-5">
            <p className="font-heading font-semibold text-foreground">
              O dado ajuda a dimensionar uma realidade.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <p className="font-heading font-semibold text-foreground">
              A experiência territorial ajuda a interpretá-la.
            </p>
          </div>
        </div>
        <ProductShot
          src={SHOT}
          alt="Tela de Dados Secundários da SCAMBIO.IA"
          tag="SCAMBIO.IA · Dados Secundários"
          caption="A coleta prioriza fontes oficiais e respeita o código IBGE como identificador territorial. A incorporação depende das fontes e integrações disponíveis."
        />
      </div>
    </section>
  );
}