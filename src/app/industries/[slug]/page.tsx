import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { FinalCta } from "@/components/home/final-cta";
import { IndustrySystemTheater } from "@/components/industries/industry-system-theater";
import { IndustryTile } from "@/components/industries/industry-tile";
import { Reveal, RevealGroup } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import { industries } from "@/lib/content";
import {
  getIndustry,
  getIndustryDetail,
  resolveCaseStudies,
  resolveServices,
} from "@/lib/detail-content";
import { cn } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = getIndustryDetail(slug);
  const industry = getIndustry(slug);
  if (!detail || !industry) return { title: "Industry" };
  return {
    title: detail.title,
    description: detail.metaDescription,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  const detail = getIndustryDetail(slug);
  if (!industry || !detail) notFound();

  const relatedServices = resolveServices(detail.relatedServiceSlugs);
  const featuredServices = relatedServices.slice(0, 2);
  const denseServices = relatedServices.slice(2);
  const relatedCases = resolveCaseStudies(detail.relatedCaseSlugs);
  const [featuredCase, ...companionCases] = relatedCases;
  const otherIndustries = industries.filter((i) => i.slug !== slug).slice(0, 6);

  return (
    <>
      {/* 1. Asymmetric hero — photo as designed object + cream copy */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="ambient-glow pointer-events-none absolute -right-24 -top-32 size-[28rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,#fc0000_28%,transparent),transparent_68%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,#fc0000_10%,transparent),transparent_50%)]"
        />

        <div className="container-page relative section-pad !pb-14 !pt-12 sm:!pt-16 lg:!pt-18">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <Reveal>
              <div>
                <p className="mono-label mb-4 text-brand">
                  Industry · {industry.name}
                </p>
                <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.15rem] lg:leading-[1.05]">
                  {detail.headline}
                </h1>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
                  {detail.intro}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {detail.focusChips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-sm text-foreground shadow-sm"
                    >
                      <span className="mr-2 font-mono text-[11px] text-brand">
                        ◈
                      </span>
                      {chip}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "justify-center bg-brand text-brand-foreground hover:bg-brand/85"
                    )}
                  >
                    Book a strategy call
                  </Link>
                  <Link
                    href="/contact#audit"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "justify-center bg-card/70"
                    )}
                  >
                    Request a free audit
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-ink shadow-[0_24px_60px_-28px_rgba(0,0,0,0.45)]">
                  {industry.image ? (
                    <Image
                      src={industry.image}
                      alt=""
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-ink" />
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                      Focus
                    </p>
                    <p className="mt-1.5 text-lg font-semibold tracking-tight text-white">
                      {detail.focusLabel}
                    </p>
                  </div>
                </div>

                {/* Floating metric/chip cards */}
                <div className="absolute -bottom-4 -left-2 hidden max-w-[14rem] rounded-2xl border border-border bg-card p-3 shadow-lg sm:block lg:-left-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Buyer path
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug">
                    {detail.journey[0]} → {detail.journey[detail.journey.length - 1]}
                  </p>
                </div>
                <div className="absolute -right-2 -top-3 hidden rounded-2xl border border-[color-mix(in_oklab,#fc0000_30%,var(--border))] bg-[color-mix(in_oklab,#fc0000_6%,white)] px-3 py-2 shadow-md sm:block lg:-right-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand">
                    System
                  </p>
                  <p className="mt-0.5 text-xs font-medium">Ads → page → CRM → booked</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Trade reality — Without / With */}
      <section className="section-pad border-b border-border bg-[color-mix(in_oklab,#111_2%,var(--bg))]">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
            <Reveal>
              <div>
                <p className="mono-label mb-4">Trade reality</p>
                <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
                  {detail.focusLabel} — without the{" "}
                  <span className="text-brand">system</span>, demand leaks.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
                  {detail.problem}
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-border bg-[color-mix(in_oklab,#111_3%,var(--bg))] p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    Without a system
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {detail.without.map((item) => (
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
                    {detail.withSystem.map((item) => (
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

      {/* 3. How the system works — UI theater */}
      <section className="section-pad border-b border-border">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <p className="mono-label mb-3">How the system works</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                From first concern to booked next step — for{" "}
                {industry.name.toLowerCase()}.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Industry-flavored path: demand → page → CRM → booked outcome.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <IndustrySystemTheater theater={detail.theater} />
          </Reveal>

          {/* Numbered help path under theater */}
          <RevealGroup className="mt-8 grid gap-3 md:grid-cols-3">
            {detail.helpItems.map((item, i) => (
              <Reveal key={item.title}>
                <div className="card-surface flex h-full flex-col p-5">
                  <p className="font-mono text-[11px] text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                  {item.serviceSlug ? (
                    <Link
                      href={`/services/${item.serviceSlug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                    >
                      View service
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 4. Services that matter — featured + dense list */}
      <section className="section-pad border-b border-border bg-[color-mix(in_oklab,#111_2%,var(--bg))]">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mono-label mb-3">Services that matter</p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Connected offers for {industry.name.toLowerCase()}.
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
            {featuredServices.map((service, i) => (
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

          {denseServices.length > 0 ? (
            <Reveal delayMs={120}>
              <ul className="mt-3 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                {denseServices.map((service, i) => (
                  <li key={service.slug}>
                    <Link
                      href={service.href}
                      className="group flex items-start gap-4 px-4 py-4 transition-colors hover:bg-[color-mix(in_oklab,#fc0000_4%,transparent)] sm:items-center sm:gap-6 sm:px-5"
                    >
                      <span className="shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums">
                        {String(i + 3).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1 sm:grid sm:grid-cols-[12rem_1fr] sm:items-baseline sm:gap-6">
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
          ) : null}
        </div>
      </section>

      {/* 5. Proof — cases or scenario cards (never invent metrics) */}
      <section className="section-pad border-b border-border bg-ink text-white">
        <div className="container-page">
          <Reveal>
            <p className="mono-label mb-3 text-white/50">Proof</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
              {relatedCases.length > 0
                ? "Related results from the Simplufy library."
                : `What the system looks like for ${industry.name.toLowerCase()}.`}
            </h2>
            {relatedCases.length === 0 ? (
              <p className="mt-3 max-w-xl text-sm text-white/55">
                Qualitative scenarios — not invented metrics. Case studies are
                linked only when published results exist.
              </p>
            ) : null}
          </Reveal>

          {featuredCase ? (
            <div className="mt-10 grid gap-3 lg:grid-cols-[1.35fr_1fr]">
              <Reveal>
                <Link
                  href={featuredCase.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#fc0000]/40 hover:bg-white/8 sm:p-8"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-[#fc0000]/25 blur-3xl"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                      Featured case
                    </p>
                    <ArrowUpRight className="size-4 text-white/40 transition-colors group-hover:text-[#fc0000]" />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {featuredCase.name}
                  </h3>
                  <p className="mt-4 font-mono text-5xl font-medium tracking-tight text-[#fc0000] sm:text-6xl">
                    {featuredCase.metric}
                  </p>
                  <p className="mt-1 text-sm text-white/55">
                    {featuredCase.metricLabel}
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
                    {featuredCase.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featuredCase.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/60"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>

              <div className="grid gap-3">
                {companionCases.length > 0
                  ? companionCases.map((cs, i) => (
                      <Reveal key={cs.slug} delayMs={80 + i * 70}>
                        <Link
                          href={cs.href}
                          className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-[#fc0000]/35 hover:bg-white/8"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-lg font-semibold tracking-tight">
                              {cs.name}
                            </h3>
                            <ArrowUpRight className="size-4 text-white/40 group-hover:text-[#fc0000]" />
                          </div>
                          <div className="mt-3">
                            <p className="font-mono text-2xl font-medium text-[#fc0000]">
                              {cs.metric}
                            </p>
                            <p className="text-xs text-white/50">
                              {cs.metricLabel}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-white/65">
                              {cs.summary}
                            </p>
                          </div>
                        </Link>
                      </Reveal>
                    ))
                  : detail.scenarios.slice(0, 2).map((s, i) => (
                      <Reveal key={s.title} delayMs={80 + i * 70}>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                            Scenario 0{i + 1}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold tracking-tight">
                            {s.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-white/65">
                            {s.summary}
                          </p>
                        </div>
                      </Reveal>
                    ))}
              </div>
            </div>
          ) : (
            <RevealGroup className="mt-10 grid gap-3 md:grid-cols-3">
              {detail.scenarios.map((s, i) => (
                <Reveal key={s.title}>
                  <div
                    className={`flex h-full flex-col rounded-2xl border border-white/10 p-5 ${
                      i === 0
                        ? "bg-[color-mix(in_oklab,#fc0000_12%,transparent)]"
                        : "bg-white/5"
                    }`}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                      Scenario {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
                      {s.summary}
                    </p>
                  </div>
                </Reveal>
              ))}
            </RevealGroup>
          )}
        </div>
      </section>

      {/* 6. Journey / process — Audit → Build → Improve + buyer path */}
      <section className="section-pad border-b border-border">
        <div className="container-page">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mono-label mb-3">Process</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Audit → Build → Improve
              </h2>
              <p className="mt-3 text-muted-foreground">
                Find the leak for {industry.name.toLowerCase()} before spending
                more money.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-[1.15rem] hidden h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklab,#fc0000_55%,var(--border))] to-transparent lg:block"
            />
            <ol className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              {detail.process.map((step, i) => (
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
                    {i < detail.process.length - 1 ? (
                      <span
                        aria-hidden
                        className="mt-4 block h-px w-12 bg-gradient-to-r from-[#fc0000]/60 to-transparent lg:hidden"
                      />
                    ) : null}
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delayMs={200}>
            <div className="mt-12">
              <p className="mono-label mb-4">Buyer path</p>
              <ol className="flex flex-wrap gap-2">
                {detail.journey.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-border bg-card px-3.5 py-2 text-sm font-medium shadow-sm">
                      <span className="mr-2 font-mono text-[10px] text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </span>
                    {i < detail.journey.length - 1 ? (
                      <span
                        aria-hidden
                        className="hidden font-mono text-brand/50 sm:inline"
                      >
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Other industries — visual tile strip */}
      <section className="section-pad border-b border-border bg-[color-mix(in_oklab,#111_2%,var(--bg))]">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mono-label mb-3">More industries</p>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Built for other service markets too.
                </h2>
              </div>
              <Link
                href="/industries"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
              >
                All industries <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherIndustries.map((ind) => (
              <IndustryTile key={ind.slug} industry={ind} size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <FinalCta />
    </>
  );
}
