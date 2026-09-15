// Ilustrações editoriais manuais (SVG) para os blocos narrativos.
// Paleta institucional: Deep Teal + Terracota + tons terrosos.

const TEAL = "#1E4E5A";
const TERRA = "#C9795C";
const MUTED = "#5A7775";
const LIGHT = "#F4F8F6";
const CREAM = "#F5EFE6";
const SAND = "#E8DCC9";
const GOLD = "#C9A24B";
const SLATE = "#6B7E7D";

const VB = { viewBox: "0 0 480 300", className: "w-full h-full" };

/* 01 — Campo e dados: caderno de campo + gráfico demográfico sobrepostos */
function Campo() {
  return (
    <svg {...VB}>
      <rect width="480" height="300" fill={LIGHT} />
      {/* caderno */}
      <g transform="rotate(-6 180 150)">
        <rect x="70" y="60" width="220" height="180" rx="6" fill={CREAM} stroke={TEAL} strokeOpacity="0.35" />
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1="88" y1={92 + i * 16} x2="272" y2={92 + i * 16} stroke={TEAL} strokeOpacity="0.12" />
        ))}
        <circle cx="80" cy="92" r="3" fill={TERRA} />
        <circle cx="80" cy="108" r="3" fill={TERRA} />
        <circle cx="80" cy="124" r="3" fill={TERRA} />
        <path d="M88 100 q14 -6 28 0 t28 0" fill="none" stroke={MUTED} strokeWidth="1.4" />
        <path d="M88 116 q14 -4 28 0 t28 0" fill="none" stroke={MUTED} strokeWidth="1.4" />
      </g>
      {/* gráfico demográfico translúcido */}
      <g transform="rotate(7 320 160)" opacity="0.92">
        <rect x="210" y="70" width="200" height="150" rx="6" fill="#fff" stroke={TERRA} strokeOpacity="0.5" />
        <line x1="230" y1="200" x2="390" y2="200" stroke={TEAL} strokeOpacity="0.4" />
        <line x1="230" y1="90" x2="230" y2="200" stroke={TEAL} strokeOpacity="0.4" />
        {[60, 95, 70, 110, 85].map((h, i) => (
          <rect key={i} x={240 + i * 30} y={200 - h} width="20" height={h} rx="3" fill={i % 2 ? TERRA : TEAL} opacity={i % 2 ? 0.75 : 0.5} />
        ))}
      </g>
      {/* convergência */}
      <path d="M180 150 Q260 150 320 160" fill="none" stroke={TERRA} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="250" cy="155" r="4" fill={TERRA} />
    </svg>
  );
}

/* 02 — Comparação: três dioramas sob um céu compartilhado */
function Comparacao() {
  const dia = (cx, label) => (
    <g>
      <ellipse cx={cx} cy="200" rx="62" ry="10" fill={TEAL} opacity="0.08" />
      <rect x={cx - 50} y="150" width="100" height="50" rx="6" fill={CREAM} stroke={TEAL} strokeOpacity="0.3" />
      {/* casas */}
      <polygon points={`${cx - 28},150 ${cx - 18},135 ${cx - 8},150`} fill={TERRA} opacity="0.8" />
      <polygon points={`${cx + 18},150 ${cx + 28},138 ${cx + 38},150`} fill={TEAL} opacity="0.7" />
      <rect x={cx - 20} y="160" width="12" height="18" rx="2" fill={TEAL} opacity="0.35" />
      <rect x={cx + 10} y="162" width="14" height="16" rx="2" fill={TERRA} opacity="0.4" />
      <rect x={cx - 42} y="185" width="84" height="3" rx="1.5" fill={MUTED} opacity="0.3" />
      {label}
    </g>
  );
  return (
    <svg {...VB}>
      <rect width="480" height="300" fill={LIGHT} />
      <path d="M0 70 Q240 50 480 70 L480 120 L0 120 Z" fill={SAND} opacity="0.5" />
      <circle cx="240" cy="48" r="14" fill={GOLD} opacity="0.35" />
      {/* linhas conectoras */}
      <path d="M120 175 Q240 130 360 175" fill="none" stroke={TERRA} strokeOpacity="0.4" strokeDasharray="3 3" />
      <path d="M180 175 Q240 150 300 175" fill="none" stroke={TEAL} strokeOpacity="0.3" strokeDasharray="3 3" />
      {dia(120)}
      {dia(240, <circle cx="252" cy="175" r="3" fill={TERRA} />)}
      {dia(360, <rect x="354" y="170" width="6" height="10" rx="1" fill={TERRA} />)}
      {[120, 240, 360].map((x) => (
        <circle key={x} cx={x} cy="175" r="3.5" fill={TERRA} />
      ))}
    </svg>
  );
}

