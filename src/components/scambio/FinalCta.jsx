export default function FinalCta() {
  return (
    <section id="cta-final" className="relative py-24 lg:py-32 border-t border-border/40 topo-bg">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-heading font-black text-3xl sm:text-5xl leading-tight text-balance">
          Conheça a SCAMBIO.IA.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Uma plataforma para organizar o conhecimento produzido no relacionamento
          com comunidades, pessoas, organizações e territórios.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#top"
            className="inline-flex justify-center items-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3.5 rounded-xl transition-colors glow-ring"
          >
            Solicite uma demonstração
          </a>
        </div>
        <p className="mt-5 text-sm text-muted-foreground max-w-lg mx-auto">
          Conheça a plataforma e veja como suas informações de relacionamento podem
          ser organizadas, relacionadas e analisadas.
        </p>
      </div>
    </section>
  );
}