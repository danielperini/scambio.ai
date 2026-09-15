import ReflectiveBlock from "@/components/scambio/ReflectiveBlock";
import { Image } from "@/components/ui/image";

const ILUSTRA =
  "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/aec0d2c53_ChatGPTImage15desetde202601_50_35.png";

export default function AiEngine() {
  return (
    <ReflectiveBlock
      id="tecnologia"
      tag="Tecnologia"
      illustration={
        <div className="aspect-[16/10] rounded-2xl overflow-hidden">
          <Image
            src={ILUSTRA}
            alt="A tecnologia a serviço da escuta"
            className="w-full h-full"
            fittingType="fit"
          />
        </div>
      }
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