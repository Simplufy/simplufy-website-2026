import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { resources } from "@/lib/content";

export function ResourcesTeaser() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mono-label mb-3">Resources</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Practical reading for service operators.
              </h2>
            </div>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1 text-sm font-medium hover:text-brand"
            >
              Browse resources <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <ul className="divide-y divide-border border-y border-border">
            {resources.map((r, i) => (
              <li key={r.title}>
                <Link
                  href={r.href}
                  className="group grid gap-2 py-5 transition-colors hover:bg-[color-mix(in_oklab,#fc0000_3%,transparent)] sm:grid-cols-[4.5rem_1fr_auto] sm:items-baseline sm:gap-6 sm:px-2"
                >
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} · Article
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-brand">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {r.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="hidden size-4 text-muted-foreground group-hover:text-brand sm:block" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
