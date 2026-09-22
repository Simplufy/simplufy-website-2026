import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Separator } from "@/components/ui/separator";
import { industries, navLinks, services, siteConfig } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[color-mix(in_oklab,#111_3%,var(--bg))]">
      <div className="container-page section-pad !pb-10 !pt-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Websites, ads, CRM, and AI systems for businesses that sell
              services. Based in {siteConfig.location}. Serving U.S. service
              businesses.
            </p>
            <p className="mono-label">Connected systems · Booked outcomes</p>
          </div>

          <div>
            <p className="mono-label mb-4">Navigate</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label mb-4">Services</p>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label mb-4">Industries</p>
            <ul className="space-y-2">
              {industries.slice(0, 6).map((i) => (
                <li key={i.slug}>
                  <Link
                    href={i.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Simplufy. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <Link href="/contact" className="hover:text-foreground">
              Book a strategy call
            </Link>
            <Link href="/contact#audit" className="hover:text-foreground">
              Request a free audit
            </Link>
            <Link href="/case-studies" className="hover:text-foreground">
              Case studies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
