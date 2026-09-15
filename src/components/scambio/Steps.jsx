import { Image } from "@/components/ui/image";

const TEAL = "#1E4E5A";
const TERRA = "#C9795C";
const MUTED = "#5A7775";
const LIGHT = "#F4F8F6";

const IMG = {
  escutar:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/a7c2f7168_cae3d2167_preview-lens-d70dff1d-0e8d-4b51-b55d-00cb87ae86c0.png",
  observar:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/20f6bc015_15f20d64b_preview-lens-4a4ed909-b130-46cb-94ae-15ef5a28d78f.png",
  registrar:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/ed694d05a_cae3d2167_preview-lens-d70dff1d-0e8d-4b51-b55d-00cb87ae86c0.png",
  relacionar:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/06b9f7132_787b3334d_preview-lens-56699cfd-992d-46ad-be01-0b16b226c1f3.png",
  organizar:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/f6ec655b7_5e4f1ec63_preview-lens-99bf9daa-04c9-42c8-9de5-7addd9d696e9.png",
  contextualizar:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/3a084ff9f_234706ab4_preview-lens-8382cf32-18b5-4184-950a-c2bb7418a834.png",
  analisar:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/534587245_2027f2c5b_preview-lens-625ce2ff-a510-4cf4-84a3-ba50125b1228.png",
  compreender:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/d3b8b0d3b_92d5380b2_preview-lens-def04ab6-f0d9-44e1-99f5-b2b55db8a11a.png",
  decidir:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/9e97e5f5f_5bf617207_preview-lens-b17e181e-bb92-4f4c-b9f7-9f16b073f9e2.png",
};

export const STEPS = [
  { n: "01", t: "Escutar", d: "Sistema de escuta com código único automático, transcrição de áudio (Whisper), classificação de tipo/sentimento/temperatura e filtros avançados por comunidade, tema e relacionamento. Cada voz do território vira evidência rastreável.", kind: "wave", img: IMG.escutar },
  { n: "02", t: "Observar", d: "Perceber o que acontece no campo e no contexto.", kind: "pins", img: IMG.observar },
  { n: "03", t: "Registrar", d: "Documentar registros de forma estruturada.", kind: "form", img: IMG.registrar },
  { n: "04", t: "Organizar", d: "Agenda inteligente com compromissos e encontros identificados, organizados por status (prevista, confirmada, acordada, realizada) e por comunidade e tema. Atrasos são sinalizados com prazo, responsável e localidade, conectando cada ação ao território e ao relacionamento.", kind: "grid", img: IMG.organizar },
  { n: "05", t: "Relacionar", d: "Base de 188 stakeholders mapeados, com segmentação entre pessoas (177) e entidades (11), filtros por comunidade/status/papel e mapa de rede. Stakeholders são detectados automaticamente quando mencionados nos registros.", kind: "net", img: IMG.relacionar },
  { n: "06", t: "Contextualizar", d: "Camadas de contexto sobre o território.", kind: "layers", img: IMG.contextualizar },
  { n: "07", t: "Analisar", d: "Comparar indicadores e visualizar padrões.", kind: "chart", img: IMG.analisar },
  { n: "08", t: "Compreender", d: "Síntese da inteligência territorial em relatórios alinhados a GRI, Pacto Global, ODS e CSRD/ESRS. Define escopo (território, comunidade ou plataforma), período e compila registros, dados secundários e devolutivas em evidências reportáveis.", kind: "report", img: IMG.compreender },
  { n: "09", t: "Decidir", d: "Apoiar a tomada de decisão com evidências.", kind: "board", img: IMG.decidir },
];

