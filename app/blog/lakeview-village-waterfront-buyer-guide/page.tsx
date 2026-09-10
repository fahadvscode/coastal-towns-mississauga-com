import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RegisterBand } from "@/components/RegisterBand";
import { JsonLd } from "@/components/JsonLd";
import { HERO_IMAGE, LAST_UPDATED, PAGE_META } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.blog);

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.blog.path,
          name: PAGE_META.blog.title,
          description: PAGE_META.blog.description,
        })}
      />
      <JsonLd data={articleSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Buyer's guide", path: PAGE_META.blog.path },
        ])}
      />
      <article className="section-space bg-surface">
        <div className="mx-auto max-w-[760px] px-5">
          <p className="eyebrow">Lakeview Village</p>
          <h1 className="mt-3 text-4xl md:text-5xl">{PAGE_META.blog.h1}</h1>
          <p className="mt-4 text-sm text-text-muted">Last updated {LAST_UPDATED}</p>
          <figure className="card mt-8 overflow-hidden">
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              width={HERO_IMAGE.width}
              height={HERO_IMAGE.height}
              sizes="760px"
              className="h-auto w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm text-text-muted">{HERO_IMAGE.caption}</figcaption>
          </figure>
          <div className="prose-measure mt-8 space-y-5 text-text-muted">
            <p>
              Lakeview Village is not one condominium and it is not one builder&apos;s street.
              It is a 177-acre waterfront redevelopment on the former Lakeview Generating Station
              site in Mississauga, on Lake Ontario, with several builders releasing homes into the
              same master plan. A buyer searching &quot;new homes Lakeview Village&quot; can land
              on South Banks Towns, Aura Lakeview Village Towns, Pier House Towns, or an older
              Coastal Towns page and think they have found competing versions of a single product.
              They have not. They have found neighbouring releases that share a shoreline and
              almost none of the paperwork.
            </p>
            <p>
              This guide is written for that confusion. It maps the village, names the builders
              who are actually releasing homes there, and places South Banks Towns — formerly
              marketed as Coastal Towns and Coastal Townhomes — in that context without pretending
              the other collections are the same community under a different headline.
            </p>

            <h2 className="pt-4 text-3xl">What Lakeview Village actually is</h2>
            <p>
              For decades this stretch of Lakeshore Road East was industrial waterfront. Ontario
              Power Generation&apos;s Lakeview Generating Station occupied the site; its four
              smokestacks, remembered locally as the Four Sisters, came down in 2005. The land that
              remained is large enough, and close enough to the lake, that Mississauga&apos;s
              planning response was a master-planned district rather than a one-off subdivision.
            </p>
            <p>
              The published shape of that district is consistent across municipal and marketing
              sources: about 177 acres, parks measured in the mid-forties to fifty-plus acres, a
              600-metre pier with a retail boardwalk, a marina, and an Innovation District of
              roughly 20 acres that listing copy projects at 9,000-plus jobs. Surrounding
              infrastructure investment is cited at more than $1 billion. Those figures describe
              the village. They do not describe any one builder&apos;s floor plan.
            </p>
            <p>
              Adjacent public shoreline includes the Jim Tovey Lakeview Conservation Area — 64
              acres, 26 hectares — built in part from recycled demolition material and tied into
              the Great Lakes Waterfront Trail. Lakefront Promenade Park and Marie Curtis Park
              sit in the same waterfront chain. A buyer who wants waterfront access is not
              inventing the amenity. A buyer who assumes a specific townhome block sits
              &quot;steps from&quot; a named park still needs a site plan.
            </p>

            <h2 className="pt-4 text-3xl">The builders releasing homes here</h2>
            <p>
              Three townhome builders are publicly associated with Lakeview Village product as of{" "}
              {LAST_UPDATED}. Treating them as interchangeable is the fastest way to misread
              pricing, deposits, and occupancy.
            </p>
            <p>
              <strong>Deco Homes and Opus Homes — South Banks Towns.</strong> This is the
              120-plus three-storey freehold townhome collection at 1110 Lakeshore Road East.
              It was originally marketed as Coastal Towns / Coastal Townhomes and has since been
              rebranded to South Banks / South Banks Towns. Reported configurations are 3-bedroom,
              3-bedroom plus den, 4-bedroom, and premium end-unit. Reported pricing spans the
              $500,000s to about $1 million depending on the source. Launch is reported as Fall
              2026; completion is targeted for 2028. Deco Homes (founded 1995, Decor Studio) and
              Opus Homes (Living Refined™ / Signature Finishes™) are the builders. They are not
              Caivan, not Branthaven, and not a generic &quot;Lakeview Homes.&quot;
            </p>
            <p>
              <strong>Caivan Communities — Aura Lakeview Village Towns.</strong> Aura is a
              separate townhome release inside the same 177-acre plan. Caivan is the builder.
              Aura&apos;s pricing, floor plans, and occupancy are Aura&apos;s. They do not
              substitute for a missing South Banks collection sheet, and South Banks figures do
              not substitute for Aura&apos;s.
            </p>
            <p>
              <strong>Branthaven — Pier House Towns.</strong> Pier House is another distinct
              townhome community by a different builder in the same village. School names that
              appear beside Pier House marketing — Cawthra Park Secondary and St. Paul Secondary
              among them — are neighbouring-project context, not a confirmed catchment for 1110
              Lakeshore Road East. Peel District School Board and Dufferin-Peel Catholic District
              School Board cover the general area; exact catchment still has to be confirmed
              address by address.
            </p>
            <p>
              Other housing forms may follow inside Lakeview Village as later phases. This guide
              limits itself to the three townhome builders already named in public listings, so it
              does not invent a fourth collection to look comprehensive.
            </p>

            <h2 className="pt-4 text-3xl">Why Coastal Towns still appears in search</h2>
            <p>
              Domain names and older microsites froze the project under Coastal Towns and Coastal
              Townhomes. Newer pages froze it under South Banks. Almost none of them mention the
              other name. A buyer who bookmarked an old Coastal Townhomes page in 2025 and a
              South Banks page in 2026 can reasonably wonder whether two waterfront towns are
              launching a few hundred metres apart. The reported answer is that they are the same
              Deco/Opus collection after a marketing rename.
            </p>
            <p>
              That does not tell a buyer whether &quot;Coastal Towns&quot; was a legal project
              name or only a working title, and this guide does not invent a rename date. It does
              tell a buyer not to register twice under two names for what sources describe as one
              community, and not to treat an outdated Coastal Townhomes spec sheet as current if a
              South Banks page has since updated price language — or vice versa.
            </p>

            <h2 className="pt-4 text-3xl">How to compare without a complete brochure</h2>
            <p>
              Waterfront pre-construction in the west GTA is scarce enough that buyers stretch
              incomplete listings into certainty. The more useful method is a short checklist that
              survives missing numbers:
            </p>
            <p>
              First, name the builder. South Banks is Deco Homes and Opus Homes. Aura is Caivan.
              Pier House is Branthaven. If a page names &quot;Lakeview Homes&quot; as the builder
              of South Banks, that page has an accuracy problem.
            </p>
            <p>
              Second, name the tenure. South Banks is reported as freehold townhomes. Confirm that
              on the agreement. Condominium towns and POTL towns elsewhere in Mississauga are not
              interchangeable with freehold row product, even when they share a waterfront
              adjective.
            </p>
            <p>
              Third, hold pricing as a range until a collection sheet exists. For South Banks the
              public range currently runs from the $500,000s on some pages, the $700,000s on
              another, and up to about $1 million on others. A comparison that uses only the
              lowest of those figures against Aura or Pier House is not a comparison; it is a
              selected headline.
            </p>
            <p>
              Fourth, separate village amenities from project amenities. The conservation area,
              pier, marina, and Innovation District belong to the master plan. A rooftop terrace
              on a specific town belongs to an unreleased floor plan. Mixing the two is how
              location pages accidentally promise a park that is public, or a finish package that
              is someone else&apos;s.
            </p>
            <p>
              Fifth, check transit against a map, not a minute-count. Long Branch GO, Port Credit,
              the QEW, Highway 427, and Pearson are the nodes repeatedly named. Four minutes and
              eight minutes cannot both be universally true for every block; they are listing
              approximations.
            </p>

            <h2 className="pt-4 text-3xl">What a waterfront buyer should register for</h2>
            <p>
              Registration on an independent information site does not allocate a home. It puts a
              buyer on an update list for the project they actually mean. If that project is the
              Deco Homes and Opus Homes collection at 1110 Lakeshore Road East, register for South
              Banks Towns even if the search that brought you here still said Coastal Towns.
            </p>
            <p>
              If the project you mean is Aura or Pier House, register on those builders&apos;
              channels rather than assuming one VIP list covers the village. Lakeview Village is
              large enough to hold more than one launch, and each launch has its own deposit
              structure, its own occupancy, and its own agreement.
            </p>
            <p>
              For this site&apos;s South Banks overview, start at the{" "}
              <Link href="/" className="underline underline-offset-2 hover:text-brand-accent">
                homepage rename explainer
              </Link>
              . For sourced price bands, use the{" "}
              <Link href="/pricing" className="underline underline-offset-2 hover:text-brand-accent">
                pricing page
              </Link>
              . For parks, transit, postal-code conflict, and the three-builder table, use{" "}
              <Link href="/location" className="underline underline-offset-2 hover:text-brand-accent">
                location
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
      <RegisterBand heading="Register for South Banks Towns — the Deco & Opus release in Lakeview Village" />
    </>
  );
}
