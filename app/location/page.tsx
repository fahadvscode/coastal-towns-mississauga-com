import type { Metadata } from "next";
import Link from "next/link";
import { LocationMap } from "@/components/LocationMap";
import { RegisterBand } from "@/components/RegisterBand";
import { JsonLd } from "@/components/JsonLd";
import { LAKEVIEW_COMPARISON, PAGE_META, POSTAL_LEGACY, POSTAL_PRIMARY, PRICING_DISCLAIMER } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.location);

export default function LocationPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.location.path,
          name: PAGE_META.location.title,
          description: PAGE_META.location.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Location", path: "/location" },
        ])}
      />
      <article className="section-space bg-surface">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="eyebrow">Lakeview Village</p>
          <h1 className="mt-3 max-w-[22ch] text-4xl md:text-5xl">{PAGE_META.location.h1}</h1>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              South Banks Towns (formerly Coastal Towns / Coastal Townhomes) is located at 1110
              Lakeshore Road East in Mississauga, Ontario, inside Lakeview Village. The street
              address is consistent across sources. The postal code is not: older Coastal
              Townhomes-era pages give {POSTAL_LEGACY}, while more recently observed South Banks
              listings give {POSTAL_PRIMARY}. This page treats {POSTAL_PRIMARY} as the more likely
              current code because it comes from the newer sources, and flags both so a contract is
              not drafted on a guessed code.
            </p>
            <p>
              Lakeview Village is a 177-acre master-planned waterfront redevelopment of the former
              Lakeview Generating Station site on Lake Ontario. The generating station was an
              industrial landmark on this shoreline; its four smokestacks, nicknamed the Four
              Sisters, were demolished in 2005. The master plan that replaced that industrial
              footprint is not a single builder&apos;s community. It is a multi-builder district
              combining homes, parks, a pier, a marina, and an Innovation District.
            </p>
            <p>
              Broader master-plan context — not a South Banks-specific claim — includes more than
              $1 billion in surrounding infrastructure investment cited by listing sources, and a
              roughly 20-acre Innovation District projected to bring 9,000-plus new jobs. Those
              figures describe the village-scale setting. They should not be read as amenities
              inside an unreleased South Banks Towns site plan.
            </p>
          </div>

          <div className="mt-10">
            <LocationMap />
          </div>

          <div className="prose-measure mt-12 space-y-5 text-text-muted">
            <h2 className="text-3xl">Parks, conservation, pier, and marina</h2>
            <p>
              Immediately beside this shoreline is the Jim Tovey Lakeview Conservation Area, a
              64-acre (26-hectare) public waterfront park. Credit Valley Conservation and local
              reporting describe a park built in part from recycled demolition material from the
              former power plant, connecting into the Great Lakes Waterfront Trail. It is one of
              the few GTA waterfront parks created by reclaiming an industrial generating-station
              edge rather than converting already-public beach.
            </p>
            <p>
              Named parks cited near the community include Lakefront Promenade Park and Marie
              Curtis Park. Across Lakeview Village, sources cite 45 or more acres of parks and
              public green space — some write 50-plus — plus a 600-metre pier with a retail
              boardwalk and a marina. Those are master-plan elements. Walking times from a
              specific South Banks block to each park depend on the unreleased site plan and
              should be confirmed on a map, not assumed from brochure language.
            </p>
            <h2 className="text-3xl">Transit and highway access</h2>
            <p>
              Long Branch GO Station is the commuter rail stop most often paired with this
              address, reported at roughly four to eight minutes depending on the listing. Port
              Credit is generally cited at about eight minutes. QEW access is described as under
              ten minutes, with Highway 427 also named, and Toronto Pearson International Airport
              reachable from the same highway network. Travel times of about 20 minutes to
              Mississauga City Centre and 30–40 minutes to downtown Toronto appear in location
              roundups; they vary with time of day.
            </p>
            <p>
              Square One Shopping Centre and Sherway Gardens are the two shopping centres most
              frequently listed as nearby context. They are regional malls, not on-site retail.
              On-site retail, if any, would come through the village pier, boardwalk, and future
              Innovation District rather than through a South Banks-specific shopping list, which
              has not been published.
            </p>
            <h2 className="text-3xl">Schools — unconfirmed for this address</h2>
            <p>
              Exact school catchment for 1110 Lakeshore Road East has not been confirmed. The
              general Lakeview area falls within the Peel District School Board and the
              Dufferin-Peel Catholic District School Board. Cawthra Park Secondary and St. Paul
              Secondary appear in neighbouring Lakeview Village marketing (notably beside Pier
              House Towns) and should not be treated as this site&apos;s catchment until the
              boards confirm it. Buyers should verify with the school boards before relying on a
              school name in a purchase decision.
            </p>
            <h2 className="text-3xl">South Banks vs other Lakeview Village builders</h2>
            <p>
              Three townhome builders are publicly associated with Lakeview Village releases.
              South Banks Towns is the Deco Homes and Opus Homes collection — the same project
              formerly marketed as Coastal Towns. Aura Lakeview Village Towns is a Caivan
              Communities project. Pier House Towns is a Branthaven project. They share a master
              plan and a shoreline. They do not share a builder, a price list, or a floor-plan
              book.
            </p>
          </div>

          <table className="facts stack-cards mt-10 max-w-[800px]">
            <tbody>
              {LAKEVIEW_COMPARISON.map((row) => (
                <tr key={row.project}>
                  <th scope="row">{row.project}</th>
                  <td>
                    <span className="block font-medium text-text-primary">{row.builder}</span>
                    <span className="mt-1 block text-sm">{row.notes}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="prose-measure mt-10 text-sm text-text-muted">{PRICING_DISCLAIMER}</p>
          <div className="prose-measure mt-8 space-y-5 text-text-muted">
            <h2 className="text-3xl">Lakeshore Road East as a commuting edge</h2>
            <p>
              1110 Lakeshore Road East sits on Mississauga&apos;s south edge, where the municipal
              grid meets the lake rather than Square One. That is the point of Lakeview Village:
              a generating-station site being turned into housing beside a conservation shoreline,
              not an inland greenfield. Buyers who need a 427 / QEW path to Pearson or downtown
              Toronto are shopping a different commute than buyers who need a GO train at Long
              Branch or a drive into Port Credit. Both stories appear in the listings; neither
              replaces a timed drive at the hour you actually travel.
            </p>
            <p>
              The Coastal Towns name on this domain is not a second address. It is the earlier
              marketing name for the same Deco Homes and Opus Homes release. A pin dropped on
              1110 Lakeshore Road East for Coastal Townhomes and a pin dropped for South Banks
              Towns should land on the same street. If a map or listing shows a different
              Lakeshore block, treat that as a different project until the address matches.
            </p>
          </div>
          <p className="prose-measure mt-4 text-text-muted">
            For the rename explainer, see the{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-brand-accent">
              homepage
            </Link>
            . For a longer village-wide buyer&apos;s guide covering every known builder release,
            read the{" "}
            <Link
              href="/blog/lakeview-village-waterfront-buyer-guide"
              className="underline underline-offset-2 hover:text-brand-accent"
            >
              Lakeview Village waterfront buyer&apos;s guide
            </Link>
            .
          </p>
        </div>
      </article>
      <RegisterBand heading="Register for South Banks Towns location and launch updates" />
    </>
  );
}
