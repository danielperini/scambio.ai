import { useEffect, useState } from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/b53cb8c41_ChatGPTImage15desetde202600_19_24.png";

export default function BrandIntro() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const dur = 2600;
    let raf;
    const tick = (now) => {
      const p = Math.min(100, ((now - start) / dur) * 100);
      setPct(Math.round(p));
      if (p < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const t = setTimeout(() => setDone(true), 4200);
    return () => {
      cancelAnimationFrame(raf);
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
          0% { opacity: 0; transform: scale(0.92); filter: blur(10px); }
          60% { opacity: 1; filter: blur(0); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        @keyframes bi-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes bi-dots {
          0%, 20% { content: ""; }
          40% { content: "."; }
          60% { content: ".."; }
          80%, 100% { content: "..."; }
        }
        .bi-overlay { animation: bi-out 4s ease-in-out 0.2s forwards; }
        .bi-logo { opacity: 0; animation: bi-logo 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards; }
        .bi-bar-fill { animation: bi-bar 2.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards; }
        .bi-dots::after { content: ""; animation: bi-dots 1.4s steps(1, end) infinite; }
      `}</style>

      <div
        className="bi-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center"
        style={{ background: "#000000" }}
      >
        <img
          src={LOGO_URL}
          alt="Scambio.ai — Conhecimento Social e Territorial"
          className="bi-logo w-[78vw] max-w-md lg:max-w-lg h-auto select-none mb-10"
          draggable="false"
        />

        <div className="w-[78vw] max-w-md lg:max-w-lg">
          <div className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="bi-bar-fill h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #134D55, #DD8356)" }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.25em] text-white/60">
            <span className="bi-dots">Carregando</span>
            <span>{pct}%</span>
          </div>
        </div>
      </div>
    </>
  );
}