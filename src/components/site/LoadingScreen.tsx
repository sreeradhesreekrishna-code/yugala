import { useEffect, useState } from "react";

const logo = "/Logo.jpeg";

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [revealing, setRevealing] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setRevealing(true);
            setTimeout(() => {
              setHidden(true);
              onComplete?.();
            }, 750);
          }, 100);
          return 100;
        }
        return prev + 15;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      aria-hidden={revealing}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FBF7F0] px-4 transition-transform duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        revealing ? "-translate-y-full shadow-2xl shadow-[#4B146F]/15" : "translate-y-0"
      }`}
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Core Emblem */}
        <div className="relative mb-4.5 flex h-16 w-16 items-center justify-center rounded-full border border-[#D9A52E] bg-[#FFFDF8] p-1 shadow-xs">
          <div className="spin-very-slow absolute -inset-2 rounded-full border border-dashed border-[#D9A52E]/50" />
          <img
            src={logo}
            alt="Yugala Life Emblem"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        {/* Brand Name */}
        <h1 className="font-serif text-xl font-medium tracking-[0.16em] text-[#4B146F]">
          YUGALA LIFE
        </h1>
        <p className="mt-0.5 font-sans text-[0.6rem] uppercase tracking-[0.25em] text-[#9B1630] font-medium">
          Inner Healing Center
        </p>

        {/* Progress Bar */}
        <div className="mt-6 w-44 max-w-full">
          <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-[#E8C978]/40">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#4B146F] to-[#D9A52E] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2.5 text-center font-sans text-[0.65rem] tracking-wider text-[#493B36]/80">
            {progress < 100 ? `Harmonizing...` : "Welcome"}
          </div>
        </div>
      </div>
    </div>
  );
}
