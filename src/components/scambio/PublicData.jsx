import SectionHead from "@/components/scambio/SectionHead";

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
        <p className="mt-8 text-sm text-muted-foreground border-t border-border pt-6">
          A coleta prioriza fontes oficiais e respeita o código IBGE como identificador
          territorial. A incorporação depende das fontes e integrações disponíveis.
        </p>
      </div>
    </section>
  );
}