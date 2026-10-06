import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  scriptEyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  scriptEyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center px-4" : "max-w-xl px-4 sm:px-0"}>
      {scriptEyebrow ? (
        <p className="font-script text-2xl sm:text-3xl text-[#D9A52E] mb-1.5 font-normal">
          {scriptEyebrow}
        </p>
      ) : eyebrow ? (
        <div className={`flex items-center gap-2.5 mb-2.5 ${align === "center" ? "justify-center" : "justify-start"}`}>
          <span className="h-[1px] w-6 bg-[#E8C978]/80" />
          <p className={`font-sans text-[0.68rem] uppercase tracking-[0.24em] font-semibold ${dark ? "text-[#E8C978]" : "text-[#9B1630]"}`}>
            {eyebrow}
          </p>
          <span className="h-[1px] w-6 bg-[#E8C978]/80" />
        </div>
      ) : null}

      <h2 className={`font-serif text-2xl font-medium leading-[1.2] sm:text-3xl lg:text-4xl tracking-tight ${dark ? "text-[#FFFDF8]" : "text-[#4B146F]"}`}>
        {title}
      </h2>

      {subtitle ? (
        <p className={`mt-3.5 font-sans text-xs sm:text-sm leading-relaxed ${dark ? "text-[#FFFDF8]/85" : "text-[#493B36]/90"}`}>
          {subtitle}
        </p>
      ) : null}

      {/* Editorial Sacred Divider */}
      <div className={`flex items-center gap-2.5 mt-4.5 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#E8C978]/80" />
        <span className="text-[#D9A52E] text-xs select-none">✦</span>
        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#E8C978]/80" />
      </div>
    </div>
  );
}

export function PrimaryButton({
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
  const cls = `group inline-flex w-full sm:w-auto items-center justify-center min-h-[44px] rounded-full bg-[#4B146F] px-6 sm:px-7 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white shadow-xs shadow-[#4B146F]/20 transition-all duration-300 hover:bg-[#65239A] hover:shadow-md hover:shadow-[#65239A]/25 hover:-translate-y-0.5 active:translate-y-0 ${className}`;
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

// Backward-compatible alias for existing components
export const GoldButton = PrimaryButton;

export function SecondaryButton({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex w-full sm:w-auto items-center justify-center min-h-[44px] rounded-full border border-[#4B146F]/70 bg-transparent px-6 sm:px-7 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-[#4B146F] transition-all duration-300 hover:bg-[#4B146F] hover:text-white hover:border-[#4B146F] hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      <span className="flex items-center justify-center gap-2">{children}</span>
    </a>
  );
}

// Backward-compatible alias for existing components
export const GhostButton = SecondaryButton;

export function Orbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -left-16 top-10 h-[20rem] w-[20rem] rounded-full blur-[100px] opacity-25"
        style={{ background: "radial-gradient(circle, rgba(217, 165, 46, 0.25) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -right-16 bottom-0 h-[20rem] w-[20rem] rounded-full blur-[100px] opacity-20"
        style={{ background: "radial-gradient(circle, rgba(101, 35, 154, 0.22) 0%, transparent 70%)" }}
      />
    </div>
  );
}

export function BotanicalLotus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      className={`botanical-subtle ${className}`}
      aria-hidden="true"
    >
      <path
        d="M50 20 C45 35 35 50 20 65 C40 68 48 55 50 40 C52 55 60 68 80 65 C65 50 55 35 50 20 Z"
        strokeWidth="1.2"
      />
      <path
        d="M50 35 C42 48 30 60 10 70 C30 75 42 65 50 50 C58 65 70 75 90 70 C70 60 58 48 50 35 Z"
        strokeWidth="1"
      />
      <path
        d="M25 72 C35 78 45 80 50 80 C55 80 65 78 75 72"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="50" cy="50" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function BotanicalLeaves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      className={`botanical-subtle ${className}`}
      aria-hidden="true"
    >
      <path
        d="M20 100 C30 80 45 60 60 40 C75 20 95 15 100 15 C100 20 95 40 75 55 C60 70 40 85 20 100 Z"
        strokeWidth="1.2"
      />
      <path
        d="M40 70 C55 65 70 68 80 75 C70 60 65 45 60 40"
        strokeWidth="1"
      />
      <path
        d="M60 50 C75 45 88 48 95 55"
        strokeWidth="0.9"
      />
    </svg>
  );
}

export function BotanicalSun({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      className={`botanical-subtle ${className}`}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="22" strokeWidth="1" />
      <circle cx="60" cy="60" r="30" strokeWidth="0.75" strokeDasharray="3 3" />
      <circle cx="60" cy="60" r="6" fill="currentColor" fillOpacity="0.25" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <line
          key={deg}
          x1="60"
          y1="22"
          x2="60"
          y2="14"
          strokeWidth="1"
          strokeLinecap="round"
          transform={`rotate(${deg} 60 60)`}
        />
      ))}
    </svg>
  );
}

export function SacredGeometryRing({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center pointer-events-none ${className}`} aria-hidden="true">
      <div className="absolute inset-0 rounded-full border border-[#D9A52E]/30" />
      <div className="spin-very-slow absolute -inset-2.5 rounded-full border border-dashed border-[#D9A52E]/45" />
      <div className="absolute -inset-5 rounded-full border border-[#E8C978]/20" />
    </div>
  );
}
