import { useEffect, useState } from "react";
import { Menu, X, Calendar, Phone, MapPin, ChevronRight } from "lucide-react";

const logo = "/Logo.jpeg";

export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Programs", id: "programs" },
  { label: "Membership", id: "membership" },
  { label: "Academy", id: "academy" },
  { label: "Flow", id: "session-flow" },
  { label: "Healing Kits", id: "kits" },
  { label: "Partner", id: "partner" },
  { label: "Events", id: "events" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-2.5 sm:px-6 sm:py-3.5 transition-all duration-300">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-3.5 py-2 sm:px-6 sm:py-2.5 transition-all duration-300 ${
          scrolled
            ? "border border-gold/25 bg-background/90 shadow-md backdrop-blur-xl"
            : "border border-gold/10 bg-background/60 backdrop-blur-md"
        }`}
      >
        {/* Brand Logo & Title */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-background p-0.5 shadow-sm">
            <img
              src={logo}
              alt="Yugala emblem"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-outfit text-base font-semibold tracking-wide text-gilded sm:text-lg">
              YUGALA LIFE
            </span>
            <span className="font-jakarta text-[0.55rem] uppercase tracking-[0.25em] text-muted-foreground hidden sm:block">
              Inner Healing Centre
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-gold/15 bg-surface/40 p-1 backdrop-blur-md">
          {NAV_ITEMS.slice(0, 7).map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={`#${item.id}`}
                className={`relative rounded-full px-3.5 py-1.5 font-jakarta text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "text-gold font-semibold bg-gold/15 border border-gold/30"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-jakarta text-xs font-medium uppercase tracking-wider text-gold transition-colors hover:bg-gold/20"
          >
            Book Session
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 bg-surface/80 text-gold shadow-sm backdrop-blur-md transition-transform active:scale-95"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-x-3 top-16 z-40 overflow-hidden rounded-2xl border border-gold/20 bg-background/95 p-4 shadow-xl backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          open ? "max-h-[82vh] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-2 gap-1.5 max-h-[55vh] overflow-y-auto pr-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`flex min-h-[44px] items-center justify-between rounded-lg border px-3 py-2 font-jakarta text-xs font-medium transition-all ${
                  isActive
                    ? "border-gold/40 bg-gold/15 text-gold font-semibold"
                    : "border-gold/10 bg-surface/40 text-muted-foreground active:bg-surface/80"
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight size={14} className="text-gold/50" />
              </a>
            );
          })}
        </div>

        <div className="mt-4 border-t border-gold/15 pt-3 flex flex-col gap-2">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 font-jakarta text-xs font-semibold uppercase tracking-wider text-background shadow-md"
          >
            <Calendar size={15} />
            <span>Book Healing Session</span>
          </a>
          <div className="flex items-center justify-between text-[0.7rem] text-muted-foreground px-1 pt-1">
            <span className="flex items-center gap-1 text-gold">
              <Phone size={12} /> +91 94008 98089
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={12} className="text-crimson" /> Thrissur, Kerala
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
