// src/components/sections/CaseStudies.tsx
import { ArrowUpRight } from "lucide-react";
import { useState, type ReactNode } from "react";

type CaseItem = {
  title: string;
  img?: string;
  video?: string; // optional mp4/webm
  poster?: string; // optional poster for video
  blurb: string;
  href?: string;
  tags?: string[];
  metric?: string; // e.g. "+28% conversion"
  accent?: string; // tailwind color class e.g. "bg-amber-500"
};

const DEFAULTS: CaseItem[] = [
  {
    title: "Bomber Fastpitch",
    img: "https://res.cloudinary.com/duwgrvngn/image/upload/v1763097161/BomberWeb_tlcss6.png",
    blurb:
      "Elite fastpitch program site with player & Team information, schedules, and integrated media galleries.",
    tags: ["React", "Cloudinary", "CI/CD"],
    metric: "230+ Teams",
    accent: "bg-[#D4AF37]",
    href: "https://bomber-app-bomber-web.vercel.app",
  },
  {
    title: "Baseball Alliance",
    img: "https://res.cloudinary.com/duwgrvngn/image/upload/v1763097464/baseballalliance_qddlkv.png",
    blurb:
      "Platform supporting elite youth and high-school baseball programs with tools, exposure, and player-development pathways",
    tags: ["React", "TypeScript", "Vercel"],
    metric: "Lighthouse 98",
    accent: "bg-neutral-900",
    href: "https://www.baseballalliance.co/",
  },
  {
    title: "Triple Crown Sports",
    img: "https://res.cloudinary.com/duwgrvngn/image/upload/v1763097146/image_2025-11-13_231225354_aobj7o.png",
    blurb:
      "Built a tailored analytics dashboard that ingests Triple Crown Sports data and transforms it into clear, actionable charts and tables.",
    tags: ["Vue", "Tailwind", "Python"],
    metric: "Multi-Source Data Pipeline",
    accent: "bg-[#D4AF37]",
    href: "https://www.cseval.com/",
  },
  {
    title: "Chart IQ Platform",
    img: "https://res.cloudinary.com/duwgrvngn/image/upload/v1763097194/Capture_i3sgrs.png",
    blurb:
      "“Real-time in-game charting platform for baseball and softball, delivering instant data for on-field adjustments.",
    tags: ["React", "D3.js", "WebSocket"],
    metric: "Real-time",
    accent: "bg-neutral-900",
    href: "https://chartiq.net/",
  },
  {
    title: "Bomber Mobile",
    img: "https://res.cloudinary.com/dpiwfss82/image/upload/v1765314096/Bluebloods/app_qhb4ha.jpg",
    blurb:
      "Cross-platform mobile app for sports team management, media, and communication.",
    tags: ["Expo", "React Native", "Push"],
    metric: "2300+ Users",
    accent: "bg-[#D4AF37]",
    href: "https://apps.apple.com/tr/app/bomber-fastpitch/id6744776521sa",
  },
];

