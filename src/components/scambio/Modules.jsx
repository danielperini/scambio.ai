import { useEffect, useRef } from "react";

const TEAL = "#1E4E5A";
const TERRA = "#C9795C";
const MUTED = "#5A7775";

const PILARES = [
  {
    id: "escuta",
    tag: "01 — Escuta & Observação",
    title: "Escutar o território. Observar o que acontece.",
    lead: "Conhecer um território começa pela presença.",
    body: [
      "É estar atento ao que as pessoas dizem, mas também ao que acontece ao redor. Aos modos de vida, às relações, aos conflitos, às mudanças, aos lugares de encontro, às dificuldades de acesso, aos recursos disponíveis e às formas como cada comunidade se relaciona com seu ambiente.",
      "A SCAMBIO.IA permite registrar e reunir diferentes formas de expressão dessa realidade: áudios, fotografias, vídeos, entrevistas, reuniões, relatos, visitas, documentos, relatórios, notícias e outras informações produzidas no cotidiano do território.",
      "Também é possível incorporar dados públicos e fontes secundárias que ajudam a compreender melhor aquilo que foi observado.",
      "Uma entrevista traz uma perspectiva. Uma fotografia registra uma situação. Um relatório ajuda a entender um contexto. Uma notícia registra um acontecimento. Um indicador ajuda a dimensionar uma realidade.",
    ],
    note:
      "Quando essas informações podem ser vistas juntas, o território começa a contar uma história mais completa sobre si mesmo.",
    visual: "wave",
  },
  {
    id: "relacionamento",
    tag: "02 — Relacionamento",
    title: "Toda relação tem uma história.",
    body: [
      "O relacionamento com uma comunidade não acontece em um único encontro.",
      "Há conversas anteriores, acordos, expectativas, demandas, conflitos, encaminhamentos e mudanças de posição.",
      "A SCAMBIO.IA ajuda a preservar essa história.",
      "As informações sobre pessoas, organizações, comunidades e grupos podem ser relacionadas às interações que aconteceram ao longo do tempo. Assim, uma demanda não aparece apenas como um registro. Ela pode ser compreendida dentro da relação que a produziu.",
    ],
    note:
      "Conhecer quem está no território também é conhecer a história da relação com essas pessoas.",
    visual: "net",
  },
  {
    id: "evidencias",
    tag: "03 — Evidências",
    title: "O que acontece deixa marcas.",
    body: [
      "Uma conversa pode revelar uma preocupação. Uma fotografia pode registrar uma transformação. Um documento pode explicar uma decisão. Uma notícia pode registrar um acontecimento. Um conjunto de relatos pode indicar que determinado tema está ganhando importância.",
      "A SCAMBIO.IA reúne essas evidências e permite relacioná-las.",
      "Pessoas, comunidades, organizações, lugares, temas, demandas e acontecimentos passam a fazer parte de uma mesma história.",
    ],
    note:
      "Isso ajuda a recuperar contextos, acompanhar mudanças e compreender aquilo que não aparece quando cada informação é analisada separadamente.",
    visual: "report",
  },
  {
    id: "territorio",
    tag: "04 — Território",
    title: "O lugar também explica o que acontece.",
    body: [
      "As relações não acontecem no vazio.",
      "Elas acontecem em determinados lugares, próximos ou distantes de serviços, rios, estradas, equipamentos públicos, áreas de trabalho, espaços de convivência e recursos naturais.",
      "A dimensão espacial ajuda a compreender essas relações.",
      "A SCAMBIO.IA permite localizar informações e observar sua distribuição pelo território, relacionando comunidades, pessoas, organizações, demandas, projetos e acontecimentos.",
    ],
    note:
      "Essa visão também permite comparar diferentes localidades e perceber o que se repete, o que muda e o que é próprio de cada lugar.",
    visual: "map",
  },
];

