import type { Metadata } from "next";
import Link from "next/link";
import { resources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides on SEO/AEO/GEO, follow-up systems, and paid ads for service businesses from Simplufy.",
};

export default function ResourcesPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <p className="mono-label mb-3">Resources</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight">
          Resources for service operators
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Full article templates ship next. Featured topics from the live
          Simplufy resource hub:
        </p>
        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {resources.map((r) => (
            <article key={r.title} className="card-surface p-6">
              <p className="mono-label">Article</p>
              <h2 className="mt-3 text-lg font-semibold tracking-tight">
                {r.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{r.summary}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Want a system review instead of another article?{" "}
          <Link href="/contact#audit" className="font-medium text-brand hover:underline">
            Request a free audit
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
