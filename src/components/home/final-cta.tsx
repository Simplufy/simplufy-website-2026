import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-ink">
      <div
        aria-hidden
        className="ambient-glow pointer-events-none absolute -right-20 -top-24 size-[28rem] rounded-full bg-[#fc0000]/35 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 size-72 rounded-full bg-[#fc0000]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fc0000]/70 to-transparent"
      />

      <div className="container-page relative section-pad !py-16 sm:!py-20">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
            <div className="max-w-xl text-white">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                Next step
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Book a strategy call — or request a free audit.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                We look at website clarity, ads and tracking, CRM follow-up, and
                AI opportunities. No package pitch before we find the leak.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group h-auto justify-between gap-4 rounded-2xl bg-brand px-5 py-5 text-left text-brand-foreground hover:bg-brand/90"
                )}
              >
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-white/70">
                    Path 01
                  </span>
                  <span className="mt-1 block text-base font-semibold">
                    Book a strategy call
                  </span>
                </span>
                <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact#audit"
                className="group flex h-auto items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-5 text-left text-white transition-colors hover:border-[#fc0000]/50 hover:bg-white/10"
              >
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                    Path 02
                  </span>
                  <span className="mt-1 block text-base font-semibold">
                    Request a free audit
                  </span>
                </span>
                <ArrowUpRight className="size-5 shrink-0 text-white/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#fc0000]" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
