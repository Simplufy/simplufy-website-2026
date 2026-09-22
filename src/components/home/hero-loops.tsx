"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Hero-scale UI theater vignettes — decorative, endlessly looping.
 * Pure CSS keyframes where possible; reduced-motion freezes to a final frame.
 * Desktop: 2×2 CSS grid with light stagger (no cramped absolute box that clips).
 */
export function HeroLoops({ className }: { className?: string }) {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div
      className={cn("relative min-w-0", className)}
      aria-hidden
      data-reduce-motion={reduce ? "true" : "false"}
    >
      {/* Desktop 2×2 staggered grid — full card height, no overflow clip */}
      <div className="relative mx-auto hidden w-full max-w-xl lg:grid lg:grid-cols-2 lg:gap-4 xl:max-w-none xl:gap-5">
        <LoopShell className="z-20 -rotate-1 self-start">
          <SearchLoop />
        </LoopShell>
        <LoopShell className="z-30 mt-6 rotate-[1.5deg] self-start xl:mt-8">
          <SpeedLoop />
        </LoopShell>
        <LoopShell className="z-40 -mt-2 rotate-[0.6deg] self-start">
          <PipelineLoop />
        </LoopShell>
        <LoopShell className="z-10 mt-4 -rotate-[1.5deg] self-start xl:mt-6">
          <AdsLoop />
        </LoopShell>
      </div>

      {/* Mobile / tablet stack */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:hidden">
        <LoopShell className="sm:col-span-2 rotate-[-0.4deg]">
          <SearchLoop />
        </LoopShell>
        <LoopShell className="rotate-[0.8deg]">
          <SpeedLoop />
        </LoopShell>
        <LoopShell className="rotate-[-0.6deg]">
          <PipelineLoop />
        </LoopShell>
        <LoopShell className="sm:col-span-2 rotate-[0.3deg]">
          <AdsLoop />
        </LoopShell>
      </div>
    </div>
  );
}

function LoopShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card shadow-[0_1px_0_rgba(12,12,12,0.04),0_18px_40px_-20px_rgba(12,12,12,0.35)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function CardChrome({
  label,
  live,
}: {
  label: string;
  live?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-border px-3 py-2">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      {live ? (
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
          <span className="hero-loop-dot size-1.5 rounded-full bg-brand" />
          Live
        </span>
      ) : null}
    </div>
  );
}

/** 1) Search query → SERP chip → landing offer → CTA glow */
function SearchLoop() {
  return (
    <div className="hero-loop-search p-0">
      <CardChrome label="Search → site" live />
      <div className="relative space-y-2.5 px-3 py-3">
        {/* Query bar — always has visible typed content via ::after */}
        <div className="flex items-center gap-2 rounded-lg border border-border bg-[color-mix(in_oklab,#111_4%,var(--bg))] px-2.5 py-1.5">
          <span className="size-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
          <p className="min-h-[1.1em] flex-1 font-mono text-[11px] text-foreground">
            <span className="hero-loop-query text-muted-foreground" />
          </p>
        </div>

        {/* SERP result chip */}
        <div className="hero-loop-serp rounded-lg border border-border bg-card px-2.5 py-2">
          <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-brand">
            Ad · yoursite.com
          </p>
          <p className="mt-0.5 text-[12px] font-medium leading-snug">
            Same-day roof inspection
          </p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">
            Book online · St. Petersburg
          </p>
        </div>

        {/* Landing offer + CTA */}
        <div className="hero-loop-landing rounded-lg border border-border bg-[color-mix(in_oklab,var(--brand)_6%,var(--bg))] px-2.5 py-2.5">
          <p className="text-[11px] font-medium leading-snug">
            Free inspection · storm damage
          </p>
          <div className="hero-loop-cta mt-2 inline-flex rounded-md bg-brand px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-brand-foreground">
            Book now
          </div>
        </div>
      </div>
    </div>
  );
}

