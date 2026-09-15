const NODES = [
  { label: "Interação comunitária", sub: "notas, áudios, fotos, demandas, mensagens, análise de ar, dados, documentos" },
  { label: "Textos e dados estruturados", sub: "transcrição & estruturação por IA" },
  { label: "Classificação", sub: "tags, temas, território" },
  { label: "Insights, tendências, riscos e soluções", sub: "direção para análise" },
];

const SUPPORT = [
  { k: "Apoio", v: "à organização, consulta e análise das informações" },
  { k: "Escala", v: "para trabalhar com grandes volumes de informação" },
  { k: "Interpretação", v: "permanece com as equipes" },
];

export default function AiEngine() {
  return (
    <section id="motor-ia" className="relative py-24 lg:py-32 border-t border-border/40 topo-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <span className="text-primary font-medium text-sm">O diferencial</span>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mt-3 leading-tight text-balance">
            Inteligência artificial aplicada ao conhecimento social
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A inteligência artificial é utilizada como recurso de apoio à organização,
            consulta e análise das informações. Pode auxiliar na transcrição de conteúdos,
            identificação de temas, classificação de registros, localização de informações
            e consulta à base por meio de linguagem natural. A tecnologia amplia a
            capacidade de trabalhar com grandes volumes de informação. A interpretação
            permanece com as equipes.
          </p>
        </div>

        <div className="glass rounded-3xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-stretch gap-4">
            {NODES.map((n, i) => (
              <div key={n.label} className="flex-1 flex items-center gap-4">
                <div className="relative flex-1 group">
                  <div className="glass rounded-xl p-5 h-full hover:border-primary/50 transition-colors">
                    <span className="text-xs font-mono text-muted-foreground">NÓ {i + 1}</span>
                    <p className="font-heading font-semibold text-foreground mt-2">{n.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{n.sub}</p>
                  </div>
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary glow-ring hidden lg:block" />
                </div>
                {i < NODES.length - 1 && (
                  <span className="text-primary text-2xl hidden lg:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {SUPPORT.map((s) => (
            <div key={s.k} className="glass rounded-2xl p-8 hover:border-primary/40 transition-colors">
              <p className="font-heading font-black text-3xl text-primary">{s.k}</p>
              <p className="mt-3 text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}