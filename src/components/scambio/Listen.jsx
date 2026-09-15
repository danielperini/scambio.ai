const LEAD = [
  "Conhecer um território começa pela presença, pela escuta e pela observação.",
];

const INTRO = [
  "Antes de interpretar indicadores, identificar riscos ou tomar decisões, é preciso compreender a realidade que existe naquele lugar. Quem vive ali, como as pessoas se relacionam, quais são seus modos de vida, o que mudou, o que permanece, quais são suas demandas, seus recursos, seus conflitos e suas expectativas.",
];

const PLATFORM = [
  "A SCAMBIO.IA organiza informações produzidas diretamente nas relações com o território: conversas, reuniões, entrevistas, visitas de campo, relatos, observações, atividades e interações com comunidades, pessoas e organizações.",
  "Mas uma leitura territorial consistente não se limita ao que é observado diretamente.",
  "A plataforma também pode reunir e relacionar fotografias, vídeos, áudios, documentos, relatórios, PDFs, textos, documentos oficiais, notícias, dados públicos e outras fontes secundárias que contribuam para compreender determinado contexto.",
];

const FIELD = [
  "Uma percepção registrada em uma entrevista pode ser analisada junto a indicadores públicos. Uma demanda identificada em uma comunidade pode ser relacionada a informações sobre infraestrutura, população, renda, educação, saúde, mobilidade, meio ambiente ou atividade econômica.",
  "Essa combinação permite confrontar diferentes perspectivas sobre uma mesma realidade.",
  "O dado secundário ajuda a contextualizar aquilo que foi observado no campo. A experiência do território, por sua vez, ajuda a interpretar aquilo que os indicadores apresentam.",
  "A SCAMBIO.IA cria condições para aproximar essas duas dimensões: o conhecimento produzido na relação direta com o território e o conhecimento disponível em bases públicas e outras fontes de informação.",
];

const COMPARE = [
  "Quando informações de diferentes localidades são organizadas dentro de uma mesma estrutura, torna-se possível ampliar a escala da análise.",
  "Territórios podem ser comparados segundo características sociais, ambientais, econômicas, demográficas, relacionais e territoriais, permitindo identificar semelhanças, diferenças, padrões e situações específicas.",
  "Isso possibilita sair de uma leitura exclusivamente localizada para construir análises comparadas em larga escala.",
  "Uma organização que atua em diferentes municípios, comunidades ou regiões pode observar, por exemplo, quais temas aparecem de forma recorrente, onde determinadas demandas se concentram, como diferentes territórios respondem a uma mesma questão ou quais características estão associadas a determinados padrões de relacionamento.",
  "A comparação não elimina as particularidades de cada território. Ao contrário, ajuda a reconhecê-las.",
];

const SOURCES = [
  "Uma entrevista revela uma percepção.",
  "Uma fotografia registra uma situação.",
  "Um relatório apresenta um contexto.",
  "Uma notícia registra um acontecimento.",
  "Um indicador público dimensiona uma realidade.",
  "Uma interação revela uma relação.",
];

const SOURCES_CLOSING = [
  "Quando essas informações podem ser relacionadas, o território deixa de ser observado por uma única lente.",
  "A SCAMBIO.IA permite construir uma base de conhecimento na qual diferentes evidências podem ser conectadas, analisadas e revisitadas ao longo do tempo.",
  "O objetivo não é simplesmente acumular dados. É compreender relações, contextos e mudanças.",
];

const SCALE = [
  "A capacidade de trabalhar com diferentes fontes e comparar grandes volumes de informação amplia a capacidade analítica das equipes sem transformar o território em apenas uma coleção de indicadores.",
];

const SCALE_DUO = [
  { k: "A escala", v: "serve para encontrar padrões." },
  { k: "O contexto", v: "serve para interpretá-los." },
];

const SCALE_FINAL = [
  "É nessa combinação que a inteligência territorial ganha sentido: aproximar o conhecimento produzido no campo dos dados que ajudam a explicar o contexto, relacionar diferentes evidências e permitir que a análise alcance múltiplos territórios sem perder de vista as particularidades de cada um.",
];

function SubHeading({ children }) {
  return (
    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mt-16 mb-6">
      {children}
    </h3>
  );
}

export default function Listen() {
  return (
    <section id="escuta-observacao" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">
          <span className="w-6 h-px bg-primary" />
          01 — Escuta &amp; Observação
        </span>

        <h2 className="font-heading font-black text-4xl sm:text-5xl leading-[1.08] tracking-tight text-balance">
          Escutar o território.
          <br />
          Observar o que acontece.
          <br />
          Relacionar diferentes fontes de conhecimento.
        </h2>

        <div className="mt-8 space-y-5">
          {LEAD.map((p, i) => (
            <p key={i} className="text-lg lg:text-xl font-medium text-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          {INTRO.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <p>{PLATFORM[0]}</p>
          <p className="font-heading font-semibold text-xl text-foreground border-l-2 border-primary pl-5">
            {PLATFORM[1]}
          </p>
          <p>{PLATFORM[2]}</p>
        </div>

        {/* O campo encontra os dados */}
        <SubHeading>O campo encontra os dados</SubHeading>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          {FIELD.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Da leitura de um território à comparação entre territórios */}
        <SubHeading>Da leitura de um território à comparação entre territórios</SubHeading>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          {COMPARE.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Diferentes fontes. Um mesmo contexto. */}
        <SubHeading>Diferentes fontes. Um mesmo contexto.</SubHeading>
        <ul className="space-y-3">
          {SOURCES.map((s) => (
            <li key={s} className="flex items-start gap-3 text-foreground leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          {SOURCES_CLOSING.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Escala sem perder o território */}
        <SubHeading>Escala sem perder o território</SubHeading>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          {SCALE.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <dl className="mt-8 grid sm:grid-cols-2 gap-4">
          {SCALE_DUO.map(({ k, v }) => (
            <div key={k} className="rounded-xl border border-border bg-background p-5">
              <dt className="font-heading font-bold text-xl text-primary">{k}</dt>
              <dd className="mt-1 text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-muted-foreground leading-relaxed">{SCALE_FINAL[0]}</p>

        <p className="mt-12 font-heading font-black text-2xl sm:text-3xl leading-tight text-foreground">
          Escutar. Observar. Contextualizar. Relacionar. Comparar. Compreender.
        </p>
      </div>
    </section>
  );
}