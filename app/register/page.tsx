import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { PAGE_META } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_META.register);

export default function RegisterPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PAGE_META.register.path,
          name: PAGE_META.register.title,
          description: PAGE_META.register.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Register", path: "/register" },
        ])}
      />
      <section className="section-space bg-surface">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">VIP Registration</p>
            <h1 className="mt-3 text-4xl md:text-5xl">{PAGE_META.register.h1}</h1>
            <p className="prose-measure mt-6 text-text-muted">
              If you arrived searching Coastal Towns or Coastal Townhomes, this is the same Deco
              Homes and Opus Homes waterfront community, now marketed as South Banks Towns. Register
              once for launch timing, the confirmed price list, and floor plans as they are
              released.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
