import { useEffect, useState } from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/efe40e33f_ChatGPTImage15desetde202600_05_48.png";
const SEEN_KEY = "scambio_intro_seen";

export default function BrandIntro() {
  const alreadySeen =
    typeof window !== "undefined" && sessionStorage.getItem(SEEN_KEY) === "1";
  const [done, setDone] = useState(alreadySeen);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (done) return;
    const warm = new Image();
    warm.src = LOGO_URL;
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const dur = 2600;
    let raf;
    let last = -1;
    const tick = (now) => {
      const p = Math.min(100, ((now - start) / dur) * 100);
      const r = Math.round(p);
      if (r !== last) { last = r; setPct(r); }
      if (p < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    function finish() {
      cancelAnimationFrame(raf);
      sessionStorage.setItem(SEEN_KEY, "1");
      document.body.style.overflow = "";
      setDone(true);
    }
    const t = setTimeout(finish, 4200);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [done]);

  const skip = () => {
    sessionStorage.setItem(SEEN_KEY, "1");
    document.body.style.overflow = "";
    setDone(true);
  };

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

      <div className="bi-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background select-none">
        <img
          src={LOGO_URL}
          alt="Scambio.ai — Conhecimento Social e Territorial"
          className="bi-logo w-[86vw] max-w-2xl lg:max-w-3xl h-auto select-none mb-10"
          draggable="false"
        />

        <div className="w-[86vw] max-w-2xl lg:max-w-3xl">
          <div className="h-[3px] w-full rounded-full bg-foreground/10 overflow-hidden">
            <div
              className="bi-bar-fill h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #1A4850, #CC7A5C)" }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-sm font-mono uppercase tracking-[0.25em] text-foreground/70">
            <span className="bi-dots">Carregando</span>
            <span>{pct}%</span>
          </div>
        </div>

        <button
          type="button"
          onClick={skip}
          aria-label="Pular abertura"
          className="absolute right-6 inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-4 rounded-md text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
        >
          Pular
        </button>
      </div>
    </>
  );
}