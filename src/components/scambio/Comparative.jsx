import SectionHead from "@/components/scambio/SectionHead";

const BODY = [
  "Quando informações de diferentes localidades são organizadas dentro de uma mesma estrutura, torna-se possível ampliar a escala da análise.",
  "Territórios podem ser comparados segundo características sociais, ambientais, econômicas, demográficas, relacionais e territoriais. É possível observar semelhanças, diferenças, recorrências e situações específicas.",
  "Uma organização que atua em diferentes municípios, comunidades ou regiões pode identificar temas recorrentes, demandas concentradas, diferentes respostas a uma mesma questão e características associadas a determinados padrões de relacionamento.",
  "A comparação não elimina as particularidades de cada território. Ao contrário, ajuda a reconhecê-las.",
];

export default function Comparative() {
  return (
    <section id="analise-comparada" className="relative py-20 lg:py-28 border-t border-border/40">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <SectionHead title="Do território observado à análise em escala." />
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          {BODY.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border bg-secondary/40 p-6">
            <p className="font-heading font-bold text-xl text-primary">Escala</p>
            <p className="mt-1 text-muted-foreground">para identificar padrões.</p>
          </div>
          <div className="rounded-xl border border-border bg-secondary/40 p-6">
            <p className="font-heading font-bold text-xl text-primary">Contexto</p>
            <p className="mt-1 text-muted-foreground">para interpretá-los.</p>
          </div>
        </div>
      </div>
    </section>
  );
}