/** 2) New lead → timer → SMS / assign */
function SpeedLoop() {
  return (
    <div className="hero-loop-speed">
      <CardChrome label="Speed-to-lead" live />
      <div className="space-y-2.5 px-3 py-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[12px] font-semibold tracking-tight">New lead</p>
            <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">
              Form · /services
            </p>
          </div>
          <div className="hero-loop-timer rounded-md border border-border bg-[color-mix(in_oklab,#111_4%,var(--bg))] px-2 py-1 font-mono text-[11px] tabular-nums text-brand">
            00:00
          </div>
        </div>

        <div className="h-1 overflow-hidden rounded-full bg-[color-mix(in_oklab,#111_8%,transparent)]">
          <div className="hero-loop-progress h-full rounded-full bg-brand" />
        </div>

        <div className="space-y-1.5">
          <div className="hero-loop-step hero-loop-step-1 flex items-center gap-2 rounded-md border border-border px-2 py-1.5">
            <span className="size-1.5 rounded-full bg-brand" />
            <p className="font-mono text-[10px] text-foreground">Assigned · Alex</p>
          </div>
          <div className="hero-loop-step hero-loop-step-2 flex items-center gap-2 rounded-md border border-border px-2 py-1.5">
            <span className="size-1.5 rounded-full bg-brand" />
            <p className="font-mono text-[10px] text-foreground">SMS sent</p>
          </div>
          <div className="hero-loop-step hero-loop-step-3 flex items-center gap-2 rounded-md border border-border px-2 py-1.5">
            <span className="size-1.5 rounded-full bg-brand" />
            <p className="font-mono text-[10px] text-foreground">Calendar link live</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 3) Compact stage advance New → Qualified → Booked */
function PipelineLoop() {
  const stages = ["New", "Qualified", "Booked"] as const;
  return (
    <div className="hero-loop-pipeline">
      <CardChrome label="CRM pipeline" />
      <div className="px-3 py-3">
        <div className="flex items-center justify-between gap-1">
          {stages.map((s, i) => (
            <div key={s} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className={cn(
                  "hero-loop-stage-dot size-2.5 rounded-full border-2 border-border bg-card",
                  `hero-loop-stage-${i}`
                )}
              />
              <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
                {s}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-3 h-0.5 overflow-hidden rounded-full bg-[color-mix(in_oklab,#111_10%,transparent)]">
          <div className="hero-loop-pipe-fill absolute inset-y-0 left-0 rounded-full bg-brand" />
        </div>

        <div className="hero-loop-card-slide mt-3 rounded-lg border border-border bg-[color-mix(in_oklab,#111_3%,var(--bg))] px-2.5 py-2">
          <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
            Opportunity
          </p>
          <p className="mt-0.5 text-[12px] font-medium">HVAC tune-up · Jordan</p>
          <p className="hero-loop-stage-label mt-1 font-mono text-[10px] text-brand">
            New
          </p>
        </div>
      </div>
    </div>
  );
}

/** 4) Relative campaign bars — demo UI only, no claimed metrics */
function AdsLoop() {
  const rows = [
    { name: "Brand · Search", cls: "hero-loop-bar-a" },
    { name: "Service · PMax", cls: "hero-loop-bar-b" },
    { name: "Retarget · Meta", cls: "hero-loop-bar-c" },
  ] as const;

  return (
    <div className="hero-loop-ads">
      <CardChrome label="Paid media" live />
      <div className="space-y-2.5 px-3 py-3">
        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
          Relative spend · demo UI
        </p>
        {rows.map((r) => (
          <div key={r.name} className="space-y-1">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate font-mono text-[10px] text-foreground">
                {r.name}
              </p>
              <span className="size-1.5 shrink-0 rounded-full bg-brand/80" />
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[color-mix(in_oklab,#111_8%,transparent)]">
              <div className={cn("h-full rounded-full bg-brand", r.cls)} />
            </div>
          </div>
        ))}
        <div className="flex items-end gap-1 pt-1" style={{ height: 28 }}>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={cn(
                "hero-loop-spark flex-1 rounded-sm bg-brand/70",
                `hero-loop-spark-${i}`
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
