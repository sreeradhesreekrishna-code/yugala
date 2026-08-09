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
            }, 850);
          }, 150);
          return 100;
        }
        return prev + 12;
      });
    }, 55);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      aria-hidden={revealing}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-4 transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        revealing ? "-translate-y-full shadow-2xl" : "translate-y-0"
      }`}
    >
      {/* Background Soft Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10 blur-[130px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Core Emblem */}
        <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-violet/20 bg-white p-1 shadow-lg backdrop-blur-md">
          <div className="spin-slow absolute -inset-2 rounded-full border border-dashed border-violet/25" />
          <img
            src={logo}
            alt="Yugala Emblem"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        {/* Brand Name */}
        <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-violet">
          YUGALA LIFE
        </h1>
        <p className="mt-0.5 font-jakarta text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
          Inner Healing Centre
        </p>

        {/* Progress Bar Track */}
        <div className="mt-6 w-48 max-w-full">
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-muted/80">
            <div
              className="h-full rounded-full bg-violet transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-center font-jakarta text-[0.65rem] tracking-wider text-violet/80 font-medium">
            {progress < 100 ? `Harmonizing... ${progress}%` : "Welcome"}
          </div>
        </div>
      </div>
    </div>
  );
}

