import Image from "next/image";
import { HERO_IMAGE, HOME_ANSWER, PAGE_META, STATUS_SHORT } from "@/lib/content";
import { LeadForm } from "./LeadForm";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-deep">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/92 via-brand-deep/78 to-brand-deep/55 md:bg-gradient-to-r md:from-brand-deep md:via-brand-deep/88 md:to-brand-deep/50" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1200px] gap-8 px-5 py-12 md:gap-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="eyebrow text-brand-accent">
            {STATUS_SHORT} · Lakeview Village · Mississauga
          </p>
          <h1 className="hero-title mt-4 max-w-[18ch] text-[1.85rem] leading-[1.15] text-balance sm:text-4xl md:max-w-[20ch] md:text-5xl lg:text-[3.15rem]">
            {PAGE_META.home.h1}
          </h1>
          <p className="hero-lede prose-measure mt-5 text-[16px] md:mt-6 md:text-[18px]">{HOME_ANSWER}</p>
        </div>
        <LeadForm compact />
      </div>
    </section>
  );
}
