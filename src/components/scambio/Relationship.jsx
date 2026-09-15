import SectionHead from "@/components/scambio/SectionHead";

const EXAMPLES = [
  "Uma reunião é parte de uma história.",
  "Uma demanda pode ter antecedentes.",
  "Um compromisso gera novos encaminhamentos.",
  "Um ator pode participar de diferentes situações.",
  "Uma comunidade pode apresentar diferentes percepções ao longo do tempo.",
];

const FEATURES = [
  "Atores", "Organizações", "Comunidades", "Interações", "Demandas",
  "Compromissos", "Temas", "Histórico", "Responsáveis", "Encaminhamentos",
];

export default function Relationship() {
  return (
    <section id="relacionamento" className="relative py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <SectionHead
          number="02"
          tag="Relacionamento"
          title="Relações também produzem conhecimento."
          subtitle="O relacionamento com o território acontece ao longo do tempo."
        />
        <ul className="space-y-3 text-muted-foreground leading-relaxed">
          {EXAMPLES.map((e) => (
            <li key={e} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>{e}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-heading font-semibold text-lg text-foreground border-l-2 border-primary pl-5">
          A SCAMBIO.IA organiza essas relações para que o histórico não se perca.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {FEATURES.map((f) => (
            <span
              key={f}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground/90"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}