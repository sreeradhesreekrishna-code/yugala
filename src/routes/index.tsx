import { createFileRoute } from "@tanstack/react-router";
import {
  Droplets,
  Target,
  Sparkles,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import {
  SectionHeading,
  PrimaryButton,
  SecondaryButton,
  BotanicalLotus,
  BotanicalLeaves,
  BotanicalSun,
} from "@/components/site/ui";
import { FeatureStrip } from "@/components/site/FeatureStrip";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { InteractiveParticles } from "@/components/site/InteractiveParticles";
import { FloatingActions } from "@/components/site/FloatingActions";

import aboutImg from "@/assets/about.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import heroImg from "@/assets/hero.jpg";

const logo = "/Logo.jpeg";

const EVENTS = [
  {
    img: event1,
    date: "New Moon",
    title: "New Moon Practice & Meditation",
    place: "Sanctuary • Thrissur, Kerala",
  },
  {
    img: event2,
    date: "Full Moon",
    title: "Full Moon Healing Circle",
    place: "Online • Live Global Circle",
  },
  {
    img: event3,
    date: "Upcoming",
    title: "Healing & Manifestation Workshop",
    place: "Sanctuary • Thrissur, Kerala",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FBF7F0] text-[#493B36] pt-20">
      <LoadingScreen />
      <InteractiveParticles />
      <Nav />
      <main className="relative z-10">
        <HeroSection />
        <FeatureStrip />
        <OverviewSection />
        <HealingSection />
        <ManifestationSection />
        <MethodSection />
        <MembershipSection />
        <WorkshopsSection />
        <CommunitySection />
        <AboutSection />
        <UpcomingSection />
        <CtaBannerSection />
        <ContactSection />
      </main>
      <FooterSection />
      <FloatingActions />
    </div>
  );
}

/* ==========================================================================
   01. HERO SECTION
   ========================================================================== */

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[84vh] lg:min-h-[90vh] items-center overflow-hidden py-16 sm:py-24"
    >
      {/* Cinematic Nature Background with Warm Cream Editorial Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Cinematic sacred nature landscape with tranquil waterfall"
          className="h-full w-full object-cover object-center"
        />
        {/* Editorial soft gradient overlay maintaining 60% calm neutral cream dominance */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#FBF7F0] via-[#FBF7F0]/92 sm:via-[#FBF7F0]/88 to-[#FBF7F0]/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#FBF7F0] via-transparent to-[#FBF7F0]/30"
          aria-hidden="true"
        />
      </div>

      {/* Decorative Subtle Spiritual & Botanical Line-Art */}
      <BotanicalLeaves className="absolute -bottom-8 right-8 w-52 h-52 text-[#D9A52E] hidden xl:block" />
      <BotanicalSun className="absolute top-12 left-10 w-44 h-44 text-[#E8C978] hidden xl:block" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Editorial Storytelling (verbatim copy preserved) */}
          <div className="text-left lg:col-span-8">
            <Reveal>
              <p className="font-script text-3xl sm:text-4xl text-[#D9A52E] mb-2 font-normal">
                Welcome to
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-serif text-4xl font-medium leading-[1.1] sm:text-6xl lg:text-7xl tracking-[0.04em] text-[#4B146F]">
                YUGALA LIFE
              </h1>
              <p className="font-serif text-lg sm:text-2xl font-medium tracking-[0.16em] text-[#9B1630] uppercase mt-2">
                INNER HEALING CENTER
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-5 max-w-xl">
                <p className="font-serif text-xl sm:text-2xl text-[#493B36] font-normal italic">
                  Awaken Your Inner Light • Transform Your Life
                </p>
                <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-[#493B36]/85">
                  A sacred space for healing, personal growth, and inner awareness
                  through guided holistic practices, ancient wisdom, and mindful living.
                </p>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <PrimaryButton href="#overview">
                  <span>Explore Programs</span>
                  <ArrowRight size={14} />
                </PrimaryButton>
                <SecondaryButton href="#about">
                  About Yugala Life
                </SecondaryButton>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Refined Sacred Geometry Emblem */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <Reveal delay={160}>
              <div className="relative flex items-center justify-center">
                <div className="relative h-52 w-52 sm:h-60 sm:w-60 rounded-full border border-[#D9A52E] bg-[#FFFDF8]/95 p-2.5 shadow-md shadow-[#4B146F]/5 backdrop-blur-sm">
                  <div className="spin-very-slow absolute -inset-3 rounded-full border border-dashed border-[#D9A52E]/45" />
                  <img
                    src={logo}
                    alt="Yugala Life Emblem"
                    width={240}
                    height={240}
                    className="h-full w-full rounded-full object-cover"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-[#E8C978]/60 bg-[#FFFDF8] px-4 py-1 shadow-xs whitespace-nowrap">
                    <p className="font-serif text-[0.72rem] font-medium text-[#4B146F]">
                      Inner Healing Center • Kerala, India
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
   02. OVERVIEW: HEAL, MANIFEST, AWAKEN
   ========================================================================== */

function OverviewSection() {
  return (
    <section id="overview" className="relative py-20 sm:py-28 bg-[#FBF7F0]">
      <BotanicalLotus className="absolute top-12 left-8 w-40 h-40 text-[#D9A52E] hidden lg:block" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            scriptEyebrow="Holistic Pathway"
            title="Heal. Manifest. Awaken."
            subtitle="A balanced spiritual journey supporting personal well-being, purposeful living, and inner transformation."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* HEAL */}
          <Reveal>
            <div className="editorial-card group flex h-full flex-col justify-between p-7 sm:p-8">
              <div>
                <div className="mb-4.5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0E8F7] border border-[#E8C978]/35 text-[#65239A] shadow-xs">
                  <Droplets size={22} className="text-[#65239A]" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#4B146F]">
                  HEAL
                </h3>
                <p className="mt-2 font-serif text-sm italic text-[#9B1630]">
                  Restore balance. Reconnect within.
                </p>
                <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-[#493B36]/85">
                  Practices supporting emotional ease, relaxation, and inner balance.
                </p>
              </div>
              <div className="mt-8">
                <PrimaryButton href="#healing" className="w-full">
                  <span>Explore Healing</span>
                  <ArrowRight size={13} />
                </PrimaryButton>
              </div>
            </div>
          </Reveal>

          {/* MANIFEST */}
          <Reveal delay={100}>
            <div className="editorial-card group flex h-full flex-col justify-between p-7 sm:p-8">
              <div>
                <div className="mb-4.5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0E8F7] border border-[#E8C978]/35 text-[#65239A] shadow-xs">
                  <Target size={22} className="text-[#65239A]" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#4B146F]">
                  MANIFEST
                </h3>
                <p className="mt-2 font-serif text-sm italic text-[#9B1630]">
                  Focus your thoughts. Align your life.
                </p>
                <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-[#493B36]/85">
                  Practices supporting positive thinking, personal growth, intention,
                  and meaningful life action.
                </p>
              </div>
              <div className="mt-8">
                <PrimaryButton href="#manifestation" className="w-full">
                  <span>Explore Manifestation</span>
                  <ArrowRight size={13} />
                </PrimaryButton>
              </div>
            </div>
          </Reveal>

          {/* AWAKEN */}
          <Reveal delay={200}>
            <div className="editorial-card group flex h-full flex-col justify-between p-7 sm:p-8">
              <div>
                <div className="mb-4.5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0E8F7] border border-[#E8C978]/35 text-[#65239A] shadow-xs">
                  <Sparkles size={22} className="text-[#65239A]" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#4B146F]">
                  AWAKEN
                </h3>
                <p className="mt-2 font-serif text-sm italic text-[#9B1630]">
                  Discover awareness. Embrace inner calm.
                </p>
                <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-[#493B36]/85">
                  Meditation and awareness practices for conscious living, mindfulness,
                  and deep inner stillness.
                </p>
              </div>
              <div className="mt-8">
                <PrimaryButton href="#method" className="w-full">
                  <span>Explore Awakening</span>
                  <ArrowRight size={13} />
                </PrimaryButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   03. HEALING PRACTICES
   ========================================================================== */

function HealingSection() {
  const items = [
    {
      title: "21-Day Healing Practice",
      desc: "Structured daily practices and supporting tools for developing a consistent healing routine.",
    },
    {
      title: "Healing Guidance",
      desc: "Personalized guidance for individual concerns, emotional ease, and personal well-being.",
    },
    {
      title: "Healing Sessions",
      desc: "Guided practice-based sessions focused on relaxation, balance, and inner well-being.",
    },
    {
      title: "Full Moon & New Moon Practices",
      desc: "Guided practices connected with reflection, renewal, and rhythmic inner balance.",
    },
    {
      title: "Healing Kit & Tools",
      desc: "Physical and mindful resources designed to support your daily healing sanctuary.",
    },
  ];

  return (
    <section id="healing" className="relative py-20 sm:py-28 bg-[#F0E8F7]/35">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            scriptEyebrow="Restore & Renew"
            title="Healing Practices"
            subtitle="Create space to pause, breathe, and reconnect with yourself. Yugala Life offers structured practices designed to support relaxation, emotional balance, and personal well-being."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="editorial-card group h-full p-6 sm:p-7.5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0E8F7] border border-[#E8C978]/35 text-[#65239A] shadow-xs">
                  <Droplets size={20} className="text-[#65239A]" />
                </div>
                <h4 className="font-serif text-xl font-medium text-[#4B146F]">
                  {item.title}
                </h4>
                <p className="mt-2.5 font-sans text-xs sm:text-sm leading-relaxed text-[#493B36]/85">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <PrimaryButton href="#contact">
            <span>Begin Healing Journey</span>
            <ArrowRight size={13} />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   04. MANIFESTATION PRACTICES
   ========================================================================== */

function ManifestationSection() {
  const items = [
    {
      title: "Manifestation Kit",
      desc: "Structured tools and practices for intention, focus, and purposeful action.",
    },
    {
      title: "Manifestation Guidance",
      desc: "Individual guidance for personal goals, confidence, and meaningful direction.",
    },
    {
      title: "Manifestation Sessions",
      desc: "Guided practices supporting intention, mindset, and aligned action.",
    },
    {
      title: "Manifestation Workshops",
      desc: "Sessions focused on personal growth, confidence, positive thinking, and goal achievement.",
    },
  ];

  return (
    <section id="manifestation" className="relative py-20 sm:py-28 bg-[#FBF7F0]">
      <BotanicalLeaves className="absolute bottom-6 right-6 w-40 h-40 text-[#E8C978]/60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            scriptEyebrow="Clarity & Action"
            title="Manifestation Practices"
            subtitle="Transform intention into clarity, focus, and purposeful action. Yugala Life approaches manifestation through positive thinking, personal development, and consistent practice."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="editorial-card group h-full p-6 sm:p-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0E8F7] border border-[#E8C978]/35 text-[#65239A] shadow-xs">
                  <Target size={20} className="text-[#65239A]" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#4B146F]">
                  {item.title}
                </h4>
                <p className="mt-2 font-sans text-xs sm:text-sm leading-relaxed text-[#493B36]/85">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <PrimaryButton href="#contact">
            <span>Explore Manifestation</span>
            <ArrowRight size={13} />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   05. THE YUGALA LIFE METHOD
   ========================================================================== */

function MethodSection() {
  return (
    <section id="method" className="relative py-20 sm:py-28 bg-[#F8EEF2]/45">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            scriptEyebrow="The Framework"
            title="The Yugala Life Method"
            subtitle="Yugala Life supports individuals through a structured approach to personal development. The journey begins with understanding where you are, identifying areas that need attention, introducing suitable practices, and supporting consistent transformation."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="editorial-card p-8 text-center">
              <div className="mb-4.5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0E8F7] border border-[#E8C978]/35 text-[#65239A] shadow-xs">
                <Droplets size={22} className="text-[#65239A]" />
              </div>
              <h4 className="font-serif text-2xl font-medium text-[#4B146F]">
                HEAL
              </h4>
              <p className="mt-2.5 font-sans text-xs sm:text-sm text-[#493B36]/85">
                Restore balance, emotional ease, and inner well-being.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="editorial-card p-8 text-center">
              <div className="mb-4.5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0E8F7] border border-[#E8C978]/35 text-[#65239A] shadow-xs">
                <Target size={22} className="text-[#65239A]" />
              </div>
              <h4 className="font-serif text-2xl font-medium text-[#4B146F]">
                MANIFEST
              </h4>
              <p className="mt-2.5 font-sans text-xs sm:text-sm text-[#493B36]/85">
                Develop clarity, confidence, and purposeful action.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="editorial-card p-8 text-center">
              <div className="mb-4.5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0E8F7] border border-[#E8C978]/35 text-[#65239A] shadow-xs">
                <Sparkles size={22} className="text-[#65239A]" />
              </div>
              <h4 className="font-serif text-2xl font-medium text-[#4B146F]">
                AWAKEN
              </h4>
              <p className="mt-2.5 font-sans text-xs sm:text-sm text-[#493B36]/85">
                Develop awareness, meditation, and continuous inner calmness.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   06. PRACTITIONER MEMBERSHIP
   ========================================================================== */

function MembershipSection() {
  return (
    <section id="membership" className="relative py-20 sm:py-28 bg-[#FBF7F0]">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-[#E8C978]/45 bg-[#FFFDF8] p-8 sm:p-12 shadow-sm shadow-[#4B146F]/5 text-center">
            <SectionHeading
              scriptEyebrow="Continuous Lifestyle Practice"
              title="Practitioner Membership"
              subtitle="Make Practice a Part of Your Everyday Life"
            />
            <p className="mt-4 font-serif text-lg font-medium text-[#4B146F]">
              The Yugala Life Practitioner Membership brings together: Healing + Manifestation + Awakening
            </p>
            <p className="mt-2 font-sans text-xs sm:text-sm text-[#493B36]/85 max-w-xl mx-auto">
              A supportive pathway for those who want to make personal practice a
              consistent and enriching part of their lifestyle.
            </p>

            <div className="mt-9 grid gap-3.5 sm:grid-cols-2 max-w-2xl mx-auto text-left">
              {[
                "Guided daily practices",
                "Community connection & circles",
                "Dedicated practice sessions",
                "Monthly spiritual learning",
                "Continuous personal growth",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl border border-[#E8C978]/35 bg-[#FBF7F0] px-4 py-3 font-sans text-xs font-medium text-[#493B36]"
                >
                  <Check size={14} className="text-[#D9A52E] shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <PrimaryButton href="#contact">
                <span>Become a Practitioner</span>
                <ArrowRight size={13} />
              </PrimaryButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ==========================================================================
   07. WORKSHOPS & PROGRAMS
   ========================================================================== */

function WorkshopsSection() {
  const programs = [
    "Healing Workshops",
    "Manifestation Workshops",
    "Meditation Sessions",
    "Personal Growth Programs",
    "Mindfulness Gatherings",
    "Community Circles",
    "Special Moon Practices",
    "Conscious Living Courses",
  ];

  return (
    <section id="workshops" className="relative py-20 sm:py-28 bg-[#F0E8F7]/35">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            scriptEyebrow="Learn. Practice. Grow."
            title="Workshops & Programs"
            subtitle="Yugala Life offers workshops and programs designed around healing, personal growth, manifestation, and inner awareness."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program}
              className="editorial-card p-5 text-center flex items-center justify-center gap-2.5"
            >
              <Check size={14} className="text-[#D9A52E] shrink-0" />
              <span className="font-serif text-sm font-medium text-[#4B146F]">
                {program}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <PrimaryButton href="#contact">
            <span>Explore Programs</span>
            <ArrowRight size={13} />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   08. COMMUNITY
   ========================================================================== */

function CommunitySection() {
  const activities = [
    "Practice sessions",
    "Interactive workshops",
    "Guided meditation",
    "Community gatherings",
    "Spiritual learning",
    "Healing circles",
  ];

  return (
    <section id="community" className="relative py-20 sm:py-28 bg-[#FBF7F0]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            scriptEyebrow="Belonging & Connection"
            title="Community"
            subtitle="Yugala Life brings together individuals interested in healing, personal development, meditation, and conscious living."
          />
        </Reveal>

        <div className="mt-14 rounded-3xl border border-[#E8C978]/45 bg-[#FFFDF8] p-8 sm:p-10 max-w-3xl mx-auto text-center shadow-xs">
          <h4 className="font-serif text-xl font-medium text-[#4B146F] mb-6">
            Experience Meaningful Connections Through:
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {activities.map((act) => (
              <div
                key={act}
                className="rounded-xl bg-[#FBF7F0] border border-[#E8C978]/35 p-3.5 font-sans text-xs font-medium text-[#493B36]"
              >
                {act}
              </div>
            ))}
          </div>
          <div className="mt-9">
            <PrimaryButton href="#contact">
              <span>Join the Community</span>
              <ArrowRight size={13} />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   09. ABOUT YUGALA LIFE
   ========================================================================== */

function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#F8EEF2]/35">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: Atmospheric Arched Sanctuary Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal>
              <div className="relative group overflow-hidden rounded-3xl border border-[#D9A52E]/40 p-2 bg-[#FFFDF8] shadow-sm shadow-[#4B146F]/5 max-w-xs sm:max-w-sm">
                <img
                  src={aboutImg}
                  alt="About Yugala Life Sanctuary"
                  width={600}
                  height={750}
                  loading="lazy"
                  className="rounded-2xl object-cover aspect-[4/5] w-full"
                />
              </div>
            </Reveal>
          </div>

          {/* Right: Editorial Narrative (Preserved 100% Verbatim) */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <p className="font-script text-3xl sm:text-4xl text-[#D9A52E] mb-2 font-normal">
                About Yugala Life
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl font-medium leading-tight text-[#4B146F]">
                A Sacred Space for Healing & Transformation
              </h2>

              <p className="mt-4 font-sans text-xs sm:text-sm leading-relaxed text-[#493B36]/90">
                Yugala Life Inner Healing Center is a personal development and
                transformation platform supporting individuals through structured
                practices, learning programs, community experiences, and mindful
                resources.
              </p>

              <div className="mt-6 space-y-3 font-sans text-xs sm:text-sm text-[#493B36]">
                <p className="font-serif text-lg font-medium text-[#9B1630]">
                  Our focus is: Heal • Manifest • Awaken
                </p>
                <div className="rounded-2xl border border-[#E8C978]/40 bg-[#FFFDF8] p-5 space-y-2.5">
                  <p>
                    <strong className="text-[#4B146F]">Vision:</strong> To create a supportive space where individuals can explore healing, personal growth, and inner awareness.
                  </p>
                  <p>
                    <strong className="text-[#4B146F]">Mission:</strong> To provide accessible practices, learning experiences, and guidance that support balance, purpose, and conscious living.
                  </p>
                  <p>
                    <strong className="text-[#4B146F]">Our Approach:</strong> <span className="text-[#65239A] font-semibold">Heal → Manifest → Awaken</span> (A holistic journey combining well-being, purposeful growth, and inner awareness.)
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <PrimaryButton href="#contact">
                  <span>Connect With Us</span>
                  <ArrowRight size={13} />
                </PrimaryButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   10. EVENTS & UPCOMING GATHERINGS
   ========================================================================== */

function UpcomingSection() {
  return (
    <section id="upcoming" className="relative py-20 sm:py-28 bg-[#FBF7F0]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            scriptEyebrow="Sacred Gatherings"
            title="Upcoming Circles & Events"
            subtitle="Discover upcoming Yugala Life sessions, moon practices, and transformative learning experiences."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {EVENTS.map((event, i) => (
            <Reveal key={event.title} delay={i * 90}>
              <div className="editorial-card group overflow-hidden flex flex-col justify-between h-full">
                <div className="overflow-hidden aspect-[4/3] rounded-t-2xl bg-[#F0E8F7]">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F0E8F7] px-3.5 py-1 font-sans text-[0.65rem] uppercase tracking-wider text-[#65239A] font-semibold mb-3 border border-[#E8C978]/35">
                      <Calendar size={12} />
                      <span>{event.date}</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#4B146F]">
                      {event.title}
                    </h4>
                    <p className="mt-1.5 flex items-center gap-1.5 font-sans text-xs text-[#493B36]/80">
                      <MapPin size={13} className="text-[#D9A52E] shrink-0" />
                      <span>{event.place}</span>
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#E8C978]/30">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#4B146F] hover:text-[#65239A] transition-colors"
                    >
                      <span>Inquire / Register</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <PrimaryButton href="#contact">
            <span>View All Programs</span>
            <ArrowRight size={13} />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   11. EDITORIAL CTA BANNER
   ========================================================================== */

function CtaBannerSection() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Peaceful nature meditation"
          className="h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[#FBF7F0]/92"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <BotanicalLotus className="mx-auto w-16 h-16 text-[#D9A52E] mb-2" />
          <p className="font-script text-3xl sm:text-4xl text-[#D9A52E] font-normal">
            Begin Your Journey Within
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#4B146F]">
            Discover healing. Discover you.
          </h2>
          <p className="mt-4 font-sans text-xs sm:text-sm text-[#493B36]/85 max-w-lg mx-auto">
            Take the first step toward inner peace, purposeful growth, and conscious transformation.
          </p>
          <div className="mt-8">
            <PrimaryButton href="#contact">
              <span>Get in Touch</span>
              <ArrowRight size={14} />
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ==========================================================================
   12. CONTACT SECTION
   ========================================================================== */

function ContactSection() {
  const inputStyle =
    "w-full rounded-xl border border-[#E8C978]/60 bg-[#FFFDF8] px-4 py-2.5 font-sans text-xs sm:text-sm text-[#493B36] outline-none focus:border-[#65239A] focus:ring-1 focus:ring-[#65239A] transition-all placeholder:text-[#493B36]/50";

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#FBF7F0]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            scriptEyebrow="Connect"
            title="Begin Your Yugala Life Journey"
            subtitle="Connect with Yugala Life to learn more about our programs, memberships, workshops, and community."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal>
              <div className="editorial-card p-6 sm:p-7 space-y-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0E8F7] text-[#65239A] border border-[#E8C978]/35 shadow-xs">
                    <MessageCircle size={18} />
                  </span>
                  <div>
                    <span className="block font-sans text-[0.65rem] uppercase text-[#9B1630] font-semibold">
                      WhatsApp
                    </span>
                    <a
                      href="https://wa.me/919400898089"
                      className="font-sans text-sm font-semibold text-[#4B146F] hover:text-[#65239A] transition-colors"
                    >
                      +91 94008 98089
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0E8F7] text-[#65239A] border border-[#E8C978]/35 shadow-xs">
                    <Phone size={18} />
                  </span>
                  <div>
                    <span className="block font-sans text-[0.65rem] uppercase text-[#9B1630] font-semibold">
                      Phone
                    </span>
                    <a
                      href="tel:+919400898089"
                      className="font-sans text-sm font-semibold text-[#4B146F] hover:text-[#65239A] transition-colors"
                    >
                      +91 94008 98089
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0E8F7] text-[#65239A] border border-[#E8C978]/35 shadow-xs">
                    <Mail size={18} />
                  </span>
                  <div>
                    <span className="block font-sans text-[0.65rem] uppercase text-[#9B1630] font-semibold">
                      Email
                    </span>
                    <a
                      href="mailto:connect@yugalalife.com"
                      className="font-sans text-sm font-semibold text-[#4B146F] hover:text-[#65239A] transition-colors"
                    >
                      connect@yugalalife.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0E8F7] text-[#65239A] border border-[#E8C978]/35 shadow-xs">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <span className="block font-sans text-[0.65rem] uppercase text-[#9B1630] font-semibold">
                      Location
                    </span>
                    <p className="font-sans text-sm font-semibold text-[#4B146F]">
                      Thrissur, Kerala, India
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <form
                className="editorial-card p-6 sm:p-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for reaching out to Yugala Life. We will be in touch shortly.");
                }}
              >
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <input
                    className={inputStyle}
                    placeholder="Your full name"
                    required
                  />
                  <input
                    className={inputStyle}
                    type="email"
                    placeholder="Email address"
                    required
                  />
                </div>
                <input
                  className={`${inputStyle} mt-3.5`}
                  placeholder="Phone number"
                />
                <select className={`${inputStyle} mt-3.5`} defaultValue="">
                  <option value="" disabled>
                    Select Program / Inquiry…
                  </option>
                  <option>Healing Practices</option>
                  <option>Manifestation Practices</option>
                  <option>Practitioner Membership</option>
                  <option>Workshops & Events</option>
                  <option>General Inquiry</option>
                </select>
                <textarea
                  className={`${inputStyle} mt-3.5 min-h-24 resize-none`}
                  placeholder="Share your message or inquiry…"
                  rows={4}
                />
                <div className="mt-6">
                  <PrimaryButton type="submit">
                    <span>Send Inquiry</span>
                    <ArrowRight size={13} />
                  </PrimaryButton>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   13. FOOTER SECTION
   ========================================================================== */

function FooterSection() {
  return (
    <footer className="relative border-t border-[#E8C978]/40 bg-[#FFFDF8] text-[#493B36] pt-16 pb-12">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Yugala Life Emblem"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover border border-[#D9A52E]/60"
              />
              <div>
                <span className="block font-serif text-lg font-semibold tracking-[0.14em] text-[#4B146F]">
                  YUGALA LIFE
                </span>
                <span className="block font-sans text-[0.55rem] uppercase tracking-[0.22em] text-[#9B1630] font-medium">
                  Inner Healing Center
                </span>
              </div>
            </div>
            <p className="mt-3 font-serif text-sm italic text-[#D9A52E]">
              Heal • Manifest • Awaken
            </p>
            <p className="mt-2 font-sans text-xs text-[#493B36]/80 leading-relaxed">
              A sacred space dedicated to inner healing, mindful living, and personal transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-[#4B146F] font-bold mb-3.5">
              Quick Links
            </p>
            <ul className="space-y-2 font-sans text-xs text-[#493B36]/85">
              <li>
                <a href="#about" className="hover:text-[#4B146F] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#healing" className="hover:text-[#4B146F] transition-colors">
                  Healing Practices
                </a>
              </li>
              <li>
                <a href="#manifestation" className="hover:text-[#4B146F] transition-colors">
                  Manifestation
                </a>
              </li>
              <li>
                <a href="#method" className="hover:text-[#4B146F] transition-colors">
                  The Method
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-[#4B146F] transition-colors">
                  Practitioner Membership
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-[#4B146F] transition-colors">
                  Workshops & Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Offerings & Circles */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-[#4B146F] font-bold mb-3.5">
              Gatherings
            </p>
            <ul className="space-y-2 font-sans text-xs text-[#493B36]/85">
              <li>
                <a href="#upcoming" className="hover:text-[#4B146F] transition-colors">
                  New Moon Practice
                </a>
              </li>
              <li>
                <a href="#upcoming" className="hover:text-[#4B146F] transition-colors">
                  Full Moon Healing Circle
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-[#4B146F] transition-colors">
                  Community Circles
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-[#4B146F] transition-colors">
                  Guided Meditation
                </a>
              </li>
              <li>
                <a href="#upcoming" className="hover:text-[#4B146F] transition-colors">
                  Upcoming Gatherings
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-[#4B146F] font-bold mb-3.5">
              Connect
            </p>
            <ul className="space-y-2 font-sans text-xs text-[#493B36]/85 mb-4">
              <li>WhatsApp: +91 94008 98089</li>
              <li>Email: connect@yugalalife.com</li>
              <li>Location: Thrissur, Kerala, India</li>
            </ul>
            <div className="pt-2.5 border-t border-[#E8C978]/35">
              <p className="font-sans text-[0.7rem] text-[#493B36]/75">
                © {new Date().getFullYear()} Yugala Life. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
