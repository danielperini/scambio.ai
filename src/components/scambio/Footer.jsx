export default function Footer() {
  return (
    <footer className="relative border-t border-border/40 overflow-hidden topo-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28 text-center">
        <h2 className="font-heading font-black text-3xl lg:text-5xl leading-tight text-balance">
          Escutar. Observar.
          <br />
          <span className="text-primary">Relacionar. Compreender.</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
          Conhecimento social e territorial construído pela relação.
        </p>
      </div>

      <div className="border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SCAMBIO.IA — Conhecimento Social e Territorial</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-foreground transition-colors">Topo</a>
            <a href="#conceito" className="hover:text-foreground transition-colors">Conceito</a>
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
            <a href="#para-quem" className="hover:text-foreground transition-colors">Para quem é</a>
          </div>
        </div>
      </div>
    </footer>
  );
}