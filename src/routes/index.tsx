import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
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
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const logo = "/Logo.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PILLARS = [
  { icon: Droplets, title: "Healing", text: "Release • Restore • Renew" },
  { icon: Sparkles, title: "Manifestation", text: "Align • Attract • Achieve" },
  { icon: Sun, title: "Awakening", text: "Awaken • Aware • Alive" },
  { icon: Users, title: "Community", text: "Grow Together" },
];

const APPROACH = [
  { icon: Droplets, title: "Healing", text: "Release stress and restore balance." },
  { icon: Sparkles, title: "Manifestation", text: "Align your energy with your goals." },
  { icon: Sun, title: "Awakening", text: "Discover your highest potential." },
  { icon: Users, title: "Community", text: "Connect with like-minded people." },
  { icon: InfinityIcon, title: "Transformation", text: "Experience lasting inner change." },
];

const PROGRAMS = [
  { icon: HeartHandshake, title: "Healing Sessions", text: "Guided group healing experiences." },
  { icon: Moon, title: "Moon Sessions", text: "New Moon & Full Moon healing sessions." },
  { icon: Compass, title: "Consultation", text: "Personal one-to-one transformation guidance." },
  { icon: ClipboardCheck, title: "Assessment", text: "Personal wellness assessment." },
  { icon: Flower2, title: "Workshops", text: "Healing and manifestation workshops." },
  { icon: GraduationCap, title: "Facilitator Training", text: "Professional certification programs." },
];

const MEMBER_BENEFITS = [
  "Exclusive Healing Sessions",
  "Member Events",
  "Community Support",
  "Learning Resources",
  "Priority Registration",
  "Wellness Updates",
];

const ACADEMY = [
  "Healing",
  "Meditation",
  "Manifestation",
  "Energy Awareness",
  "Conscious Living",
  "Personal Development",
];

const FLOW = [
  { title: "Settle & Center", icon: CircleDot },
  { title: "Breath Awareness", icon: Wind },
  { title: "Shuddhi Kriya", icon: Droplets },
  { title: "Chakra Healing", icon: Flower2 },
  { title: "Prana Activation", icon: Flame },
  { title: "Manifestation Meditation", icon: Sparkles },
  { title: "Silent Integration", icon: Moon },
];

const KIT_ITEMS = [
  "Essential Oils",
  "Healing Accessories",
  "Meditation Essentials",
  "Wellness Products",
  "Energy Tools",
];

const EVENTS = [
  { img: event1, date: "12 Sep 2026", title: "Full Moon Healing Circle", place: "Thrissur, Kerala" },
  { img: event2, date: "27 Sep 2026", title: "Chakra Activation Immersion", place: "Online • Live" },
  { img: event3, date: "18 Oct 2026", title: "Manifestation Masterclass", place: "Thrissur, Kerala" },
];

const POSTS = [
  {
    img: blog1,
    tag: "Healing",
    title: "The Quiet Science of Letting Go",
    text: "How release work restores the nervous system and returns you to balance.",
  },
  {
    img: blog2,
    tag: "Manifestation",
    title: "Energy Follows Attention",
    text: "A practical framework for aligning intention, emotion and daily action.",
  },
  {
    img: blog3,
    tag: "Awakening",
    title: "Living From the Roots",
    text: "Meditation, spiritual growth and the slow art of conscious transformation.",
  },
];

