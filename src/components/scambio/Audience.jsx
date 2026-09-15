import SectionHead from "@/components/scambio/SectionHead";

const GROUPS = [
  {
    tag: "Empresas",
    desc: "Equipes de relacionamento comunitário, sustentabilidade, ESG, assuntos corporativos e investimento social.",
  },
  {
    tag: "Institutos e Fundações",
    desc: "Organizações que atuam com projetos sociais, culturais, ambientais e desenvolvimento territorial.",
  },
  {
    tag: "Órgãos Públicos",
    desc: "Equipes envolvidas com participação social, políticas públicas, gestão territorial e relacionamento com comunidades.",
  },
  {
    tag: "Equipes de Relacionamento",
    desc: "Profissionais que precisam registrar, acompanhar e analisar informações produzidas diariamente no contato com comunidades e stakeholders.",
  },
];

export default function Audience() {
  return (
    <section id="para-quem" className="relative py-20 lg:py-28 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionHead title="Para organizações que precisam compreender melhor seus territórios e relações." />
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {GROUPS.map((g) => (
            <div key={g.tag} className="rounded-xl border border-border bg-background p-6">
              <p className="font-heading font-bold text-lg text-foreground">{g.tag}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {g.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}