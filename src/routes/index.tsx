import { createFileRoute } from "@tanstack/react-router";
import {
  HeartHandshake,
  Moon,
  Compass,
  ClipboardCheck,
  Users,
  GraduationCap,
  Flower2,
  Wind,
  Droplets,
  Sun,
  Flame,
  Infinity as InfinityIcon,
  CircleDot,
  Gem,
  Store,
  HandCoins,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Calendar,
  Activity,
  Brain,
  Smile,
  ShieldCheck,
  BookOpen,
  Target,
  Eye,
  Package,
  Layers,
  ArrowRight,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading, GoldButton, GhostButton, Orbs } from "@/components/site/ui";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { InteractiveParticles } from "@/components/site/InteractiveParticles";
import { FloatingActions } from "@/components/site/FloatingActions";
import { AnimatedStats } from "@/components/site/AnimatedStats";

import aboutImg from "@/assets/about.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

const logo = "/Logo.jpeg";

const EVENTS = [
  { img: event1, date: "New Moon", title: "New Moon Practice & Meditation", place: "Sanctuary • Thrissur, Kerala" },
  { img: event2, date: "Full Moon", title: "Full Moon Healing Circle", place: "Online • Live Global Workshop" },
  { img: event3, date: "Upcoming", title: "Healing & Manifestation Workshop", place: "Sanctuary • Thrissur, Kerala" },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <LoadingScreen />
      <InteractiveParticles />
      <Nav />
      <main className="relative z-10">
        <HeroSection />
        <AnimatedStats />
        <OverviewSection />
        <HealingSection />
        <ManifestationSection />
        <AwakeningSection />
        <MethodSection />
        <AcademySection />
        <MembershipSection />
        <ConsultationsSection />
        <ResourcesSection />
        <WorkshopsSection />
        <CommunitySection />
        <AboutSection />
        <UpcomingSection />
        <ContactSection />
      </main>
      <FooterSection />
      <FloatingActions />
    </div>
  );
}

/* ==========================================================================
   01. HERO
   ========================================================================== */

