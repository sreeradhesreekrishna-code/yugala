import { useEffect, useRef, useState } from "react";
import { Users, Sun, Moon, Award } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Lives Transformed",
    subtext: "Guided inner healing & recovery",
  },
  {
    icon: Moon,
    value: 120,
    suffix: "+",
    label: "Sacred Circles",
    subtext: "Full moon & new moon sessions",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Positive Alignment",
    subtext: "Reported inner peace & balance",
  },
  {
    icon: Sun,
    value: 15,
    suffix: "+",
    label: "Master Facilitators",
    subtext: "Dedicated spiritual mentors",
  },
];

export function AnimatedStats() {
  return (
    <section className="relative py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {STATS.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  delay,
}: {
  stat: (typeof STATS)[0];
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = stat.icon;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1600;
          const end = stat.value;
          const increment = Math.ceil(end / (duration / 20));

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 20);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, stat.value]);

  return (
    <Reveal delay={delay}>
      <div
        ref={cardRef}
        className="group relative overflow-hidden rounded-3xl border border-[#E8C978]/40 bg-[#FFFDF8] p-4 sm:p-6 shadow-xs transition-all duration-300 hover:border-[#D9A52E] hover:shadow-lg hover:shadow-[#4B146F]/8 hover:-translate-y-1"
      >
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl border border-[#E8C978]/35 bg-[#F0E8F7] text-[#65239A] shadow-xs">
            <IconComponent size={20} className="sm:w-5 sm:h-5 text-[#65239A]" />
          </div>
          <span className="font-sans text-[0.6rem] uppercase tracking-wider text-[#4B146F] font-bold bg-[#F0E8F7] border border-[#E8C978]/40 px-2.5 py-0.5 rounded-full">
            Active
          </span>
        </div>

        {/* Standardized Number Typography */}
        <div className="font-serif text-2xl font-bold tracking-tight text-[#4B146F] sm:text-3xl lg:text-4xl">
          <span>{count.toLocaleString()}</span>
          <span className="text-[#D9A52E] font-normal ml-0.5">{stat.suffix}</span>
        </div>

        <h3 className="mt-1.5 font-serif text-sm font-semibold tracking-wide text-[#4B146F] sm:text-base">
          {stat.label}
        </h3>
        <p className="mt-0.5 font-sans text-xs leading-snug text-[#493B36]/80 hidden sm:block">
          {stat.subtext}
        </p>
      </div>
    </Reveal>
  );
}
