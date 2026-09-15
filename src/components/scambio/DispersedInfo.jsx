import SectionHead from "@/components/scambio/SectionHead";

const BODY = [
  "Informações sobre o território costumam estar distribuídas entre planilhas, mensagens, documentos, registros de reuniões, fotografias, áudios, relatórios, sistemas e anotações de campo.",
  "Cada fonte apresenta uma parte da realidade. Quando permanecem isoladas, torna-se mais difícil recuperar históricos, compreender contextos, acompanhar demandas e identificar mudanças.",
];

export default function DispersedInfo() {
  return (
    <section id="desafio" className="relative py-20 lg:py-28 border-t border-border/40">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <SectionHead title="Informação existe. O desafio é organizá-la." />
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          {BODY.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-8 font-heading font-semibold text-xl text-foreground border-l-2 border-primary pl-5">
          A SCAMBIO.IA organiza essas informações e cria condições para relacioná-las.
        </p>
      </div>
    </section>
  );
}