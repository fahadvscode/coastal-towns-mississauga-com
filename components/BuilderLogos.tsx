import { DECO_LOGO, OPUS_LOGO } from "@/lib/content";

export function BuilderLogos() {
  return (
    <div className="mt-8 grid max-w-[520px] grid-cols-2 items-center gap-6">
      <div className="card flex min-h-[120px] items-center justify-center px-6 py-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={DECO_LOGO.src}
          alt={DECO_LOGO.alt}
          width={DECO_LOGO.width}
          height={DECO_LOGO.height}
          className="h-12 w-auto max-w-full sm:h-14"
        />
      </div>
      <div className="card flex min-h-[120px] items-center justify-center px-6 py-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={OPUS_LOGO.src}
          alt={OPUS_LOGO.alt}
          width={OPUS_LOGO.width}
          height={OPUS_LOGO.height}
          className="h-8 w-auto max-w-full sm:h-10"
        />
      </div>
    </div>
  );
}
