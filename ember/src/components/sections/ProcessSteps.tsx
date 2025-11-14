import { useEffect, useRef, useState } from "react";
import { ClipboardCheck, PenTool, Code2, Rocket } from "lucide-react";

type Step = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  accent: string; // tailwind gradient class
};

const steps: Step[] = [
  {
    icon: ClipboardCheck,
    title: "Discover",
    desc: "Goals, scope, timeline.",
    accent: "from-[#D4AF37] to-[#B8962F]",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Wireframes → hi-fi UX.",
    accent: "from-neutral-800 to-neutral-900",
  },
  {
    icon: Code2,
    title: "Build",
    desc: "React / Expo + CI/CD.",
    accent: "from-[#D4AF37] to-[#B8962F]",
  },
  {
    icon: Rocket,
    title: "Ship",
    desc: "QA, launch, support.",
    accent: "from-neutral-800 to-neutral-900",
  },
];

export default function ProcessSteps() {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative mx-auto max-w-7xl px-6 py-20">
      {/* subtle grid + connecting line (desktop) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.05)_1px,transparent_1px)] bg-[size:28px_28px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)]" />
      </div>

      <div className="mx-auto mb-5 h-0.5 w-12 rounded-full bg-[var(--color-primary)]" />
      <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
        How we work
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-neutral-600">
        A fast, transparent path from brief → launch.
      </p>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, desc, accent }, i) => (
          <div
            key={title}
            className={[
              "group relative rounded-2xl p-[1px]",
              "bg-gradient-to-b from-black/5 via-black/10 to-black/5 dark:from-white/10 dark:via-white/15 dark:to-white/10",
              "transition-transform duration-300 will-change-transform",
              "hover:-translate-y-1 hover:rotate-[0.25deg]",
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="relative rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
              {/* icon + step number */}
              <div className="relative inline-flex">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-lg ring-1 ring-white/20`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span className="absolute -top-3 -right-3 grid h-6 w-6 place-items-center rounded-full bg-black/80 text-xs font-semibold text-white shadow dark:bg-white/90 dark:text-black">
                  {i + 1}
                </span>
                {/* subtle glow */}
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-40 blur-xl ${accent}`}
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                {desc}
              </p>

              {/* micro progress bar */}
              <div
                className={`mt-5 h-1 w-1/2 rounded-full bg-gradient-to-r ${accent} opacity-70`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
