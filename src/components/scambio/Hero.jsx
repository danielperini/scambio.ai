export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden topo-bg pt-16">
      <div className="pointer-events-none absolute left-[18%] top-0 bottom-0 w-px data-stream opacity-40" />
      <div className="pointer-events-none absolute right-[22%] top-0 bottom-0 w-px data-stream opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Conhecimento Social e Territorial
          </span>

          <h1 className="font-heading font-black text-[44px] sm:text-6xl lg:text-[72px] leading-[1.05] tracking-tight text-balance">
            Conhecimento social e territorial
            <br />
            <span className="text-primary">para apoiar decisões.</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl">
            A SCAMBIO.IA organiza informações produzidas no relacionamento com
            comunidades, pessoas, organizações e territórios, conectando diferentes
            fontes de conhecimento para apoiar análise, acompanhamento e tomada de decisão.
          </p>

          <p className="mt-5 text-sm uppercase tracking-[0.2em] text-foreground/70 font-medium">
            Escuta, observação, relacionamento e compreensão.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="#como-funciona"
              className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3.5 rounded-xl transition-colors glow-ring"
            >
              Conheça a plataforma
            </a>
          </div>

        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative aspect-square glass rounded-3xl overflow-hidden glow-ring">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="tg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#C9795C" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C9795C" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {Array.from({ length: 14 }).map((_, i) => (
                <circle
                  key={i}
                  cx="200"
                  cy="200"
                  r={20 + i * 14}
                  fill="none"
                  stroke="url(#tg)"
                  strokeWidth="1"
                  opacity={0.9 - i * 0.05}
                />
              ))}
              {[
                [120, 140], [270, 110], [220, 250], [300, 280], [150, 300], [90, 220],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="4" fill="#C9795C" />
                  <circle cx={x} cy={y} r="10" fill="none" stroke="#C9795C" strokeOpacity="0.4">
                    <animate attributeName="r" values="6;16;6" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              ))}
            </svg>
            <div className="absolute bottom-5 left-5 right-5 glass rounded-xl px-4 py-3 text-sm">
              <p className="text-muted-foreground">Pontos de demanda ativos</p>
              <p className="font-heading font-bold text-foreground">Mapa territorial em tempo real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}