import type { FaqItem } from "@/lib/content";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details key={item.q} className="card" open={index === 0}>
          <summary className="flex min-h-[44px] w-full items-center justify-between gap-4 px-5 py-4 text-left">
            <h2 className="font-display text-lg font-semibold text-brand-primary md:text-xl">
              {item.q}
            </h2>
            <span className="faq-toggle text-xl text-brand-accent" aria-hidden="true" />
          </summary>
          <p className="prose-measure px-5 pb-5 text-text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
