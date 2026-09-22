import { Reveal } from "@/components/motion/reveal";

const leaks = [
  "Unclear offers on thin pages",
  "Ads that hit a dead-end homepage",
  "CRM stages that never get used",
  "Follow-up measured in days, not minutes",
  "Tracking that cannot name a booked call",
];

const system = [
  "Specific pages for specific buyers",
  "Paid demand aimed at booked outcomes",
  "GHL pipelines that move every lead",
  "Speed-to-lead SMS and calendar paths",
  "Reporting tied to pipeline, not vanity",
];

export function ProblemFrame() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:items-start">
          <Reveal>
            <div>
              <p className="mono-label mb-4">The real problem</p>
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Most marketing problems are really{" "}
                <span className="text-brand">system problems</span>.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
                A nice website will not save slow follow-up. Unclear offers, thin
                pages, disconnected tools, and weak tracking leak money long
                before the next ad budget increase helps. Simplufy builds the
                connected path from first click to booked call, estimate,
                consult, or enrollment.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-border bg-[color-mix(in_oklab,#111_3%,var(--bg))] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Without a system
                </p>
                <ul className="mt-4 space-y-2.5">
                  {leaks.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-snug text-muted-foreground"
                    >
                      <span className="mt-0.5 font-mono text-brand/70">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[color-mix(in_oklab,#fc0000_28%,var(--border))] bg-[color-mix(in_oklab,#fc0000_5%,white)] p-5 shadow-[0_0_0_1px_color-mix(in_oklab,#fc0000_8%,transparent)]">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">
                  With Simplufy
                </p>
                <ul className="mt-4 space-y-2.5">
                  {system.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-snug text-foreground"
                    >
                      <span className="mt-0.5 font-mono text-brand">◈</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
