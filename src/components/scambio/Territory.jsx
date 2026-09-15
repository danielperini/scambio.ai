import SectionHead from "@/components/scambio/SectionHead";

const BODY =
  "A dimensão territorial envolve localização, proximidade, acesso, infraestrutura, ambiente e formas de ocupação. A SCAMBIO.IA permite relacionar informações a localidades e territórios, ajudando a visualizar onde estão os atores, onde surgem demandas, onde acontecem interações e como determinadas informações se distribuem espacialmente.";

const FEATURES = [
  "Localização", "Comunidades", "Atores", "Demandas", "Projetos",
  "Ocorrências", "Infraestrutura", "Informações territoriais",
];

export default function Territory() {
  return (
    <section id="territorio" className="relative py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionHead
          number="04"
          tag="Território"
          title="O território também é espacial."
          subtitle={BODY}
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {FEATURES.map((f) => (
            <span
              key={f}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground/90"
            >
              {f}
            </span>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground border-t border-border pt-6">
          Camadas interativas com geolocalização de registros, atores e demandas —
          veja no carrossel da plataforma.
        </p>
      </div>
    </section>
  );
}