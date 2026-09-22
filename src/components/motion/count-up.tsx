"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CountUpProps = {
  value: string;
  className?: string;
  durationMs?: number;
};

/**
 * Animates numeric portions of display strings like "$83,260", "27.6x", "31".
 * Non-numeric-leading strings (e.g. "Since 1933") fade in without counting.
 */
export function CountUp({ value, className, durationMs = 1100 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!started) return;

    const clean = value.replace(/,/g, "");
    const match = clean.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    if (Number.isNaN(target)) {
      setDisplay(value);
      return;
    }

    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const useCommas = value.includes(",");
    const start = performance.now();
    let frame = 0;

    const format = (n: number) => {
      let formatted =
        decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
      if (useCommas && decimals === 0) {
        formatted = Math.round(n)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      return `${prefix}${formatted}${suffix}`;
    };

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(format(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
      else setDisplay(value);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value, durationMs]);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block transition-opacity duration-500",
        started ? "opacity-100" : "opacity-40",
        className
      )}
    >
      {display}
    </span>
  );
}
