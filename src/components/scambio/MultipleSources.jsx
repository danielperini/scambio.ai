import SectionHead from "@/components/scambio/SectionHead";

const GROUPS = [
  { tag: "Campo", items: ["Entrevistas", "Reuniões", "Visitas", "Relatos", "Observações"] },
  { tag: "Documentos", items: ["Relatórios", "PDFs", "Documentos oficiais", "Estudos"] },
  { tag: "Mídia", items: ["Notícias", "Fotografias", "Vídeos", "Outros registros"] },
  { tag: "Dados", items: ["Dados públicos", "Indicadores", "Bases secundárias"] },
];

export default function MultipleSources() {
  return (
    <section id="multiplas-fontes" className="relative py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionHead
          title="Uma realidade. Diferentes fontes de conhecimento."
          subtitle="A SCAMBIO.IA permite reunir informações qualitativas e quantitativas, registros de campo e fontes secundárias, dados produzidos pela organização e informações públicas. O objetivo é ampliar o contexto disponível para análise."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GROUPS.map((g) => (
            <div key={g.tag} className="rounded-xl border border-border bg-background p-5">
              <p className="text-sm font-mono uppercase tracking-widest text-primary mb-3">
                {g.tag}
              </p>
              <ul className="space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-foreground/90">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center">
          <span className="text-primary text-2xl">↓</span>
          <p className="mt-3 font-heading font-black text-2xl sm:text-3xl text-foreground text-center">
            Conhecimento territorial
          </p>
        </div>
      </div>
    </section>
  );
}