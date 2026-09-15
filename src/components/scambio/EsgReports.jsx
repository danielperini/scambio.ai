import ReflectiveBlock from "@/components/scambio/ReflectiveBlock";
import EditorialIllustration from "@/components/scambio/EditorialIllustration";

export default function EsgReports() {
  return (
    <ReflectiveBlock
      id="esg-gri"
      tag="Conformidade"
      illustration={<EditorialIllustration kind="conformidade" />}
      title="Relatórios automáticos para normas ESG e GRI"
      paragraphs={[
        "A SCAMBIO.IA gera relatórios automáticos a partir das informações já registradas no território, adaptados a normas reconhecidas como ESG e GRI.",
        "Em vez de montar entregas manualmente a cada ciclo de prestação de contas, a equipe encontra os dados já organizados pelos indicadores exigidos por cada referencial.",
        "Isso facilita a conformidade das empresas: o que seria um trabalho extenso de coleta e formatação passa a partir do conhecimento construído no relacionamento.",
        "Cada relatório mantém o vínculo com as evidências que lhe deram origem — registros, documentos e interações que sustentam cada indicador.",
      ]}
      note="Conformidade com menos esforço. E com mais contexto."
    />
  );
}