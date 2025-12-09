import { type FormEvent, useState } from "react";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import "../../index.css";
import "../../App.css";

type Feature = {
  id: string;
  label: string;
  tagline: string;
  highlight: string;
  description: string;
  bullets: string[];
};

type Category = {
  key: string;
  name: string;
  intro: string;
  features: Feature[];
};

const PARTNERS = [
  { name: "Baseball Alliance", logo: "/logos/BaseballAlliance.png" },
  { name: "Bombers", logo: "/logos/Bombers.png" },
  { name: "Chart IQ", logo: "/logos/Chart-IQ-blue.png" },
  {
    name: "Goatnet",
    logo: "/logos/Goatnet-Logo-full-black-transparent-1024x567.png",
  },
  { name: "TCS", logo: "/logos/TCS.png" },
];

const SUITE_CATEGORIES: Category[] = [
  {
    key: "nil",
    name: "NIL",
    intro:
      "The Bomber Fastpitch NIL platform helps players within the Bomber organization find, facilitate, and manage NIL deals — keeping athletes, brands, and families aligned.",
    features: [
      {
        id: "nil-hub",
        label: "Deal Management",
        tagline: "Find & Facilitate Deals",
        highlight:
          "Connect Bomber athletes with brands and manage partnerships.",
        description:
          "A centralized platform for Bomber Fastpitch players to discover NIL opportunities, manage deals, and track all agreements in one place.",
        bullets: [
          "Browse and connect with vetted brand partners",
          "Track active deals, payments, and deliverables",
          "Clear visibility for athletes, families, and Bomber staff",
        ],
      },
      {
        id: "nil-compliance",
        label: "Compliance & Safety",
        tagline: "Protected & Compliant",
        highlight: "Guardrails that keep Bomber athletes safe.",
        description:
          "Built-in compliance tools ensure every NIL deal follows NCAA, school, and state regulations while keeping the process simple for Bomber players.",
        bullets: [
          "Automated compliance checks for all deals",
          "Approval workflows from Bomber staff and families",
          "Documentation and records ready for audit",
        ],
      },
      {
        id: "nil-marketplace",
        label: "Brand Partnerships",
        tagline: "Curated Opportunities",
        highlight: "Quality brands that align with Bomber values.",
        description:
          "A protected marketplace where vetted brands can connect with Bomber Fastpitch athletes for authentic, on-brand partnerships.",
        bullets: [
          "Pre-screened brands aligned with Bomber standards",
          "Controlled access to athlete profiles and rosters",
          "Performance data to showcase athlete value",
        ],
      },
    ],
  },
  {
    key: "tech",
    name: "Technology",
    intro:
      "Bomber Collective has partnered with Ember, a tech solutions organization, to create custom web services for Bombers and other partners.",
    features: [
      {
        id: "tech-platforms",
        label: "Custom Web Services",
        tagline: "Built by Ember",
        highlight:
          "Web and mobile platforms tailored specifically for Bomber and partner needs.",
        description:
          "Through our partnership with Ember, we deliver custom digital products — websites, apps, and internal tools designed to power the Bomber ecosystem and beyond.",
        bullets: [
          "Custom websites and mobile apps for Bomber programs",
          "Tailored solutions for Bomber partners and organizations",
          "Modern, scalable architecture built for growth",
        ],
      },
      {
        id: "tech-data",
        label: "Content & Media",
        tagline: "Showcase Your Athletes",
        highlight: "Professional platforms that tell your program's story.",
        description:
          "Ember builds digital experiences that highlight rosters, schedules, stats, and media libraries — giving programs a professional online presence.",
        bullets: [
          "Player profiles, rosters, and team pages",
          "Integrated media libraries for photos and videos",
          "Event schedules and tournament information",
        ],
      },
      {
        id: "tech-support",
        label: "Ongoing Support",
        tagline: "Always There When You Need It",
        highlight: "Maintenance, updates, and hosting included.",
        description:
          "Ember provides ongoing support and infrastructure management, ensuring Bomber and partner websites stay fast, secure, and up-to-date.",
        bullets: [
          "Reliable hosting and security monitoring",
          "Regular updates and feature improvements",
          "Technical support when you need it",
        ],
      },
    ],
  },
  {
    key: "recruiting",
    name: "Recruiting",
    intro:
      "A platform designed to help Bomber players be discovered and navigate the college recruiting process with confidence and clarity.",
    features: [
      {
        id: "rec-profiles",
        label: "Player Profiles",
        tagline: "Get Discovered",
        highlight: "Professional profiles that showcase Bomber athletes.",
        description:
          "Complete player profiles featuring stats, academics, film, and highlights — making it easy for college coaches to discover and evaluate Bomber talent.",
        bullets: [
          "Athletic stats, academic info, and contact details",
          "Integrated highlight videos and game film",
          "Shareable profiles for college coach outreach",
        ],
      },
      {
        id: "rec-college",
        label: "College Recruiting Tools",
        tagline: "Navigate the Process",
        highlight: "Guidance and tools to help Bomber players get recruited.",
        description:
          "Resources and workflows that help Bomber athletes and families navigate the college recruiting journey — from first contact to commitment.",
        bullets: [
          "Track college interest and communications",
          "Recruiting timeline and milestone tracking",
          "Resources for families new to the process",
        ],
      },
      {
        id: "rec-events",
        label: "Showcase & Exposure",
        tagline: "Stand Out to Coaches",
        highlight: "Connect Bomber performance with recruiting opportunities.",
        description:
          "Tools that package tournament and showcase data alongside player profiles, helping college coaches see Bomber athletes in action.",
        bullets: [
          "Event schedules and performance highlights",
          "Stats and metrics from showcases and tournaments",
          "Direct connections between film and recruiting profiles",
        ],
      },
    ],
  },
];

