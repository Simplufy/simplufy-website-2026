"use client";

import { useEffect, useState } from "react";
import type { IndustryDetail } from "@/lib/detail-content";

type Theater = IndustryDetail["theater"];

export function IndustrySystemTheater({ theater }: { theater: Theater }) {
  const [visibleLines, setVisibleLines] = useState(1);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleLines(theater.logLines.length);
      setActiveStage(theater.steps.length - 1);
      return;
    }

    const lineTimer = window.setInterval(() => {
      setVisibleLines((n) =>
        n >= theater.logLines.length ? 1 : n + 1
      );
    }, 1600);

    const stageTimer = window.setInterval(() => {
      setActiveStage((n) => (n + 1) % theater.steps.length);
    }, 2200);

    return () => {
      window.clearInterval(lineTimer);
      window.clearInterval(stageTimer);
    };
  }, [theater.logLines.length, theater.steps.length]);

  return (
    <div className="card-surface overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="status-dot-live size-2 rounded-full bg-brand" />
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
            simplufy · {theater.label}
          </p>
        </div>
        <p className="font-mono text-[10px] text-brand">live path</p>
      </div>

      <div className="h-0.5 w-full pipeline-flow-bar opacity-80" aria-hidden />

      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-3 border-b border-border p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <p className="mono-label">How demand becomes a booking</p>
          <ol className="space-y-2">
            {theater.steps.map((stage, i) => {
              const isActive = i === activeStage;
              return (
                <li
                  key={stage.label}
                  className={`flex items-start gap-3 rounded-xl border px-3 py-3 transition-[border-color,background-color,box-shadow] duration-500 ${
                    isActive
                      ? "border-[color-mix(in_oklab,#fc0000_40%,var(--border))] bg-[color-mix(in_oklab,#fc0000_6%,white)] shadow-[0_0_0_1px_color-mix(in_oklab,#fc0000_12%,transparent)]"
                      : "border-border bg-[color-mix(in_oklab,var(--bg)_70%,white)]"
                  }`}
                >
                  <span className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium">{stage.label}</p>
                      <span
                        className={
                          stage.status === "won"
                            ? "rounded-full bg-[color-mix(in_oklab,#14a821_15%,transparent)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[color-mix(in_oklab,#0d7a16_90%,black)]"
                            : "rounded-full bg-[color-mix(in_oklab,#fc0000_14%,transparent)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand"
                        }
                      >
                        {stage.status}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {stage.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          <p className="mono-label">Speed-to-lead</p>
          <div className="rounded-xl bg-ink px-3 py-3 font-mono text-xs text-white/80">
            <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">
              ghl · automation
            </p>
            <div className="mt-2 space-y-1">
              {theater.logLines.slice(0, visibleLines).map((line, i) => (
                <p
                  key={line}
                  className={
                    i === 0
                      ? "text-[#fc0000]"
                      : i === visibleLines - 1
                        ? "type-caret text-white/90"
                        : "text-white/70"
                  }
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            Illustrative path for this trade — not a live client dashboard.
            Reflects Simplufy’s ads → page → CRM → booked outcome model.
          </p>
        </div>
      </div>
    </div>
  );
}
