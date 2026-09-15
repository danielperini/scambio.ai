import ReflectiveBlock from "@/components/scambio/ReflectiveBlock";
import EditorialIllustration from "@/components/scambio/EditorialIllustration";

export default function Memory() {
  return (
    <ReflectiveBlock
      id="memoria"
      tag="Memória"
      illustration={<EditorialIllustration kind="memoria" />}
      title="Uma memória do relacionamento"
      paragraphs={[
        "O que uma equipe aprende não precisa se perder.",
        "Pessoas mudam. Equipes mudam. Projetos terminam. As relações continuam.",
        "A SCAMBIO.IA ajuda a preservar o conhecimento construído ao longo do tempo, reunindo registros, documentos, interações e evidências em um mesmo ambiente.",
        "É uma forma de manter disponível aquilo que foi aprendido no território.",
      ]}
      note="Porque relacionamento também é memória."
    />
  );
}