function VideoEmbed({
  src,
  title = "Bomber Collective",
  poster,
  rounded = "rounded-3xl",
}: {
  src: string;
  title?: string;
  poster?: string;
  rounded?: string;
}) {
  const isYouTube = /youtube\.com|youtu\.be/.test(src) && src.includes("embed");
  const isVimeo = /vimeo\.com/.test(src) && src.includes("player.vimeo.com");
  const isMp4 = /\.mp4($|\?)/.test(src);

  if (isYouTube || isVimeo) {
    return (
      <div
        className={`relative aspect-video overflow-hidden ${rounded} border border-black/10 bg-black`}
      >
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (isMp4) {
    return (
      <div
        className={`relative aspect-video overflow-hidden ${rounded} border border-black/10 bg-black`}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          controls
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    );
  }

  // Fallback: show a clickable card that opens the URL
  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer"
      className={`group relative block aspect-video overflow-hidden ${rounded} border border-black/10 bg-neutral-900`}
      aria-label={`Open video: ${title}`}
    >
      <div className="absolute inset-0 grid place-items-center text-white/80">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
          <span>Open Video</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            className="opacity-80"
          >
            <path
              d="M7 7h10v10M7 17l10-10"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function BomberCollectiveHome() {
  const [activeCategoryKey, setActiveCategoryKey] = useState("nil");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const activeCategory =
    SUITE_CATEGORIES.find((c) => c.key === activeCategoryKey) ??
    SUITE_CATEGORIES[0];

  const [activeFeatureId, setActiveFeatureId] = useState(
    activeCategory.features[0].id,
  );

  // Ensure active feature stays valid when switching categories
  const currentFeature =
    activeCategory.features.find((f) => f.id === activeFeatureId) ??
    activeCategory.features[0];

  const handleCategoryChange = (key: string) => {
    const next = SUITE_CATEGORIES.find((c) => c.key === key);
    if (!next) return;
    setActiveCategoryKey(key);
    setActiveFeatureId(next.features[0].id);
  };

  const handleScrollToProducts = () => {
    const el = document.getElementById("suite");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    setSubmitStatus("submitting");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/bo@bombersfastpitch.net",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            organization: formData.get("organization"),
            message: formData.get("message"),
            _subject: "New Contact from Bomber Collective Website",
          }),
        },
      );

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error(error);
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[var(--color-text-primary)]">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-4 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-16">
        <div
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-80 opacity-80"
          style={{
            background:
              "radial-gradient(circle at top, rgba(212,175,55,0.12), transparent 70%)",
          }}
        />

        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 lg:flex-row lg:items-center lg:py-14">
          <Reveal>
            <div className="max-w-xl space-y-8">
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/90 px-4 py-1 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                <span className="text-xs font-semibold tracking-[0.16em] text-neutral-700 uppercase">
                  Bomber Collective
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl leading-tight font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                Empowering{" "}
                <span className="bg-gradient-to-r from-[#D4AF37] to-black bg-clip-text text-transparent">
                  Bomber Fastpitch
                </span>{" "}
                &amp; Beyond.
              </h1>

              {/* Supporting copy */}
              <p className="max-w-xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                Bomber Collective is the parent company behind the tools that
                power Bomber Fastpitch athletes — from NIL deal management and
                college recruiting to custom web services through our partner
                Ember.
              </p>

              {/* Micro “cred” row */}
              <div className="flex flex-wrap gap-4 text-xs text-neutral-500">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-3 py-1 backdrop-blur-sm">
                  <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />
                  <span>3 products · 1 unified ecosystem</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-3 py-1 backdrop-blur-sm">
                  <span className="h-1 w-1 rounded-full bg-neutral-900" />
                  <span>Built for elite softball programs</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleScrollToProducts}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-semibold text-black shadow-md shadow-[rgba(0,0,0,0.16)] transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950/0 focus-visible:outline-none"
                >
                  Explore the Suite
                </button>

                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 transition-all hover:text-[var(--color-primary)]"
                >
                  Talk with our team
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full lg:w-auto">
              {/* Gradient frame to make the card pop */}
              <div className="relative mx-auto max-w-2xl rounded-[1.75rem] bg-gradient-to-br from-black/10 via-white to-[#D4AF37]/25 p-[1px] shadow-[0_18px_70px_rgba(15,15,15,0.18)]">
                <div className="rounded-[1.65rem] border border-white/40 bg-white/90 px-6 py-6 backdrop-blur-md">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="text-[10px] font-semibold tracking-[0.22em] text-neutral-500 uppercase">
                      Parent Platform
                    </span>
                    <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#D4AF37] to-black" />
                  </div>

                  <div className="flex items-center justify-center py-4">
                    <img
                      src="https://res.cloudinary.com/duwgrvngn/image/upload/v1762464403/Bomber_Collective-removebg-preview_lwlw2q.png"
                      alt="Bomber Collective"
                      className="max-h-24 w-auto object-contain"
                    />
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    The parent company powering Bomber Fastpitch and partner
                    organizations with NIL management, recruiting tools, and
                    custom web experiences through Ember.
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-3 text-[11px] text-neutral-800">
                    <div className="rounded-2xl border border-black/5 bg-neutral-50 px-3 py-2">
                      <div className="text-[0.65rem] text-neutral-500">
                        NIL Platform
                      </div>
                      <div className="mt-0.5 text-[0.8rem] font-semibold">
                        For Bomber players
                      </div>
                    </div>
                    <div className="rounded-2xl border border-black/5 bg-neutral-50 px-3 py-2">
                      <div className="text-[0.65rem] text-neutral-500">
                        Recruiting Tools
                      </div>
                      <div className="mt-0.5 text-[0.8rem] font-semibold">
                        Get discovered
                      </div>
                    </div>
                    <div className="rounded-2xl border border-black/5 bg-neutral-50 px-3 py-2">
                      <div className="text-[0.65rem] text-neutral-500">
                        Web Services
                      </div>
                      <div className="mt-0.5 text-[0.8rem] font-semibold">
                        Via Ember
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Partners */}
        <div className="mt-20 py-8">
          <div className="mx-auto max-w-4xl px-4">
            <p className="mb-8 text-center text-xs font-semibold tracking-[0.18em] text-neutral-500 uppercase">
              Trusted by programs &amp; partners across the country
            </p>

            <div className="relative overflow-hidden">
              {/* Gradient fades on edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

              <div className="flex gap-14 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                {/* Track 1 */}
                <div className="animate-partner-marquee flex min-w-max items-center gap-14">
                  {PARTNERS.map((partner) => (
                    <div
                      key={partner.name}
                      className="shrink-0 opacity-70 transition-all duration-200 hover:scale-[1.05] hover:opacity-100"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 w-auto object-contain grayscale transition hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>

                {/* Track 2 (duplicate for seamless loop) */}
                <div className="animate-partner-marquee flex min-w-max items-center gap-14">
                  {PARTNERS.map((partner) => (
                    <div
                      key={`${partner.name}-duplicate`}
                      className="shrink-0 opacity-70 transition-all duration-200 hover:scale-[1.05] hover:opacity-100"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 w-auto object-contain grayscale transition hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
              {/* Left: Story + Pillars + Stats */}
              <div className="flex flex-col gap-8 rounded-[28px] border border-black/5 bg-white/85 p-8 shadow-[0_18px_40px_rgba(0,0,0,0.06)] backdrop-blur-md sm:p-10">
                {/* Eyebrow + Heading + Body */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-0.5 w-10 rounded-full bg-[var(--color-primary)]" />
                    <span className="text-[10px] font-medium tracking-[0.18em] text-neutral-500 uppercase">
                      About Bomber Collective
                    </span>
                  </div>

                  <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    Building the{" "}
                    <span className="bg-gradient-to-r from-[#D4AF37] to-black bg-clip-text text-transparent">
                      digital backbone
                    </span>{" "}
                    for Bomber Fastpitch.
                  </h2>

                  <p className="max-w-xl text-sm leading-relaxed text-neutral-700 sm:text-base">
                    Bomber Collective is the parent company behind platforms
                    designed to empower Bomber Fastpitch athletes and partner
                    organizations. We provide NIL deal management for Bomber
                    players, recruiting tools to help them get discovered, and
                    custom web services through our partnership with Ember.
                  </p>
                </div>

                {/* Pillars */}
                <div className="space-y-3">
                  <div className="text-[11px] font-medium tracking-[0.16em] text-neutral-500 uppercase">
                    What we do
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      {
                        title: "NIL for Bombers",
                        desc: "Find, facilitate, and manage NIL deals for Bomber Fastpitch players.",
                      },
                      {
                        title: "Recruiting Tools",
                        desc: "Help Bomber athletes be discovered and navigate college recruiting.",
                      },
                      {
                        title: "Web Services",
                        desc: "Custom digital solutions for Bombers and partners through Ember.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-black/5 bg-neutral-50/80 p-4"
                      >
                        <div className="mb-1 text-[10px] tracking-[0.16em] text-[var(--color-primary)] uppercase">
                          {item.title}
                        </div>
                        <div className="text-xs text-neutral-700 sm:text-sm">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="rounded-2xl border border-black/5 bg-white/80 p-4 sm:p-5">
                  <div className="mb-3 text-[10px] font-medium tracking-[0.16em] text-neutral-500 uppercase">
                    Platform by the numbers
                  </div>
                  <div className="grid gap-4 sm:grid-cols-4">
                    {[
                      { k: "99.9%", v: "Uptime target" },
                      { k: "4", v: "Core products" },
                      { k: "40+", v: "Partner orgs" },
                      { k: "∞", v: "Scale path" },
                    ].map((s) => (
                      <div key={s.v} className="text-center">
                        <div className="text-xl font-semibold text-neutral-900 sm:text-2xl">
                          {s.k}
                        </div>
                        <div className="mt-1 text-[11px] text-neutral-500 sm:text-xs">
                          {s.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brand Focus / Quote */}
                <div className="rounded-2xl border border-amber-500/18 bg-amber-50/70 px-4 py-3 text-xs text-neutral-800 sm:text-sm">
                  <span className="mr-2 text-[10px] font-semibold tracking-[0.18em] text-amber-700 uppercase">
                    Our focus
                  </span>
                  <span className="block pt-1 text-neutral-700">
                    Empowering Bomber Fastpitch athletes with the tools they
                    need to succeed — from NIL deals to college recruiting to
                    world-class digital platforms.
                  </span>
                </div>
              </div>

              {/* Right: Video + Highlights */}
              <div className="space-y-6">
                {/* Video Card */}
                <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-black/80 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                  {/* Soft radial overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(212,175,55,0.2),_transparent_60%)]" />
                  <div className="relative">
                    <VideoEmbed
                      src="https://res.cloudinary.com/duwgrvngn/video/upload/v1762885920/Hailuo_Video_444718580746903557_z4tgn4.mp4"
                      title="Inside the Bomber Collective"
                      poster="https://res.cloudinary.com/duwgrvngn/image/upload/v1762464403/Bomber_Collective-removebg-preview_lwlw2q.png"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />
                  </div>

                  <div className="relative flex items-center justify-between gap-4 px-5 pt-3 pb-4">
                    <div>
                      <div className="text-[10px] font-medium tracking-[0.18em] text-neutral-400 uppercase">
                        Feature film
                      </div>
                      <div className="text-sm font-medium text-white">
                        Inside the Bomber Collective
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="#suite"
                        className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-1.5 text-[11px] font-semibold text-black shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
                      >
                        Explore the Suite
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm hover:border-[var(--color-primary)]/70"
                      >
                        Talk with our team
                      </a>
                    </div>
                  </div>
                </div>

                {/* Video Breakdown */}
                <div className="rounded-[24px] border border-black/6 bg-white/90 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.05)] backdrop-blur-md">
                  <div className="mb-2 text-[10px] font-medium tracking-[0.16em] text-neutral-500 uppercase">
                    In this video
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                      NIL platform for Bomber Fastpitch players to find, secure,
                      and manage deals.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                      Recruiting tools that help athletes stand out to college
                      programs.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                      Custom web and digital solutions built with Ember for
                      Bombers and partners.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOMBER COLLECTIVE SUITE (Goatnet-style layout) */}
      <section
        id="suite"
        className="bg-neutral-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl space-y-8">
          {/* Section header */}
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-10 rounded-full bg-[var(--color-primary)]" />
              <span className="text-[10px] font-medium tracking-[0.18em] text-neutral-500 uppercase">
                The Bomber Suite
              </span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Solutions for athletes, brands, and collectives.
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
              Explore the platforms that sit under Bomber Collective — from NIL
              operations to recruiting and custom digital infrastructure.
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row">
            {/* Left: Tabs + Feature Cards */}
            <div className="flex-1">
              {/* Tabs */}
              <div className="mb-6 inline-flex flex-wrap gap-3 rounded-full bg-white/80 p-1 shadow-[0_12px_30px_rgba(15,15,15,0.06)] backdrop-blur">
                {SUITE_CATEGORIES.map((category) => {
                  const isActive = category.key === activeCategory.key;
                  return (
                    <button
                      key={category.key}
                      type="button"
                      onClick={() => handleCategoryChange(category.key)}
                      className={`relative rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all outline-none ${
                        isActive
                          ? "bg-neutral-900 text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                          : "text-neutral-500 hover:text-neutral-900"
                      }`}
                    >
                      {category.name}
                    </button>
                  );
                })}
              </div>

              <p className="mb-6 max-w-xl text-sm text-neutral-600">
                {activeCategory.intro}
              </p>

              {/* Feature cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {activeCategory.features.map((feature) => {
                  const isSelected = feature.id === currentFeature.id;
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => setActiveFeatureId(feature.id)}
                      className={`group flex flex-col items-start rounded-2xl border px-4 py-4 text-left transition-all outline-none ${
                        isSelected
                          ? "border-transparent bg-neutral-900 text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
                          : "border-black/6 bg-white/90 text-neutral-900 shadow-[0_10px_25px_rgba(0,0,0,0.04)] hover:border-[var(--color-primary)]/60 hover:shadow-[0_14px_35px_rgba(0,0,0,0.10)]"
                      }`}
                    >
                      <div className="mb-1 text-[9px] tracking-[0.16em] text-[var(--color-primary)] uppercase">
                        {feature.tagline}
                      </div>
                      <div className="text-sm font-semibold">
                        {feature.label}
                      </div>
                      <div
                        className={`mt-1 text-[11px] leading-snug ${
                          isSelected
                            ? "text-neutral-300"
                            : "text-neutral-500 group-hover:text-neutral-700"
                        }`}
                      >
                        {feature.highlight}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Detail Panel */}
            <div className="flex-1">
              <Reveal>
                <div className="relative min-h-[380px] overflow-hidden rounded-[28px] border border-black/10 bg-neutral-900 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:aspect-video sm:min-h-0">
                  {/* Video */}
                  <video
                    key={currentFeature.id}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source
                      src="https://res.cloudinary.com/duwgrvngn/video/upload/v1762885920/Hailuo_Video_444718580746903557_z4tgn4.mp4"
                      type="video/mp4"
                    />
                  </video>

                  {/* Gradient overlay for text readability */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 px-4 py-4 sm:px-6 sm:py-6">
                    <div className="mb-1 text-xs tracking-[0.16em] text-[var(--color-primary)] uppercase sm:text-sm">
                      {activeCategory.name} Solutions
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">
                      {currentFeature.label}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-neutral-200 sm:text-base">
                      {currentFeature.description}
                    </p>
                    <ul className="mb-3 space-y-1.5">
                      {currentFeature.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs text-neutral-300 sm:text-sm"
                        >
                          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-[#D4AF37]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs leading-snug text-neutral-400">
                      Built and operated under the Bomber Collective standard:
                      aligned branding, secure infrastructure, and white-glove
                      support across every product.
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-neutral-50 px-4 pb-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="rounded-3xl border border-black/[0.04] bg-white p-8 shadow-[0_18px_50px_rgba(15,15,15,0.04)] backdrop-blur-md">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
                    Connect with Bomber Collective
                  </h3>
                  <p className="mt-1 max-w-md text-xs text-neutral-600 sm:text-sm">
                    Interested in NIL support, recruiting tools, or custom web
                    services? Share a few details and our team will follow up.
                  </p>
                </div>
              </div>

              {/* Status Message */}
              {submitStatus === "success" && (
                <div className="mb-4 rounded-2xl border border-green-200 bg-green-50 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-green-900">
                        Message sent successfully!
                      </h3>
                      <p className="mt-1 text-sm text-green-700">
                        Our team will connect with you shortly.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 p-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 shrink-0 text-red-600" />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-red-900">
                        Something went wrong
                      </h3>
                      <p className="mt-1 text-sm text-red-700">
                        Please try again or email us directly. We apologize for
                        the inconvenience.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleContactSubmit}
                className="grid gap-4 sm:grid-cols-2"
              >
                <div>
                  <label className="mb-1 block text-[10px] font-medium tracking-[0.16em] text-neutral-500 uppercase">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[10px] font-medium tracking-[0.16em] text-neutral-500 uppercase">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                    placeholder="you@organization.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1 block text-[10px] font-medium tracking-[0.16em] text-neutral-500 uppercase">
                    Organization / Role
                  </label>
                  <input
                    name="organization"
                    className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                    placeholder="Program, collective, or brand you represent"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1 block text-[10px] font-medium tracking-[0.16em] text-neutral-500 uppercase">
                    How can we help?
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                    placeholder="Briefly share what you’re looking to build, support, or explore with Bomber Collective."
                  />
                </div>

                <div className="flex justify-end sm:col-span-2">
                  <button
                    type="submit"
                    disabled={
                      submitStatus === "submitting" ||
                      submitStatus === "success"
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-2.5 text-xs font-semibold text-black shadow-md shadow-[rgba(0,0,0,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {submitStatus === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Sent!
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
