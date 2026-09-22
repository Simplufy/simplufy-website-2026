import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { HeroLoops } from "@/components/home/hero-loops";
import { proofMetrics } from "@/lib/content";
import { cn } from "@/lib/utils";

const detailDepot = proofMetrics[0];

export function Hero() {
  return (
    <section className="relative border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,#fc0000_8%,transparent),transparent_52%)]"
      />

      <div className="container-page relative section-pad !pb-14 !pt-12 sm:!pt-16 lg:!pb-20 lg:!pt-18">
        <div className="grid items-center gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-10 xl:gap-14">
          {/* Copy column */}
          <div className="relative z-10 min-w-0">
            <p
              className="hero-enter mono-label mb-5 !text-brand"
              style={{ ["--reveal-delay" as string]: "0ms" }}
            >
              Simplufy · websites, ads, CRM &amp; AI
            </p>

            <h1
              className="hero-enter max-w-xl text-[2.45rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.04] xl:text-[3.5rem]"
              style={{ ["--reveal-delay" as string]: "60ms" }}
            >
              Stop losing leads between the ad and the calendar.
            </h1>

            <p
              className="hero-enter mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty"
              style={{ ["--reveal-delay" as string]: "140ms" }}
            >
              We wire your website, paid ads, GoHighLevel CRM, SEO/AEO, and
              practical AI into one path. Leads stay warm from first click to
              booked job.
            </p>

            <div
              className="hero-enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ ["--reveal-delay" as string]: "220ms" }}
            >
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

            <p
              className="hero-enter mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
              style={{ ["--reveal-delay" as string]: "300ms" }}
            >
              St. Petersburg, FL · US service businesses
            </p>
          </div>

          {/* Animation loops composition */}
          <div
            className="hero-enter relative min-w-0"
            style={{ ["--reveal-delay" as string]: "100ms" }}
          >
            <HeroLoops />

            {/* Real proof chip only — Detail Depot from proofMetrics */}
            <div className="hero-float pointer-events-none absolute -right-1 -top-3 z-50 hidden max-w-[11.5rem] rounded-2xl border border-border bg-card px-3.5 py-2.5 shadow-[0_12px_28px_-14px_rgba(12,12,12,0.35)] lg:block xl:-right-2 xl:-top-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {detailDepot.label}
              </p>
              <p className="mt-0.5 text-lg font-semibold tracking-tight text-brand">
                {detailDepot.value}
              </p>
              <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                {detailDepot.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