const QUICK_LINKS = [
  ["About", "about"],
  ["Vision", "about"],
  ["Mission", "about"],
  ["Programs", "programs"],
  ["Membership", "membership"],
  ["Academy", "academy"],
  ["Consultation", "programs"],
  ["Assessment", "programs"],
  ["Workshops", "programs"],
  ["Healing Kits", "kits"],
  ["Store", "kits"],
  ["Sponsorship", "partner"],
  ["Investment", "partner"],
  ["Events", "events"],
  ["Blog", "blog"],
  ["Contact", "contact"],
] as const;

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <LoadingScreen />
      <InteractiveParticles />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <AnimatedStats />
        <About />
        <Programs />
        <Membership />
        <Academy />
        <SessionFlow />
        <Kits />
        <Partner />
        <Events />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden pt-20 sm:pt-28 pb-12 sm:pb-20">
      <div className="aura absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="sacred-grid absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Live Status Badge */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-surface/80 px-3.5 py-1 font-jakarta text-[0.65rem] uppercase tracking-[0.25em] text-gold shadow-sm backdrop-blur-md mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Sanctuary Open • Guided Healing</span>
          </div>
        </Reveal>

        {/* Animated Emblem with Breathing Light Ring */}
        <Reveal delay={60}>
          <div className="relative mx-auto h-24 w-24 sm:h-36 sm:w-36 p-1 rounded-full border border-gold/40 bg-background/90 shadow-xl backdrop-blur-md">
            <div className="spin-slow absolute -inset-2.5 rounded-full border border-dashed border-gold/30 opacity-70" />
            <div className="animate-pulse-ring absolute -inset-1 rounded-full border border-violet/40 opacity-50" />
            <img
              src={logo}
              alt="Yugala Life logo"
              width={144}
              height={144}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-5 font-jakarta text-[0.65rem] sm:text-xs uppercase tracking-[0.35em] text-gold/90 font-medium">
            Yugala Life · Inner Healing Centre
          </p>
        </Reveal>

        <Reveal delay={180}>
          <h1 className="mt-4 font-outfit text-3xl font-semibold leading-tight sm:text-6xl lg:text-7xl text-gilded">
            Heal. Transform. Awaken.
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <p className="mx-auto mt-4 max-w-2xl font-jakarta text-xs sm:text-base leading-relaxed text-muted-foreground">
            Experience the power of healing, manifestation, and awakening through guided sessions,
            spiritual practices, and transformational learning designed to help you reconnect with
            your true self.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
            <GoldButton href="#contact">Book a Session</GoldButton>
            <GhostButton href="#programs">Explore Programs</GhostButton>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="glass-card h-full rounded-2xl p-4 sm:p-6 text-left">
                <span className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gold/10 text-gold mb-3 sm:mb-4">
                  <p.icon size={20} strokeWidth={1.4} />
                </span>
                <h3 className="font-outfit text-base sm:text-xl font-medium text-foreground">{p.title}</h3>
                <p className="mt-1 font-jakarta text-xs text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section id="about" className="relative py-12 sm:py-24">
      <Orbs />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={aboutImg}
                alt="A practitioner meditating in candlelight"
                width={1024}
                height={1280}
                loading="lazy"
                className="relative aspect-[4/3] sm:aspect-[4/5] w-full rounded-2xl border border-gold/25 object-cover shadow-lg"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Our Story"
              title="About Yugala Life"
              align="left"
              subtitle="Yugala Life is a holistic healing and transformation platform dedicated to helping individuals restore balance, awaken inner potential, and create lasting positive change through healing sessions, meditation, manifestation practices, consultations, workshops, and transformational education."
            />
            <p className="mt-6 font-outfit text-lg sm:text-xl italic text-gold/90 font-light">
              Create Healing. Inspire Transformation. Spread Light.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Vision",
              text: "To build a global community where healing, consciousness, and personal transformation become a way of life.",
            },
            {
              title: "Mission",
              text: "To empower individuals through healing, manifestation, education, and community support, inspiring meaningful transformation from within.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="glass-card h-full rounded-2xl p-6 sm:p-8">
                <h3 className="font-outfit text-xl sm:text-2xl font-semibold text-gilded">{c.title}</h3>
                <div className="gold-rule my-4 w-16" aria-hidden="true" />
                <p className="font-jakarta text-xs sm:text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 sm:mt-20">
          <Reveal>
            <SectionHeading eyebrow="The Path" title="Our Approach" />
          </Reveal>
          <div className="mt-8 sm:mt-12 grid gap-3 sm:gap-5 grid-cols-2 lg:grid-cols-5">
            {APPROACH.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <article className="glass-card h-full rounded-2xl p-4 sm:p-6 text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold mb-3">
                    <a.icon size={18} strokeWidth={1.4} />
                  </span>
                  <h3 className="font-outfit text-sm sm:text-lg font-medium text-foreground">{a.title}</h3>
                  <p className="mt-1 font-jakarta text-[0.7rem] sm:text-xs leading-relaxed text-muted-foreground">{a.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Programs ---------------- */

function Programs() {
  return (
    <section id="programs" className="relative py-12 sm:py-24">
      <div className="sacred-grid absolute inset-0 opacity-15" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What We Offer"
            title="Programs & Services"
            subtitle="Consultation, assessment, workshops and facilitator training — every offering is designed as a step on the path from healing to awakening."
          />
        </Reveal>
        <div className="mt-10 sm:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="glass-card group relative h-full overflow-hidden rounded-2xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 text-gold">
                  <p.icon size={20} strokeWidth={1.3} />
                </span>
                <h3 className="mt-4 font-outfit text-lg sm:text-xl font-medium text-foreground">{p.title}</h3>
                <p className="mt-2 font-jakarta text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-jakarta text-[0.7rem] uppercase tracking-wider text-gold font-medium">
                  Learn more <ArrowUpRight size={13} />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Membership ---------------- */

function Membership() {
  return (
    <section id="membership" className="relative py-12 sm:py-20">
      <Orbs />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="glass-card rounded-3xl p-6 sm:p-12">
            <SectionHeading eyebrow="Membership" title="Join the Healing Community" />
            <ul className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {MEMBER_BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-3 rounded-xl border border-gold/15 bg-background/50 px-4 py-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Check size={12} strokeWidth={2} />
                  </span>
                  <span className="font-jakarta text-xs sm:text-sm tracking-wide text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <GoldButton href="#contact">Become a Member</GoldButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Academy ---------------- */

function Academy() {
  return (
    <section id="academy" className="relative py-12 sm:py-20">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Yugala Academy"
            subtitle="Structured learning journeys for those who wish to study healing deeply — and carry the light forward."
          />
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ACADEMY.map((a, i) => (
            <Reveal key={a} delay={i * 70}>
              <div className="glass-card group flex items-center gap-3 rounded-xl px-5 py-4">
                <span className="font-jakarta text-xs tracking-widest text-gold/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 font-outfit text-sm sm:text-base font-medium text-foreground">{a}</span>
                <Gem size={14} className="shrink-0 text-gold/50" />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <div className="mt-8 text-center">
            <GhostButton href="#contact">Explore Academy</GhostButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Session Flow ---------------- */

function SessionFlow() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The Experience"
            title="Healing Session Flow"
            subtitle="Seven movements, one continuous thread of light — from the first settling breath to silent integration."
          />
        </Reveal>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {FLOW.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="glass-card flex flex-col items-center text-center rounded-xl p-4 h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-background text-gold mb-3">
                  <f.icon size={20} strokeWidth={1.3} />
                </span>
                <span className="font-jakarta text-[0.6rem] uppercase tracking-wider text-gold/60">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 font-outfit text-xs sm:text-sm font-medium text-foreground leading-snug">{f.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Kits & Store ---------------- */

function Kits() {
  return (
    <section id="kits" className="relative py-12 sm:py-20">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Sacred Tools" title="Healing Kits & Store" />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="glass-card h-full rounded-2xl p-6 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 text-gold mb-4">
                <Flower2 size={22} strokeWidth={1.3} />
              </span>
              <h3 className="font-outfit text-2xl font-semibold text-gilded">Healing Kits</h3>
              <ul className="mt-4 space-y-2.5 font-jakarta text-xs sm:text-sm text-muted-foreground">
                {KIT_ITEMS.map((k) => (
                  <li key={k} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {k}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="glass-card flex h-full flex-col rounded-2xl p-6 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 text-gold mb-4">
                <Store size={22} strokeWidth={1.3} />
              </span>
              <h3 className="font-outfit text-2xl font-semibold text-gilded">Store</h3>
              <p className="mt-3 font-jakarta text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Handpicked healing and wellness products, chosen for purity, intention and
                craftsmanship.
              </p>
              <div className="mt-6 pt-4">
                <GoldButton href="#contact">Visit Store</GoldButton>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sponsorship & Investment ---------------- */

function Partner() {
  const cards = [
    {
      icon: HandCoins,
      title: "Sponsorship",
      text: "Support the mission of healing and transformation.",
    },
    {
      icon: TrendingUp,
      title: "Investment",
      text: "Partner with Yugala Life to expand the healing movement.",
    },
  ];
  return (
    <section id="partner" className="relative py-12 sm:py-20">
      <Orbs />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Partner With Us" title="Sponsorship & Investment" />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <article className="glass-card group h-full rounded-2xl p-6 sm:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 text-gold mb-4">
                  <c.icon size={22} strokeWidth={1.3} />
                </span>
                <h3 className="font-outfit text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 font-jakarta text-xs sm:text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 font-jakarta text-xs font-medium uppercase tracking-wider text-gold"
                >
                  Start a conversation <ArrowUpRight size={13} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Events ---------------- */

function Events() {
  return (
    <section id="events" className="relative py-12 sm:py-20">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Gather" title="Upcoming Events" />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 90}>
              <article className="glass-card group h-full overflow-hidden rounded-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-gold/30 bg-background/80 px-3 py-1 font-jakarta text-[0.6rem] uppercase tracking-wider text-gold backdrop-blur-md">
                    {e.date}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-outfit text-lg font-semibold text-foreground">{e.title}</h3>
                  <p className="mt-1 font-jakarta text-xs text-muted-foreground">{e.place}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <div className="mt-8 text-center">
            <GhostButton href="#contact">View Events</GhostButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Blog ---------------- */

function Blog() {
  return (
    <section id="blog" className="relative py-12 sm:py-20">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Journal"
            title="Insights & Reflections"
            subtitle="Healing, meditation, manifestation, transformation and spiritual growth."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="glass-card group h-full overflow-hidden rounded-2xl">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-5">
                  <p className="font-jakarta text-[0.65rem] uppercase tracking-widest text-gold/80">{p.tag}</p>
                  <h3 className="mt-1.5 font-outfit text-lg font-semibold text-foreground leading-snug">{p.title}</h3>
                  <p className="mt-2 font-jakarta text-xs leading-relaxed text-muted-foreground">{p.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-jakarta text-xs font-medium uppercase tracking-wider text-gold">
                    Read More <ArrowUpRight size={13} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  const details = [
    { icon: Phone, label: "Phone", value: "+91 9074 25 1978", href: "tel:+919074251978" },
    { icon: Mail, label: "Email", value: "connect@yugalalife.com", href: "mailto:connect@yugalalife.com" },
    { icon: MapPin, label: "Location", value: "Thrissur, Kerala, India" },
  ];
  const field =
    "w-full rounded-xl border border-gold/20 bg-background/50 px-4 py-3 font-jakarta text-xs sm:text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold/60";

  return (
    <section id="contact" className="relative py-12 sm:py-20">
      <Orbs />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Connect" title="Begin Your Journey" />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card h-full rounded-2xl p-6 sm:p-8">
              <ul className="space-y-6">
                {details.map((d) => (
                  <li key={d.label} className="flex min-w-0 items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/25 text-gold">
                      <d.icon size={18} strokeWidth={1.3} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-jakarta text-[0.65rem] uppercase tracking-widest text-gold/70">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="mt-0.5 block truncate font-outfit text-base font-medium text-foreground hover:text-gold"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 font-outfit text-base font-medium text-foreground">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="gold-rule my-8" aria-hidden="true" />
              <p className="font-outfit text-lg italic text-gold/90">
                Heal Yourself. Transform Your Life. Awaken Your Soul.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              className="glass-card h-full rounded-2xl p-6 sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <input className={field} placeholder="Your name" aria-label="Your name" required />
                <input
                  className={field}
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  required
                />
              </div>
              <input className={`${field} mt-3`} placeholder="Phone number" aria-label="Phone number" />
              <select className={`${field} mt-3`} aria-label="Interested in" defaultValue="">
                <option value="" disabled>
                  I'm interested in…
                </option>
                <option>Healing Session</option>
                <option>Moon Session</option>
                <option>Consultation</option>
                <option>Workshop</option>
                <option>Facilitator Training</option>
                <option>Membership</option>
              </select>
              <textarea
                className={`${field} mt-3 min-h-28 resize-none`}
                placeholder="Share what you're seeking…"
                aria-label="Message"
              />
              <div className="mt-6">
                <GoldButton type="submit">
                  Book a Session
                </GoldButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  const socials = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Youtube, label: "YouTube" },
    { icon: MessageCircle, label: "WhatsApp" },
  ];
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 pt-16 pb-12">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Yugala Logo" width={44} height={44} loading="lazy" className="h-11 w-11 rounded-full object-cover border border-gold/30 shadow-sm shrink-0" />
              <div>
                <span className="block font-outfit text-xl font-bold text-gilded">Yugala Life</span>
                <span className="block font-jakarta text-[0.55rem] uppercase tracking-[0.25em] text-muted-foreground">
                  Inner Healing Centre
                </span>
              </div>
            </div>
            <h2 className="mt-6 font-outfit text-xl font-semibold text-gilded">Join the Healing Movement</h2>
            <p className="mt-2 max-w-md font-jakarta text-xs leading-relaxed text-muted-foreground">
              Be a part of a global community dedicated to healing, manifestation, awakening, and
              conscious living.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#contact"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-gold transition-all hover:bg-gold/10"
                >
                  <s.icon size={16} strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-jakarta text-[0.65rem] uppercase tracking-widest text-gold/80 font-medium">Quick Links</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 font-jakarta text-xs">
              {QUICK_LINKS.map(([label, id], i) => (
                <li key={`${label}-${i}`}>
                  <a
                    href={`#${id}`}
                    className="text-muted-foreground transition-colors hover:text-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-jakarta text-[0.65rem] uppercase tracking-widest text-gold/80 font-medium">Legal</p>
            <ul className="mt-4 space-y-2 font-jakarta text-xs">
              {["Privacy Policy", "Terms & Conditions", "Refund Policy"].map((l) => (
                <li key={l}>
                  <a
                    href="#contact"
                    className="text-muted-foreground transition-colors hover:text-gold"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-rule my-8" aria-hidden="true" />
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-outfit text-base italic text-gold/85">
            Heal Yourself. Transform Your Life. Awaken Your Soul.
          </p>
          <p className="font-jakarta text-[0.7rem] text-muted-foreground">
            © {new Date().getFullYear()} Yugala Life · Inner Healing Centre · Thrissur, Kerala, India
          </p>
        </div>
      </div>
    </footer>
  );
}
