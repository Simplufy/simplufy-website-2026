import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { FinalCta } from "@/components/home/final-cta";
import { IndustryTile } from "@/components/industries/industry-tile";
import { Reveal, RevealGroup } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { processSteps, services } from "@/lib/content";
import {
  getService,
  getServiceDetail,
  resolveIndustries,
} from "@/lib/detail-content";
import { cn } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) return { title: "Service" };
  return {
    title: detail.title,
    description: detail.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  const detail = getServiceDetail(slug);
  if (!service || !detail) notFound();

  const relatedIndustries = resolveIndustries(detail.relatedIndustrySlugs).slice(
    0,
    6
  );
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Distinct ink hero */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-white">
        <div
          aria-hidden
          className="ambient-glow pointer-events-none absolute -right-24 -top-20 size-[26rem] rounded-full bg-[#fc0000]/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fc0000]/60 to-transparent"
        />
        <div className="container-page relative section-pad !py-16 sm:!py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="mono-label mb-3 text-white/50">Service</p>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                  {detail.headline}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
                  {detail.intro}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "bg-brand text-brand-foreground hover:bg-brand/90"
                    )}
                  >
                    Book a strategy call
                  </Link>
                  <Link
                    href="/services"
                    className={cn(
                      buttonVariants({ size: "lg", variant: "outline" }),
                      "border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                    )}
                  >
                    All services
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/5 p-5 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                  System path
                </p>
                <ol className="mt-4 space-y-3">
                  {detail.journey.map((step, i) => (
                    <li key={step} className="flex items-center gap-3">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/15 font-mono text-[10px] text-[#fc0000]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-white/80">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem */}
      <section className="section-pad border-b border-border">
        <div className="container-page max-w-3xl">
          <Reveal>
            <p className="mono-label mb-3">Why this matters</p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance">
              {detail.journeyLine}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {detail.problem}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad border-b border-border bg-[color-mix(in_oklab,#111_3%,var(--bg))]">
        <div className="container-page">
          <Reveal>
            <p className="mono-label mb-3">What we build</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
              A practical {detail.title.toLowerCase()} system — not a vague
              retainer.
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-3 sm:grid-cols-2">
            {detail.pillars.map((p) => (
              <Reveal key={p.index}>
                <article className="card-surface card-lift h-full p-6">
                  <p className="font-mono text-[11px] text-brand">{p.index}</p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                </article>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Use cases + leaks */}
      <section className="section-pad border-b border-border">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="mono-label mb-3">Best fit</p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Where this work usually starts.
            </h2>
            <div className="mt-6 space-y-3">
              {detail.useCases.map((u) => (
                <div key={u.title} className="card-surface p-5">
                  <h3 className="font-semibold tracking-tight">{u.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {u.summary}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mono-label mb-3">Common leaks</p>
            <h2 className="text-2xl font-semibold tracking-tight">
              What we look for first.
            </h2>
            <ul className="mt-6 space-y-3">
              {detail.leaks.map((leak) => (
                <li
                  key={leak}
                  className="flex gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm leading-relaxed"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>{leak}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad border-b border-border bg-[color-mix(in_oklab,#111_3%,var(--bg))]">
        <div className="container-page">
          <Reveal>
            <p className="mono-label mb-3">Process</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
              Audit → Build → Improve
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Find the leak before spending more money.{" "}
              {detail.ctaPrompt}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.index} className="card-surface p-6">
                <p className="font-mono text-[11px] text-brand">{step.index}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related industries */}
      <section className="section-pad border-b border-border">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mono-label mb-3">Related industries</p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Strongest pages speak to the buyer you want more of.
                </h2>
              </div>
              <Link
                href="/industries"
                className="text-sm font-medium text-brand hover:underline"
              >
                All industries →
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedIndustries.map((ind) => (
              <IndustryTile key={ind.slug} industry={ind} size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad border-b border-border">
        <div className="container-page max-w-3xl">
          <Reveal>
            <p className="mono-label mb-3">FAQ</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Before you hire for {detail.title.toLowerCase()}.
            </h2>
          </Reveal>
          <Accordion className="mt-8">
            {detail.faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Other services */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <p className="mono-label mb-3">More services</p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Connected offers around the same growth system.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s, i) => (
              <Link
                key={s.slug}
                href={s.href}
                className="card-surface card-lift group flex flex-col p-5"
              >
                <p className="font-mono text-[11px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="mt-2 flex items-start justify-between gap-2">
                  <h3 className="font-semibold tracking-tight">{s.name}</h3>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
                </div>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
