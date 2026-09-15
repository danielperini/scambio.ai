const PILARES = [
  {
    id: "escuta",
    tag: "01 — Escuta & Observação",
    desc: "Escutar o território, observar o que acontece e registrar diferentes perspectivas.",
    points: ["Presença e escuta", "Registros de campo", "Diferentes fontes"],
    visual: "wave",
  },
  {
    id: "relacionamento",
    tag: "02 — Relacionamento",
    desc: "Organizar atores, comunidades, interações, demandas, compromissos e históricos.",
    points: ["Atores e organizações", "Histórico de interações", "Encaminhamentos"],
    visual: "net",
  },
  {
    id: "evidencias",
    tag: "03 — Evidências & Território",
    desc: "Relacionar registros, documentos, dados, acontecimentos e informações espaciais.",
    points: ["Conexão de evidências", "Contexto preservado", "Dimensão espacial"],
    visual: "map",
  },
  {
    id: "decisao",
    tag: "04 — Análise & Decisão",
    desc: "Converter evidências relacionadas em conhecimento organizado — comparando contextos, acompanhando indicadores e produzindo sínteses que sustentam decisões informadas no território.",
    points: ["Análise comparada entre contextos", "Indicadores e dashboards", "Relatórios e sínteses"],
    visual: "report",
  },
];

const TEAL = "#1E4E5A";
const TERRA = "#C9795C";
const MUTED = "#5A7775";
const LIGHT = "#F4F8F6";

function Visual({ kind }) {
  if (kind === "wave") {
    return (
      <svg viewBox="0 0 300 200" className="w-full h-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${100 + i * 8} Q75 ${60 - i * 10 + 100}, 150 ${100 + i * 8} T300 ${100 + i * 8}`}
            fill="none"
            stroke={TERRA}
            strokeOpacity={0.8 - i * 0.12}
            strokeWidth="1.5"
          />
        ))}
        {["Escuta", "Registro", "Contexto"].map((t, i) => (
          <rect key={t} x={55 + i * 70} y="160" width="60" height="20" rx="4" fill={LIGHT} stroke={TEAL} strokeOpacity="0.4" />
        ))}
        {["Escuta", "Registro", "Contexto"].map((t, i) => (
          <text key={t} x={85 + i * 70} y="173" fontSize="9" fill={MUTED} textAnchor="middle">{t}</text>
        ))}
      </svg>
    );
  }
  if (kind === "net") {
    return (
      <svg viewBox="0 0 300 200" className="w-full h-full">
        {[[150, 40], [60, 100], [240, 100], [100, 160], [200, 160], [150, 100]].map((p, i) => (
          <line key={i} x1="150" y1="100" x2={p[0]} y2={p[1]} stroke={TERRA} strokeOpacity="0.3" />
        ))}
        {[[150, 40], [60, 100], [240, 100], [100, 160], [200, 160], [150, 100]].map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="7" fill={i === 5 ? TERRA : LIGHT} stroke={TEAL} />
        ))}
      </svg>
    );
  }
  if (kind === "map") {
    return (
      <svg viewBox="0 0 300 200" className="w-full h-full">
        <rect width="300" height="200" fill={LIGHT} />
        {Array.from({ length: 8 }).map((_, i) => (
          <circle key={i} cx="150" cy="100" r={20 + i * 12} fill={TERRA} opacity={0.08} />
        ))}
        {[[90, 70], [200, 60], [150, 130], [240, 140], [70, 150]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="5" fill={TERRA} />
            <circle cx={x} cy={y} r="12" fill="none" stroke={TERRA} strokeOpacity="0.4">
              <animate attributeName="r" values="6;18;6" dur="3.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <rect width="300" height="200" fill={LIGHT} />
      {/* header bar */}
      <rect x="20" y="18" width="260" height="16" rx="4" fill="#fff" stroke={TEAL} strokeOpacity="0.25" />
      <circle cx="30" cy="26" r="2.5" fill={TERRA} />
      <rect x="40" y="23" width="120" height="6" rx="2" fill={MUTED} opacity="0.35" />
      <rect x="240" y="23" width="30" height="6" rx="2" fill={TERRA} opacity="0.7" />
      {/* KPI cards */}
      <rect x="20" y="44" width="78" height="34" rx="5" fill="#fff" stroke={TEAL} strokeOpacity="0.25" />
      <rect x="28" y="51" width="34" height="5" rx="2" fill={MUTED} opacity="0.3" />
      <text x="28" y="72" fontSize="13" fontWeight="700" fill={TEAL}>87%</text>
      <rect x="111" y="44" width="78" height="34" rx="5" fill="#fff" stroke={TEAL} strokeOpacity="0.25" />
      <rect x="119" y="51" width="34" height="5" rx="2" fill={MUTED} opacity="0.3" />
      <text x="119" y="72" fontSize="13" fontWeight="700" fill={TERRA}>+24</text>
      <rect x="202" y="44" width="78" height="34" rx="5" fill="#fff" stroke={TEAL} strokeOpacity="0.25" />
      <rect x="210" y="51" width="34" height="5" rx="2" fill={MUTED} opacity="0.3" />
      <text x="210" y="72" fontSize="13" fontWeight="700" fill={TEAL}>12</text>
      {/* chart */}
      <rect x="20" y="86" width="148" height="96" rx="5" fill="#fff" stroke={TEAL} strokeOpacity="0.25" />
      <rect x="28" y="93" width="50" height="5" rx="2" fill={MUTED} opacity="0.3" />
      {[38, 58, 46, 70, 54, 80].map((h, i) => (
        <rect key={i} x={28 + i * 22} y={172 - h} width="14" height={h} rx="2.5" fill={i % 2 ? TERRA : TEAL} opacity={i % 2 ? 0.85 : 0.5} />
      ))}
      <path d="M28 150 L50 130 L72 138 L94 110 L116 120 L138 96" fill="none" stroke={TEAL} strokeWidth="1.5" />
      {/* report list */}
      <rect x="178" y="86" width="102" height="96" rx="5" fill="#fff" stroke={TEAL} strokeOpacity="0.25" />
      <rect x="186" y="93" width="50" height="5" rx="2" fill={MUTED} opacity="0.3" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="186" y={108 + i * 17} width="86" height="4" rx="2" fill={MUTED} opacity={0.28 - i * 0.04} />
          <circle cx="190" cy={118 + i * 17} r="2" fill={i === 1 ? TERRA : TEAL} opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

export default function Modules() {
  return (
    <section id="como-funciona" className="relative py-24 lg:py-32 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="text-primary font-medium text-sm">Como funciona</span>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mt-3 leading-tight text-balance">
            Quatro pilares para transformar informação do território em conhecimento
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Da escuta e observação à análise e decisão, diferentes informações podem
            ser organizadas em um mesmo contexto.
          </p>
        </div>

        <div className="space-y-4">
          {PILARES.map((m) => (
            <article
              key={m.id}
              className="group glass rounded-2xl p-6 lg:p-10 grid lg:grid-cols-12 gap-8 items-center hover:border-primary/40 transition-colors"
            >
              <div className="lg:col-span-7">
                <span className="text-xs font-mono text-primary">{m.tag}</span>
                <p className="mt-3 text-lg lg:text-xl text-foreground leading-relaxed">
                  {m.desc}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div className="aspect-[3/2] rounded-xl glass overflow-hidden p-4">
                  <Visual kind={m.visual} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}