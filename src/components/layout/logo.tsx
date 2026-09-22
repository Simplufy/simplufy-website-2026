import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  markOnly = false,
}: {
  className?: string;
  markOnly?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-80",
        className
      )}
      aria-label="Simplufy home"
    >
      <Image
        src="/brand/simplufy-s-logo.png"
        alt=""
        width={32}
        height={32}
        className="size-8 rounded-[7px]"
        priority
      />
      {!markOnly && (
        <span className="text-[17px] font-semibold tracking-tight">Simplufy</span>
      )}
    </Link>
  );
}
