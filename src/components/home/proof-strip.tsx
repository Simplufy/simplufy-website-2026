import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { proofMetrics } from "@/lib/content";

export function ProofStrip() {
  const [featured, ...rest] = proofMetrics;

  return (
    <section className="border-b border-border bg-[color-mix(in_oklab,#111_3%,var(--bg))]">
      <div className="container-page py-10 sm:py-12">
        <Reveal>
          <p className="mono-label mb-6">
            Trusted across automotive · home services · trades · specialty
          </p>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-ink px-6 py-8 text-white sm:px-8 sm:py-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-[#fc0000]/25 blur-3xl"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                Featured outcome
              </p>
              <p className="mt-4 font-mono text-5xl font-medium tracking-tight text-[#fc0000] sm:text-6xl">
                <CountUp value={featured.value} />
              </p>
              <p className="mt-3 text-xl font-semibold tracking-tight">
                {featured.label}
              </p>
              <p className="mt-2 max-w-md text-sm text-white/65">
                {featured.detail}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {rest.map((m, i) => (
              <Reveal key={m.label} delayMs={80 + i * 70}>
                <div
                  className={`flex h-full flex-col justify-between rounded-2xl border border-border px-4 py-4 ${
                    i === 0
                      ? "bg-card shadow-sm"
                      : i === 1
                        ? "bg-[color-mix(in_oklab,#fc0000_6%,var(--bg))]"
                        : "bg-[color-mix(in_oklab,#111_4%,var(--bg))]"
                  }`}
                >
                  <p className="font-mono text-2xl font-medium tracking-tight text-brand">
                    <CountUp value={m.value} />
                  </p>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-foreground">
                      {m.label}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {m.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