export default function CaseStudies({
  items = DEFAULTS,
  title = "Recent work",
  ctaHref = "/work",
  ctaLabel = "View all case studies",
}: {
  items?: CaseItem[];
  title?: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16" id="work">
      <div className="mx-auto mb-5 h-0.5 w-12 rounded-full bg-[var(--color-primary)]" />
      <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-neutral-600 md:text-base">
        A curated selection of web, mobile, and platform work — from full
        rebuilds to greenfield products.
      </p>

      {/* Mobile: horizontal snap rail */}
      <div className="mt-8 overflow-x-auto pb-2 md:hidden">
        <div className="flex snap-x snap-mandatory gap-4">
          {items.map((it, i) => {
            const isMobile = it.title.toLowerCase().includes("mobile");
            return (
              <RailCard key={it.title + i} item={it} isMobile={isMobile} />
            );
          })}
        </div>
      </div>

      {/* Desktop: asymmetric mosaic */}
      <div className="mt-8 hidden auto-rows-[260px] grid-cols-3 gap-6 md:grid">
        {/* Hero - Triple Crown Sports (Big, left side) */}
        {items[0] && (
          <MosaicCard item={items[0]} className="col-span-2 row-span-2" />
        )}

        {/* Goatnet Mobile - tall, phone-style on the right */}
        {items[4] && (
          <MosaicCard
            item={items[4]}
            className="col-span-1 row-span-2"
            isMobile
          />
        )}

        {/* Bottom row - 3 web projects */}
        {items.slice(1, 4).map((it, i) => (
          <MosaicCard key={it.title + i} item={it} className="col-span-1" />
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-primary)]/60 hover:shadow-md md:text-base"
        >
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------- Cards ---------- */

function RailCard({
  item,
  isMobile = false,
}: {
  item: CaseItem;
  isMobile?: boolean;
}) {
  const ratio = isMobile ? "aspect-[9/19.5]" : "aspect-[4/3]";

  return (
    <CardWrapper
      item={item}
      outerClass="min-w-[86%] max-h-[320px] snap-center sm:min-w-[70%] sm:max-h-[400px]"
    >
      <Media item={item} ratioClass={ratio} isMobile={isMobile} />
    </CardWrapper>
  );
}

function MosaicCard({
  item,
  className = "",
  isMobile = false,
}: {
  item: CaseItem;
  className?: string;
  isMobile?: boolean;
}) {
  const ratio = isMobile ? "h-full w-full" : "absolute inset-0";

  return (
    <CardWrapper item={item} outerClass={className}>
      <Media
        item={item}
        ratioClass={ratio}
        fill={!isMobile}
        isMobile={isMobile}
      />
    </CardWrapper>
  );
}

function CardWrapper({
  item,
  children,
  outerClass = "",
}: {
  item: CaseItem;
  children: ReactNode;
  outerClass?: string;
}) {
  const Wrapper = ({ children }: { children: ReactNode }) =>
    item.href ? (
      <a
        href={item.href}
        className={`group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition hover:shadow-[0_22px_55px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-neutral-900/90 ${outerClass}`}
        aria-label={item.title}
      >
        {children}
      </a>
    ) : (
      <div
        className={`group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition hover:shadow-[0_22px_55px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-neutral-900/90 ${outerClass}`}
      >
        {children}
      </div>
    );

  return (
    <Wrapper>
      {/* accent edge */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-1 ${
          item.accent ?? "bg-neutral-800"
        }`}
      />

      {/* media layer */}
      <div className="relative z-0 h-full w-full">{children}</div>

      {/* bottom blend gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2/3 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

      {/* content panel */}
      <div className="absolute inset-x-3 bottom-3 z-20">
        <div className="rounded-2xl bg-black/74 px-4 py-3 backdrop-blur-md">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm leading-tight font-semibold text-white md:text-base">
              {item.title}
            </h3>
            {item.metric && (
              <span className="shrink-0 -rotate-2 rounded-md bg-[var(--color-primary)] px-2 py-0.5 text-[10px] font-semibold text-black shadow-sm md:text-xs">
                {item.metric}
              </span>
            )}
          </div>

          <p className="mt-1 text-[11px] text-neutral-200/90 md:text-xs">
            {item.blurb}
          </p>

          {item.tags && item.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {item.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {item.href && (
            <div className="mt-2 inline-flex items-center gap-2 text-[11px] font-medium text-white/90 opacity-0 transition group-hover:opacity-100 md:text-xs">
              View case
              <ArrowUpRight className="h-3 w-3" />
            </div>
          )}
        </div>
      </div>

      {/* subtle inner ring on hover */}
      <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-0 transition ring-inset group-hover:ring-black/5 dark:group-hover:ring-white/10" />
    </Wrapper>
  );
}

function Media({
  item,
  ratioClass,
  fill = false,
  isMobile = false,
}: {
  item: CaseItem;
  ratioClass: string;
  fill?: boolean;
  isMobile?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  // Mobile app layout: full-length screenshot inside a phone frame
  if (isMobile) {
    return (
      <div
        className={`relative flex items-center justify-center ${
          fill ? "h-full w-full" : ratioClass
        } bg-neutral-100 dark:bg-neutral-900`}
      >
        <div className="relative aspect-[9/19.5] w-[75%] max-w-[280px] rounded-[2.5rem] border border-black/70 bg-black shadow-[0_24px_60px_rgba(15,23,42,0.65)]">
          {/* top notch / status bar hint */}
          <div className="pointer-events-none absolute top-2 left-1/2 z-20 h-2 w-24 -translate-x-1/2 rounded-full bg-black/60" />

          {item.video ? (
            <video
              className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              muted
              loop
              playsInline
              autoPlay
              poster={item.poster}
              onCanPlay={() => setLoaded(true)}
            >
              <source src={item.video} />
            </video>
          ) : (
            <img
              src={item.img}
              alt={item.title}
              onLoad={() => setLoaded(true)}
              className={`h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03] ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              decoding="async"
            />
          )}

          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-neutral-800" />
          )}

          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />
        </div>
      </div>
    );
  }

  // Default (web / dashboard) media
  // Use object-cover for better fit, with object-center for better positioning
  const objectFit = "object-cover object-center";

  return (
    <div
      className={`relative overflow-hidden ${
        fill ? "" : ratioClass
      } ${fill ? ratioClass : ""}`}
    >
      {item.video ? (
        <video
          className={`h-full w-full ${objectFit} transition-transform duration-700 group-hover:scale-[1.03] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          autoPlay
          poster={item.poster}
          onCanPlay={() => setLoaded(true)}
        >
          <source src={item.video} />
        </video>
      ) : (
        <img
          src={item.img}
          alt={item.title}
          onLoad={() => setLoaded(true)}
          className={`h-full w-full ${objectFit} transition-transform duration-700 group-hover:scale-[1.03] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
        />
      )}

      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-neutral-200 dark:bg-neutral-800" />
      )}

      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />
    </div>
  );
}
