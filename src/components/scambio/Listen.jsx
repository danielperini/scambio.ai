import {
  Mic, Camera, Video, MessageSquare, NotebookPen, Share2,
  Files, Newspaper, Database, FileText,
} from "lucide-react";

const SOURCES = [
  { icon: Mic, label: "Áudio" },
  { icon: Camera, label: "Foto" },
  { icon: Video, label: "Vídeo" },
  { icon: MessageSquare, label: "Entrevista" },
  { icon: NotebookPen, label: "Relato" },
  { icon: Share2, label: "Interação" },
  { icon: Files, label: "Documento" },
  { icon: FileText, label: "Relatório" },
  { icon: Newspaper, label: "Notícia" },
  { icon: Database, label: "Dados públicos" },
];

const PERSPECTIVES = [
  "Uma entrevista revela uma percepção.",
  "Um relato registra uma experiência.",
  "Uma fotografia evidencia uma situação.",
  "Uma reunião pode revelar uma demanda.",
  "Um documento apresenta uma decisão.",
  "Uma notícia registra um acontecimento.",
  "Um indicador público ajuda a dimensionar uma realidade.",
];

export default function Listen() {
  return (
    <section id="escuta-observacao" className="relative py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary mb-5">
          <span className="w-6 h-px bg-primary" />
          01 — Escuta &amp; Observação
        </span>

        <h2 className="font-heading font-black text-4xl sm:text-5xl leading-[1.08] tracking-tight text-balance">
          Escutar o território. Observar o que acontece.
        </h2>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed max-w-3xl">
          <p className="text-lg lg:text-xl font-medium text-foreground">
            Conhecer um território começa pela presença, pela escuta e pela observação.
          </p>
          <p>
            Antes de interpretar indicadores, identificar riscos ou tomar decisões,
            é preciso compreender a realidade que existe naquele lugar. Quem vive ali,
            como as pessoas se relacionam, quais são seus modos de vida, o que mudou,
            o que permanece, quais são suas demandas, recursos, conflitos e expectativas.
          </p>
          <p>
            A SCAMBIO.IA organiza informações produzidas diretamente nas relações com o
            território: conversas, reuniões, entrevistas, visitas de campo, relatos,
            observações, atividades e interações com comunidades, pessoas e organizações.
          </p>
          <p>
            Mas uma leitura territorial consistente não se limita ao contato direto.
            Também podem ser incorporadas fotografias, vídeos, áudios, documentos,
            relatórios, PDFs, textos, documentos oficiais, notícias e outras fontes
            que contribuam para compreender determinado contexto.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {SOURCES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-xs font-medium text-foreground text-center">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:items-start">
          <div>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-5">
              Cada registro traz uma perspectiva
            </h3>
            <ul className="relative space-y-4 pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-primary/25">
              {PERSPECTIVES.map((line) => (
                <li key={line} className="relative text-muted-foreground leading-relaxed">
                  <span className="absolute -left-[1.15rem] top-2.5 h-2 w-2 rounded-full bg-primary ring-4 ring-secondary/30" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pt-2">
            <p className="text-muted-foreground leading-relaxed">
              Quando essas informações podem ser relacionadas, o território deixa de
              ser observado por uma única lente.
            </p>
            <p className="mt-8 font-heading font-black text-2xl sm:text-3xl leading-tight text-foreground">
              Escutar. Observar.
              <span className="block text-primary">Contextualizar.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}