import { MAPS_EMBED_SRC, PROJECT_NAME, STREET_ADDRESS } from "@/lib/content";

export function LocationMap() {
  return (
    <figure className="card overflow-hidden">
      <iframe
        title={`${PROJECT_NAME} at ${STREET_ADDRESS}, Mississauga`}
        src={MAPS_EMBED_SRC}
        className="aspect-[4/3] w-full border-0 md:aspect-[16/9]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <figcaption className="px-4 py-3 text-sm text-text-muted">
        Approximate location at {STREET_ADDRESS}, Mississauga, inside Lakeview Village. Postal
        codes L5E 1E4 and L5E 1E8 have both been published; confirm the current code before using
        it on a contract.
      </figcaption>
    </figure>
  );
}
