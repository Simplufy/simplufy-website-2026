import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { caseStudies } from "@/lib/content";

export function Results() {
  const [featured, ...rest] = caseStudies;

  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mono-label mb-3">Results</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Proof from real service-business systems.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Metric-led case work — no invented testimonials. Booked outcomes
                over vanity clicks.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1 text-sm font-medium hover:text-brand"
            >
              View case studies <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <Link
              href={featured.href}
              className="card-surface card-lift group relative flex h-full flex-col overflow-hidden p-6 sm:p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#fc0000] via-[#fc0000]/40 to-transparent"
              />
              <div className="flex items-center justify-between gap-3">
                <p className="mono-label text-brand">Featured case</p>
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-brand" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {featured.name}
              </h3>
              <p className="mt-6 font-mono text-5xl font-medium tracking-tight text-brand sm:text-6xl">
                {featured.metric}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {featured.metricLabel}
              </p>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                {featured.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.chips.map((chip) => (
                  <Badge key={chip} variant="secondary" className="font-normal">
                    {chip}
                  </Badge>
                ))}
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {rest.map((cs, i) => (
              <Reveal key={cs.slug} delayMs={80 + i * 70}>
                <Link
                  href={cs.href}
                  className={`card-lift group flex h-full flex-col rounded-2xl border border-border p-5 sm:p-6 ${
                    i === 0
                      ? "bg-ink text-white"
                      : "bg-card shadow-sm"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p
                      className={`mono-label ${
                        i === 0 ? "text-white/50" : ""
                      }`}
                    >
                      Case study
                    </p>
                    <ArrowUpRight
                      className={`size-4 ${
                        i === 0
                          ? "text-white/50 group-hover:text-[#fc0000]"
                          : "text-muted-foreground group-hover:text-brand"
                      }`}
                    />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">
                    {cs.name}
                  </h3>
                  <p
                    className={`mt-3 font-mono text-3xl font-medium tracking-tight ${
                      i === 0 ? "text-[#fc0000]" : "text-brand"
                    }`}
                  >
                    {cs.metric}
                  </p>
                  <p
                    className={`text-sm ${
                      i === 0 ? "text-white/60" : "text-muted-foreground"
                    }`}
                  >
                    {cs.metricLabel}
                  </p>
                  <p
                    className={`mt-3 flex-1 text-sm leading-relaxed ${
                      i === 0 ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {cs.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cs.chips.map((chip) => (
                      <Badge
                        key={chip}
                        variant="secondary"
                        className={`font-normal ${
                          i === 0
                            ? "border-white/15 bg-white/10 text-white/85"
                            : ""
                        }`}
                      >
                        {chip}
                      </Badge>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
