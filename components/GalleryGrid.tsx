import Image from "next/image";
import type { SiteImage } from "@/lib/content";

export function GalleryGrid({ items }: { items: SiteImage[] }) {
  return (
    <ul className="mt-10 grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.id} className="card overflow-hidden">
          <figure>
            <div className="relative">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 768px) 100vw, 580px"
                className="aspect-[16/10] h-auto w-full object-cover"
              />
              {item.pending ? (
                <p className="absolute left-3 top-3 rounded-sm bg-brand-deep/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-surface">
                  To be added
                </p>
              ) : null}
            </div>
            <figcaption className="px-5 py-4">
              <p className="font-display text-xl font-semibold text-brand-primary">{item.title}</p>
              <p className="mt-2 text-sm text-text-muted">{item.caption}</p>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
