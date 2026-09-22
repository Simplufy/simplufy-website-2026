import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real Simplufy results — Detail Depot pipeline, Momentum Coaching ROAS, JP Mobile Detail bookings, and more.",
};

export default function CaseStudiesPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <p className="mono-label mb-3">Results</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight">
          Case studies & metrics
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Featured cases from published Simplufy work — real metrics, no invented
          quotes. Open a detail page for narrative and stack.
        </p>
        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={cs.href}
              className="card-surface card-lift group flex h-full flex-col p-6"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-xl font-semibold tracking-tight">{cs.name}</h2>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
              </div>
              <p className="mt-4 font-mono text-3xl font-medium text-brand">
                {cs.metric}
              </p>
              <p className="text-sm text-muted-foreground">{cs.metricLabel}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {cs.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cs.chips.map((c) => (
                  <Badge key={c} variant="secondary">
                    {c}
                  </Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/contact" className={cn(buttonVariants())}>
            Talk through a similar roadmap
          </Link>
        </div>
      </div>
    </section>
  );
}
