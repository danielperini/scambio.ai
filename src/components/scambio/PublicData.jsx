import ReflectiveBlock from "@/components/scambio/ReflectiveBlock";
import EditorialIllustration from "@/components/scambio/EditorialIllustration";

export default function PublicData() {
  return (
    <ReflectiveBlock
      id="campo-e-dados"
      tag="Campo e dados"
      illustration={<EditorialIllustration kind="campo" />}
      title="O campo encontra outras informações"
      paragraphs={[
        "Nenhum território se explica por uma única fonte.",
        "O conhecimento produzido no campo ganha profundidade quando pode ser relacionado a outras informações.",
        "Uma percepção de uma comunidade pode ser observada junto a dados demográficos. Uma demanda pode ser relacionada às condições de infraestrutura. Uma mudança percebida pelos moradores pode ser confrontada com informações ambientais, econômicas ou sociais.",
        "A SCAMBIO.IA permite trabalhar com informações produzidas no relacionamento e também com dados públicos e fontes secundárias.",
      ]}
      note="O objetivo não é substituir uma fonte pela outra. É colocá-las em conversa."
    >
      <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
        O dado ajuda a dimensionar. A experiência ajuda a interpretar. O contexto
        ajuda a compreender.
      </p>
    </ReflectiveBlock>
  );
}