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
        <p className="font-jakarta text-[0.65rem] sm:text-xs uppercase tracking-[0.35em] text-violet font-semibold">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2.5 font-serif text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl text-foreground">
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
  const cls = `group relative inline-flex w-full sm:w-auto items-center justify-center min-h-[46px] overflow-hidden rounded-full bg-violet px-7 py-3 font-jakarta text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-md shadow-violet/20 transition-all duration-200 hover:bg-violet/90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${className}`;
  const inner = (
    <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
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
      className="inline-flex w-full sm:w-auto items-center justify-center min-h-[46px] rounded-full border border-violet/30 bg-white/80 px-7 py-3 font-jakarta text-xs font-semibold uppercase tracking-[0.16em] text-violet shadow-xs transition-all duration-200 hover:border-violet/60 hover:bg-violet/5 hover:-translate-y-0.5 active:translate-y-0"
    >
      {children}
    </a>
  );
}

export function Orbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -left-20 top-10 h-[20rem] w-[20rem] rounded-full blur-[100px] opacity-40"
        style={{ background: "color-mix(in oklab, var(--violet) 12%, transparent)" }}
      />
      <div
        className="absolute -right-20 bottom-0 h-[20rem] w-[20rem] rounded-full blur-[100px] opacity-40"
        style={{ background: "color-mix(in oklab, var(--crimson) 10%, transparent)" }}
      />
    </div>
  );
}