function Screen({ kind, img }) {
  const common = { viewBox: "0 0 300 188", className: "w-full h-full" };
  if (img)
    return (
      <div className="aspect-[16/10] w-full bg-secondary/40">
        <Image
          src={img}
          alt="Tela da plataforma SCAMBIO.IA"
          className="w-full h-full"
          fittingType="fit"
        />
      </div>
    );
  if (kind === "wave")
    return (
      <svg {...common}>
        <rect width="300" height="188" fill={LIGHT} />
        {Array.from({ length: 5 }).map((_, i) => (
          <path key={i} d={`M0 ${90 + i * 8} Q75 ${50 - i * 8 + 90}, 150 ${90 + i * 8} T300 ${90 + i * 8}`} fill="none" stroke={TERRA} strokeOpacity={0.85 - i * 0.12} strokeWidth="1.5" />
        ))}
        {[40, 150, 260].map((x, i) => (
          <circle key={i} cx={x} cy="90" r="4" fill={TEAL} />
        ))}
      </svg>
    );
  if (kind === "pins")
    return (
      <svg {...common}>
        <rect width="300" height="188" fill={LIGHT} />
        <path d="M0 140 Q75 110 150 130 T300 120" fill="none" stroke={TEAL} strokeOpacity="0.3" strokeWidth="1.5" />
        {[[70, 70], [150, 50], [230, 80], [120, 110]].map(([x, y], i) => (
          <g key={i}>
            <path d={`M${x} ${y} L${x - 6} ${y + 14} L${x + 6} ${y + 14} Z`} fill={TERRA} />
            <circle cx={x} cy={y} r="6" fill={TERRA} />
            <circle cx={x} cy={y} r="2.5" fill="#fff" />
          </g>
        ))}
      </svg>
    );
  if (kind === "form")
    return (
      <svg {...common}>
        <rect width="300" height="188" fill={LIGHT} />
        <rect x="30" y="28" width="100" height="10" rx="2" fill={TEAL} opacity="0.5" />
        <rect x="30" y="50" width="240" height="22" rx="4" fill="#fff" stroke={TEAL} strokeOpacity="0.3" />
        <rect x="30" y="82" width="240" height="22" rx="4" fill="#fff" stroke={TEAL} strokeOpacity="0.3" />
        <rect x="30" y="114" width="160" height="22" rx="4" fill="#fff" stroke={TEAL} strokeOpacity="0.3" />
        <rect x="210" y="114" width="60" height="22" rx="4" fill={TERRA} />
      </svg>
    );
  if (kind === "grid")
    return (
      <svg {...common}>
        <rect width="300" height="188" fill={LIGHT} />
        {Array.from({ length: 6 }).map((_, i) => {
          const x = 30 + (i % 3) * 85;
          const y = 30 + Math.floor(i / 3) * 65;
          return (
            <g key={i}>
              <rect x={x} y={y} width="70" height="50" rx="6" fill="#fff" stroke={TEAL} strokeOpacity="0.3" />
              <rect x={x + 8} y={y + 8} width="20" height="6" rx="2" fill={TERRA} opacity="0.6" />
              <rect x={x + 8} y={y + 22} width="40" height="4" rx="2" fill={MUTED} opacity="0.3" />
              <rect x={x + 8} y={y + 32} width="30" height="4" rx="2" fill={MUTED} opacity="0.3" />
            </g>
          );
        })}
      </svg>
    );
  if (kind === "net")
    return (
      <svg {...common}>
        <rect width="300" height="188" fill={LIGHT} />
        {[[150, 94], [70, 40], [230, 50], [60, 140], [240, 130], [150, 150]].map((p, i) =>
          i === 0 ? null : <line key={i} x1="150" y1="94" x2={p[0]} y2={p[1]} stroke={TERRA} strokeOpacity="0.4" />
        )}
        {[[150, 94], [70, 40], [230, 50], [60, 140], [240, 130], [150, 150]].map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="7" fill={i === 0 ? TERRA : "#fff"} stroke={TEAL} />
        ))}
      </svg>
    );
  if (kind === "layers")
    return (
      <svg {...common}>
        <rect width="300" height="188" fill={LIGHT} />
        <polygon points="150,40 250,80 150,110 50,80" fill={TEAL} opacity="0.18" />
        <polygon points="150,70 230,100 150,125 70,100" fill={TERRA} opacity="0.35" />
        <polygon points="150,95 210,118 150,135 90,118" fill={TEAL} opacity="0.55" />
        <circle cx="150" cy="60" r="3" fill={TERRA} />
      </svg>
    );
  if (kind === "chart")
    return (
      <svg {...common}>
        <rect width="300" height="188" fill={LIGHT} />
        {[40, 70, 50, 90, 65, 100].map((h, i) => (
          <rect key={i} x={30 + i * 40} y={150 - h} width="26" height={h} rx="3" fill={i % 2 ? TERRA : TEAL} opacity={i % 2 ? 0.85 : 0.5} />
        ))}
        <path d="M30 120 L90 90 L150 100 L210 70 L270 80" fill="none" stroke={TEAL} strokeWidth="2" />
      </svg>
    );
  if (kind === "report")
    return (
      <svg {...common}>
        <rect width="300" height="188" fill={LIGHT} />
        <rect x="40" y="28" width="220" height="132" rx="6" fill="#fff" stroke={TEAL} strokeOpacity="0.3" />
        <rect x="54" y="42" width="80" height="8" rx="2" fill={TEAL} opacity="0.5" />
        <rect x="54" y="60" width="180" height="4" rx="2" fill={MUTED} opacity="0.3" />
        <rect x="54" y="70" width="160" height="4" rx="2" fill={MUTED} opacity="0.3" />
        <rect x="54" y="86" width="90" height="30" rx="4" fill={TERRA} opacity="0.25" />
        <rect x="154" y="86" width="90" height="30" rx="4" fill={TEAL} opacity="0.2" />
        <rect x="54" y="128" width="120" height="4" rx="2" fill={MUTED} opacity="0.3" />
        <rect x="54" y="138" width="150" height="4" rx="2" fill={MUTED} opacity="0.3" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect width="300" height="188" fill={LIGHT} />
      <rect x="30" y="28" width="240" height="132" rx="6" fill="#fff" stroke={TEAL} strokeOpacity="0.3" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={48} y={44 + i * 36} width="80" height="26" rx="4" fill={i === 1 ? TERRA : TEAL} opacity={i === 1 ? 0.85 : 0.4} />
          <rect x={140} y={50 + i * 36} width="40" height="6" rx="2" fill={MUTED} opacity="0.3" />
          <rect x={140} y={62 + i * 36} width="90" height="4" rx="2" fill={MUTED} opacity="0.25" />
        </g>
      ))}
    </svg>
  );
}

export function Device({ step }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="rounded-t-2xl border border-border bg-background p-2 shadow-sm">
          <div className="rounded-lg overflow-hidden bg-secondary/40">
            <Screen kind={step.kind} img={step.img} />
          </div>
        </div>
        <div className="h-2.5 rounded-b-xl bg-foreground/80 mx-auto w-1/3" />
      </div>
    </div>
  );
}