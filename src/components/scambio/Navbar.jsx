import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, User as UserIcon } from "lucide-react";
import Logo from "@/components/scambio/Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const ANCHORS = [
  { href: "#conceito", label: "Conceito" },
  { href: "#escuta-observacao", label: "Escuta & Observação" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#para-quem", label: "Para quem é" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 safe-top">
      <div className="glass border-b border-border/60">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" aria-label="Scambio.ai — início">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {ANCHORS.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="inline-flex items-center min-h-[44px] px-1 hover:text-foreground transition-colors"
              >
                {a.label}
              </a>
            ))}
            <Link
              to="/conta"
              className="inline-flex items-center gap-2 min-h-[44px] px-3 rounded-md border border-border hover:text-foreground hover:border-primary/40 transition-colors"
            >
              <UserIcon className="w-4 h-4" />
              Conta
            </Link>
          </div>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md text-foreground"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[82vw] max-w-xs">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-4 flex flex-col" aria-label="Navegação móvel">
            {ANCHORS.map((a) => (
              <a
                key={a.href}
                href={a.href}
                onClick={() => setOpen(false)}
                className="inline-flex items-center min-h-[44px] px-2 text-base text-foreground hover:text-primary transition-colors border-b border-border/40"
              >
                {a.label}
              </a>
            ))}
            <Link
              to="/conta"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 min-h-[44px] px-2 mt-2 text-base text-foreground hover:text-primary transition-colors"
            >
              <UserIcon className="w-5 h-5" />
              Conta
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}