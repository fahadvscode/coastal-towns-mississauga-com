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

      <section className="section-space bg-surface" aria-labelledby="rename-heading">
        <FadeIn className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">The name change</p>
          <h2 id="rename-heading" className="mt-3 max-w-[22ch] text-3xl md:text-4xl">
            Coastal Towns is now South Banks Towns
          </h2>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              If you have seen this project marketed before under the name <strong>Coastal Towns</strong>{" "}
              or <strong>Coastal Townhomes</strong>, you are in the right place. Multiple independent
              sources confirm the same Deco Homes and Opus Homes waterfront townhome community at
              1110 Lakeshore Road East has since been rebranded to <strong>South Banks</strong>, or{" "}
              <strong>South Banks Towns</strong>. This page uses the current name for accuracy while
              keeping the earlier name front and centre, because that is still what many buyers type
              into Google.
            </p>
            <p>
              The split in the search results is unusually clean. Older agent microsites still
              describe Coastal Townhomes as if the name never changed. Newer South Banks pages
              describe the same address and builders without mentioning Coastal Towns at all. Neither
              side of that split answers the question people actually ask: whether the two names
              point at one project. They do.
            </p>
            <p>
              This site does not claim a specific rename date, and it does not assert that
              &quot;Coastal Towns&quot; was ever the fully final legal project name rather than a
              working marketing name. What is reported, repeatedly, is the bridge: previously
              marketed as Coastal Townhomes, now presented as South Banks. That is the fact this
              information hub is built to make unambiguous.
            </p>
            <p>
              South Banks Towns brings more than 120 three-storey freehold townhomes to Lakeview
              Village, a 177-acre master-planned redevelopment of the former Lakeview Generating
              Station site on the shore of Lake Ontario. Configurations include 3-bedroom,
              3-bedroom-plus-den, 4-bedroom, and premium end-unit layouts, each with a private
              entrance. Register above to receive the current, confirmed price list and floor plans
              as they are released.
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
            Why the published prices do not agree
          </h2>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              Reported pricing for South Banks Towns varies meaningfully by source. Several listings
              say from the $500,000s. Another cites from the $700,000s. Others describe a span from
              the $500,000s to about $1 million. This page presents that full range rather than
              silently picking one figure, because picking one would make the page look finished
              and make it wrong.
            </p>
            <p>
              A Fall 2026 launch is reported — listings dated in summer 2026 described the project
              as &quot;coming this fall&quot; — with a targeted 2028 completion. A confirmed
              deposit structure has not been published from a primary source. Register to receive
              those details from the Registration Team when they are released, rather than treating
              another Lakeview Village builder&apos;s deposit schedule as a stand-in.{" "}
              {PRICING_DISCLAIMER}
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
              The crowded field around this project is the reason the rename explainer exists. At
              least nine agent microsites and aggregators already cover the same address, split
              between the old name and the new one. The gap is not &quot;first to publish.&quot;
              The gap is a page that will say, in the opening paragraph, that Coastal Towns became
              South Banks Towns, that the builders are Deco Homes and Opus Homes, and that the
              published prices do not currently agree.
            </p>
            <p>
              Sixteen frequently asked questions, including the rename question, live on the{" "}
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
              . Official renderings are labelled as to-be-added on the{" "}
              <Link href="/gallery" className="underline underline-offset-2 hover:text-brand-accent">
                gallery
              </Link>
              ; waterfront context photography is not a substitute streetscape.
            </p>
          </div>
        </div>
      </section>

      <RegisterBand />
    </>
  );
}
