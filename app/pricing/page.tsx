import type { Metadata } from "next";
import Link from "next/link";
import { PricingTable } from "@/components/PricingTable";
import { RegisterBand } from "@/components/RegisterBand";
import { JsonLd } from "@/components/JsonLd";
import { LAST_UPDATED, PAGE_META, PRICING_DISCLAIMER } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { aggregateOfferSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.pricing);

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.pricing.path,
          name: PAGE_META.pricing.title,
          description: PAGE_META.pricing.description,
        })}
      />
      <JsonLd data={aggregateOfferSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <article className="section-space bg-surface">
        <div className="mx-auto max-w-[800px] px-5">
          <p className="eyebrow">Reported range</p>
          <h1 className="mt-3 text-4xl md:text-5xl">{PAGE_META.pricing.h1}</h1>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              South Banks Towns pricing is not a single published number. Listings under the current
              name cite three different bands: from the $500,000s, from the $700,000s, and a span
              running from the $500,000s to about $1 million. This page keeps all three in view
              rather than collapsing them into one headline figure. Last updated {LAST_UPDATED}.
            </p>
            <p>
              The $500,000s starting range appears on several aggregator pages. The $700,000s
              starting range is associated with thesouthbankstowns.ca. The wider $500,000s-to-$1
              million span is associated with uphomes.ca and southbankstowns.com. None of those
              pages is a primary Deco Homes or Opus Homes price list. Until that list exists,
              treating any one of them as &quot;the&quot; price would hide the disagreement buyers
              are already seeing in search.
            </p>
            <p>
              A confirmed deposit structure has not been published from a primary source for South
              Banks Towns specifically. Register through the form on this site to receive the
              current structure when the builders release it. Do not assume Aura Lakeview Village
              Towns or Pier House Towns deposit schedules apply here — those are separate projects
              by different builders inside the same master plan.
            </p>
            <p>
              Occupancy is targeted for 2028. Launch timing is reported as Fall 2026, based on
              summer-2026 listings that described the community as coming this fall. Incentives,
              assignment policies, and lot premiums have not been verified and are not listed here.{" "}
              {PRICING_DISCLAIMER}
            </p>
          </div>
          <div className="mt-10">
            <PricingTable />
          </div>
          <div className="prose-measure mt-10 space-y-5 text-text-muted">
            <h2 className="text-3xl">How to read the range</h2>
            <p>
              Pre-construction marketing ranges often mix entry towns, end units, and later-phase
              product. A &quot;from the $500s&quot; line can sit beside a $1 million ceiling without
              either figure being fabricated — they can simply describe different homes. Until a
              collection sheet maps price to plan, the honest public summary is the full reported
              span, flagged as reported.
            </p>
            <p>
              For the rename context that still drives many Coastal Towns searches, start on the{" "}
              <Link href="/" className="underline underline-offset-2 hover:text-brand-accent">
                overview
              </Link>
              . Configuration types are on{" "}
              <Link href="/floor-plans" className="underline underline-offset-2 hover:text-brand-accent">
                floor plans
              </Link>
              .
            </p>
            <p>
              Assignment fees, lot premiums, development charges, and closing adjustments are not
              listed here because they have not been verified for South Banks Towns. Repeating
              another Lakeview Village project&apos;s incentive language would look specific and
              would be someone else&apos;s number. The Registration Team can send the current
              package when Deco Homes and Opus Homes publish it.
            </p>
            <p>
              Occupancy in 2028 is a targeted completion, not a guaranteed closing month. Launch
              in Fall 2026 is a reported window from listings that said &quot;coming this
              fall.&quot; Both can move. Registration is how this site tracks those moves without
              fabricating urgency such as remaining-unit counts that have not been sourced.
            </p>
          </div>
        </div>
      </article>
      <RegisterBand heading="Receive the confirmed price list when it is issued" />
    </>
  );
}
