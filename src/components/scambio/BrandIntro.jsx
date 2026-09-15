import { useEffect, useState } from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/9ebfa4b4b_ChatGPTImage15desetde202600_19_24.png";

export default function BrandIntro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setDone(true), 4200);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <>
      <style>{`
        @keyframes bi-out { 0%,76% { opacity: 1; } 100% { opacity: 0; } }
        @keyframes bi-logo {
          0% { opacity: 0; transform: scale(0.9); filter: blur(12px); }
          60% { opacity: 1; filter: blur(0); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        @keyframes bi-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }
        .bi-overlay { animation: bi-out 4s ease-in-out 0.2s forwards; }
        .bi-logo { opacity: 0; animation: bi-logo 1.3s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards; }
        .bi-glow { animation: bi-glow 3s ease-in-out 1.6s infinite; }
      `}</style>

      <div
        className="bi-overlay fixed inset-0 z-[100] flex items-center justify-center"
        style={{ background: "#000000" }}
      >
        <div className="relative flex items-center justify-center">
          <div
            className="bi-glow absolute inset-0 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(217,129,84,0.25), transparent 65%)" }}
          />
          <img
            src={LOGO_URL}
            alt="Scambio.ai — Conhecimento Social e Territorial"
            className="bi-logo relative w-[78vw] max-w-md lg:max-w-lg h-auto select-none"
            draggable="false"
          />
        </div>
      </div>
    </>
  );
}