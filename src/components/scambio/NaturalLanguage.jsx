import ReflectiveBlock from "@/components/scambio/ReflectiveBlock";
import EditorialIllustration from "@/components/scambio/EditorialIllustration";

export default function NaturalLanguage() {
  return (
    <ReflectiveBlock
      id="consulta"
      tag="Consulta"
      illustration={<EditorialIllustration kind="consulta" />}
      title="Pergunte sobre o território"
      paragraphs={[
        "O conhecimento também pode ser consultado.",
        "Em vez de procurar uma informação em diferentes arquivos ou sistemas, a equipe pode fazer perguntas sobre aquilo que já está registrado.",
      ]}
      questions={[
        "Quais demandas continuam abertas nesta comunidade?",
        "O que mudou nas últimas interações?",
        "Quais temas aparecem com maior frequência?",
        "Quais compromissos precisam de acompanhamento?",
        "Como determinada demanda evoluiu ao longo do tempo?",
      ]}
    >
      <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
        A resposta depende das informações disponíveis e da qualidade dos
        registros realizados.
      </p>
    </ReflectiveBlock>
  );
}