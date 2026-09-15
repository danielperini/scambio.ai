export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass border-b border-border/60">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative w-8 h-8 rounded-lg bg-primary/20 grid place-items-center">
              <span className="absolute inset-0 rounded-lg border border-primary/50" />
              <span className="w-3 h-3 rounded-sm bg-primary glow-ring" />
            </span>
            <span className="font-heading font-bold text-lg tracking-tight text-foreground">
              Scambio<span className="text-primary">.ai</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
            <a href="#motor-ia" className="hover:text-foreground transition-colors">Motor de IA</a>
            <a href="#economia" className="hover:text-foreground transition-colors">Economia</a>
          </div>

          <a
            href="mailto:daniel@periniprojeto.com.br?subject=Pacotes%20e%20Assinaturas%20Scambio.ai"
            className="text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition-colors"
          >
            Falar com especialista
          </a>
        </nav>
      </div>
    </header>
  );
}