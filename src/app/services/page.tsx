import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/motion";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, CRM, Google PPC, Meta Ads, LSA, TikTok, SEO/AEO/GEO, and AI implementation from Simplufy.",
};

export default function ServicesPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <p className="mono-label mb-3">Services</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight">
            Connected offers around booked opportunities.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Eight services that plug into the same system: web presence, booking
            path, and performance. Open any detail page for process, leaks we
            look for, and industries that fit.
          </p>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-3 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <Link
                href={s.href}
                className="card-surface card-lift group flex h-full flex-col p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-brand" />
                </div>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">
                  {s.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
        <p className="mt-8 text-sm text-muted-foreground">
          Ready to scope the right mix?{" "}
          <Link href="/contact" className="font-medium text-brand hover:underline">
            Book a strategy call
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
