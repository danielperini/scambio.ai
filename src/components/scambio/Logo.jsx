const LOGO_URL =
  "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/8e8969d73_ChatGPTImage15desetde202600_19_24.png";

export default function Logo({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-xl bg-black px-2.5 py-1.5 shadow-sm ${className}`}
    >
      <img
        src={LOGO_URL}
        alt="Scambio.ai — Escutar. Conectar. Evidenciar. Decidir."
        className="h-8 w-auto"
        draggable="false"
      />
    </span>
  );
}