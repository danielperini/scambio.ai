const SAVINGS = [
  { label: "Equipe de transcrição", before: "R$ 18 mil/mês", after: "Incluso na plataforma" },
  { label: "Análise de relatórios", before: "2 analistas", after: "IA + 1 revisor" },
  { label: "Tempo de relatório ESG", before: "3 semanas", after: "2 dias" },
  { label: "Perdas de follow-up", before: "Frequentes", after: "Alertas automáticos" },
];

export default function Economy() {
  return (
    <section id="economia" className="relative py-24 lg:py-32 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <span className="text-primary font-medium text-sm">Por que é econômico</span>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mt-3 leading-tight text-balance">
            Mais inteligência, menos custo de operação
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A IA substitui etapas manuais caras — transcrição, triagem e relatórios —
            e devolve tempo da equipe para o que importa: território e relacionamento.
          </p>
          <p className="mt-6 text-foreground/90">
            Você paga uma assinatura no lugar de uma estrutura inteira de back-office.
            O resultado é uma operação de ESG enxuta, escalável e auditável.
          </p>
        </div>

        <div className="lg:col-span-7 glass rounded-3xl p-6 lg:p-8">
          <div className="grid grid-cols-3 text-xs font-mono text-muted-foreground px-2 pb-3 border-b border-border/50">
            <span>Item</span>
            <span>Antes</span>
            <span className="text-primary">Com Scambio.ai</span>
          </div>
          <ul className="divide-y divide-border/40">
            {SAVINGS.map((s) => (
              <li key={s.label} className="grid grid-cols-3 items-center px-2 py-4 text-sm">
                <span className="font-medium text-foreground">{s.label}</span>
                <span className="text-muted-foreground line-through">{s.before}</span>
                <span className="text-primary font-semibold">{s.after}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}