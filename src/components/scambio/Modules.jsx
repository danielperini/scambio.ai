const MODULES = [
  {
    id: "escuta",
    tag: "01 — Escuta & Registro",
    title: "Captura de campo que vira dado estruturado",
    desc: "Registros de interações com comunidades são analisados automaticamente e transformados em dados organizados, tags, categorias, com um mínimo de digitação manual. Permite também digitação manual, leitura de relatórios, de PDFs, de docs, documentos oficiais e até de fotografias.",
    points: ["Transcrição automática por IA", "Tags e categorias inteligentes", "Histórico completo por território"],
    visual: "wave",
  },
  {
    id: "mapa",
    tag: "02 — Mapa & Território",
    title: "Onde está cada demanda, em um só olhar",
    desc: "Georreferencie interações, demandas e atores locais. Visualize calor territorial e concentre esforço onde o impacto é maior.",
    points: ["Mapa de calor de demandas", "Georreferenciamento de atores", "Filtros por região e tema"],
    visual: "map",
  },
  {
    id: "relacionamento",
    tag: "03 — Relacionamento",
    title: "Cada comunidade com memória e continuidade",
    desc: "Gerencie contatos, histórico de interações e pendências por território. Nada se perde entre equipes ou turnos.",
    points: ["CRM territorial dedicado", "Linha do tempo de interações", "Alertas de follow-up"],
    visual: "net",
  },
  {
    id: "esg",
    tag: "04 — Relatórios & ESG",
    title: "Relatórios que se escrevem sozinhos",
    desc: "O motor de IA consolida os dados de campo em relatórios ESG prontos para stakeholders — em horas, não semanas.",
    points: ["Relatórios automáticos", "Indicadores ESG estruturados", "Exportação para diretoria e investidores"],
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
        {["Escuta", "Registro", "Tag", "Insight"].map((t, i) => (
          <rect key={t} x={40 + i * 60} y="160" width="52" height="20" rx="4" fill={LIGHT} stroke={TEAL} strokeOpacity="0.4" />
        ))}
        {["Escuta", "Registro", "Tag", "Insight"].map((t, i) => (
          <text key={t} x={66 + i * 60} y="173" fontSize="9" fill={MUTED} textAnchor="middle">{t}</text>
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
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <rect x="30" y="30" width="240" height="22" rx="4" fill={TERRA} opacity="0.35" />
      <rect x="30" y="62" width="180" height="10" rx="2" fill={MUTED} opacity="0.3" />
      <rect x="30" y="80" width="210" height="10" rx="2" fill={MUTED} opacity="0.25" />
      <rect x="30" y="110" width="110" height="60" rx="4" fill={LIGHT} stroke={TEAL} strokeOpacity="0.4" />
      <rect x="160" y="110" width="110" height="60" rx="4" fill={LIGHT} stroke={TEAL} strokeOpacity="0.4" />
      <text x="85" y="145" fontSize="11" fill={TEAL} textAnchor="middle">ESG</text>
      <text x="215" y="145" fontSize="11" fill={TEAL} textAnchor="middle">ROI</text>
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
            Quatro pilares, uma só inteligência de território
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Do microfone no campo ao relatório para a diretoria — tudo conectado, tudo automatizado.
          </p>
        </div>

        <div className="space-y-4">
          {MODULES.map((m) => (
            <article
              key={m.id}
              className="group glass rounded-2xl p-6 lg:p-10 grid lg:grid-cols-12 gap-8 items-center hover:border-primary/40 transition-colors"
            >
              <div className="lg:col-span-7">
                <span className="text-xs font-mono text-primary">{m.tag}</span>
                <h3 className="font-heading font-bold text-2xl lg:text-3xl mt-3">{m.title}</h3>
                <p className="mt-3 text-muted-foreground">{m.desc}</p>
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