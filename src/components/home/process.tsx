import { Reveal } from "@/components/motion/reveal";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section className="section-pad border-t border-border bg-[color-mix(in_oklab,#111_2%,var(--bg))]">
      <div className="container-page">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mono-label mb-3">Process</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Audit → Build → Improve
            </h2>
            <p className="mt-3 text-muted-foreground">
              Find the leak before spending more money.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[1.15rem] hidden h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklab,#fc0000_55%,var(--border))] to-transparent lg:block"
          />

          <ol className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delayMs={i * 120}>
                <li className="relative">
                  <div className="flex items-center gap-3 lg:block">
                    <span className="relative z-10 flex size-9 items-center justify-center rounded-full border border-[color-mix(in_oklab,#fc0000_40%,var(--border))] bg-card font-mono text-xs font-medium text-brand shadow-sm">
                      {step.index}
                    </span>
                    <h3 className="text-2xl font-semibold tracking-tight lg:mt-5">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:mt-4">
                    {step.summary}
                  </p>
                  {i < processSteps.length - 1 && (
                    <span
                      aria-hidden
                      className="mt-4 block h-px w-12 bg-gradient-to-r from-[#fc0000]/60 to-transparent lg:hidden"
                    />
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
