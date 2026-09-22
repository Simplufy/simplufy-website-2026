import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { faqs } from "@/lib/content";

const featured = faqs.slice(0, 8);

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: featured.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section className="section-pad border-t border-border bg-[color-mix(in_oklab,#111_2%,var(--bg))]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-page">
        <Reveal>
          <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-ink px-5 py-5 text-white sm:px-7 sm:py-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                  FAQ
                </p>
                <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
                  Straight answers for owners who sell services.
                </h2>
              </div>
              <p className="font-mono text-[11px] text-[#fc0000]">
                {featured.length} questions · blunt · owner-first
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="rounded-2xl border border-border bg-card px-4 py-2 shadow-sm sm:px-6">
            <Accordion>
              {featured.map((item, i) => (
                <AccordionItem key={item.question} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    <span className="mr-3 font-mono text-[11px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
