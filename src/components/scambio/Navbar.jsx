import Logo from "@/components/scambio/Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass border-b border-border/60">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="font-heading font-bold text-lg tracking-tight text-foreground">
              Scambio<span className="text-primary">.ai</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
            <a href="#motor-ia" className="hover:text-foreground transition-colors">Motor de IA</a>
            <a href="#economia" className="hover:text-foreground transition-colors">Economia</a>
          </div>

          <Logo className="h-9 w-auto" />
        </nav>
      </div>
    </header>
  );
}