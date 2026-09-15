import SectionHead from "@/components/scambio/SectionHead";

const EXAMPLES = [
  "Quais demandas permanecem abertas nesta comunidade?",
  "Quais temas apareceram com maior frequência nas últimas interações?",
  "Quais compromissos estão próximos do prazo?",
  "Quais atores tiveram maior número de interações sobre determinado tema?",
  "Como determinada demanda evoluiu ao longo do tempo?",
];

export default function NaturalLanguage() {
  return (
    <section id="linguagem-natural" className="relative py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <SectionHead
          title="Pergunte às informações do território."
          subtitle="A consulta às informações não precisa depender apenas de filtros e menus. A SCAMBIO.IA permite utilizar linguagem natural para localizar e relacionar informações disponíveis na plataforma."
        />
        <div className="mt-10 space-y-3">
          {EXAMPLES.map((q) => (
            <div
              key={q}
              className="rounded-xl border border-border bg-background px-5 py-4 text-foreground/90 flex items-start gap-3"
            >
              <span className="text-primary font-mono text-sm pt-0.5">›</span>
              <span>{q}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}