import {
  Mic,
  Camera,
  Video,
  MessageSquare,
  NotebookPen,
  Share2,
  Files,
  Newspaper,
} from "lucide-react";

const CATEGORIES = [
  { icon: Mic, label: "Áudios" },
  { icon: Camera, label: "Fotos" },
  { icon: Video, label: "Vídeos" },
  { icon: MessageSquare, label: "Entrevistas" },
  { icon: NotebookPen, label: "Relatos de campo" },
  { icon: Share2, label: "Interações" },
  { icon: Files, label: "Documentos e relatórios" },
  { icon: Newspaper, label: "Notícias e referências externas" },
];

const EVIDENCE = [
  "Uma entrevista pode revelar uma percepção.",
  "Uma fotografia pode registrar uma transformação.",
  "Uma reunião pode indicar uma demanda.",
  "Um relatório pode contextualizar um acontecimento.",
  "Uma notícia pode registrar uma mudança relevante.",
];

export default function Capture() {
  return (
    <section id="captura" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary mb-6">
          <span className="w-6 h-px bg-primary" />
          Captura
        </span>

        <h2 className="font-heading font-black text-4xl sm:text-5xl leading-[1.08] tracking-tight text-balance max-w-2xl">
          Conhecimento territorial amplificado
        </h2>

        <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed max-w-3xl">
          <p className="text-lg lg:text-xl font-medium text-foreground">
            O território produz informação de muitas formas. A SCAMBIO.IA
            organiza essas evidências em um mesmo contexto.
          </p>
          <p>
            Áudios, fotos, vídeos, entrevistas, relatos, registros de interação,
            documentos, relatórios e notícias podem alimentar a base de
            conhecimento da plataforma.
          </p>
          <p>
            Esses conteúdos podem ser organizados e relacionados a pessoas,
            organizações, comunidades, localidades, temas, demandas,
            acontecimentos e períodos, permitindo construir uma visão mais
            completa do que acontece no território.
          </p>
        </div>

        {/* Categorias */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-start gap-3 rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium text-foreground leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Fio de evidências */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Quando conectadas, viram evidência
            </h3>
            <ul className="relative space-y-5 pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-primary/25">
              {EVIDENCE.map((line) => (
                <li key={line} className="relative text-muted-foreground leading-relaxed">
                  <span className="absolute -left-[1.15rem] top-2.5 h-2 w-2 rounded-full bg-primary ring-4 ring-secondary/30" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-2">
            <p className="text-muted-foreground leading-relaxed">
              Quando essas informações são conectadas, deixam de ser apenas
              arquivos separados e passam a compor evidências sobre o território
              e suas relações.
            </p>
            <p className="mt-8 font-heading font-black text-2xl sm:text-3xl leading-tight text-foreground">
              Da captura à evidência.
              <span className="block text-primary">Da evidência ao conhecimento.</span>
            </p>
          </div>
        </div>

        <p className="mt-16 max-w-3xl text-muted-foreground leading-relaxed border-t border-border pt-8">
          Isso reforça uma ideia muito interessante para a SCAMBIO.IA: o
          conhecimento territorial não vem de uma única fonte. Ele é construído
          pela combinação de diferentes evidências e pela compreensão das
          relações entre elas.
        </p>
      </div>
    </section>
  );
}