/* 03 — Tecnologia: caderno aberto + camada translúcida que organiza */
function Tecnologia() {
  return (
    <svg {...VB}>
      <rect width="480" height="300" fill={LIGHT} />
      {/* mesa */}
      <rect x="40" y="220" width="400" height="8" rx="3" fill={MUTED} opacity="0.25" />
      {/* caderno aberto */}
      <path d="M90 210 L240 120 L390 210 L240 150 Z" fill={CREAM} stroke={TEAL} strokeOpacity="0.4" />
      <line x1="240" y1="120" x2="240" y2="150" stroke={TEAL} strokeOpacity="0.3" />
      {Array.from({ length: 4 }).map((_, i) => (
        <line key={i} x1={120 + i * 14} y1={183 - i * 6} x2={220} y2={133 + i * 3} stroke={MUTED} strokeOpacity="0.25" />
      ))}
      {/* camada translúcida organizando */}
      <g opacity="0.85">
        <rect x="120" y="60" width="240" height="120" rx="8" fill="#fff" stroke={TERRA} strokeOpacity="0.5" strokeDasharray="5 4" />
        {/* waveform */}
        <path d="M140 110 q8 -14 16 0 t16 0 t16 0 t16 0" fill="none" stroke={TERRA} strokeWidth="1.6" />
        {/* linhas alinhadas */}
        {[78, 96, 114].map((y, i) => (
          <rect key={i} x="230" y={y} width={120 - i * 18} height="3" rx="1.5" fill={TEAL} opacity={0.45} />
        ))}
        <rect x="230" y="132" width="80" height="14" rx="3" fill={TERRA} opacity="0.35" />
        <circle cx="140" cy="150" r="5" fill={TERRA} opacity="0.5" />
      </g>
      {/* brilho */}
      <path d="M240 60 L240 40" stroke={GOLD} strokeOpacity="0.6" strokeWidth="2" />
    </svg>
  );
}

/* 04 — Consulta: pessoa + orbe de luz sobre pastas + constelação */
function Consulta() {
  return (
    <svg {...VB}>
      <rect width="480" height="300" fill={LIGHT} />
      {/* pastas */}
      <rect x="60" y="210" width="120" height="40" rx="4" fill={CREAM} stroke={TEAL} strokeOpacity="0.3" />
      <rect x="72" y="200" width="120" height="40" rx="4" fill="#fff" stroke={TEAL} strokeOpacity="0.3" />
      <rect x="84" y="190" width="120" height="40" rx="4" fill={SAND} stroke={TERRA} strokeOpacity="0.4" />
      {/* pessoa */}
      <circle cx="140" cy="160" r="11" fill={TEAL} opacity="0.8" />
      <path d="M128 188 q12 -10 24 0 l4 22 h-32 z" fill={TEAL} opacity="0.8" />
      {/* orbe */}
      <g>
        <circle cx="320" cy="120" r="42" fill={GOLD} opacity="0.12" />
        <circle cx="320" cy="120" r="26" fill={GOLD} opacity="0.2" />
        <circle cx="320" cy="120" r="12" fill="#fff" stroke={GOLD} strokeWidth="1.5" />
        {/* raio */}
        <path d="M200 175 Q260 150 300 128" fill="none" stroke={GOLD} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 4" />
      </g>
      {/* constelação */}
      {[[360, 80], [392, 96], [376, 130], [412, 150], [350, 150]].map(([x, y], i, a) => (
        <g key={i}>
          <circle cx={x} cy={y} r="3" fill={TERRA} />
          {i < a.length - 1 && (
            <line x1={x} y1={y} x2={a[i + 1][0]} y2={a[i + 1][1]} stroke={TERRA} strokeOpacity="0.4" strokeWidth="1" />
          )}
        </g>
      ))}
    </svg>
  );
}

