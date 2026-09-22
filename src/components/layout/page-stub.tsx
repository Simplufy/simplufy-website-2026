import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PageStub({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="section-pad">
      <div className="container-page max-w-3xl">
        <p className="mono-label mb-3">{eyebrow}</p>
        <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        {children}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className={cn(buttonVariants())}>
            Book a strategy call
          </Link>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "outline" }), "bg-card")}
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