function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[88vh] items-center overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-[#FFFDFC] via-[#F5EEFF]/40 to-[#FFFDFC]">
      <div className="aura absolute inset-0 opacity-40 animate-pulse-glow" aria-hidden="true" />
      <div className="sacred-grid absolute inset-0 opacity-15" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="text-center lg:text-left lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet/20 bg-white/90 px-4 py-1.5 font-jakarta text-[0.65rem] uppercase tracking-[0.25em] text-violet shadow-xs backdrop-blur-md mb-6 hover:border-violet/40 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
                </span>
                <span>YUGALA LIFE · INNER HEALING CENTER</span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="font-serif text-4xl font-semibold leading-[1.12] sm:text-6xl lg:text-7xl tracking-tight">
                <span className="text-violet font-bold inline-block hover:scale-105 transition-transform duration-300 cursor-default">Heal</span> •{" "}
                <span className="text-crimson font-bold inline-block hover:scale-105 transition-transform duration-300 cursor-default">Manifest</span> •{" "}
                <span className="text-gold font-bold inline-block hover:scale-105 transition-transform duration-300 cursor-default">Awaken</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-5 max-w-xl font-jakarta text-sm sm:text-base leading-relaxed text-muted-foreground mx-auto lg:mx-0">
                A space for healing, personal growth and inner awareness through guided practices.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto lg:mx-0">
                <GoldButton href="#contact">Start Your Journey</GoldButton>
                <GhostButton href="#method">Explore Yugala Life</GhostButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={160}>
              <div className="relative mx-auto flex items-center justify-center">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-violet/15 via-crimson/10 to-gold/20 blur-2xl animate-pulse-glow" />
                <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full border-2 border-white/80 bg-white p-2 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="spin-slow absolute -inset-3.5 rounded-full border border-dashed border-violet/25" />
                  <div className="animate-pulse-ring absolute -inset-1 rounded-full border border-gold/30" />
                  <img
                    src={logo}
                    alt="Yugala Life Emblem"
                    width={320}
                    height={320}
                    className="h-full w-full rounded-full object-cover shadow-inner hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-border/80 bg-white/95 px-4 py-1.5 shadow-md backdrop-blur-md float-gentle">
                    <p className="font-serif text-xs font-semibold text-violet whitespace-nowrap">
                      Heal • Manifest • Awaken
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   02. HEAL • MANIFEST • AWAKEN (OVERVIEW)
   ========================================================================== */

function OverviewSection() {
  return (
    <section id="overview" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFDFC] via-[#FFF8F1]/60 to-[#FFFDFC]">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Core Pathways"
            title="Heal • Manifest • Awaken"
            subtitle="Three foundational pillars guiding your journey toward balance, purpose and inner peace."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* HEAL */}
          <Reveal>
            <div className="hover-lively-card group flex h-full flex-col justify-between rounded-3xl border border-violet/20 bg-[#F5EEFF]/50 p-7 sm:p-8 shadow-xs">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xs text-violet mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-violet/15">
                  <Droplets size={22} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-violet group-hover:translate-x-1 transition-transform">HEAL</h3>
                <p className="mt-2 font-serif text-base italic text-foreground/80 font-medium">
                  Restore balance. Find relief. Feel better.
                </p>
                <p className="mt-3 font-jakarta text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Guided practices supporting emotional well-being, relaxation, balance and personal healing.
                </p>
              </div>
              <div className="mt-8">
                <GoldButton href="#healing">Explore Healing</GoldButton>
              </div>
            </div>
          </Reveal>

          {/* MANIFEST */}
          <Reveal delay={100}>
            <div className="hover-lively-card group flex h-full flex-col justify-between rounded-3xl border border-crimson/20 bg-[#FFF0F3]/50 p-7 sm:p-8 shadow-xs">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xs text-crimson mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-crimson/15">
                  <Target size={22} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-crimson group-hover:translate-x-1 transition-transform">MANIFEST</h3>
                <p className="mt-2 font-serif text-base italic text-foreground/80 font-medium">
                  Create clarity. Build confidence. Take purposeful action.
                </p>
                <p className="mt-3 font-jakarta text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Practices supporting positive thinking, personal growth, intention and meaningful action.
                </p>
              </div>
              <div className="mt-8">
                <GoldButton href="#manifestation">Explore Manifestation</GoldButton>
              </div>
            </div>
          </Reveal>

          {/* AWAKEN */}
          <Reveal delay={200}>
            <div className="hover-lively-card group flex h-full flex-col justify-between rounded-3xl border border-gold/30 bg-[#FFF4E8]/60 p-7 sm:p-8 shadow-xs">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xs text-gold mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-gold/20">
                  <Eye size={22} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gold group-hover:translate-x-1 transition-transform">AWAKEN</h3>
                <p className="mt-2 font-serif text-base italic text-foreground/80 font-medium">
                  Discover awareness. Embrace inner calm.
                </p>
                <p className="mt-3 font-jakarta text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Meditation and awareness practices for conscious living, mindfulness and inner peace.
                </p>
              </div>
              <div className="mt-8">
                <GoldButton href="#awakening">Explore Awakening</GoldButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   03. HEALING
   ========================================================================== */

function HealingSection() {
  const items = [
    { title: "21-Day Healing Practice", desc: "Structured daily practices and supporting tools for developing a consistent healing routine." },
    { title: "Healing Consultation", desc: "Personalized guidance for individual concerns and personal well-being." },
    { title: "Healing Sessions", desc: "Guided practice-based sessions focused on relaxation, balance and inner well-being." },
    { title: "Full Moon & New Moon Practices", desc: "Guided practices connected with reflection, renewal and inner balance." },
    { title: "Healing Kit", desc: "Physical resources designed to support your daily healing practice." },
  ];

  return (
    <section id="healing" className="relative py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Restore & Renew"
            title="Healing Practices"
            subtitle="Create space to pause, breathe and reconnect with yourself. Yugala Life offers structured practices designed to support relaxation, emotional balance and personal well-being."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="hover-lively-card group h-full rounded-3xl border border-violet/20 bg-white p-6 shadow-xs backdrop-blur-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5EEFF] text-violet mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Droplets size={20} />
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground group-hover:text-violet transition-colors">{item.title}</h4>
                <p className="mt-2 font-jakarta text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <GoldButton href="#consultations">Explore Healing</GoldButton>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   04. MANIFESTATION
   ========================================================================== */

function ManifestationSection() {
  const items = [
    { title: "Manifestation Kit", desc: "Structured tools and practices for intention, focus and purposeful action." },
    { title: "Manifestation Consultation", desc: "Individual guidance for personal goals, confidence and direction." },
    { title: "Manifestation Sessions", desc: "Guided practices supporting intention, mindset and meaningful action." },
    { title: "Manifestation Workshops", desc: "Sessions focused on personal growth, confidence, positive thinking and goal achievement." },
  ];

  return (
    <section id="manifestation" className="relative py-16 sm:py-24 bg-gradient-to-b from-transparent via-[#FFF0F3]/30 to-transparent">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Clarity & Action"
            title="Manifestation Practices"
            subtitle="Transform intention into clarity, focus and purposeful action. Yugala Life approaches manifestation through intention, positive thinking, personal development and consistent practice."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="hover-lively-card group h-full rounded-3xl border border-crimson/20 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0F3] text-crimson mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Target size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-foreground group-hover:text-crimson transition-colors">{item.title}</h4>
                <p className="mt-2 font-jakarta text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <GoldButton href="#consultations">Explore Manifestation</GoldButton>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   05. AWAKENING
   ========================================================================== */

function AwakeningSection() {
  const items = [
    { title: "Meditation & Inner Calmness", desc: "Guided practices for awareness, mindfulness and inner balance." },
    { title: "Awakening Consultation", desc: "Personal guidance for meditation and awareness development." },
    { title: "Meditation Sessions", desc: "Guided breathing, mindfulness and meditation practices." },
    { title: "Awakening Programs", desc: "Structured learning experiences for conscious living and inner awareness." },
  ];

  return (
    <section id="awakening" className="relative py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Mindfulness & Stillness"
            title="Awakening & Inner Awareness"
            subtitle="Create space for stillness, awareness and conscious living. Yugala Life introduces accessible practices for meditation, mindfulness, breathing and inner calmness."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="hover-lively-card group h-full rounded-3xl border border-gold/30 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4E8] text-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Eye size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-foreground group-hover:text-gold transition-colors">{item.title}</h4>
                <p className="mt-2 font-jakarta text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <GoldButton href="#consultations">Explore Awakening</GoldButton>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   06. THE YUGALA LIFE METHOD
   ========================================================================== */

function MethodSection() {
  return (
    <section id="method" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFDFC] via-[#F5EEFF]/30 to-[#FFFDFC]">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Assess • Understand • Practice • Transform"
            title="The Yugala Life Method"
            subtitle="Yugala Life supports individuals through a structured approach to personal development. The journey begins with understanding where you are, identifying areas that need attention, introducing suitable practices and supporting consistent personal development."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="hover-lively-card group rounded-3xl border border-violet/20 bg-white p-7 text-center shadow-xs">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5EEFF] text-violet mb-4 group-hover:scale-110 transition-transform duration-300">
                <Droplets size={28} />
              </div>
              <h4 className="font-serif text-2xl font-bold text-violet">HEAL</h4>
              <p className="mt-2 font-jakarta text-xs sm:text-sm text-muted-foreground">
                Restore balance and well-being.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="hover-lively-card group rounded-3xl border border-crimson/20 bg-white p-7 text-center shadow-xs">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF0F3] text-crimson mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Target size={28} />
              </div>
              <h4 className="font-serif text-2xl font-bold text-crimson">MANIFEST</h4>
              <p className="mt-2 font-jakarta text-xs sm:text-sm text-muted-foreground">
                Develop clarity, confidence and purposeful action.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="hover-lively-card group rounded-3xl border border-gold/30 bg-white p-7 text-center shadow-xs">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4E8] text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                <Eye size={28} />
              </div>
              <h4 className="font-serif text-2xl font-bold text-gold">AWAKEN</h4>
              <p className="mt-2 font-jakarta text-xs sm:text-sm text-muted-foreground">
                Develop awareness, meditation and inner calmness.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   07. YUGALA LIFE ACADEMY
   ========================================================================== */

function AcademySection() {
  const academies = [
    {
      title: "Healing Academy",
      subtitle: "Stress Management & Emotional Balance",
      topics: [
        "Understanding stress",
        "Emotional awareness",
        "Relaxation practices",
        "Healthy lifestyle",
        "Emotional balance",
      ],
      color: "text-violet border-violet/20 bg-[#F5EEFF]/30",
    },
    {
      title: "Manifestation Academy",
      subtitle: "Personal Growth & Positive Thinking",
      topics: [
        "Confidence",
        "Positive thinking",
        "Goal setting",
        "Self-discipline",
        "Personal development",
      ],
      color: "text-crimson border-crimson/20 bg-[#FFF0F3]/30",
    },
    {
      title: "Awakening Academy",
      subtitle: "Inner Calmness & Meditation",
      topics: [
        "Meditation",
        "Breathing",
        "Mindfulness",
        "Awareness",
        "Inner calmness",
      ],
      color: "text-gold border-gold/30 bg-[#FFF4E8]/40",
    },
  ];

  return (
    <section id="academy" className="relative py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Learn. Practice. Transform."
            title="Yugala Life Academy"
            subtitle="The Yugala Life Academy is the learning division of Yugala Life, offering structured programs for personal growth, healing and inner awareness."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {academies.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <div className={`hover-lively-card group h-full rounded-3xl border ${a.color} p-7 bg-white shadow-xs`}>
                <h4 className="font-serif text-2xl font-bold">{a.title}</h4>
                <p className="mt-1 font-serif text-sm font-semibold text-foreground/80">{a.subtitle}</p>

                <div className="mt-5 border-t border-border/60 pt-4">
                  <span className="font-jakarta text-[0.65rem] uppercase tracking-wider text-muted-foreground font-bold">
                    Topics Include:
                  </span>
                  <ul className="mt-3 space-y-2 font-jakarta text-xs text-foreground/90">
                    {a.topics.map((t) => (
                      <li key={t} className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-200">
                        <Check size={13} className="shrink-0 text-violet" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <GoldButton href="#contact">Explore Academy</GoldButton>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   08. PRACTITIONER MEMBERSHIP
   ========================================================================== */

function MembershipSection() {
  return (
    <section id="membership" className="relative py-16 sm:py-20 bg-gradient-to-b from-[#F5EEFF]/40 via-white to-transparent">
      <Orbs />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-border/80 bg-white p-8 sm:p-12 shadow-md hover:shadow-xl transition-shadow duration-500">
            <SectionHeading
              eyebrow="Continuous Lifestyle Practice"
              title="Practitioner Membership"
              subtitle="Make Practice a Part of Your Life"
            />
            <p className="mt-4 text-center font-serif text-lg font-semibold text-violet">
              The Yugala Life Practitioner Membership brings together: Healing + Manifestation + Awakening
            </p>
            <p className="mt-2 text-center font-jakarta text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
              A supportive pathway for those who want to make personal practice a consistent part of their lifestyle.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Guided practices",
                "Community connection",
                "Practice sessions",
                "Monthly learning",
                "Continuous personal development",
              ].map((b) => (
                <div key={b} className="flex items-center gap-3 rounded-xl border border-violet/15 bg-[#F5EEFF]/40 px-4 py-3 font-jakarta text-xs sm:text-sm font-medium text-foreground hover:bg-[#F5EEFF] hover:scale-[1.02] transition-all duration-200">
                  <Check size={14} className="text-violet shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <GoldButton href="#contact">Become a Practitioner</GoldButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ==========================================================================
   09. CONSULTATIONS
   ========================================================================== */

function ConsultationsSection() {
  const items = [
    {
      title: "Healing Consultation",
      desc: "For emotional balance, relaxation, personal well-being and supportive healing practices.",
    },
    {
      title: "Manifestation Consultation",
      desc: "For goals, confidence, personal growth and purposeful direction.",
    },
    {
      title: "Awakening Consultation",
      desc: "For meditation, awareness, mindfulness and inner calmness.",
    },
  ];

  return (
    <section id="consultations" className="relative py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Personal Guidance"
            title="Consultations"
            subtitle="Personal Guidance for Your Journey"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="hover-lively-card group flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-white p-7 shadow-xs">
                <div>
                  <h4 className="font-serif text-xl font-bold text-violet group-hover:translate-x-1 transition-transform">{c.title}</h4>
                  <p className="mt-3 font-jakarta text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                </div>
                <div className="mt-6">
                  <GoldButton href="#contact">Book a Consultation</GoldButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   10. HEALING & TRANSFORMATION RESOURCES
   ========================================================================== */

function ResourcesSection() {
  const resources = [
    "Healing Kit",
    "Manifestation Kit",
    "Meditation Resources",
    "Practice Cards",
    "Books & Guides",
    "Audio Programs",
    "Digital Courses",
  ];

  return (
    <section id="resources" className="relative py-16 sm:py-24 bg-gradient-to-b from-transparent via-[#FFF8F1]/40 to-transparent">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Physical & Digital Tools"
            title="Healing & Transformation Resources"
            subtitle="Resources to Support Your Practice — Explore physical and digital resources created to complement your Yugala Life journey."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {resources.map((r) => (
            <div key={r} className="hover-lively-card group rounded-2xl border border-border/80 bg-white p-5 text-center shadow-xs">
              <Package size={22} className="mx-auto text-gold mb-2 group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-violet transition-all duration-300" />
              <h5 className="font-serif text-sm font-bold text-foreground">{r}</h5>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-serif text-base italic text-violet font-medium">
          “Resources that support your daily practice.”
        </p>
      </div>
    </section>
  );
}

/* ==========================================================================
   11. WORKSHOPS & PROGRAMS
   ========================================================================== */

function WorkshopsSection() {
  const programs = [
    "Healing Workshops",
    "Manifestation Workshops",
    "Meditation Sessions",
    "Personal Growth Programs",
    "Academy Programs",
    "Community Programs",
    "Special Moon Practices",
  ];

  return (
    <section id="workshops" className="relative py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Learn. Practice. Grow."
            title="Workshops & Programs"
            subtitle="Yugala Life offers workshops and programs designed around healing, personal growth, manifestation and inner awareness."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div key={p} className="hover-lively-card group rounded-2xl border border-border/80 bg-white p-5 text-center shadow-xs flex items-center justify-center gap-2">
              <Check size={14} className="text-violet shrink-0 group-hover:scale-125 transition-transform duration-200" />
              <span className="font-serif text-sm font-bold text-foreground">{p}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <GoldButton href="#contact">Explore Programs</GoldButton>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   12. COMMUNITY
   ========================================================================== */

function CommunitySection() {
  const activities = [
    "Practice sessions",
    "Workshops",
    "Meditation",
    "Community gatherings",
    "Academy learning",
    "Healing experiences",
  ];

  return (
    <section id="community" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#F5EEFF]/40 via-[#FFF0F3]/30 to-transparent">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="A Community for Growth & Transformation"
            title="Community"
            subtitle="Yugala Life brings together individuals interested in healing, personal development, meditation and conscious living."
          />
        </Reveal>

        <div className="mt-10 rounded-3xl border border-border/80 bg-white p-8 shadow-xs max-w-3xl mx-auto text-center hover:shadow-md transition-shadow duration-300">
          <h4 className="font-serif text-xl font-bold text-violet mb-4">
            Experience Meaningful Connections Through:
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {activities.map((act) => (
              <div key={act} className="rounded-xl bg-[#F5EEFF]/50 border border-violet/15 p-3 font-jakarta text-xs font-semibold text-foreground hover:bg-white hover:border-violet/40 hover:shadow-xs transition-all duration-200">
                {act}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <GoldButton href="#contact">Join the Community</GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   13. ABOUT YUGALA LIFE
   ========================================================================== */

function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative group overflow-hidden rounded-3xl">
              <img
                src={aboutImg}
                alt="About Yugala Life"
                width={1024}
                height={1280}
                loading="lazy"
                className="rounded-3xl border border-border/80 object-cover shadow-md aspect-[4/5] w-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="About Yugala Life"
              title="About Yugala Life"
              align="left"
              subtitle="Yugala Life Inner Healing Center is a personal development and transformation platform supporting individuals through structured practices, consultations, learning programs, community experiences and transformational resources."
            />
            <div className="mt-6 space-y-4 font-jakarta text-xs sm:text-sm text-muted-foreground">
              <p className="font-serif text-xl font-bold text-violet">
                Our focus is: Heal • Manifest • Awaken
              </p>
              <p>
                <strong className="text-foreground">Vision:</strong> To create a supportive space where individuals can explore healing, personal growth and inner awareness.
              </p>
              <p>
                <strong className="text-foreground">Mission:</strong> To provide accessible practices, learning experiences and guidance that support individuals on their journey toward balance, purpose and conscious living.
              </p>
              <p>
                <strong className="text-foreground">Our Approach:</strong> <span className="text-violet font-semibold">Heal → Manifest → Awaken</span> (A holistic journey combining well-being, purposeful growth and inner awareness.)
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   14. UPCOMING PROGRAMS
   ========================================================================== */

function UpcomingSection() {
  const categories = [
    "New Moon Practices",
    "Full Moon Practices",
    "Healing Sessions",
    "Manifestation Sessions",
    "Meditation Sessions",
    "Workshops",
    "Academy Courses",
    "Community Events",
  ];

  return (
    <section id="upcoming" className="relative py-16 sm:py-24 bg-gradient-to-b from-transparent via-[#F5EEFF]/30 to-transparent">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Static Program Listing"
            title="Upcoming Programs"
            subtitle="Discover upcoming Yugala Life sessions, workshops and learning experiences."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div key={cat} className="hover-lively-card group rounded-2xl border border-border/80 bg-white p-5 text-center shadow-xs flex items-center justify-center gap-2">
              <Calendar size={16} className="text-violet shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-serif text-sm font-bold text-foreground">{cat}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <GoldButton href="#contact">View Programs</GoldButton>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   15. CONTACT
   ========================================================================== */

function ContactSection() {
  const field =
    "w-full rounded-xl border border-border/80 bg-white px-4 py-3 font-jakarta text-xs sm:text-sm text-foreground outline-none focus:border-violet focus:ring-2 focus:ring-violet/20 transition-all duration-200";

  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <Orbs />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Connect"
            title="Begin Your Yugala Life Journey"
            subtitle="Connect with Yugala Life to learn more about our programs, consultations, academy and community."
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-border/80 bg-white p-7 sm:p-9 shadow-xs space-y-6">
              <div className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <span className="block font-jakarta text-[0.65rem] uppercase text-muted-foreground font-bold">WhatsApp</span>
                  <a href="https://wa.me/919400898089" className="font-number text-lg font-bold text-foreground hover:text-violet">
                    +91 94008 98089
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet/10 text-violet group-hover:scale-110 group-hover:bg-violet group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </span>
                <div>
                  <span className="block font-jakarta text-[0.65rem] uppercase text-muted-foreground font-bold">Phone</span>
                  <a href="tel:+919400898089" className="font-number text-lg font-bold text-foreground hover:text-violet">
                    +91 94008 98089
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet/10 text-violet group-hover:scale-110 group-hover:bg-violet group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </span>
                <div>
                  <span className="block font-jakarta text-[0.65rem] uppercase text-muted-foreground font-bold">Email</span>
                  <a href="mailto:connect@yugalalife.com" className="font-serif text-lg font-bold text-foreground hover:text-violet">
                    connect@yugalalife.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-crimson/10 text-crimson group-hover:scale-110 group-hover:bg-crimson group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </span>
                <div>
                  <span className="block font-jakarta text-[0.65rem] uppercase text-muted-foreground font-bold">Location</span>
                  <p className="font-serif text-lg font-bold text-foreground">Thrissur, Kerala, India</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form className="rounded-3xl border border-border/80 bg-white p-7 sm:p-9 shadow-xs" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-3 sm:grid-cols-2">
                <input className={field} placeholder="Your full name" required />
                <input className={field} type="email" placeholder="Email address" required />
              </div>
              <input className={`${field} mt-3`} placeholder="Phone number" />
              <select className={`${field} mt-3`} defaultValue="">
                <option value="" disabled>Select Program / Inquiry…</option>
                <option>Healing Programs</option>
                <option>Manifestation Programs</option>
                <option>Awakening Programs</option>
                <option>Consultations</option>
                <option>Academy Programs</option>
                <option>Membership</option>
              </select>
              <textarea className={`${field} mt-3 min-h-24 resize-none`} placeholder="Share your message or inquiry…" />
              <div className="mt-6">
                <GoldButton type="submit">Contact Yugala Life</GoldButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   16. FOOTER CONTENT
   ========================================================================== */

function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-border/80 bg-gradient-to-br from-[#F5EEFF]/60 via-[#FFF0F3]/40 to-[#FFF8F1] pt-16 pb-12">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Yugala Logo" width={44} height={44} className="h-11 w-11 rounded-full object-cover border border-violet/20 shadow-xs hover:scale-105 transition-transform" />
              <div>
                <span className="block font-serif text-xl font-bold text-violet">YUGALA LIFE</span>
                <span className="block font-jakarta text-[0.55rem] uppercase tracking-[0.25em] text-muted-foreground">
                  INNER HEALING CENTER
                </span>
              </div>
            </div>
            <p className="mt-4 font-serif text-sm italic text-violet font-medium">
              Heal • Manifest • Awaken
            </p>
          </div>

          {/* Quick Links & Workshops */}
          <div>
            <p className="font-jakarta text-[0.65rem] uppercase tracking-widest text-violet font-semibold mb-3">Quick Links</p>
            <ul className="space-y-1.5 font-jakarta text-xs text-muted-foreground">
              <li><a href="#about" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">About</a></li>
              <li><a href="#healing" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Healing</a></li>
              <li><a href="#manifestation" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Manifestation</a></li>
              <li><a href="#awakening" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Awakening</a></li>
              <li><a href="#academy" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Academy</a></li>
              <li><a href="#membership" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Membership</a></li>
              <li><a href="#consultations" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Consultations</a></li>
              <li><a href="#workshops" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Programs & Workshops</a></li>
            </ul>
          </div>

          {/* Resources & Community */}
          <div>
            <p className="font-jakarta text-[0.65rem] uppercase tracking-widest text-violet font-semibold mb-3">Resources & Community</p>
            <ul className="space-y-1.5 font-jakarta text-xs text-muted-foreground">
              <li><a href="#resources" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Healing Kits</a></li>
              <li><a href="#resources" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Manifestation Kits</a></li>
              <li><a href="#resources" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Meditation Resources</a></li>
              <li><a href="#resources" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Books & Guides</a></li>
              <li><a href="#resources" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Digital Courses</a></li>
              <li><a href="#community" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Community</a></li>
              <li><a href="#upcoming" className="hover:text-violet hover:translate-x-0.5 inline-block transition-all">Upcoming Events</a></li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div>
            <p className="font-jakarta text-[0.65rem] uppercase tracking-widest text-violet font-semibold mb-3">Connect & Legal</p>
            <ul className="space-y-1.5 font-jakarta text-xs text-muted-foreground mb-4">
              <li><a href="#contact" className="hover:text-violet">WhatsApp: +91 94008 98089</a></li>
              <li><a href="#contact" className="hover:text-violet">Email: connect@yugalalife.com</a></li>
              <li>Location: Thrissur, Kerala</li>
            </ul>
            <p className="font-jakarta text-[0.65rem] uppercase tracking-widest text-violet font-semibold mb-2">Legal</p>
            <ul className="space-y-1 font-jakarta text-[0.7rem] text-muted-foreground">
              <li><a href="#contact" className="hover:text-violet">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-violet">Terms & Conditions</a></li>
              <li><a href="#contact" className="hover:text-violet">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="gold-rule my-8" aria-hidden="true" />
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-jakarta text-[0.7rem] text-muted-foreground">
            © {new Date().getFullYear()} YUGALA LIFE · INNER HEALING CENTER · Thrissur, Kerala, India
          </p>
        </div>
      </div>
    </footer>
  );
}
