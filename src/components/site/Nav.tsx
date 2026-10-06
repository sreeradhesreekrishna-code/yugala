import { useEffect, useState } from "react";
import {
  Home,
  Info,
  Compass,
  Layers,
  Sparkles,
  Calendar,
  Phone,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

const logo = "/Logo.jpeg";

export const NAV_ITEMS = [
  { label: "Home", id: "home", icon: Home },
  { label: "About", id: "about", icon: Info },
  { label: "Programs", id: "overview", icon: Compass },
  { label: "The Method", id: "method", icon: Layers },
  { label: "Membership", id: "membership", icon: Sparkles },
  { label: "Events", id: "upcoming", icon: Calendar },
  { label: "Contact", id: "contact", icon: Phone },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 140;

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FBF7F0]/95 shadow-[0_6px_25px_rgba(75,20,111,0.05)] backdrop-blur-md border-b border-[#E8C978]/40"
          : "bg-[#FBF7F0]/85 backdrop-blur-sm border-b border-[#E8C978]/25"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Wordmark */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#D9A52E] p-0.5 shadow-xs transition-transform duration-300 group-hover:scale-105 bg-[#FFFDF8]">
            <img
              src={logo}
              alt="Yugala Life Emblem"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg sm:text-xl font-semibold tracking-[0.14em] text-[#4B146F]">
              YUGALA LIFE
            </span>
            <span className="font-sans text-[0.58rem] sm:text-[0.62rem] uppercase tracking-[0.24em] text-[#9B1630] font-medium">
              Inner Healing Center
            </span>
          </div>
        </a>

        {/* Desktop Horizontal Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-[#E8C978]/45 bg-[#FFFDF8]/85 px-4 py-1.5 shadow-xs">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-3.5 py-1 font-sans text-xs transition-all duration-200 ${
                  isActive
                    ? "bg-[#4B146F] text-white font-semibold shadow-xs"
                    : "text-[#493B36] hover:bg-[#F0E8F7]/70 hover:text-[#4B146F]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#4B146F] px-5 sm:px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-white shadow-xs shadow-[#4B146F]/20 transition-all duration-200 hover:bg-[#65239A] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start Journey</span>
            <ArrowRight size={13} />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8C978]/50 bg-[#FFFDF8] text-[#4B146F] shadow-xs lg:hidden transition-colors hover:bg-[#F0E8F7]"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 z-40 overflow-hidden border-b border-[#E8C978]/40 bg-[#FBF7F0]/98 px-5 py-5 shadow-xl backdrop-blur-xl transition-all duration-300 ${
          open ? "max-h-[85vh] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none py-0"
        }`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[60vh] overflow-y-auto pr-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-2.5 font-sans text-xs transition-all ${
                  isActive
                    ? "bg-[#4B146F] text-white font-semibold shadow-xs"
                    : "bg-[#FFFDF8] text-[#493B36] border border-[#E8C978]/40 hover:bg-[#F0E8F7]/60"
                }`}
              >
                <Icon size={14} className={isActive ? "text-[#E8C978]" : "text-[#4B146F]"} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        <div className="mt-4 pt-3.5 border-t border-[#E8C978]/35 flex flex-col sm:flex-row justify-between items-center gap-2.5 text-xs">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#4B146F] px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-white shadow-xs hover:bg-[#65239A]"
          >
            <span>Start Your Journey</span>
            <ArrowRight size={13} />
          </a>
          <div className="flex items-center gap-4 text-[#493B36]/80 font-sans text-xs">
            <span>WhatsApp: +91 94008 98089</span>
            <span>•</span>
            <span>Thrissur, Kerala</span>
          </div>
        </div>
      </div>
    </header>
  );
}
