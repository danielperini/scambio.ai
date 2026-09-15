import SectionHead from "@/components/scambio/SectionHead";

const BODY = [
  "Uma informação isolada apresenta uma parte da realidade.",
  "Quando diferentes registros podem ser relacionados, torna-se possível compreender melhor o contexto em que determinado acontecimento ocorreu.",
];

export default function Evidence() {
  return (
    <section id="evidencias" className="relative py-20 lg:py-28 border-t border-border/40">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <SectionHead
          number="03"
          tag="Evidências"
          title="Relacionar informações é ampliar o contexto."
        />
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          {BODY.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="text-foreground/90">
            A SCAMBIO.IA conecta evidências a pessoas, organizações, localidades,
            temas, demandas, projetos, acontecimentos e períodos.
          </p>
          <p>
            Isso permite reconstruir contextos, acompanhar mudanças e identificar
            relações que não aparecem quando cada informação permanece separada.
          </p>
        </div>
      </div>
    </section>
  );
}