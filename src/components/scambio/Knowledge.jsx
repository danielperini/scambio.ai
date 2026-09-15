const LEAD = [
  "Conhecer um território é mais do que saber onde ele está.",
  "É compreender o que existe naquele lugar, quem vive ali, como as pessoas constroem suas vidas, de que maneira se relacionam entre si e com o ambiente e quais condições influenciam suas escolhas, oportunidades e conflitos.",
];

const EMPHASIS = [
  "O conhecimento territorial se constrói na interação.",
  "Nada disso existe de forma isolada.",
  "Conhecer o território é, portanto, compreender essas relações.",
];

const BODY = [
  "Quanto mais uma organização se aproxima do território e estabelece relações continuadas com as comunidades, mais consegue compreender aquilo que os dados isolados dificilmente revelam. As pessoas, seus modos de vida, suas histórias, seus vínculos, suas expectativas e suas formas de organização passam a fazer parte da leitura.",
  "Essa leitura também considera o espaço. A urbanidade e a ruralidade, a proximidade ou distância dos serviços e dos recursos, os rios, as estradas, os equipamentos públicos, os espaços de convivência, as atividades econômicas, as áreas de preservação e as transformações que acontecem ao longo do tempo.",
  "Uma demanda pode estar relacionada à ausência de um serviço. Uma mudança no uso do território pode alterar os meios de vida. A localização de uma comunidade pode influenciar seu acesso a recursos. Uma questão ambiental pode produzir consequências sociais. Uma decisão empresarial pode modificar relações que já existem há décadas.",
  "É olhar para aquilo que está presente, mas também para as conexões entre as coisas. É perceber padrões, diferenças, proximidades, distâncias, permanências e mudanças.",
  "Por isso, conhecimento territorial não é apenas acumular informações sobre um lugar. É construir, a partir da escuta, da presença e da interação, uma compreensão contextualizada de como aquele território funciona e de como as pessoas vivem e se relacionam nele.",
  "É esse conhecimento que permite qualificar o relacionamento, reconhecer diferentes perspectivas, antecipar questões, interpretar evidências e tomar decisões mais conectadas à realidade.",
];

export default function Knowledge() {
  return (
    <section id="conhecimento-territorial" className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary mb-6">
          <span className="w-6 h-px bg-primary" />
          Princípio
        </span>

        <h2 className="font-heading font-black text-4xl sm:text-5xl leading-[1.08] tracking-tight text-balance">
          Conhecimento territorial
        </h2>

        <div className="mt-8 space-y-5">
          {LEAD.map((p, i) => (
            <p
              key={i}
              className={`text-lg lg:text-xl leading-relaxed ${
                i === 0 ? "font-medium text-foreground" : "text-muted-foreground"
              }`}
            >
              {p}
            </p>
          ))}
        </div>

        <p className="mt-10 font-heading font-semibold text-xl text-foreground border-l-2 border-primary pl-5">
          {EMPHASIS[0]}
        </p>

        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          {BODY.slice(0, 2).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <p className="mt-10 font-heading font-semibold text-xl text-foreground border-l-2 border-primary pl-5">
          {EMPHASIS[1]}
        </p>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          {BODY.slice(2, 3).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <p className="mt-10 font-heading font-semibold text-xl text-foreground">
          {EMPHASIS[2]}
        </p>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          {BODY.slice(3).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Na SCAMBIO.IA */}
        <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8 lg:p-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Na SCAMBIO.IA
          </span>
          <p className="text-lg lg:text-xl font-medium text-foreground leading-relaxed">
            A SCAMBIO.IA parte dessa compreensão: o território não é apenas um
            espaço geográfico. É um conjunto de relações.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A plataforma organiza informações produzidas nessas relações para
            que o conhecimento construído no cotidiano não se perca em registros
            isolados. Interações, demandas, atores, compromissos,
            acontecimentos, documentos e evidências podem ser relacionados e
            analisados dentro de seu contexto.
          </p>
          <p className="mt-6 font-heading font-semibold text-lg text-foreground">
            Porque compreender o território é compreender como as coisas se
            relacionam. E relacionamento é conhecimento.
          </p>
        </div>
      </div>
    </section>
  );
}