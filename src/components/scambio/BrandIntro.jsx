import { useEffect, useState } from "react";

const TEAL = "#0A4D59";
const TERRA = "#E07A5F";
const WORD = "SCAMBIO".split("");

export default function BrandIntro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setDone(true), 4100);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <>
      <style>{`
        @keyframes bi-out { 0%,78% { opacity: 1; } 100% { opacity: 0; } }
        @keyframes bi-draw { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
        @keyframes bi-fill { from { fill-opacity: 0; } to { fill-opacity: 1; } }
        @keyframes bi-pop { 0% { transform: scale(0); opacity: 0; } 70% { transform: scale(1.25); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes bi-letter { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bi-slogan { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .bi-overlay { animation: bi-out 3.9s ease-in-out 0.2s forwards; }
        .bi-petal { stroke-dasharray: 1000; stroke-dashoffset: 1000; fill-opacity: 0; }
        .bi-teal { animation: bi-draw 1s ease-in-out 0.2s forwards, bi-fill 0.35s ease 1s forwards; }
        .bi-terra { animation: bi-draw 1s ease-in-out 0.7s forwards, bi-fill 0.35s ease 1.5s forwards; }
        .bi-dot { transform-box: fill-box; transform-origin: center; transform: scale(0); opacity: 0; animation: bi-pop 0.45s ease 1.35s forwards; }
        .bi-letter { display: inline-block; opacity: 0; animation: bi-letter 0.4s ease-out forwards; }
        .bi-slogan { opacity: 0; animation: bi-slogan 0.6s ease-out 2.7s forwards; }
      `}</style>

      <div
        className="bi-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center"
        style={{ background: "radial-gradient(circle at 50% 45%, #0a2a31 0%, #03141a 70%, #000 100%)" }}
      >
        <svg viewBox="0 0 120 120" className="w-32 h-32 lg:w-40 lg:h-40">
          <path
            className="bi-petal bi-teal"
            d="M60,60 C60,32 30,16 16,30 C6,40 10,56 26,59 C42,62 56,56 60,60 Z"
            fill={TEAL}
            stroke={TEAL}
            strokeWidth={5}
            strokeLinejoin="round"
          />
          <path
            className="bi-petal bi-terra"
            d="M60,60 C60,88 90,104 104,90 C114,80 110,64 94,61 C78,58 64,64 60,60 Z"
            fill={TERRA}
            stroke={TERRA}
            strokeWidth={5}
            strokeLinejoin="round"
          />
          <circle className="bi-dot" cx="60" cy="60" r="5" fill={TERRA} />
        </svg>

        <div
          className="mt-7 flex items-end font-heading font-black tracking-tight text-2xl lg:text-4xl"
          style={{ color: TEAL }}
        >
          {WORD.map((c, i) => (
            <span
              key={i}
              className="bi-letter"
              style={{ animationDelay: `${1.65 + i * 0.055}s` }}
            >
              {c}
            </span>
          ))}
          <span
            className="bi-dot inline-block w-2.5 h-2.5 rounded-full mx-1 mb-1.5"
            style={{ background: TERRA, animationDelay: "2.15s" }}
          />
          {".IA".split("").map((c, i) => (
            <span
              key={`ia-${i}`}
              className="bi-letter"
              style={{ animationDelay: `${1.65 + (WORD.length + 1 + i) * 0.055}s` }}
            >
              {c}
            </span>
          ))}
        </div>

        <p
          className="bi-slogan mt-6 text-[11px] lg:text-xs uppercase tracking-[0.32em] font-medium"
          style={{ color: "rgba(224,122,95,0.85)" }}
        >
          Escutar. Conectar. Evidenciar. Decidir.
        </p>
      </div>
    </>
  );
}