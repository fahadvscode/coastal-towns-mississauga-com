import Link from "next/link";

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={`block leading-none ${inverted ? "text-surface" : "text-brand-primary"}`}>
      <span className="font-display text-[1.05rem] font-semibold tracking-tight sm:text-[1.2rem]">
        South Banks Towns
      </span>
      <span className={`mt-0.5 block text-[10px] font-medium tracking-wide sm:text-[11px] ${inverted ? "text-surface/80" : "text-text-muted"}`}>
        formerly Coastal Towns
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
      aria-label="South Banks Towns, formerly Coastal Towns, home"
    >
      <Wordmark />
    </Link>
  );
}
