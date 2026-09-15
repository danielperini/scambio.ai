export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden topo-bg pt-16">
      {/* Data stream accents */}
      <div className="pointer-events-none absolute left-[18%] top-0 bottom-0 w-px data-stream opacity-40" />
      <div className="pointer-events-none absolute right-[22%] top-0 bottom-0 w-px data-stream opacity-30" />

      {/* Topographic SVG overlay */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
        <defs>
          <radialGradient id="hg" cx="60%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#2D5BFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0A0F1E" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hg)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Inteligência Social &amp; Territorial
          </span>

          <h1 className="font-heading font-black text-[44px] sm:text-6xl lg:text-[76px] leading-[1.05] tracking-tight text-balance">
            Inteligência Territorial,
            <br />
            <span className="text-primary">amplificada.</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl">
            O Scambio.ai transforma escuta comunitária, dados de campo e relacionamento
            em decisões estratégicas — automaticados por IA, prontos para relatórios ESG.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:daniel@periniprojeto.com.br?subject=Quero%20conhecer%20o%20Scambio.ai"
              className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3.5 rounded-xl transition-colors glow-ring"
            >
              Descobrir a economia do sistema
            </a>
            <a
              href="#como-funciona"
              className="inline-flex justify-center items-center gap-2 glass hover:border-primary/40 text-foreground font-medium px-6 py-3.5 rounded-xl transition-colors"
            >
              Ver como funciona
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "4", v: "módulos integrados" },
              { k: "IA", v: "transcrição & insights" },
              { k: "ESG", v: "relatórios automáticos" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-heading font-bold text-2xl text-foreground">{s.k}</dt>
                <dd className="text-sm text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Topographic glass visual */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative aspect-square glass rounded-3xl overflow-hidden glow-ring">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="tg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2D5BFF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2D5BFF" stopOpacity="0.1" />
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
                  <circle cx={x} cy={y} r="4" fill="#2D5BFF" />
                  <circle cx={x} cy={y} r="10" fill="none" stroke="#2D5BFF" strokeOpacity="0.4">
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