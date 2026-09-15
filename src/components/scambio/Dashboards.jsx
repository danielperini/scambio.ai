import ReflectiveBlock from "@/components/scambio/ReflectiveBlock";
import EditorialIllustration from "@/components/scambio/EditorialIllustration";

export default function Dashboards() {
  return (
    <ReflectiveBlock
      id="decisao"
      tag="Decisão"
      illustration={<EditorialIllustration kind="decisao" />}
      title="Da informação à decisão"
      subtitle="Conhecimento territorial é contexto."
      paragraphs={[
        "A SCAMBIO.IA não pretende dizer às equipes o que fazer.",
        "Seu papel é ajudar a organizar aquilo que elas sabem, aquilo que observaram e aquilo que ainda precisam compreender.",
        "Ao reunir diferentes fontes, preservar históricos, relacionar informações e permitir análises em diferentes escalas, a plataforma cria melhores condições para uma decisão contextualizada.",
      ]}
      note="Conhecer melhor antes de decidir melhor."
    />
  );
}