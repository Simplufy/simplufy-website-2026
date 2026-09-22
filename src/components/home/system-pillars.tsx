import { Reveal } from "@/components/motion/reveal";
import { UiTheater } from "@/components/home/ui-theater";
import { systemPillars } from "@/lib/content";

export function SystemPillars() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-12">
          <Reveal>
            <div>
              <p className="mono-label mb-3">How the system works</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Clarity across web presence, booking path, and performance.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Built for companies where every missed lead costs real money.
                Marketing should be clear enough to see what is working.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <ol className="grid gap-2 sm:grid-cols-3">
              {systemPillars.map((pillar) => (
                <li
                  key={pillar.title}
                  className="rounded-2xl border border-border bg-[color-mix(in_oklab,#111_2%,var(--bg))] px-4 py-4"
                >
                  <p className="font-mono text-xs text-brand">{pillar.index}</p>
                  <h3 className="mt-2 text-base font-semibold tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {pillar.summary}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delayMs={140} className="mt-10">
          <UiTheater />
        </Reveal>
      </div>
    </section>
  );
}
