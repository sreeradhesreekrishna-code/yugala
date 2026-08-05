import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center px-4" : "max-w-xl px-4 sm:px-0"}>
      {eyebrow ? (
        <p className="font-jakarta text-[0.65rem] sm:text-xs uppercase tracking-[0.35em] text-gold/80 font-medium">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2.5 font-outfit text-2xl font-semibold leading-tight sm:text-4xl text-gilded">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 font-jakarta text-xs sm:text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
      <div
        className={`gold-rule mt-6 w-28 sm:w-36 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
    </div>
  );
}

export function GoldButton({
  children,
  href,
  type,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  type?: "submit";
  className?: string;
}) {
  const cls = `group relative inline-flex w-full sm:w-auto items-center justify-center min-h-[44px] overflow-hidden rounded-full px-6 py-3 font-jakarta text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 ${className}`;
  const inner = (
    <>
      <span
        className="absolute inset-0"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </>
  );
  if (type === "submit") {
    return (
      <button type="submit" className={cls}>
        {inner}
      </button>
    );
  }
  return (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}

export function GhostButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex w-full sm:w-auto items-center justify-center min-h-[44px] rounded-full border border-gold/35 px-6 py-3 font-jakarta text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-all duration-200 hover:border-gold/70 hover:bg-gold/10 active:translate-y-0"
    >
      {children}
    </a>
  );
}

export function Orbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -left-20 top-10 h-[18rem] w-[18rem] rounded-full blur-[100px] opacity-30"
        style={{ background: "color-mix(in oklab, var(--violet) 30%, transparent)" }}
      />
      <div
        className="absolute -right-20 bottom-0 h-[18rem] w-[18rem] rounded-full blur-[100px] opacity-30"
        style={{ background: "color-mix(in oklab, var(--crimson) 30%, transparent)" }}
      />
    </div>
  );
}
