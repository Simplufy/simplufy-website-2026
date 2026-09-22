import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/content";

export function ServicesGrid() {
  const featured = services.slice(0, 2);
  const rest = services.slice(2);

  return (
    <section className="section-pad border-t border-border bg-[color-mix(in_oklab,#111_2%,var(--bg))]">
      <div className="container-page">
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mono-label mb-3">What we build</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Eight connected offers. One growth system.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-brand"
            >
              All services <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-3 lg:grid-cols-2">
          {featured.map((service, i) => (
            <Reveal key={service.slug} delayMs={i * 80}>
              <Link
                href={service.href}
                className="card-surface card-lift group relative flex min-h-[11rem] flex-col justify-between overflow-hidden p-6 sm:p-7"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,#fc0000_18%,transparent),transparent_70%)]"
                />
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-sm text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-brand" />
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {service.name}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120}>
          <ul className="mt-3 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {rest.map((service, i) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="group flex items-start gap-4 px-4 py-4 transition-colors hover:bg-[color-mix(in_oklab,#fc0000_4%,transparent)] sm:items-center sm:gap-6 sm:px-5"
                >
                  <span className="shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums">
                    {String(i + 3).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1 sm:grid sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6">
                    <h3 className="text-[15px] font-semibold tracking-tight group-hover:text-brand">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:mt-0">
                      {service.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 sm:mt-0" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
