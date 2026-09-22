import type { Metadata } from "next";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a Simplufy strategy call or request a free audit of your website, ads, CRM, and follow-up system.",
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="mono-label mb-3">Contact</p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Book a strategy call — or request a free audit.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Dual path, same goal: find the leak before spending more money. We
            look at website/SEO, ads/tracking, CRM/follow-up, and AI
            opportunities. Based in {siteConfig.location}; serving U.S. service
            businesses.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="card-surface p-6 sm:p-8">
            <p className="mono-label">Primary</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Strategy call
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Walk through what is working, what is leaking, and what should be
              fixed first. Calendar embed (GoHighLevel) slots in here for
              production.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-mono text-[10px] text-brand">01</span>
                Website and SEO review
              </li>
              <li className="flex gap-2">
                <span className="font-mono text-[10px] text-brand">02</span>
                Paid ads and tracking review
              </li>
              <li className="flex gap-2">
                <span className="font-mono text-[10px] text-brand">03</span>
                CRM and follow-up review
              </li>
              <li className="flex gap-2">
                <span className="font-mono text-[10px] text-brand">04</span>
                AI automation opportunities
              </li>
            </ul>
            <div className="mt-6 flex min-h-48 items-center justify-center rounded-2xl border border-dashed border-border bg-[color-mix(in_oklab,var(--bg)_80%,white)] px-4 text-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  calendar embed placeholder
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Drop GHL calendar ID when ready.
                </p>
                <Link
                  href="#audit"
                  className={cn(buttonVariants(), "mt-4 inline-flex")}
                >
                  Use the audit form instead
                </Link>
              </div>
            </div>
          </div>

          <div id="audit" className="card-surface scroll-mt-24 p-6 sm:p-8">
            <p className="mono-label">Secondary</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Free audit request
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Describe the business and what feels like it is leaking. No package
              pitch first — we recommend a next step.
            </p>
            <form className="mt-6 space-y-4" action="#" method="post">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business">Business</Label>
                <Input
                  id="business"
                  name="business"
                  placeholder="Company + industry"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="leak">What is leaking?</Label>
                <Textarea
                  id="leak"
                  name="leak"
                  placeholder="Website clarity, ads, follow-up, tracking, offer…"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Submit audit request
              </Button>
              <p className="text-xs text-muted-foreground">
                Form wiring to GoHighLevel comes in a later pass. Submission is
                UI-only for this scaffold.
              </p>
            </form>
          </div>
        </div>

        <Separator className="my-12" />
        <p className="text-sm text-muted-foreground">
          Prefer browsing first? See{" "}
          <Link href="/case-studies" className="text-brand hover:underline">
            case studies
          </Link>
          ,{" "}
          <Link href="/services" className="text-brand hover:underline">
            services
          </Link>
          , or{" "}
          <Link href="/industries" className="text-brand hover:underline">
            industries
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
