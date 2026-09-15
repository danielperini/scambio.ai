import SectionHead from "@/components/scambio/SectionHead";

const BODY = [
  "Relacionamentos não começam em uma reunião e não terminam em um registro.",
  "O conhecimento acumulado ao longo do tempo ajuda a compreender contextos, decisões, mudanças e expectativas.",
  "A SCAMBIO.IA organiza esse histórico para que o conhecimento produzido pelas equipes permaneça disponível, possa ser compartilhado e continue sendo utilizado mesmo quando pessoas, equipes ou projetos mudam.",
];

export default function Memory() {
  return (
    <section id="memoria" className="relative py-20 lg:py-28 border-t border-border/40">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <SectionHead title="Uma memória institucional do território." />
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          {BODY.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}