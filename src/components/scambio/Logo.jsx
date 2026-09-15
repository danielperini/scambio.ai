const LOGO_URL =
  "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/efe40e33f_ChatGPTImage15desetde202600_05_48.png";

export default function Logo({ className = "" }) {
  return (
    <img
      src={LOGO_URL}
      alt="Scambio.ai — Escutar. Observar. Relacionar. Compreender."
      className={`h-12 w-auto ${className}`}
      draggable="false"
    />
  );
}