import ReflectiveBlock from "@/components/scambio/ReflectiveBlock";

export default function Comparative() {
  return (
    <ReflectiveBlock
      id="comparacao"
      tag="Comparação"
      title="Quando diferentes territórios podem ser comparados"
      paragraphs={[
        "Conhecer um território também permite perceber diferenças entre territórios.",
        "Quando informações de diferentes comunidades, municípios ou regiões são organizadas de forma comparável, torna-se possível olhar para uma realidade maior.",
        "A análise em escala ajuda a encontrar recorrências e diferenças.",
      ]}
      questions={[
        "Quais temas aparecem em diferentes lugares?",
        "Onde determinadas demandas se concentram?",
        "Quais situações são específicas de uma comunidade?",
        "O que muda de um território para outro?",
        "O que permanece?",
      ]}
      note="Mas a comparação não deve apagar as particularidades."
    >
      <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
        A escala ajuda a enxergar padrões. O contexto ajuda a entendê-los.
      </p>
    </ReflectiveBlock>
  );
}