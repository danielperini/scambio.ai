import ReflectiveBlock from "@/components/scambio/ReflectiveBlock";

export default function AiEngine() {
  return (
    <ReflectiveBlock
      id="tecnologia"
      tag="Tecnologia"
      title="A tecnologia a serviço da escuta"
      subtitle="Mais tempo para compreender. Menos tempo procurando informação."
      paragraphs={[
        "A SCAMBIO.IA utiliza recursos tecnológicos para ajudar as equipes a organizar aquilo que produzem e encontram no território.",
        "Áudios podem ser transcritos. Documentos podem ser lidos e organizados. Informações podem ser classificadas e relacionadas. Perguntas podem ser feitas em linguagem natural.",
        "Isso facilita o trabalho com grandes volumes de informação, sem transformar o conhecimento territorial em uma operação automática.",
      ]}
      note="A tecnologia organiza. As equipes interpretam."
    />
  );
}