import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { QuickFacts } from "@/components/QuickFacts";
import { RegisterBand } from "@/components/RegisterBand";
import { FadeIn } from "@/components/FadeIn";
import { JsonLd } from "@/components/JsonLd";
import { BuilderLogos } from "@/components/BuilderLogos";
import { LAST_UPDATED, PAGE_META, PRICING_DISCLAIMER } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { aggregateOfferSchema, breadcrumbSchema, residenceSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={residenceSchema()} />
      <JsonLd data={aggregateOfferSchema()} />
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: PAGE_META.home.title,
          description: PAGE_META.home.description,
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <Hero />
      <QuickFacts />

      <section className="section-space bg-surface" aria-labelledby="community-heading">
        <FadeIn className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Coming this fall</p>
          <h2 id="community-heading" className="mt-3 max-w-[22ch] text-3xl md:text-4xl">
            Coastal townhomes on the Lake Ontario shoreline
          </h2>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              South Banks is a coastal townhome collection in Lakeview Village, brought to market
              by Deco Homes and Opus Homes. The official project site lists homes from{" "}
              <strong>$549,990</strong>, coming this fall to the Mississauga waterfront at 1110
              Lakeshore Road East.
            </p>
            <p>
              More than 120 three-storey freehold townhomes are planned, each with a private
              entrance and layered outdoor space. Reported layouts include 3-bedroom,
              3-bedroom-plus-den, 4-bedroom, and premium end-unit. Individual plan names and
              interior sizes have not been released. Register above for the confirmed collection
              sheet when it is issued.
            </p>
            <p>
              Lakeview Village is a 177-acre waterfront redevelopment on the former Lakeview
              Generating Station site. The official South Banks site describes it as one of the
              GTA&apos;s major waterfront projects, minutes from downtown, with more than 50 acres
              of parks and greenspace, public promenades, and room for retail, restaurants, and
              employment. Towns are marketed as close to the marina, the pier, and the park.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="section-space bg-surface-alt" aria-labelledby="overview-heading">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">The community</p>
          <h2 id="overview-heading" className="mt-3 max-w-[24ch] text-3xl md:text-4xl">
            Waterfront freehold towns inside Lakeview Village
          </h2>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              Lakeview Village occupies the former Ontario Power Generation Lakeview Generating
              Station shoreline. The plant&apos;s four smokestacks — locally remembered as the Four
              Sisters — were demolished in 2005. What remains is a 177-acre waterfront master plan
              that combines housing, parks, a pier, a marina, and an Innovation District. South
              Banks Towns is one builder release inside that plan, not the entire village.
            </p>
            <p>
              The community sits steps from the 64-acre Jim Tovey Lakeview Conservation Area, a
              newly reclaimed public waterfront park built in part from recycled demolition
              material and connected to the Great Lakes Waterfront Trail. Named parks nearby
              include Lakefront Promenade Park and Marie Curtis Park. Across Lakeview Village,
              sources cite 45 or more acres of parks and public green space, plus a 600-metre pier
              with a retail boardwalk.
            </p>
            <p>
              Reported transit access includes Long Branch GO Station, generally cited at roughly
              four to eight minutes, and Port Credit at about eight minutes, with highway access
              via the QEW (under ten minutes) and Highway 427. Travel times of about 20 minutes to
              Mississauga City Centre and roughly 30–40 minutes to downtown Toronto appear across
              listings; they vary with traffic and should be verified independently. Square One
              Shopping Centre and Sherway Gardens are the shopping centres most often named in the
              same roundup.
            </p>
            <p>
              Deco Homes, founded in 1995, is known for a 4,000-square-foot Decor Studio offering
              more than 1,000 design options and for treating finishes commonly sold as upgrades
              elsewhere as standard inclusions. Opus Homes markets a Living Refined™ promise with
              Signature Finishes™ as standard and is active across the GTA from Brampton to Whitby
              to Aurora. Together they are the builders of South Banks Towns. They are not
              &quot;Lakeview Homes&quot; — a misnomer that appears on at least one competing page
              and should not be repeated.
            </p>
            <BuilderLogos />
          </div>
        </div>
      </section>

      <section className="section-space bg-surface" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Reported figures</p>
          <h2 id="pricing-heading" className="mt-3 max-w-[22ch] text-3xl md:text-4xl">
            From $549,990 on the official project site
          </h2>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              The official South Banks site publishes coastal townhomes from $549,990. Other
              listings still cite from the $500,000s, from the $700,000s, or a span to about $1
              million. This page leads with the official starting figure and keeps the wider
              reported range in view on the pricing page.
            </p>
            <p>
              Launch is listed as coming this fall, with a targeted 2028 completion. The sales
              gallery is marked coming soon. A confirmed deposit structure has not been published
              from a primary source. Register to receive those details from the Registration Team
              when they are released, rather than treating another Lakeview Village builder&apos;s
              deposit schedule as a stand-in. {PRICING_DISCLAIMER}
            </p>
            <p>
              Last updated {LAST_UPDATED}. For the sourced breakdown, see the{" "}
              <Link href="/pricing" className="underline underline-offset-2 hover:text-brand-accent">
                pricing page
              </Link>
              . Configuration types — not invented plan names — live on{" "}
              <Link href="/floor-plans" className="underline underline-offset-2 hover:text-brand-accent">
                floor plans
              </Link>
              . Address, parks, transit, and the comparison to Aura Lakeview Village Towns and Pier
              House Towns are on{" "}
              <Link href="/location" className="underline underline-offset-2 hover:text-brand-accent">
                location
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-surface-alt" aria-labelledby="how-to-use-heading">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">How to use this hub</p>
          <h2 id="how-to-use-heading" className="mt-3 max-w-[24ch] text-3xl md:text-4xl">
            An information page, not a builder impersonation
          </h2>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              This is an independent registration website. It is not the official site of Deco
              Homes or Opus Homes. Nothing here is written in the first person as if the builders
              were speaking. VIP Registration is the only contact channel — there is no phone
              number and no email address on any page, including privacy and the 404.
            </p>
            <p>
              Sixteen frequently asked questions live on the{" "}
              <Link href="/faq" className="underline underline-offset-2 hover:text-brand-accent">
                FAQ
              </Link>{" "}
              with FAQPage structured data. A longer village-wide comparison of every known
              builder release is in the{" "}
              <Link
                href="/blog/lakeview-village-waterfront-buyer-guide"
                className="underline underline-offset-2 hover:text-brand-accent"
              >
                Lakeview Village waterfront buyer&apos;s guide
              </Link>
              . Official renderings and photography are on the{" "}
              <Link href="/gallery" className="underline underline-offset-2 hover:text-brand-accent">
                gallery
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <RegisterBand />
    </>
  );
}
