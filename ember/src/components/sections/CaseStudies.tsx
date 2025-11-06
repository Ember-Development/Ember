// src/components/sections/CaseStudies.tsx
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type CaseItem = {
  title: string;
  img?: string;
  video?: string;        // optional mp4/webm
  poster?: string;       // optional poster for video
  blurb: string;
  href?: string;
  tags?: string[];
  metric?: string;       // e.g. "+28% conversion"
  accent?: string;       // tailwind color class e.g. "bg-amber-500"
};

const DEFAULTS: CaseItem[] = [
  {
    title: "Commerce site revamp",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    blurb: "Headless Shopify, +28% conversion.",
    tags: ["Shopify", "Headless", "A/B"],
    metric: "+28% conv.",
    accent: "bg-rose-500",
    href: "/work",
  },
  {
    title: "Mobile member app",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
    blurb: "Expo + push, 4.8★ rating.",
    tags: ["React Native", "Expo"],
    metric: "4.8★",
    accent: "bg-indigo-500",
    href: "/work",
  },
  {
    title: "DevOps hardening",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    blurb: "IaC + monitoring, 99.95% uptime.",
    tags: ["IaC", "K8s", "Observability"],
    metric: "99.95%",
    accent: "bg-emerald-500",
    href: "/work",
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
    <section className="mx-auto max-w-6xl px-4 py-16" id="work">
      <h2 className="text-center text-3xl font-bold tracking-tight">{title}</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-600 dark:text-neutral-400">
        A few highlights from web, mobile, and infrastructure projects.
      </p>

      {/* Mobile: snap rail */}
      <div className="mt-8 overflow-x-auto pb-2 md:hidden">
        <div className="flex snap-x snap-mandatory gap-4">
          {items.map((it, i) => (
            <RailCard key={it.title + i} item={it} />
          ))}
        </div>
      </div>

      {/* Desktop: asymmetric mosaic */}
      <div className="mt-8 hidden auto-rows-[220px] grid-cols-3 gap-6 md:grid">
        {items[0] && (
          <MosaicCard item={items[0]} className="col-span-2 row-span-2" />
        )}
        {items.slice(1).map((it, i) => (
          <MosaicCard key={it.title + i} item={it} className="col-span-1" />
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow md:text-base dark:border-white/10 dark:bg-neutral-900"
        >
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------- Cards ---------- */

function RailCard({ item }: { item: CaseItem }) {
  return (
    <CardWrapper item={item} outerClass="min-w-[86%] snap-center sm:min-w-[70%]">
      <Media item={item} ratioClass="aspect-[16/10]" />
    </CardWrapper>
  );
}

function MosaicCard({
  item,
  className = "",
}: {
  item: CaseItem;
  className?: string;
}) {
  return (
    <CardWrapper item={item} outerClass={className}>
      <Media item={item} ratioClass="absolute inset-0" fill />
    </CardWrapper>
  );
}

function CardWrapper({
  item,
  children,
  outerClass = "",
}: {
  item: CaseItem;
  children: React.ReactNode;
  outerClass?: string;
}) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    item.href ? (
      <a
        href={item.href}
        className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-neutral-900 ${outerClass}`}
        aria-label={item.title}
      >
        {children}
      </a>
    ) : (
      <div
        className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-neutral-900 ${outerClass}`}
      >
        {children}
      </div>
    );

  return (
    <Wrapper>
      {/* accent edge (no gradient ring) */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-1 ${item.accent ?? "bg-neutral-800"}`}
      />

      {children}

      {/* content strip */}
      <div className="relative z-10 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-tight">{item.title}</h3>
          {item.metric && (
            <span className="shrink-0 -rotate-2 rounded-md bg-black/80 px-2 py-0.5 text-xs font-semibold text-white shadow-sm backdrop-blur dark:bg-white/15 dark:text-white">
              {item.metric}
            </span>
          )}
        </div>

        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          {item.blurb}
        </p>

        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 px-2 py-0.5 text-[11px] font-medium text-neutral-700 dark:border-white/10 dark:text-neutral-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {item.href && (
          <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 opacity-0 transition group-hover:opacity-100 dark:text-white">
            View case
            <ArrowUpRight className="h-4 w-4" />
          </div>
        )}
      </div>

      {/* subtle inner ring on hover (no gradient) */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-inset transition group-hover:ring-black/5 dark:group-hover:ring-white/10" />
    </Wrapper>
  );
}

function Media({
  item,
  ratioClass,
  fill = false,
}: {
  item: CaseItem;
  ratioClass: string;
  fill?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${fill ? "" : ratioClass} ${
        fill ? ratioClass : ""
      }`}
    >
      {/* image/video */}
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
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
        />
      )}

      {/* skeleton */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-neutral-200 dark:bg-neutral-800" />
      )}

      {/* shine sweep */}
      <div
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100"
      />
      {/* bottom fade for legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
    </div>
  );
}
