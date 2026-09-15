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
  },
];

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
              className="group glass rounded-2xl p-6 lg:p-10 hover:border-primary/40 transition-colors"
            >
              <div className="max-w-3xl">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}