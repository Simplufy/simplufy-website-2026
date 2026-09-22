import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/home/final-cta";
import { Reveal } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import { processSteps, siteConfig, systemPillars } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Simplufy — digital marketing and growth systems for service businesses in St. Petersburg, Florida.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-page max-w-3xl">
          <Reveal>
            <p className="mono-label mb-3">About</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Connected systems for companies that sell services.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Simplufy is a digital marketing and growth-systems agency based in{" "}
              {siteConfig.location}. We build websites, paid ads, CRM automation,
              SEO/AEO/GEO, and practical AI for contractors, auto shops, med spas,
              education brands, and B2B service companies across the U.S.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Founder story and team details will land here once Vacquero supplies
              public-facing bio copy. Until then: the work is the product — booked
              calls, estimates, consultations, and enrollments over vanity metrics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants())}>
                Book a strategy call
              </Link>
              <Link
                href="/case-studies"
                className={cn(buttonVariants({ variant: "outline" }), "bg-card")}
              >
                See results
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-b border-border bg-[color-mix(in_oklab,#111_3%,var(--bg))]">
        <div className="container-page">
          <Reveal>
            <p className="mono-label mb-3">What we stand for</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
              Systems over isolated deliverables.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {systemPillars.map((p) => (
              <div key={p.index} className="card-surface p-6">
                <p className="font-mono text-[11px] text-brand">{p.index}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <p className="mono-label mb-3">How we work</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
              Find the leak before spending more money.
            </h2>
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

      <FinalCta />
    </>
  );
}