/* 05 — Memória: prateleira de cadernos/fotos/cassetes + fio dourado */
function Memoria() {
  return (
    <svg {...VB}>
      <rect width="480" height="300" fill={LIGHT} />
      {/* prateleira */}
      {[80, 150].map((y) => (
        <rect key={y} x="60" y={y} width="360" height="6" rx="3" fill={MUTED} opacity="0.35" />
      ))}
      {/* cadernos prateleira 1 */}
      {[80, 110, 140, 170, 200, 230, 260, 290, 320, 350, 380].map((x, i) => (
        <rect key={x} x={x} y={94} width="14" height="56" rx="2" fill={i % 3 ? TEAL : TERRA} opacity={0.4 + (i % 4) * 0.12} />
      ))}
      {/* prateleira 2: fotos + cassete */}
      <rect x="80" y="164" width="40" height="46" rx="3" fill={CREAM} stroke={TEAL} strokeOpacity="0.3" />
      <circle cx="100" cy="187" r="10" fill={TERRA} opacity="0.4" />
      <rect x="140" y="166" width="64" height="42" rx="4" fill={SAND} stroke={TEAL} strokeOpacity="0.3" />
      <rect x="150" y="172" width="20" height="30" rx="2" fill={TEAL} opacity="0.3" />
      <rect x="174" y="172" width="24" height="30" rx="2" fill={TERRA} opacity="0.35" />
      <rect x="220" y="168" width="60" height="38" rx="4" fill={MUTED} opacity="0.45" />
      <rect x="228" y="174" width="44" height="26" rx="2" fill={CREAM} />
      <circle cx="236" cy="187" r="5" fill={TEAL} opacity="0.5" />
      <circle cx="264" cy="187" r="5" fill={TEAL} opacity="0.5" />
      {/* fio dourado conectando */}
      <path d="M90 94 Q240 40 390 94" fill="none" stroke={GOLD} strokeWidth="1.8" strokeDasharray="2 3" />
      <circle cx="90" cy="94" r="3" fill={GOLD} />
      <circle cx="390" cy="94" r="3" fill={GOLD} />
    </svg>
  );
}

/* 06 — Decisão: mesa redonda vista de cima com fontes ao redor de espaço vazio */
function Decisao() {
  return (
    <svg {...VB}>
      <rect width="480" height="300" fill={LIGHT} />
      <ellipse cx="240" cy="150" rx="170" ry="110" fill={CREAM} stroke={TEAL} strokeOpacity="0.3" />
      {/* espaço vazio central */}
      <circle cx="240" cy="150" r="34" fill={LIGHT} stroke={TERRA} strokeOpacity="0.4" strokeDasharray="4 4" />
      {/* mapa */}
      <g transform="translate(120 90)">
        <rect width="44" height="32" rx="3" fill="#fff" stroke={TEAL} strokeOpacity="0.4" />
        <path d="M6 22 l10 -8 8 6 12 -10" fill="none" stroke={TERRA} strokeWidth="1.4" />
        <circle cx="30" cy="12" r="2" fill={TERRA} />
      </g>
      {/* caderno */}
      <g transform="translate(300 80)">
        <rect width="40" height="30" rx="3" fill={SAND} stroke={TEAL} strokeOpacity="0.4" />
        {Array.from({ length: 4 }).map((_, i) => (
          <line key={i} x1="6" y1={8 + i * 6} x2="34" y2={8 + i * 6} stroke={MUTED} opacity="0.3" />
        ))}
      </g>
      {/* cards demográficos */}
      <g transform="translate(110 180)">
        <rect width="30" height="22" rx="3" fill="#fff" stroke={TEAL} strokeOpacity="0.35" />
        <rect width="30" height="22" rx="3" fill={TERRA} opacity="0.3" transform="translate(6 -5)" />
      </g>
      {/* transcrição */}
      <g transform="translate(310 175)">
        <rect width="44" height="28" rx="3" fill={CREAM} stroke={TERRA} strokeOpacity="0.4" />
        <path d="M6 9 q8 -4 16 0 t16 0" fill="none" stroke={TERRA} strokeWidth="1.2" />
        <path d="M6 17 q8 -3 16 0 t16 0" fill="none" stroke={MUTED} strokeWidth="1" />
      </g>
      {/* linhas para o centro */}
      {[142, 320, 125, 330].map((x, i) => {
        const ys = [106, 95, 191, 189];
        return <line key={i} x1={x} y1={ys[i]} x2="240" y2="150" stroke={TERRA} strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />;
      })}
    </svg>
  );
}

