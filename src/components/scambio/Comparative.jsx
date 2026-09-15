import ReflectiveBlock from "@/components/scambio/ReflectiveBlock";
import { Image } from "@/components/ui/image";

const ILUSTRA =
  "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/a2911d837_ChatGPTImage15desetde202601_48_26.png";

export default function Comparative() {
  return (
    <ReflectiveBlock
      id="comparacao"
      tag="Comparação"
      illustration={
        <div className="aspect-[16/10] rounded-2xl overflow-hidden">
          <Image
            src={ILUSTRA}
            alt="Quando diferentes territórios podem ser comparados"
            className="w-full h-full"
            fittingType="fit"
          />
        </div>
      }
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