export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden topo-bg pt-16">
      <div className="pointer-events-none absolute left-[18%] top-0 bottom-0 w-px data-stream opacity-40" />
      <div className="pointer-events-none absolute right-[22%] top-0 bottom-0 w-px data-stream opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-sm font-medium text-muted-foreground mb-6 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Conhecimento Social e Territorial
          </span>

          <h1 className="font-heading font-black text-[44px] sm:text-6xl lg:text-[72px] leading-[1.05] tracking-tight text-balance">
            Conhecimento social e territorial
            <br />
            <span className="text-primary">para apoiar decisões.</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A SCAMBIO.IA organiza informações produzidas no relacionamento com
            comunidades, pessoas, organizações e territórios, conectando diferentes
            fontes de conhecimento para apoiar análise, acompanhamento e tomada de decisão.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-foreground/70 font-medium select-none">
            <span className="h-px w-10 bg-primary/50" />
            Escuta, observação, relacionamento e compreensão.
          </div>
        </div>
      </div>
    </section>
  );
}