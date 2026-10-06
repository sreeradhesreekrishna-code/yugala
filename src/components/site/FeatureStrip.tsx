import { Droplets, Flower2, GraduationCap, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    icon: Droplets,
    title: "Holistic Healing",
    description: "Mind, Body & Soul Balance",
  },
  {
    icon: Flower2,
    title: "Ancient Wisdom",
    description: "Timeless Practices for Modern Life",
  },
  {
    icon: GraduationCap,
    title: "Expert Guidance",
    description: "Learn from Experienced Masters",
  },
  {
    icon: Sparkles,
    title: "Life Transformation",
    description: "Create a Life of Purpose & Joy",
  },
];

export function FeatureStrip() {
  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <Reveal>
        <div className="rounded-3xl border border-[#E8C978]/40 bg-[#FFFDF8] p-6 sm:p-8 shadow-xs shadow-[#4B146F]/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#E8C978]/30">
            {FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className={`flex flex-col items-center text-center px-4 ${
                    idx !== 0 ? "lg:pl-6" : ""
                  } ${idx !== FEATURES.length - 1 ? "lg:pr-6" : ""}`}
                >
                  <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0E8F7] text-[#65239A] border border-[#E8C978]/35 shadow-xs">
                    <Icon size={20} className="text-[#65239A]" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#4B146F]">
                    {feat.title}
                  </h3>
                  <p className="mt-1 font-sans text-xs text-[#493B36]/85 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
