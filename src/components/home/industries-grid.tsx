import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IndustryTile } from "@/components/industries/industry-tile";
import { Reveal } from "@/components/motion/reveal";
import { industries } from "@/lib/content";

export function IndustriesGrid() {
  return (
    <section className="section-pad border-t border-border bg-[color-mix(in_oklab,#111_2%,var(--bg))]">
      <div className="container-page">
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mono-label mb-3">Industries</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Built for companies where every missed lead costs real money.
              </h2>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1 text-sm font-medium hover:text-brand"
            >
              All industries <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delayMs={(i % 4) * 50}>
              <li className="h-full">
                <IndustryTile industry={industry} size="md" />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
