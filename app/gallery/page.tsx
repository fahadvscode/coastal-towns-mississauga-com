import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { RegisterBand } from "@/components/RegisterBand";
import { JsonLd } from "@/components/JsonLd";
import { GALLERY_ITEMS, PAGE_META } from "@/lib/content";
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
          <h1 className="mt-3 max-w-[20ch] text-3xl md:text-5xl">{PAGE_META.gallery.h1}</h1>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              Official South Banks Towns imagery from the Deco Homes and Opus Homes marketing set
              is shown below: the townhome rendering (image001), the Final_Bridge_1 waterfront
              illustration, and lifestyle photography files DO_SB_Photography-9, -10, and -12.
              Renderings and illustrations are for illustration only and are subject to change.
              E.&O.E.
            </p>
            <p>
              Captions use the source file names so each image can be matched to the asset it came
              from. None of the lifestyle photographs should be read as a guaranteed amenity inside
              an unreleased site plan, and none identify a specific purchaser.
            </p>
          </div>
          <GalleryGrid items={GALLERY_ITEMS} />
        </div>
      </article>
      <RegisterBand heading="Register for South Banks Towns rendering and launch updates" />
    </>
  );
}