/* 07 — Relatórios: pilha se desdobrando em três relatórios (ramos) */
function Relatorios() {
  return (
    <svg {...VB}>
      <rect width="480" height="300" fill={LIGHT} />
      {/* pilha raiz */}
      <rect x="200" y="220" width="80" height="14" rx="2" fill={MUTED} opacity="0.35" />
      <rect x="206" y="206" width="80" height="14" rx="2" fill={TEAL} opacity="0.4" />
      <rect x="212" y="192" width="80" height="14" rx="2" fill={TERRA} opacity="0.5" />
      {/* ramo central */}
      <path d="M250 192 Q250 150 250 120" fill="none" stroke={MUTED} strokeOpacity="0.4" strokeWidth="1.5" />
      {/* três relatórios */}
      {/* compacto */}
      <g transform="translate(96 110)">
        <rect width="46" height="56" rx="4" fill="#fff" stroke={TERRA} strokeOpacity="0.5" />
        <rect x="6" y="8" width="20" height="4" rx="1" fill={TERRA} opacity="0.7" />
        <rect x="6" y="16" width="34" height="3" rx="1" fill={MUTED} opacity="0.3" />
        <rect x="6" y="24" width="28" height="3" rx="1" fill={MUTED} opacity="0.3" />
        <rect x="6" y="40" width="16" height="8" rx="2" fill={TERRA} opacity="0.4" />
        <path d="M142 138 Q120 120 142 138" fill="none" stroke={MUTED} strokeOpacity="0.3" />
        <path d="M250 192 Q190 150 142 138" fill="none" stroke={MUTED} strokeOpacity="0.3" strokeWidth="1.5" />
      </g>
      {/* narrativo */}
      <g transform="translate(217 96)">
        <rect width="50" height="70" rx="4" fill={CREAM} stroke={TEAL} strokeOpacity="0.5" />
        <rect x="6" y="8" width="26" height="4" rx="1" fill={TEAL} opacity="0.6" />
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x="6" y={18 + i * 7} width="38" height="3" rx="1" fill={MUTED} opacity={0.3} />
        ))}
        <path d="M250 192 Q250 150 242 166" fill="none" stroke={MUTED} strokeOpacity="0.3" strokeWidth="1.5" />
      </g>
      {/* formal */}
      <g transform="translate(330 104)">
        <rect width="58" height="76" rx="4" fill="#fff" stroke={TEAL} strokeOpacity="0.6" />
        <rect x="8" y="10" width="42" height="6" rx="2" fill={TEAL} opacity="0.5" />
        <rect x="8" y="22" width="42" height="3" rx="1" fill={MUTED} opacity="0.3" />
        <rect x="8" y="30" width="36" height="3" rx="1" fill={MUTED} opacity="0.3" />
        <rect x="8" y="48" width="42" height="18" rx="3" fill={TEAL} opacity="0.18" />
        <path d="M250 192 Q300 150 330 142" fill="none" stroke={MUTED} strokeOpacity="0.3" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

