const LEAD = [
  "Conhecer um território começa pela presença, pela escuta e pela observação.",
];

const INTRO = [
  "Antes de interpretar indicadores, identificar riscos ou tomar decisões, é preciso compreender a realidade que existe naquele lugar. Quem vive ali, como as pessoas se relacionam, quais são seus modos de vida, o que mudou, o que permanece, quais são suas demandas, seus recursos, seus conflitos e suas expectativas.",
];

const PLATFORM = [
  "A SCAMBIO.IA foi pensada para apoiar esse processo de conhecimento.",
  "A plataforma reúne informações produzidas diretamente nas relações com o território: conversas, reuniões, entrevistas, visitas de campo, relatos, observações, registros de atividades e interações com comunidades, pessoas e organizações.",
];

const SOURCES = [
  "Mas a leitura do território não se limita ao contato direto.",
  "Também podem ser incorporadas fotografias, vídeos, áudios, documentos, relatórios, PDFs, textos, documentos oficiais, notícias e outras fontes de informação que contribuam para compreender determinado contexto.",
];

const PERSPECTIVES = [
  "Cada registro pode trazer uma perspectiva diferente. Uma entrevista revela percepções. Um relato registra uma experiência. Uma fotografia evidencia uma situação. Um documento apresenta uma decisão. Uma notícia registra um acontecimento. Uma interação mostra como uma relação está se construindo.",
  "A SCAMBIO.IA organiza essas diferentes fontes para que possam ser consultadas, classificadas e relacionadas.",
  "Temas, pessoas, organizações, comunidades, localidades, demandas, acontecimentos, projetos e períodos podem ser associados aos registros, permitindo construir conexões que dificilmente aparecem quando cada informação permanece armazenada de forma isolada.",
];

const CONTEXT = [
  "A observação territorial também considera aquilo que está ao redor das relações.",
  "A forma como as pessoas vivem pode estar relacionada à disponibilidade de serviços, à mobilidade, às atividades econômicas, à infraestrutura, às características ambientais, à presença de rios, estradas e equipamentos públicos, à urbanidade ou à ruralidade, às formas de ocupação e às transformações que acontecem ao longo do tempo.",
  "Por isso, a SCAMBIO.IA não trata a informação apenas como um dado isolado.",
];

const AXIOMS = [
  "Uma demanda tem uma história.",
  "Um ator tem relações.",
  "Um acontecimento tem contexto.",
  "Um território tem dinâmica.",
];

const CLOSING_INTRO = [
  "Ao organizar essas informações em conjunto, a plataforma ajuda as equipes a construir uma compreensão mais contextualizada da realidade territorial.",
];

const HUMAN = [
  "A tecnologia apoia a organização e o processamento das informações, mas o conhecimento territorial continua sendo construído pelas pessoas que conhecem, acompanham e se relacionam com aquele território.",
  "A SCAMBIO.IA cria condições para que esse conhecimento seja registrado, preservado, compartilhado, relacionado e retomado quando necessário.",
];

const KEEP = [
  "O que foi ouvido não se perde em uma anotação.",
  "O que foi observado não fica restrito a uma fotografia.",
  "O que foi registrado pode ser relacionado a outros acontecimentos.",
  "E diferentes perspectivas podem ser analisadas dentro de um mesmo contexto.",
];

const VERBS = [
  { k: "Escutar", v: "é reconhecer as vozes do território." },
  { k: "Observar", v: "é perceber o que acontece nele." },
  { k: "Relacionar", v: "é compreender suas conexões." },
  { k: "Conhecer", v: "é transformar essas evidências em contexto para a decisão." },
];

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

        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <p className="font-heading font-semibold text-lg text-foreground">{PLATFORM[0]}</p>
          <p>{PLATFORM[1]}</p>
        </div>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <p className="font-heading font-semibold text-xl text-foreground border-l-2 border-primary pl-5">
            {SOURCES[0]}
          </p>
          <p>{SOURCES[1]}</p>
        </div>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          {PERSPECTIVES.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* O território como contexto */}
        <div className="mt-16">
          <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
            O território como contexto
          </h3>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {CONTEXT.slice(0, 2).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-6 font-heading font-semibold text-lg text-foreground border-l-2 border-primary pl-5">
            {CONTEXT[2]}
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {AXIOMS.map((a) => (
              <li key={a} className="flex items-start gap-3 text-foreground">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="font-heading font-semibold">{a}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
            {CLOSING_INTRO.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Da escuta à compreensão */}
        <div className="mt-16">
          <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
            Da escuta à compreensão
          </h3>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {HUMAN.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-4">
            {KEEP.map((k) => (
              <li key={k} className="flex items-start gap-3 text-foreground leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>{k}</span>
              </li>
            ))}
          </ul>

          <dl className="mt-12 grid sm:grid-cols-2 gap-6">
            {VERBS.map(({ k, v }) => (
              <div key={k} className="rounded-xl border border-border bg-background p-5">
                <dt className="font-heading font-bold text-xl text-primary">{k}</dt>
                <dd className="mt-1 text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 font-heading font-black text-2xl sm:text-3xl leading-tight text-foreground">
            Escutar. Observar. Relacionar. Compreender.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Essa é a primeira etapa da inteligência territorial da SCAMBIO.IA.
          </p>
        </div>
      </div>
    </section>
  );
}