const LEAD = [
  "Conhecer um território é mais do que saber onde ele está.",
  "É compreender quem vive ali, como as pessoas constroem suas vidas, como se relacionam entre si e com o ambiente e quais condições influenciam suas escolhas, oportunidades, conflitos e possibilidades.",
];

const BODY = [
  "Esse conhecimento se constrói na interação. Quanto mais uma organização se aproxima do território e estabelece relações continuadas com as comunidades, mais consegue compreender aquilo que os dados isolados dificilmente revelam.",
  "Pessoas, modos de vida, histórias, vínculos, expectativas, atividades econômicas, condições ambientais, urbanidade, ruralidade, infraestrutura, serviços e recursos passam a fazer parte de uma mesma leitura.",
  "Nada disso existe de forma isolada. Uma demanda pode estar relacionada à ausência de um serviço. Uma mudança no uso do território pode alterar meios de vida. Uma questão ambiental pode produzir consequências sociais. Uma decisão empresarial pode modificar relações construídas ao longo de décadas.",
];

export default function Knowledge() {
  return (
    <section id="conceito" className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-primary mb-6">
          <span className="w-6 h-px bg-primary" />
          Conceito
        </span>

        <h2 className="font-heading font-black text-4xl sm:text-5xl leading-[1.08] tracking-tight text-balance">
          Conhecer um território é compreender suas relações.
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

        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          {BODY.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <p className="mt-10 font-heading font-black text-2xl sm:text-3xl text-foreground border-l-2 border-primary pl-6">
          Conhecer o território é compreender como as coisas se relacionam.
        </p>
      </div>
    </section>
  );
}