import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";
import { RegisterBand } from "@/components/RegisterBand";
import { JsonLd } from "@/components/JsonLd";
import { FAQS, PAGE_META } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.faq);

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.faq.path,
          name: PAGE_META.faq.title,
          description: PAGE_META.faq.description,
        })}
      />
      <JsonLd data={faqPageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <article className="section-space bg-surface">
        <div className="mx-auto max-w-[800px] px-5">
          <p className="eyebrow">Questions</p>
          <h1 className="mt-3 text-3xl md:text-5xl">{PAGE_META.faq.h1}</h1>
          <div className="prose-measure mt-6 space-y-5 text-text-muted">
            <p>
              These answers cover builders, address, home types, the $549,990 starting price on
              the official project site, other reported price bands, launch timing, parks, transit,
              other Lakeview Village builders, schools, deposits, and how to register.
            </p>
            <p>
              Every answer below is also in the page&apos;s FAQPage structured data so search and
              answer engines can cite it. Open/close state is visual only — the full text is in
              the HTML on first load. Competing South Banks pages in this niche
              have been observed without a complete FAQPage block; that is a structural gap this
              page is written to fill, not a claim that any one competitor is empty of facts.
            </p>
            <p>
              Answers that mention pricing, deposits, occupancy, or school names stay inside what
              has been verified or explicitly flagged.               Where sources conflict — the official $549,990 start versus the $500,000s
              versus the $700,000s versus a span to $1 million — the answer states the conflict.
              Where a figure is unpublished, the answer points to registration rather than
              inventing a schedule.
            </p>
          </div>
          <div className="mt-10">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </article>
      <RegisterBand heading="Still have a question? Register for a direct update" />
    </>
  );
}
