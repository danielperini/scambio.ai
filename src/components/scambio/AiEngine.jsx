const NODES = [
  { label: "Ruído social", sub: "áudios, notas, demandas", save: null },
  { label: "Transcrição IA", sub: "áudio → texto estruturado", save: "120h de digitação automatizadas" },
  { label: "Classificação", sub: "tags, prioridade, território", save: "Triagem manual eliminada" },
  { label: "Insight estratégico", sub: "tendências & riscos", save: "Decisão em dias, não semanas" },
  { label: "Relatório ESG", sub: "pronto para stakeholders", save: "Relatórios em horas" },
];

export default function AiEngine() {
  return (
    <section id="motor-ia" className="relative py-24 lg:py-32 border-t border-border/40 topo-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <span className="text-primary font-medium text-sm">O diferencial</span>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mt-3 leading-tight text-balance">
            Um motor de decisões, não só um sistema de registros
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            O Scambio.ai usa IA para transformar dado bruto de campo em direção executável —
            transcrições automáticas, insights e relatórios que se geram sozinhos.
          </p>
        </div>

        {/* Logic flow */}
        <div className="glass rounded-3xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-stretch gap-4">
            {NODES.map((n, i) => (
              <div key={n.label} className="flex-1 flex items-center gap-4">
                <div className="relative flex-1 group">
                  <div className="glass rounded-xl p-5 h-full hover:border-primary/50 transition-colors">
                    <span className="text-xs font-mono text-muted-foreground">NÓ {i + 1}</span>
                    <p className="font-heading font-semibold text-foreground mt-2">{n.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{n.sub}</p>
                    {n.save && (
                      <p className="mt-3 text-xs text-primary border-t border-primary/20 pt-3">
                        {n.save}
                      </p>
                    )}
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

        {/* ROI bento */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { k: "120h", v: "de relatório manual automatizadas por ciclo" },
            { k: "10x", v: "mais rápido para fechar demandas de território" },
            { k: "Zero", v: "perda de histórico entre turnos e equipes" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl p-8 hover:border-primary/40 transition-colors">
              <p className="font-heading font-black text-5xl text-primary">{s.k}</p>
              <p className="mt-3 text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}