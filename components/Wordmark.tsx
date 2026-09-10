import Link from "next/link";
import { SOUTH_BANKS_LOGO } from "@/lib/content";

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={`block leading-none ${inverted ? "text-surface" : "text-brand-primary"}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={inverted ? SOUTH_BANKS_LOGO.whiteSrc : SOUTH_BANKS_LOGO.src}
        alt=""
        width={SOUTH_BANKS_LOGO.width}
        height={SOUTH_BANKS_LOGO.height}
        className="h-7 w-auto max-w-[11.5rem] sm:h-8 sm:max-w-[14rem]"
      />
      <span className={`mt-1.5 block text-[10px] font-medium tracking-wide sm:text-[11px] ${inverted ? "text-surface/80" : "text-text-muted"}`}>
        Lakeview Village
      </span>
      <span className="wordmark-rule" />
    </span>
  );
}

export function WordmarkLink() {
  return (
    <Link
      href="/"
      className="inline-flex min-h-[44px] items-center"
      aria-label="South Banks Towns home"
    >
      <Wordmark />
    </Link>
  );
}
