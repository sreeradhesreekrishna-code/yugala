import { useEffect, useState } from "react";
import { ArrowUp, Calendar, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
        setVisible(window.scrollY > 300);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 15;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-center gap-2.5 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {/* WhatsApp Trigger */}
      <a
        href="https://wa.me/919400898089?text=Hello%20Yugala%20Life,%20I%20would%20like%20to%20know%20more%20about%20your%20healing%20programs."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4B146F] text-white shadow-md shadow-[#4B146F]/20 border border-[#D9A52E]/40 transition-all hover:bg-[#65239A] hover:scale-105 active:scale-95"
      >
        <MessageCircle size={18} />
      </a>

      {/* Book Session / Contact Trigger */}
      <a
        href="#contact"
        aria-label="Book a Session"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8C978]/60 bg-[#FFFDF8] text-[#4B146F] shadow-xs transition-all hover:bg-[#F0E8F7] hover:scale-105 active:scale-95"
      >
        <Calendar size={17} />
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#E8C978]/60 bg-[#FFFDF8] text-[#4B146F] shadow-xs transition-all hover:bg-[#F0E8F7] hover:scale-105 active:scale-95"
      >
        <svg className="absolute inset-0 h-full w-full -rotate-90 transform" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="15"
            className="stroke-[#E8C978]/30"
            strokeWidth="1.5"
            fill="transparent"
          />
          <circle
            cx="18"
            cy="18"
            r="15"
            className="stroke-[#D9A52E] transition-all duration-150"
            strokeWidth="1.5"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <ArrowUp size={15} className="relative z-10" />
      </button>
    </div>
  );
}
