export default function SectionHead({ tag, number, title, subtitle }) {
  return (
    <div className="mb-10">
      {(tag || number) && (
        <span className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-primary mb-5">
          <span className="w-6 h-px bg-primary" />
          {number ? `${number} — ` : ""}
          {tag}
        </span>
      )}
      <h2 className="font-heading font-black text-4xl sm:text-5xl leading-[1.08] tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg lg:text-xl text-muted-foreground font-medium max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}