/* 08 — Conformidade: fichário → documento com escudo + linhas para notas */
function Conformidade() {
  return (
    <svg {...VB}>
      <rect width="480" height="300" fill={LIGHT} />
      {/* fichário */}
      <g transform="translate(70 120)">
        <rect width="70" height="90" rx="4" fill={CREAM} stroke={TEAL} strokeOpacity="0.4" />
        <rect x="0" y="10" width="70" height="6" rx="2" fill={TERRA} opacity="0.6" />
        {Array.from({ length: 5 }).map((_, i) => (
          <rect key={i} x="8" y={26 + i * 12} width="54" height="3" rx="1" fill={MUTED} opacity="0.3" />
        ))}
      </g>
      {/* documento conformidade + escudo */}
      <g transform="translate(220 80)">
        <rect width="120" height="150" rx="6" fill="#fff" stroke={TEAL} strokeOpacity="0.5" />
        <rect x="14" y="16" width="60" height="6" rx="2" fill={TEAL} opacity="0.5" />
        {Array.from({ length: 4 }).map((_, i) => (
          <rect key={i} x="14" y={34 + i * 10} width="92" height="3" rx="1" fill={MUTED} opacity="0.3" />
        ))}
        {/* escudo */}
        <path d="M60 96 L84 104 L84 124 Q84 138 60 144 Q36 138 36 124 L36 104 Z" fill={GOLD} opacity="0.18" stroke={GOLD} strokeWidth="1.6" />
        <path d="M52 118 l6 8 12 -16" fill="none" stroke={TEAL} strokeWidth="2" />
      </g>
      {/* linhas para notas de campo */}
      {[
        [140, 150, 360, 150],
        [140, 165, 360, 170],
        [140, 180, 360, 195],
      ].map((l, i) => (
        <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke={TERRA} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" />
      ))}
      {/* notas de campo */}
      {[
        [372, 140],
        [372, 162],
        [372, 188],
      ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="40" height="14" rx="2" fill={SAND} stroke={TERRA} strokeOpacity="0.4" />
          <circle cx={x + 6} cy={y + 7} r="2" fill={TERRA} />
          <rect x={x + 12} y={y + 5} width="22" height="3" rx="1" fill={MUTED} opacity="0.3" />
        </g>
      ))}
    </svg>
  );
}

/* 09 — Disponibilidade: fio verde contínuo por celular, tablet e notebook */
function Disponibilidade() {
  const thread = "M40 200 Q120 120 150 180 Q220 110 250 170 Q340 100 380 150 Q430 110 460 130";
  return (
    <svg {...VB}>
      <rect width="480" height="300" fill={LIGHT} />
      {/* fio contínuo */}
      <path d={thread} fill="none" stroke={TEAL} strokeWidth="2.5" opacity="0.7" />
      <path d={thread} fill="none" stroke={GOLD} strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
      {/* celular no campo */}
      <g transform="translate(110 150)">
        <rect width="34" height="58" rx="6" fill={CREAM} stroke={TEAL} strokeOpacity="0.5" />
        <rect x="4" y="8" width="26" height="40" rx="2" fill={TEAL} opacity="0.18" />
        <circle cx="17" cy="52" r="2" fill={TERRA} />
      </g>
      {/* tablet no alpendre */}
      <g transform="translate(220 120)">
        <rect width="58" height="74" rx="8" fill="#fff" stroke={TEAL} strokeOpacity="0.5" />
        <rect x="6" y="8" width="46" height="54" rx="3" fill={SAND} />
        <path d="M12 30 q10 -6 20 0 t20 0" fill="none" stroke={TERRA} strokeWidth="1.4" />
        <circle cx="29" cy="68" r="2" fill={MUTED} />
      </g>
      {/* notebook na mesa */}
      <g transform="translate(330 110)">
        <rect width="86" height="56" rx="4" fill={CREAM} stroke={TEAL} strokeOpacity="0.5" />
        <rect x="6" y="6" width="74" height="44" rx="2" fill="#fff" />
        <rect x="14" y="14" width="24" height="3" rx="1" fill={TEAL} opacity="0.5" />
        <rect x="14" y="22" width="58" height="3" rx="1" fill={MUTED} opacity="0.3" />
        <rect x="14" y="30" width="40" height="3" rx="1" fill={MUTED} opacity="0.3" />
        <rect x="14" y="40" width="20" height="8" rx="2" fill={TERRA} opacity="0.5" />
        <rect x="0" y="56" width="86" height="6" rx="3" fill={MUTED} opacity="0.4" />
      </g>
      {/* pontos de luz no fio */}
      {[150, 250, 380].map((x, i) => (
        <circle key={x} cx={x} cy={i === 0 ? 180 : i === 1 ? 170 : 150} r="4" fill={GOLD} />
      ))}
    </svg>
  );
}

const SCENES = {
  campo: Campo,
  comparacao: Comparacao,
  tecnologia: Tecnologia,
  consulta: Consulta,
  memoria: Memoria,
  decisao: Decisao,
  relatorios: Relatorios,
  conformidade: Conformidade,
  disponibilidade: Disponibilidade,
};

export default function EditorialIllustration({ kind }) {
  const Scene = SCENES[kind];
  if (!Scene) return null;
  return (
    <div className="aspect-[16/10] w-full rounded-2xl glass overflow-hidden p-3">
      <Scene />
    </div>
  );
}