import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/home/final-cta";
import { Reveal } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { caseStudies } from "@/lib/content";
import {
  getCaseStudy,
  getCaseStudyDetail,
} from "@/lib/detail-content";
import { cn } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = getCaseStudyDetail(slug);
  if (!detail) return { title: "Case study" };
  return {
    title: detail.title,
    description: detail.metaDescription,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  const detail = getCaseStudyDetail(slug);
  if (!cs || !detail) notFound();

  const others = caseStudies.filter((c) => c.slug !== slug);

  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-page">
          <Reveal>
            <p className="mono-label mb-3">Case study</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{detail.industry}</Badge>
              {detail.location ? (
                <Badge variant="secondary">{detail.location}</Badge>
              ) : null}
            </div>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {detail.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {cs.summary}
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="card-surface p-5 sm:col-span-2 lg:col-span-1">
                <p className="font-mono text-3xl font-medium text-brand">
                  {cs.metric}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cs.metricLabel}
                </p>
              </div>
              {detail.highlights.map((h) => (
                <div key={h} className="card-surface flex items-center p-5">
                  <p className="font-mono text-sm font-medium tracking-tight">
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-b border-border bg-[color-mix(in_oklab,#111_3%,var(--bg))]">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <p className="mono-label mb-3">What happened</p>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {detail.narrative.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Metrics above are from published Simplufy case material — no
              invented testimonials.
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="card-surface p-6">
              <p className="mono-label">Stack involved</p>
              <ul className="mt-4 space-y-2">
                {detail.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-border bg-[color-mix(in_oklab,var(--bg)_80%,white)] px-3 py-2 text-sm"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={cn(buttonVariants(), "mt-6 w-full")}
              >
                Talk through a similar roadmap
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {others.length > 0 ? (
        <section className="section-pad">
          <div className="container-page">
            <p className="mono-label mb-3">More results</p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Other featured case studies
            </h2>
            <div className="mt-8 grid gap-3 lg:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={o.href}
                  className="card-surface card-lift p-6"
                >
                  <h3 className="text-xl font-semibold tracking-tight">
                    {o.name}
                  </h3>
                  <p className="mt-3 font-mono text-2xl font-medium text-brand">
                    {o.metric}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {o.metricLabel}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {o.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FinalCta />
    </>
  );
}
