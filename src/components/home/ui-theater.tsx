"use client";

import { useEffect, useState } from "react";

const tabs = [
  { id: "pipeline", label: "Pipeline" },
  { id: "ads", label: "Ads" },
  { id: "crm", label: "CRM" },
  { id: "booking", label: "Booking" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const stages = [
  { label: "Ad click", detail: "Google Search · Meta retarget", status: "live" },
  { label: "Landing page", detail: "Offer clarity · proof · CTA", status: "live" },
  { label: "GHL pipeline", detail: "New lead → Qualified → Booked", status: "live" },
  { label: "Booked call", detail: "Calendar + SMS confirm", status: "won" },
];

const logLines = [
  "→ New lead assigned",
  "SMS sent in 00:00:47",
  "Calendar link delivered",
  "Status: Booked consult",
];

const adsRows = [
  ["Brand · Search", "Active", "$42.10", "4.8x"],
  ["Service · PMax", "Active", "$118.40", "3.1x"],
  ["Retarget · Meta", "Learning", "$29.80", "6.2x"],
];

const crmRows = [
  ["New lead", "12", "hot"],
  ["Qualified", "8", "warm"],
  ["Booked", "5", "won"],
  ["No-show risk", "2", "watch"],
];

const bookingLog = [
  "Calendar: Strategy Call · Thu 2:00p ET",
  "Confirm SMS queued · T-24h / T-2h",
  "Form source: /services#web-development",
  "Owner notified · pipeline stage = Booked",
];

export function UiTheater() {
  const [tab, setTab] = useState<TabId>("pipeline");
  const [visibleLines, setVisibleLines] = useState(1);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleLines(logLines.length);
      setActiveStage(stages.length - 1);
      return;
    }

    const lineTimer = window.setInterval(() => {
      setVisibleLines((n) => (n >= logLines.length ? 1 : n + 1));
    }, 1600);

    const stageTimer = window.setInterval(() => {
      setActiveStage((n) => (n + 1) % stages.length);
    }, 2200);

    return () => {
      window.clearInterval(lineTimer);
      window.clearInterval(stageTimer);
    };
  }, []);

  return (
    <div className="card-surface overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="flex items-center gap-2">
          <span className="status-dot-live size-2 rounded-full bg-brand" />
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
            simplufy@ops · connected system
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors ${
                tab === t.id
                  ? "bg-brand text-brand-foreground"
                  : "bg-[color-mix(in_oklab,#111_6%,transparent)] text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-0.5 w-full pipeline-flow-bar opacity-80" aria-hidden />

      {tab === "pipeline" && (
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3 border-b border-border p-4 sm:p-5 lg:border-b-0 lg:border-r">
            <p className="mono-label">Flow</p>
            <ol className="space-y-2">
              {stages.map((stage, i) => {
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
            <p className="mono-label">Pipeline snapshot</p>
            <div className="space-y-2 font-mono text-xs">
              <div className="rounded-lg bg-ink px-3 py-3 text-[color-mix(in_oklab,white_88%,transparent)]">
                <p className="text-[10px] uppercase tracking-[0.14em] text-white/50">
                  ghl · speed-to-lead
                </p>
                <div className="mt-2 space-y-1">
                  {logLines.slice(0, visibleLines).map((line, i) => (
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
              <div className="grid grid-cols-3 gap-2">
                {[
                  ["Leads", "48"],
                  ["Booked", "17"],
                  ["Show", "14"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-lg border border-border bg-card px-3 py-3 text-center"
                  >
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {k}
                    </p>
                    <p className="mt-1 text-lg text-foreground">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "ads" && (
        <div className="p-4 sm:p-5">
          <p className="mono-label mb-3">Campaign board</p>
          <div className="overflow-hidden rounded-xl border border-border">
            <div className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.6fr] gap-2 border-b border-border bg-[color-mix(in_oklab,#111_3%,var(--bg))] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <span>Campaign</span>
              <span>Status</span>
              <span>Spend</span>
              <span>ROAS</span>
            </div>
            {adsRows.map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.6fr] gap-2 border-b border-border px-3 py-3 font-mono text-xs last:border-b-0"
              >
                <span className="font-sans text-sm font-medium">{row[0]}</span>
                <span className="text-brand">{row[1]}</span>
                <span className="text-muted-foreground">{row[2]}</span>
                <span className="font-medium">{row[3]}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Paid demand aimed at calls, forms, estimates — not vanity clicks.
          </p>
        </div>
      )}

      {tab === "crm" && (
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="space-y-3 border-b border-border p-4 sm:p-5 lg:border-b-0 lg:border-r">
            <p className="mono-label">GHL stages</p>
            <ul className="space-y-2">
              {crmRows.map(([name, count, tone]) => (
                <li
                  key={name}
                  className="flex items-center justify-between rounded-xl border border-border px-3 py-3"
                >
                  <span className="text-sm font-medium">{name}</span>
                  <span className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-muted-foreground">{tone}</span>
                    <span className="rounded-md bg-ink px-2 py-0.5 text-white">
                      {count}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 sm:p-5">
            <p className="mono-label mb-3">Missed-call flow</p>
            <div className="rounded-xl bg-ink px-4 py-4 font-mono text-xs text-white/80">
              <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                automation · active
              </p>
              <p className="mt-2 text-brand">→ Missed call detected</p>
              <p className="mt-1">SMS: “Still need help? Book here →”</p>
              <p className="mt-1 type-caret text-white/90">
                Opportunity created · stage = New
              </p>
            </div>
          </div>
        </div>
      )}

      {tab === "booking" && (
        <div className="p-4 sm:p-5">
          <p className="mono-label mb-3">Calendar path</p>
          <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-xl border border-border bg-[color-mix(in_oklab,var(--bg)_70%,white)] p-4">
              <p className="text-sm font-semibold tracking-tight">
                Strategy call · 30 min
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Website · ads · CRM · AI opportunities
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {["Thu 2:00p", "Fri 10:30a", "Mon 1:00p"].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className="rounded-lg border border-border bg-card px-2 py-2 font-mono text-[11px] hover:border-brand hover:text-brand"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-ink px-4 py-4 font-mono text-xs text-white/75">
              {bookingLog.map((line, i) => (
                <p
                  key={line}
                  className={i === 0 ? "text-brand" : "mt-1.5 text-white/70"}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-border px-4 py-3 sm:px-5">
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          Illustrative system theater — not a live client dashboard. Reflects
          Simplufy’s connected ads → page → CRM → booked call model.
        </p>
      </div>
    </div>
  );
}
