import { Image } from "@/components/ui/image";

export default function ProductShot({ src, alt, tag, caption }) {
  return (
    <figure className="mt-10">
      <div className="rounded-2xl border border-border bg-background overflow-hidden shadow-sm">
        <div className="flex items-center gap-1.5 px-4 h-9 border-b border-border bg-secondary/40">
          <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
          {tag && (
            <span className="ml-3 text-[11px] font-mono text-muted-foreground truncate">
              {tag}
            </span>
          )}
        </div>
        <Image src={src} alt={alt} className="w-full block" fittingType="fit" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}