import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";
import HeroFX from "./decor/HeroFX";

export default function SplineSplitHero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-white">
      {/* Gold glow at top */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-80 opacity-80"
        style={{
          background:
            "radial-gradient(circle at top, rgba(212,175,55,0.12), transparent 70%)",
        }}
      />

      {/* Background Spline */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/y7jaQrzIdbGhqulK/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
          aria-hidden
        />
        {/* white fade mask to keep text crisp */}
        <div
          className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent"
          aria-hidden
        />
      </div>

      {/* Optional FX layer */}
      <HeroFX />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/70 px-4 py-1 shadow-sm backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
          <span className="text-xs font-medium tracking-[0.16em] text-neutral-600 uppercase">
            Ember • Web & Mobile
          </span>
        </div>

        <h1 className="mt-8 text-4xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
          Build fast.{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] to-black bg-clip-text text-transparent">
            Ship faster.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
          Web &amp; mobile apps with Expo, DevOps that doesn't break, and
          maintenance you can rely on.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/ember/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-semibold text-black shadow-md shadow-[rgba(0,0,0,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get a quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="/ember/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 transition-all hover:text-[var(--color-primary)]"
          >
            See our work
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
          </a>
        </div>
      </div>
    </section>
  );
}
