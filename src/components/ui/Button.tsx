import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
} & Pick<ComponentProps<typeof Link>, "href" | "prefetch">;

export function Button({
  href,
  prefetch,
  variant = "primary",
  children,
  className,
}: ButtonProps) {
  const base =
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-tight transition will-change-transform focus:outline-none";

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:scale-[1.02] active:scale-[0.99]"
      : "border border-white/25 text-white hover:border-white/55 hover:bg-white/5 hover:scale-[1.02] active:scale-[0.99]";

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={[base, styles, className ?? ""].join(" ")}
    >
      <span className="relative top-[0.5px]">{children}</span>
      <span
        aria-hidden
        className="inline-block translate-x-0 opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100"
      >
        →
      </span>
    </Link>
  );
}

