export default function ReflectiveBlock({
  id,
  tag,
  title,
  subtitle,
  paragraphs = [],
  questions,
  note,
  illustration,
  children,
}) {
  return (
    <section id={id} className="relative py-20 lg:py-28 border-t border-border/40">
      <div className="max-w-3xl px-6 lg:px-10">
        {illustration && <div className="mb-9">{illustration}</div>}
        {tag && (
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary mb-5">
            <span className="w-6 h-px bg-primary" />
            {tag}
          </span>
        )}
        {title && (
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight text-balance">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-5 text-xl lg:text-2xl text-foreground/80 font-medium leading-snug">
            {subtitle}
          </p>
        )}
        {paragraphs.length > 0 && (
          <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
        {questions && questions.length > 0 && (
          <ul className="mt-9 space-y-3.5">
            {questions.map((q, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-foreground/90 leading-snug">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {q}
              </li>
            ))}
          </ul>
        )}
        {note && (
          <p className="mt-7 text-lg lg:text-xl text-foreground font-medium border-l-2 border-primary pl-5 italic leading-snug">
            {note}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}