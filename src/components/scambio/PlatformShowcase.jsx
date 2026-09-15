import { Image } from "@/components/ui/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const SHOTS = [
  {
    src: "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/b75570384_5bf617207_preview-lens-b17e181e-bb92-4f4c-b9f7-9f16b073f9e2.png",
    tag: "Dashboard",
    caption: "Inteligência Social e Territorial — vozes, dicas e indicadores em uma mesma visão.",
  },
  {
    src: "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/8e6c85bdd_cae3d2167_preview-lens-d70dff1d-0e8d-4b51-b55d-00cb87ae86c0.png",
    tag: "Registros",
    caption: "Registros de campo organizados, filtrados e acompanhados por território.",
  },
  {
    src: "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/d070f9227_234706ab4_preview-lens-8382cf32-18b5-4184-950a-c2bb7418a834.png",
    tag: "Dados Secundários",
    caption: "Dados públicos e fontes oficiais cruzados com os registros de relacionamento.",
  },
  {
    src: "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/e930f3f0d_15f20d64b_preview-lens-4a4ed909-b130-46cb-94ae-15ef5a28d78f.png",
    tag: "Mapa Territorial",
    caption: "Camadas interativas com geolocalização de registros, atores e demandas.",
  },
  {
    src: "https://media.base44.com/images/public/6aa8b10af4dead65826fec68/42964d71d_2027f2c5b_preview-lens-625ce2ff-a510-4cf4-84a3-ba50125b1228.png",
    tag: "Matriz de Materialidade",
    caption: "Análise de relevância dos temas para comunidade e empresa.",
  },
];

export default function PlatformShowcase() {
  return (
    <section id="plataforma" className="relative py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-10">
          <span className="text-primary font-medium text-sm">A plataforma em ação</span>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mt-3 leading-tight text-balance">
            Conheça as páginas da SCAMBIO.IA
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Role pelas principais telas do produto — da escuta e registros ao mapa
            territorial e à matriz de materialidade.
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <CarouselContent>
            {SHOTS.map((s) => (
              <CarouselItem key={s.tag} className="md:basis-4/5 lg:basis-3/4">
                <figure>
                  <div className="rounded-2xl border border-border bg-background overflow-hidden shadow-sm">
                    <div className="flex items-center gap-1.5 px-4 h-9 border-b border-border bg-secondary/40">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
                      <span className="ml-3 text-[11px] font-mono text-muted-foreground truncate">
                        SCAMBIO.IA · {s.tag}
                      </span>
                    </div>
                    <Image src={s.src} alt={`Tela ${s.tag} da SCAMBIO.IA`} className="w-full block" fittingType="fit" />
                  </div>
                  <figcaption className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {s.caption}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-10 hidden md:inline-flex" />
          <CarouselNext className="-right-10 hidden md:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}