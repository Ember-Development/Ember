import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";
import HeroFX from "./decor/HeroFX";

export default function SplineSplitHero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-white">
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
        <span className="mb-3 inline-flex rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 backdrop-blur">
          Ember • Web & Mobile
        </span>

        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-6xl">
          Build fast.
          <br /> Ship faster.
        </h1>

        <p className="mt-4 max-w-md text-pretty text-neutral-600 md:text-lg">
          Web &amp; mobile apps with Expo, DevOps that doesn’t break, and
          maintenance you can rely on.
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="/ember/contact"
            className="inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Get a quote <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="/ember/work"
            className="inline-flex items-center rounded-lg border border-neutral-300 bg-white/70 px-4 py-2 text-sm font-medium text-neutral-900 backdrop-blur hover:bg-white/90"
          >
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}
