import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { IndustriesGrid } from "@/components/home/industries-grid";
import { ProblemFrame } from "@/components/home/problem-frame";
import { Process } from "@/components/home/process";
import { ProofStrip } from "@/components/home/proof-strip";
import { ResourcesTeaser } from "@/components/home/resources-teaser";
import { Results } from "@/components/home/results";
import { ServicesGrid } from "@/components/home/services-grid";
import { SystemPillars } from "@/components/home/system-pillars";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <ProblemFrame />
      <ServicesGrid />
      <SystemPillars />
      <IndustriesGrid />
      <Results />
      <Process />
      <ResourcesTeaser />
      <Faq />
      <FinalCta />
    </>
  );
}
