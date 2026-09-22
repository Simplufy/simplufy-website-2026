import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IndustryTile } from "@/components/industries/industry-tile";
import { industries, industriesHubAccent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Marketing systems for auto detailing, contractors, med spas, education, B2B services, and more.",
};

export default function IndustriesPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-border bg-ink text-white shadow-sm">
          <div className="absolute inset-0">
            <Image
              src={industriesHubAccent}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
              aria-hidden
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35"
            />
          </div>
          <div className="relative max-w-3xl px-6 py-12 sm:px-10 sm:py-14">
            <p className="mono-label mb-3 text-white/55">Industries</p>
            <h1 className="text-4xl font-semibold tracking-tight text-balance">
              Built for service businesses where missed leads cost real money.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              Twelve industry playbooks — trades with field photos, plus clinics,
              education, and B2B. Each page maps the problem, the buyer path, and
              the Simplufy services that fit.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <IndustryTile key={ind.slug} industry={ind} size="md" />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Not sure if you fit?{" "}
          <Link href="/contact" className="font-medium text-brand hover:underline">
            Request a free audit
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
