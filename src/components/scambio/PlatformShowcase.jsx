import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { STEPS, Device } from "@/components/scambio/Steps";

export default function PlatformShowcase() {
  return (
    <section id="plataforma" className="relative py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-10">
          <span className="text-primary font-medium text-sm">A plataforma em ação</span>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mt-3 leading-tight text-balance">
            Da escuta à decisão, em nove passos
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Cada etapa do fluxo da SCAMBIO.IA — do registro no território à
            tomada de decisão apoiada por evidências.
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <CarouselContent>
            {STEPS.map((s) => (
              <CarouselItem key={s.n} className="md:basis-4/5 lg:basis-3/4">
                <figure>
                  <div className="rounded-2xl border border-border bg-background overflow-hidden shadow-sm">
                    <div className="flex items-center gap-1.5 px-4 h-9 border-b border-border bg-secondary/40">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
                      <span className="ml-3 text-[11px] font-mono text-muted-foreground truncate">
                        SCAMBIO.IA · {s.n} — {s.t}
                      </span>
                    </div>
                    <div className="p-6 lg:p-10 bg-secondary/10">
                      <Device step={s} />
                    </div>
                  </div>
                  <figcaption className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-heading font-bold text-foreground">{s.t}.</span>{" "}
                    {s.d}
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