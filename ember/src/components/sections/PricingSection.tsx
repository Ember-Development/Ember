// src/components/sections/PricingSection.tsx
import { Check, ArrowUpRight, Star } from "lucide-react";

type Tier = {
  name: string;
  price: string;
  points: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
  accent?: string; // tailwind color class, e.g. "bg-amber-500"
  note?: string;
};

const TIERS: Tier[] = [
  {
    name: "Website Build",
    price: "from $5k",
    points: ["React + Tailwind", "Up to 7 pages", "CMS + CI/CD", "1 mo support"],
    cta: "/pricing#website",
    accent: "bg-amber-500",
  },
  {
    name: "App Maintenance",
    price: "$2.5k/mo",
    points: ["Up to 40 hrs", "Bugs & updates", "Release notes", "Priority support"],
    cta: "/pricing#maintenance",
    featured: true,
    badge: "Most popular",
    accent: "bg-indigo-500",
    note: "Cancel anytime. Overage billed hourly.",
  },
  {
    name: "Infra & DevOps",
    price: "from $7.5k",
    points: ["IaC setup", "Pipelines", "Observability", "Handoff playbooks"],
    cta: "/pricing#infra",
    accent: "bg-emerald-500",
  },
];

export default function PricingSection({
  tiers = TIERS,
  title = "Pricing",
  subtitle = "Fixed packages or time & materials — clear, flexible, predictable.",
}: {
  tiers?: Tier[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16" id="pricing">
      <h2 className="text-center text-3xl font-bold tracking-tight">{title}</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-600 dark:text-neutral-400">
        {subtitle}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <PricingCard key={t.name} tier={t} />
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-neutral-500">
        Need something bespoke? <a href="/ember/contact" className="underline">Get a custom quote</a>.
      </p>
    </section>
  );
}

function PricingCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`group relative rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/70
      ${tier.featured ? "outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10" : ""}`}
    >
      {/* thin accent bar */}
      <div className={`absolute left-6 top-0 h-1.5 w-12 -translate-y-1/2 rounded-full ${tier.accent ?? "bg-neutral-700"}`} />

      {/* badge */}
      {tier.badge && (
        <div className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white shadow dark:bg-white dark:text-black">
          <Star className="h-3.5 w-3.5" />
          {tier.badge}
        </div>
      )}

      <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {tier.name}
      </div>
      <div className="mt-2 text-3xl font-bold">{tier.price}</div>

      <ul className="mt-4 space-y-2">
        {tier.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <Check className="mt-0.5 h-4 w-4 text-emerald-500" />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <a
        href={tier.cta}
        className={`mt-6 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
          tier.featured
            ? "bg-black text-white shadow hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
            : "border border-black/10 bg-white text-gray-900 shadow-sm hover:bg-white/90 dark:border-white/10 dark:bg-white/10 dark:text-white"
        }`}
      >
        Get details
        <ArrowUpRight className="h-4 w-4" />
      </a>

      {tier.note && (
        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">{tier.note}</p>
      )}

      {/* subtle inner highlight on hover (no gradients visible, just a soft sheen) */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
           style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)" }} />
    </div>
  );
}
