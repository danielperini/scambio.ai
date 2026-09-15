const STEPS = [
  "Escutar", "Observar", "Registrar", "Organizar", "Relacionar",
  "Contextualizar", "Analisar", "Compreender", "Decidir",
];

export default function Flow() {
  return (
    <section id="fluxo" className="relative py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-heading font-black text-3xl sm:text-4xl leading-tight text-balance">
          Da experiência territorial ao conhecimento para decisão.
        </h2>
        <ol className="mt-12 inline-flex flex-col gap-2">
          {STEPS.map((s, i) => (
            <li key={s} className="flex items-center justify-center gap-3">
              <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-mono flex items-center justify-center">
                {i + 1}
              </span>
              <span className="font-heading font-semibold text-lg text-foreground">
                {s}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}