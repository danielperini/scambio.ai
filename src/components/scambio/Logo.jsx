import { Image } from "@/components/ui/image";

export default function Logo({ className = "" }) {
  return (
    <Image
      src="https://media.base44.com/images/public/6aa8b10af4dead65826fec68/0940ac2e9_ChatGPTImage15desetde202600_05_48.png"
      alt="Scambio.ai — Escutar. Conectar. Evidenciar. Decidir."
      className={className}
      fittingType="fit"
    />
  );
}