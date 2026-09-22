"use client";

import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/layout/logo";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  caseStudies,
  industries,
  resources,
  services,
} from "@/lib/content";
import { cn } from "@/lib/utils";

function NavLinkItem({
  href,
  title,
  description,
  onNavigate,
}: {
  href: string;
  title: string;
  description?: string;
  onNavigate?: () => void;
}) {
  return (
    <NavigationMenuLink
      href={href}
      closeOnClick
      render={<Link href={href} onClick={onNavigate} />}
      className="flex flex-col items-start gap-0.5 rounded-lg p-2.5"
    >
      <span className="text-sm font-medium text-foreground">{title}</span>
      {description ? (
        <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
          {description}
        </span>
      ) : null}
    </NavigationMenuLink>
  );
}

function MobileExpandable({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/70 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium text-foreground hover:bg-secondary"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown
          className={cn(
            "size-4 text-muted-foreground transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-0.5 pb-3 pl-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <NavigationMenu className="hidden lg:flex" align="start">
          <NavigationMenuList className="gap-0.5">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-[14px] text-muted-foreground hover:text-foreground data-popup-open:text-foreground">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-2">
                <ul className="grid w-[min(36rem,calc(100vw-2rem))] gap-1 sm:grid-cols-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <NavLinkItem
                        href={service.href}
                        title={service.name}
                        description={service.summary}
                      />
                    </li>
                  ))}
                </ul>
                <div className="mt-1 border-t border-border px-2.5 pt-2">
                  <NavigationMenuLink
                    href="/services"
                    closeOnClick
                    render={<Link href="/services" />}
                    className="text-sm font-medium text-brand"
                  >
                    View all services →
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-[14px] text-muted-foreground hover:text-foreground data-popup-open:text-foreground">
                Industries
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-2">
                <ul className="grid w-[min(34rem,calc(100vw-2rem))] gap-1 sm:grid-cols-2">
                  {industries.map((industry) => (
                    <li key={industry.slug}>
                      <NavLinkItem
                        href={industry.href}
                        title={industry.name}
                        description={industry.benefit}
                      />
                    </li>
                  ))}
                </ul>
                <div className="mt-1 border-t border-border px-2.5 pt-2">
                  <NavigationMenuLink
                    href="/industries"
                    closeOnClick
                    render={<Link href="/industries" />}
                    className="text-sm font-medium text-brand"
                  >
                    View all industries →
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-[14px] text-muted-foreground hover:text-foreground data-popup-open:text-foreground">
                Results
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-2">
                <ul className="flex w-[min(20rem,calc(100vw-2rem))] flex-col gap-1">
                  {caseStudies.map((cs) => (
                    <li key={cs.slug}>
                      <NavLinkItem
                        href={cs.href}
                        title={cs.name}
                        description={`${cs.metric} ${cs.metricLabel}`}
                      />
                    </li>
                  ))}
                </ul>
                <div className="mt-1 border-t border-border px-2.5 pt-2">
                  <NavigationMenuLink
                    href="/case-studies"
                    closeOnClick
                    render={<Link href="/case-studies" />}
                    className="text-sm font-medium text-brand"
                  >
                    All case studies →
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-[14px] text-muted-foreground hover:text-foreground data-popup-open:text-foreground">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-2">
                <ul className="flex w-[min(22rem,calc(100vw-2rem))] flex-col gap-1">
                  {resources.map((r) => (
                    <li key={r.title}>
                      <NavLinkItem
                        href={r.href}
                        title={r.title}
                        description={r.summary}
                      />
                    </li>
                  ))}
                </ul>
                <div className="mt-1 border-t border-border px-2.5 pt-2">
                  <NavigationMenuLink
                    href="/resources"
                    closeOnClick
                    render={<Link href="/resources" />}
                    className="text-sm font-medium text-brand"
                  >
                    Browse resources →
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                render={<Link href="/about" />}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-[14px] text-muted-foreground hover:text-foreground"
                )}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                render={<Link href="/contact" />}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-[14px] text-muted-foreground hover:text-foreground"
                )}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden h-9 bg-brand px-3.5 text-brand-foreground hover:bg-brand/85 sm:inline-flex"
            )}
          >
            Book a strategy call
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon-sm" }),
                "lg:hidden"
              )}
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,20rem)] bg-background px-4"
            >
              <SheetHeader className="px-0 text-left">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col" aria-label="Mobile">
                <MobileExpandable label="Services">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={s.href}
                      onClick={close}
                      className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                    >
                      {s.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={close}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-brand"
                  >
                    All services →
                  </Link>
                </MobileExpandable>

                <MobileExpandable label="Industries">
                  {industries.map((i) => (
                    <Link
                      key={i.slug}
                      href={i.href}
                      onClick={close}
                      className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                    >
                      {i.name}
                    </Link>
                  ))}
                  <Link
                    href="/industries"
                    onClick={close}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-brand"
                  >
                    All industries →
                  </Link>
                </MobileExpandable>

                <Link
                  href="/case-studies"
                  onClick={close}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  Results
                </Link>
                <Link
                  href="/resources"
                  onClick={close}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  Resources
                </Link>
                <Link
                  href="/about"
                  onClick={close}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={close}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  Contact
                </Link>

                <Link
                  href="/contact"
                  onClick={close}
                  className={cn(
                    buttonVariants(),
                    "mt-4 w-full bg-brand text-brand-foreground hover:bg-brand/85"
                  )}
                >
                  Book a strategy call
                </Link>
                <Link
                  href="/contact#audit"
                  onClick={close}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "mt-2 w-full"
                  )}
                >
                  Request a free audit
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
