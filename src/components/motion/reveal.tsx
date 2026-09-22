"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delayMs?: number;
  once?: boolean;
  /** Above-the-fold: animate in on mount (no IntersectionObserver wait). */
  eager?: boolean;
};

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delayMs = 0,
  once = true,
  eager = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.visible = "true";
      return;
    }

    if (eager) {
      const id = requestAnimationFrame(() => {
        el.dataset.visible = "true";
      });
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.dataset.visible = "false";
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, eager]);

  const style =
    delayMs > 0
      ? ({ "--reveal-delay": `${delayMs}ms` } as CSSProperties)
      : undefined;

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      data-visible="false"
      style={style}
    >
      {children}
    </Tag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/** Marks children that already have `.reveal` for staggered delays via CSS. */
export function RevealGroup({
  children,
  className,
  as: Tag = "div",
}: RevealGroupProps) {
  return <Tag className={cn("reveal-stagger", className)}>{children}</Tag>;
}
