export default function Footer() {
  return (
    <footer className="relative border-t border-border/40 overflow-hidden">
      {/* Conversion block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <h2 className="font-heading font-black text-3xl lg:text-5xl leading-tight text-balance">
            Otimize seu território.
            <br />
            <span className="text-primary">Proteja seu legado.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-md">
            Descubra a economia do Scambio.ai para a sua operação. Fale com o Daniel
            e receba uma proposta de pacotes e assinaturas sob medida.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="glass rounded-2xl p-6 lg:p-8 glow-ring">
            <p className="text-sm text-muted-foreground mb-2">Fale com o especialista</p>
            <a
              href="mailto:daniel@periniprojeto.com.br?subject=Pacotes%20e%20Assinaturas%20Scambio.ai"
              className="block font-heading font-bold text-2xl lg:text-3xl text-primary hover:underline break-all"
            >
              daniel@periniprojeto.com.br
            </a>
            <a
              href="mailto:daniel@periniprojeto.com.br?subject=Pacotes%20e%20Assinaturas%20Scambio.ai"
              className="mt-6 inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3.5 rounded-xl transition-colors w-full sm:w-auto"
            >
              Enviar email agora
            </a>
          </div>
        </div>
      </div>

      {/* Massive email anchor */}
      <div className="border-t border-border/40 py-12 px-6">
        <p className="text-center font-heading font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-foreground/10 break-all">
          daniel@periniprojeto.com.br
        </p>
      </div>

      <div className="border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Scambio.ai — Inteligência Social &amp; Territorial</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-foreground transition-colors">Topo</a>
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
            <a href="mailto:daniel@periniprojeto.com.br" className="hover:text-foreground transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}