import type { Metadata } from "next";
import Image from "next/image";
import { FloorPlanCard } from "@/components/FloorPlanCard";
import { RegisterBand } from "@/components/RegisterBand";
import { JsonLd } from "@/components/JsonLd";
import { COLLECTIONS, HERO_IMAGE, PAGE_META, PRICING_DISCLAIMER } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.floorPlans);

export default function FloorPlansPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.floorPlans.path,
          name: PAGE_META.floorPlans.title,
          description: PAGE_META.floorPlans.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Floor plans", path: "/floor-plans" },
        ])}
      />
      <article className="section-space bg-surface">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Configurations</p>
          <h1 className="mt-3 max-w-[20ch] text-3xl md:text-5xl">{PAGE_META.floorPlans.h1}</h1>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              South Banks Towns is described as a collection of more than 120 three-storey
              coastal-style freehold townhomes with private entrances and layered outdoor space.
              The configuration types published so far are 3-bedroom, 3-bedroom plus den,
              4-bedroom, and premium end-unit. Individual plan names and exact interior sizes have
              not been released.
            </p>
            <p>
              This page stops at those four tiers on purpose. Inventing brochure names, square
              footage, or garage counts would fill the layout and mislead a buyer who later sees
              the real collection sheet. Until Deco Homes and Opus Homes publish that sheet,
              treat any specific size quoted on another microsite as unverified.
            </p>
            <p>
              Freehold title is the ownership form reported for this collection. That is a
              different legal structure from condominium towns elsewhere in Mississauga, and it
              is also different from a Parcel of Tied Land arrangement if one were later
              disclosed. Confirm the title structure on the agreement, not from marketing copy.{" "}
              {PRICING_DISCLAIMER}
            </p>
            <p>
              Outdoor space is described in general terms — layered terraces, rooftop or rear
              amenity, private entries — without a confirmed per-plan diagram. End units are
              called out as a premium tier, which in a row-town collection usually means extra
              windows and a wider exposure, not a detached lot. Register for the allocation list
              when plan names, elevations, and interior dimensions are issued.
            </p>
            <p>
              Buyers comparing South Banks Towns to stacked condominium towns elsewhere in
              Mississauga should not import another project&apos;s interior widths. A three-storey
              freehold row with a private entrance behaves differently in resale, maintenance, and
              insurance than a stacked town that shares more of the building. Until the brochure
              shows stairs, garage placement, and outdoor decks per plan, the only honest public
              description is the four configuration types already named.
            </p>
            <p>
              Until Deco Homes and Opus Homes publish square footage, the public description stays
              at more than 120 freehold coastal towns across those four configuration types. The
              official project site lists homes from $549,990, coming this fall.
            </p>
          </div>
          <figure className="card mt-10 max-w-[720px] overflow-hidden">
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              width={HERO_IMAGE.width}
              height={HERO_IMAGE.height}
              sizes="(max-width: 720px) 100vw, 720px"
              className="h-auto w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm text-text-muted">
              {HERO_IMAGE.caption} Individual plan names and interior sizes are still unreleased.
            </figcaption>
          </figure>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {COLLECTIONS.map((collection) => (
              <FloorPlanCard key={collection.id} collection={collection} />
            ))}
          </div>
        </div>
      </article>
      <RegisterBand heading="Get the floor-plan collection when it is released" />
    </>
  );
}
