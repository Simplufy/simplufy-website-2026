import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Industry } from "@/lib/content";
import { cn } from "@/lib/utils";

type IndustryTileProps = {
  industry: Industry;
  className?: string;
  /** Taller tile for homepage grid */
  size?: "sm" | "md";
  showArrow?: boolean;
};

/**
 * Photo tile (Cortex trade style) when `industry.image` is set;
 * refined cream/ink fallback otherwise — no fake stock gradients.
 */
export function IndustryTile({
  industry,
  className,
  size = "md",
  showArrow = true,
}: IndustryTileProps) {
  const hasImage = Boolean(industry.image);

  return (
    <Link
      href={industry.href}
      className={cn(
        "group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border border-border shadow-sm",
        size === "md" ? "min-h-[9.5rem]" : "aspect-[4/3]",
        !hasImage && "bg-[color-mix(in_oklab,var(--bg)_92%,#111)]",
        className
      )}
    >
      {hasImage ? (
        <>
          <Image
            src={industry.image!}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10"
          />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-[color-mix(in_oklab,var(--bg)_88%,#0c0c0c)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #0c0c0c 0.5px, transparent 0.6px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div
            aria-hidden
            className="absolute left-0 top-0 h-full w-1 bg-ink/80"
          />
        </>
      )}

      <div
        className={cn(
          "relative",
          size === "md" ? "p-4 pt-12" : "p-3"
        )}
      >
        {!hasImage && (
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
            Industry
          </p>
        )}
        <div className="flex items-start justify-between gap-2">
          <h3
            className={cn(
              "font-semibold tracking-tight",
              size === "md" ? "text-base" : "text-sm",
              hasImage ? "text-white" : "text-ink"
            )}
          >
            {industry.name}
          </h3>
          {showArrow && (
            <ArrowUpRight
              className={cn(
                "size-4 shrink-0 transition-colors",
                hasImage
                  ? "text-white/60 group-hover:text-white"
                  : "text-ink/40 group-hover:text-ink"
              )}
            />
          )}
        </div>
        <p
          className={cn(
            "mt-1.5 leading-relaxed",
            size === "md" ? "text-xs" : "line-clamp-2 text-[11px] leading-snug",
            hasImage ? "text-white/75" : "text-ink/55"
          )}
        >
          {industry.benefit}
        </p>
      </div>
    </Link>
  );
}
