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

  const circumference = 2 * Math.PI * 16;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 flex flex-col items-center gap-2.5 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {/* WhatsApp Trigger */}
      <a
        href="https://wa.me/919400898089?text=Hello%20Yugala%20Life,%20I%20would%20like%20to%20book%20a%20healing%20session."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircle size={19} />
      </a>

      {/* Book Session Trigger */}
      <a
        href="#contact"
        aria-label="Book a Session"
        className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gold/40 bg-surface/90 text-gold shadow-md backdrop-blur-md transition-transform hover:scale-105 active:scale-95"
      >
        <Calendar size={18} />
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gold/20 bg-surface/90 text-gold shadow-md backdrop-blur-md transition-transform hover:scale-105 active:scale-95"
      >
        <svg className="absolute inset-0 h-full w-full -rotate-90 transform" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="16"
            className="stroke-gold/20"
            strokeWidth="2"
            fill="transparent"
          />
          <circle
            cx="20"
            cy="20"
            r="16"
            className="stroke-gold transition-all duration-150"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <ArrowUp size={16} className="relative z-10" />
      </button>
    </div>
  );
}
