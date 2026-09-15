import ReflectiveBlock from "@/components/scambio/ReflectiveBlock";
import EditorialIllustration from "@/components/scambio/EditorialIllustration";

export default function Reports() {
  return (
    <ReflectiveBlock
      id="relatorios"
      tag="Relatórios"
      illustration={<EditorialIllustration kind="relatorios" />}
      title="Relatórios adaptados a diferentes finalidades"
      paragraphs={[
        "As informações organizadas no território podem ser estruturadas em relatórios adaptados a diferentes propósitos.",
        "Um mesmo conjunto de registros pode dar origem a relatórios de gestão, de relacionamento com comunidades, de investimento social, de sustentabilidade ou de ESG — cada um com a seleção e o recorte adequados.",
        "Também é possível estruturar entregas para certificações e normas reconhecidas, como o padrão GRI, acrescentando as opções exigidas por cada referencial.",
      ]}
      note="Os dados seguem a decisão. O formato segue a finalidade."
    />
  );
}