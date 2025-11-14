import { useRef, useState, type MouseEvent } from "react";
import {
  Code2,
  Smartphone,
  Wrench,
  ServerCog,
  Sparkles,
  ChevronRight,
} from "lucide-react";

function Line({ w }: { w: string }) {
  return (
    <div
      className="h-3 rounded-[4px] bg-gradient-to-r from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700"
      style={{ width: w }}
    />
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-black/10 bg-white/80 px-2 py-1 text-[10px] font-semibold shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10">
      {children}
    </div>
  );
}

function BentoCard({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={[
        "group relative overflow-hidden rounded-2xl border",
        "border-black/10 bg-white/70 shadow-sm backdrop-blur",
        "transition-transform duration-300 hover:-translate-y-1 hover:shadow-md",
        "dark:border-white/10 dark:bg-white/[0.04]",
        className,
      ].join(" ")}
    >
      {/* cursor glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(212,175,55,0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full p-6">{children}</div>
    </div>
  );
}

const chip = (label: string) => (
  <span
    key={label}
    className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
  >
    {label}
  </span>
);

export default function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20" id="services">
      <div className="mx-auto mb-5 h-0.5 w-12 rounded-full bg-[var(--color-primary)]" />
      <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
        What we do
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-neutral-600">
        Websites, mobile apps, maintenance, and DevOps — built to move fast
        without breaking.
      </p>

      {/* BENTO GRID */}
      <div className="mt-12 grid auto-rows-[14rem] grid-cols-1 gap-5 md:grid-cols-12">
        {/* Hero Tile */}
        <BentoCard className="relative overflow-hidden md:col-span-7 md:row-span-2">
          {/* ambient background */}
          <div className="pointer-events-none absolute inset-0 [background-size:18px_18px] [background:radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] dark:[background:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)]" />
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-black/15 blur-3xl" />

          <div className="relative z-10 grid h-full gap-6 p-4 md:grid-cols-2 md:p-6">
            {/* LEFT: copy + micro-interactions */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#B8962F]">
                  <Sparkles className="h-3.5 w-3.5" />
                  End-to-end delivery
                </div>

                <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
                  Design → Build → Launch
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-neutral-600">
                  One team for product, engineering, and release. Review working
                  builds weekly — not decks.
                </p>

                {/* tiny pipeline with animated progress */}
                {/* <div className="mt-4 flex items-center gap-3">
                {["Discover", "Design", "Build", "Ship"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="rounded-md border border-black/10 bg-white px-2 py-1 text-[11px] font-medium shadow-sm dark:border-white/10 dark:bg-white/10">
                      {step}
                    </div>
                    {i < 3 && (
                      <div className="relative h-1 w-8 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                        <span className="absolute inset-y-0 left-[-50%] w-1/2 animate-[progress_1.6s_linear_infinite] rounded-full bg-violet-500/70" />
                      </div>
                    )}
                  </div>
                ))}
              </div> */}

                {/* tech chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {["React", "Expo", "TypeScript", "Tailwind", "CI/CD"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 bg-white/70 px-2 py-0.5 text-[11px] font-medium backdrop-blur dark:border-white/10 dark:bg-white/10"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <a
                href="/ember/work"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-white"
              >
                See our work <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* RIGHT: mock window + floating badges */}
            <div className="relative">
              {/* mock window */}
              <div className="group relative h-full rounded-xl border border-black/10 bg-white/80 p-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-neutral-900/80">
                {/* window header */}
                <div className="flex items-center gap-1.5 pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                </div>

                {/* “code lines” */}
                <div className="space-y-2 text-[11px] leading-[1.2]">
                  <Line w="80%" />
                  <Line w="65%" />
                  <Line w="92%" />
                  <Line w="50%" />
                  <Line w="74%" />
                  <Line w="88%" />
                  <Line w="40%" />
                </div>

                {/* shine sweep */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />
              </div>

              {/* floating badges */}
              <div className="pointer-events-none absolute -right-2 -bottom-3 flex gap-2">
                <Badge>Expo</Badge>
                <Badge>React</Badge>
                <Badge>AWS</Badge>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Websites */}
        <BentoCard className="md:col-span-5">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8962F] text-black shadow-md">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Website Build</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Design → React + Tailwind + CMS. Fast, accessible, and easy to
              manage.
            </p>
            <div className="mt-auto flex gap-2">
              {["React", "CMS", "SEO-ready"].map(chip)}
            </div>
          </div>
        </BentoCard>

        {/* Mobile */}
        <BentoCard className="md:col-span-5">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 text-white shadow-md">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Mobile Apps</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Expo/React Native for iOS & Android. Push, auth, offline, and
              store delivery.
            </p>
            <div className="mt-auto flex gap-2">
              {["Expo", "OTA", "Stores"].map(chip)}
            </div>
          </div>
        </BentoCard>

        {/* Maintenance */}
        <BentoCard className="md:col-span-4">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8962F] text-black shadow-md">
                <Wrench className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Maintenance</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Bugs, updates, release support. Keep shipping.
            </p>
            <div className="mt-auto flex gap-2">
              {["SLA", "Analytics", "QA"].map(chip)}
            </div>
          </div>
        </BentoCard>

        {/* DevOps */}
        <BentoCard className="md:col-span-4">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 text-white shadow-md">
                <ServerCog className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Infra & DevOps</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              IaC, CI/CD, observability. Ship safer, faster.
            </p>
            <div className="mt-auto flex gap-2">
              {["Terraform", "GitHub Actions", "Monitoring"].map(chip)}
            </div>
          </div>
        </BentoCard>

        {/* Facelift */}
        <BentoCard className="md:col-span-4">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8962F] text-black shadow-md">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Site/App Facelift</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Modern UX and performance wins — without a rewrite.
            </p>
            <div className="mt-auto flex gap-2">
              {["UX polish", "Perf", "A11y"].map(chip)}
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
