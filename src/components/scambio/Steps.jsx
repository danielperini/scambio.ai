import { Image } from "@/components/ui/image";

const TEAL = "#1E4E5A";
const TERRA = "#C9795C";
const MUTED = "#5A7775";
const LIGHT = "#F4F8F6";

const IMG = {
  registros:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/b2e2e0eaa_cae3d2167_preview-lens-d70dff1d-0e8d-4b51-b55d-00cb87ae86c0.png",
  stakeholders:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/53cde40d0_3490c87a9_preview-lens-c4f989b5-13fd-4395-8898-42f29e193bc0.png",
  dadosSecundarios:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/60b7dc7c5_234706ab4_preview-lens-8382cf32-18b5-4184-950a-c2bb7418a834.png",
  materialidade:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/e3162f3fb_aa1a5ebcb_preview-lens-a248cab4-6435-4b8b-8dfb-f74769af4d38.png",
  ods:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/bd8bb065f_b842ee917_preview-lens-de96ea78-ec3f-4cfa-afac-63b9cd725da8.png",
  referenciais:
    "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/0a58d2a2a_cbf5389a9_preview-lens-0c0d5c72-0bd2-486a-b622-08e30bb65c72.png",
};

export const STEPS = [
  { n: "01", t: "Escutar", d: "Captar vozes, falas e demandas do território, com código único, transcrição e classificação de tipo, sentimento e temperatura.", kind: "wave", img: IMG.registros },
  { n: "02", t: "Observar", d: "Perceber o que acontece no campo e no contexto, localizando sinais no mapa territorial.", kind: "pins" },
  { n: "03", t: "Registrar", d: "Documentar interações de forma estruturada — participantes, descrição, transcrição e temas.", kind: "form" },
  { n: "04", t: "Organizar", d: "Compromissos e encontros identificados, organizados por status, comunidade e tema, com atrasos sinalizados.", kind: "grid" },
  { n: "05", t: "Relacionar", d: "Mapear stakeholders — pessoas e entidades — e suas conexões em rede, detectados a partir dos registros.", kind: "net", img: IMG.stakeholders },
  { n: "06", t: "Contextualizar", d: "Camadas de contexto sobre o território, cruzando dados públicos e fontes secundárias.", kind: "layers", img: IMG.dadosSecundarios },
  { n: "07", t: "Analisar", d: "Comparar indicadores, padrões e relevância dos temas para comunidade e empresa.", kind: "chart", img: IMG.materialidade },
  { n: "08", t: "Compreender", d: "Sintetizar a inteligência territorial em relatórios alinhados a GRI, Pacto Global, ODS e CSRD/ESRS.", kind: "report", img: IMG.ods },
  { n: "09", t: "Decidir", d: "Apoiar a tomada de decisão com evidências organizadas e visões de campo e coordenação.", kind: "board", img: IMG.referenciais },
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