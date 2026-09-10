import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { RegisterBand } from "@/components/RegisterBand";
import { JsonLd } from "@/components/JsonLd";
import { GALLERY_ITEMS, LAST_UPDATED, PAGE_META } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, gallerySchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.gallery);

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.gallery.path,
          name: PAGE_META.gallery.title,
          description: PAGE_META.gallery.description,
        })}
      />
      <JsonLd data={gallerySchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <article className="section-space bg-surface">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Imagery</p>
          <h1 className="mt-3 max-w-[20ch] text-4xl md:text-5xl">{PAGE_META.gallery.h1}</h1>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              Official architectural renderings and a republishable site plan for South Banks Towns
              (formerly Coastal Towns) have not been confirmed as licensable for this independent
              site as of {LAST_UPDATED}. The first two panels below are labelled &quot;to be
              added.&quot; They are not a substitute streetscape.
            </p>
            <p>
              The remaining photographs are Lakeview Village waterfront context: conservation
              shoreline, pier and boardwalk character, a lakeside promenade, and the Great Lakes
              Waterfront Trail. Captions describe what each file actually shows. None of them
              should be read as a guaranteed amenity inside the unreleased South Banks Towns site
              plan, and none are Deco Homes or Opus Homes marketing stills.
            </p>
          </div>
          <GalleryGrid items={GALLERY_ITEMS} />
        </div>
      </article>
      <RegisterBand heading="Get notified when official renderings are released" />
    </>
  );
}
