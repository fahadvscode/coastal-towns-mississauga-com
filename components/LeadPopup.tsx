"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LeadForm } from "./LeadForm";
import { REGISTRATION_IMAGE } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "ctm_popup_dismissed";
const MOBILE_DELAY_MS = 25000;
const SCROLL_RATIO = 0.55;
const SKIP = new Set(["/thank-you", "/register", "/privacy", "/terms"]);

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="M4 4l10 10M14 4L4 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 767px)").matches;
}

export function LeadPopup() {
  const pathname = usePathname();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const shown = useRef(false);
  const [open, setOpen] = useState(false);

  const show = useCallback(() => {
    if (shown.current) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* still allow once this load */
    }
    shown.current = true;
    lastFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setOpen(true);
    trackEvent("popup_shown");
  }, []);

  const dismiss = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
    trackEvent("popup_dismissed");
    lastFocus.current?.focus();
  }, []);

  useEffect(() => {
    shown.current = false;
    setOpen(false);
    if (SKIP.has(pathname)) return;

    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* continue */
    }

    const timer = window.setTimeout(() => {
      if (isMobileViewport()) show();
    }, MOBILE_DELAY_MS);

    const onScroll = () => {
      if (!isMobileViewport()) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      if (window.scrollY / max >= SCROLL_RATIO) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onExit = (event: MouseEvent) => {
      if (isMobileViewport()) return;
      if (event.relatedTarget) return;
      if (event.clientY > 0) return;
      show();
    };
    document.addEventListener("mouseout", onExit);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onExit);
    };
  }, [pathname, show]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss();
        return;
      }
      if (event.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const focusable = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, dismiss]);

  if (SKIP.has(pathname) || !open) return null;

  return (
    <div
      className="popup-enter fixed inset-0 z-[90] flex items-end justify-center bg-brand-deep/65 p-3 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      data-lead-popup="true"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close registration popup"
        onClick={dismiss}
      />
      <div
        ref={dialogRef}
        className="popup-panel relative z-10 flex w-full max-w-[32rem] max-h-[min(92dvh,40rem)] flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-[0_18px_50px_rgba(14,56,68,0.28)]"
      >
        <div className="relative h-28 shrink-0 sm:h-32">
          <Image
            src={REGISTRATION_IMAGE.src}
            alt=""
            fill
            sizes="512px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/55 to-brand-deep/10" />
        </div>

        <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4">
          <div className="min-w-0 pr-2">
            <p className="eyebrow">VIP Registration</p>
            <h2 id={titleId} className="mt-1 text-[1.45rem] leading-tight sm:text-2xl">
              Get South Banks Towns updates first
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border border-border bg-surface-card text-brand-primary hover:border-brand-accent hover:text-brand-accent"
            onClick={dismiss}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <p className="mb-5 text-[15px] leading-relaxed text-text-muted">
            Register for confirmed pricing and floor plans as they are released. Coastal townhomes
            from $549,990, coming this fall to Lakeview Village.
          </p>
          <LeadForm id="popup-register" embedded source="popup" />
          <button
            type="button"
            className="mt-3 inline-flex min-h-[44px] w-full items-center justify-center text-[15px] font-medium text-text-muted underline-offset-2 hover:text-brand-primary hover:underline"
            onClick={dismiss}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