function Visual({ kind }) {
  if (kind === "wave") {
    const srcs = [[70, 60], [230, 55], [250, 110], [60, 120], [150, 45]];
    return (
      <svg viewBox="0 0 300 200" className="w-full h-full">
        <rect width="300" height="200" fill="hsl(var(--secondary))" />
        {Array.from({ length: 6 }).map((_, i) => (
          <circle key={i} cx="150" cy="105" r={14 + i * 13} fill="none" stroke={TERRA} strokeOpacity={0.5 - i * 0.07} strokeWidth="1.4">
            <animate attributeName="r" values={`${14 + i * 13};${22 + i * 13};${14 + i * 13}`} dur="3.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values={`${0.5 - i * 0.07};0;${0.5 - i * 0.07}`} dur="3.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
        {srcs.map(([x, y], i) => (
          <g key={i}>
            <line x1="150" y1="105" x2={x} y2={y} stroke={TEAL} strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />
            <rect x={x - 12} y={y - 9} width="24" height="18" rx="4" fill="hsl(var(--card))" stroke={TEAL} strokeOpacity="0.4" />
            <circle cx={x - 4} cy={y} r="2.5" fill={TERRA} />
            <rect x={x + 1} y={y - 3} width="9" height="2.5" rx="1" fill={MUTED} opacity="0.35" />
            <rect x={x + 1} y={y + 1} width="7" height="2.5" rx="1" fill={MUTED} opacity="0.35" />
          </g>
        ))}
        <circle cx="150" cy="105" r="9" fill={TERRA} />
        <circle cx="150" cy="105" r="4" fill="hsl(var(--card))" />
        <path d="M30 175 Q60 168 90 175 T150 175 T210 175 T270 175" fill="none" stroke={TEAL} strokeOpacity="0.45" strokeWidth="1.5" />
        {[90, 150, 210].map((x, i) => (
          <circle key={i} cx={x} cy="175" r="2.5" fill={TERRA} />
        ))}
      </svg>
    );
  }
  if (kind === "net") {
    return (
      <svg viewBox="0 0 300 200" className="w-full h-full">
        <rect width="300" height="200" fill="hsl(var(--secondary))" />
        {[[150, 40], [60, 100], [240, 100], [100, 160], [200, 160], [150, 100]].map((p, i) => (
          <line key={i} x1="150" y1="100" x2={p[0]} y2={p[1]} stroke={TERRA} strokeOpacity="0.3" />
        ))}
        {[[150, 40], [60, 100], [240, 100], [100, 160], [200, 160], [150, 100]].map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="7" fill={i === 5 ? TERRA : "hsl(var(--secondary))"} stroke={TEAL} />
        ))}
      </svg>
    );
  }
  if (kind === "map") {
    const pts = [[80, 60], [210, 50], [250, 120], [180, 160], [60, 140]];
    const pins = [[110, 85], [175, 75], [150, 120], [220, 110], [90, 130]];
    return (
      <svg viewBox="0 0 300 200" className="w-full h-full">
        <rect width="300" height="200" fill="hsl(var(--secondary))" />
        <polygon points={pts.map((p) => p.join(",")).join(" ")} fill={TEAL} opacity="0.08" stroke={TEAL} strokeOpacity="0.35" strokeWidth="1.5" />
        {Array.from({ length: 4 }).map((_, i) => (
          <circle key={i} cx="150" cy="100" r={26 + i * 16} fill="none" stroke={TERRA} strokeOpacity={0.12 - i * 0.02} strokeWidth="1" />
        ))}
        {pins.map((p, i) =>
          pins.slice(i + 1).map((q, j) => (
            <line key={`${i}-${j}`} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={TERRA} strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />
          ))
        )}
        {pins.map(([x, y], i) => (
          <g key={i}>
            <path d={`M${x} ${y} L${x - 5} ${y + 12} L${x + 5} ${y + 12} Z`} fill={TERRA} />
            <circle cx={x} cy={y} r="5.5" fill={TERRA} />
            <circle cx={x} cy={y} r="2.5" fill="hsl(var(--card))" />
            <circle cx={x} cy={y} r="11" fill="none" stroke={TERRA} strokeOpacity="0.5">
              <animate attributeName="r" values="6;16;6" dur="3.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="3.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <rect width="300" height="200" fill="hsl(var(--secondary))" />
      <rect x="20" y="18" width="260" height="16" rx="4" fill="hsl(var(--card))" stroke={TEAL} strokeOpacity="0.25" />
      <circle cx="30" cy="26" r="2.5" fill={TERRA} />
      <rect x="40" y="23" width="120" height="6" rx="2" fill={MUTED} opacity="0.35" />
      <rect x="240" y="23" width="30" height="6" rx="2" fill={TERRA} opacity="0.7" />
      <rect x="20" y="44" width="78" height="34" rx="5" fill="hsl(var(--card))" stroke={TEAL} strokeOpacity="0.25" />
      <rect x="28" y="51" width="34" height="5" rx="2" fill={MUTED} opacity="0.3" />
      <text x="28" y="72" fontSize="13" fontWeight="700" fill={TEAL}>87%</text>
      <rect x="111" y="44" width="78" height="34" rx="5" fill="hsl(var(--card))" stroke={TEAL} strokeOpacity="0.25" />
      <rect x="119" y="51" width="34" height="5" rx="2" fill={MUTED} opacity="0.3" />
      <text x="119" y="72" fontSize="13" fontWeight="700" fill={TERRA}>+24</text>
      <rect x="202" y="44" width="78" height="34" rx="5" fill="hsl(var(--card))" stroke={TEAL} strokeOpacity="0.25" />
      <rect x="210" y="51" width="34" height="5" rx="2" fill={MUTED} opacity="0.3" />
      <text x="210" y="72" fontSize="13" fontWeight="700" fill={TEAL}>12</text>
      <rect x="20" y="86" width="148" height="96" rx="5" fill="hsl(var(--card))" stroke={TEAL} strokeOpacity="0.25" />
      <rect x="28" y="93" width="50" height="5" rx="2" fill={MUTED} opacity="0.3" />
      {[38, 58, 46, 70, 54, 80].map((h, i) => (
        <rect key={i} x={28 + i * 22} y={172 - h} width="14" height={h} rx="2.5" fill={i % 2 ? TERRA : TEAL} opacity={i % 2 ? 0.85 : 0.5} />
      ))}
      <path d="M28 150 L50 130 L72 138 L94 110 L116 120 L138 96" fill="none" stroke={TEAL} strokeWidth="1.5" />
      <rect x="178" y="86" width="102" height="96" rx="5" fill="hsl(var(--card))" stroke={TEAL} strokeOpacity="0.25" />
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

function Pausable({ kind }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const svg = el.querySelector("svg");
    if (!svg) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      try { svg.pauseAnimations && svg.pauseAnimations(); } catch {}
      return;
    }
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          try {
            if (e.isIntersecting) svg.unpauseAnimations && svg.unpauseAnimations();
            else svg.pauseAnimations && svg.pauseAnimations();
          } catch {}
        }
      },
      { rootMargin: "120px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="w-full h-full select-none">
      <Visual kind={kind} />
    </div>
  );
}

export default function Modules() {
  return (
    <section id="como-funciona" className="relative py-24 lg:py-32 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-primary font-medium text-sm">Como funciona</span>
          <h2 className="font-heading font-black text-3xl lg:text-5xl mt-3 leading-[1.1] tracking-tight text-balance">
            Quatro dimensões para conhecer melhor o território
          </h2>
          <div className="mt-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              A SCAMBIO.IA parte de uma ideia simples: não existe conhecimento
              sobre um território sem relação com ele.
            </p>
            <p>
              É na conversa, na observação, na presença, nos documentos, nas
              histórias, nos acontecimentos e nos dados que uma realidade vai se
              tornando mais compreensível.
            </p>
            <p>
              A plataforma ajuda a reunir essas informações e colocá-las em
              relação. O que foi ouvido em uma reunião pode ser retomado meses
              depois. Uma fotografia pode ajudar a compreender uma mudança. Uma
              demanda pode ser relacionada ao seu histórico. Um dado público pode
              ampliar a compreensão de uma situação observada no campo.
            </p>
            <p className="text-foreground font-medium">
              O conhecimento vai sendo construído assim: pela relação entre
              diferentes informações e pela capacidade de enxergar o contexto.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {PILARES.map((m) => (
            <article
              key={m.id}
              className="group glass rounded-2xl p-6 lg:p-10 grid lg:grid-cols-12 gap-8 items-start hover:border-primary/40 transition-colors"
            >
              <div className="lg:col-span-7">
                <span className="text-sm font-mono text-primary">{m.tag}</span>
                <h3 className="mt-3 font-heading font-bold text-2xl lg:text-3xl leading-tight text-balance">
                  {m.title}
                </h3>
                {m.lead && (
                  <p className="mt-3 text-lg text-foreground font-medium">{m.lead}</p>
                )}
                <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                  {m.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {m.note && (
                  <p className="mt-5 text-foreground font-medium border-l-2 border-primary pl-5 italic">
                    {m.note}
                  </p>
                )}
              </div>
              <div className="lg:col-span-5">
                <div className="aspect-[3/2] rounded-xl glass overflow-hidden p-4">
                  <Pausable kind={m.visual} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}