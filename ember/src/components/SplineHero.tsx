import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function SplineSplitHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
        {/* Left: copy */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <span className="mb-3 inline-flex rounded-full border border-neutral-200 bg-white/60 px-3 py-1 text-xs font-medium text-neutral-600 backdrop-blur">
            Ember • Web & Mobile
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-balance text-neutral-900 md:text-6xl">
            Build fast.
            <br /> Ship faster.
          </h1>

          <p className="mt-4 flex max-w-md items-center justify-center text-center text-pretty text-neutral-600 md:text-lg">
            Web &amp; mobile apps with Expo, DevOps that doesn’t break, and
            maintenance you can rely on.
          </p>

          <div className="item-center mt-6 flex justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Get a quote <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/work"
              className="inline-flex items-center rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              See our work
            </a>
          </div>
        </div>

        {/* Right: Spline canvas */}
        <div className="relative h-full w-full">
          {/* subtle glow */}
          <div className="absolute -top-24 -right-24 h-full w-full rounded-full blur-2xl md:h-[420px]" />
          {/* canvas with soft left fade so text is crisp */}
          <div
            className="absolute inset-0"
            style={{
              maskImage:
                "linear-gradient(to left, black 70%, rgba(0,0,0,0.85) 80%, transparent 98%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 70%, rgba(0,0,0,0.85) 80%, transparent 98%)",
            }}
          >
            <Spline
              scene="https://prod.spline.design/WkSDEC4ujn5QAu6R/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
              aria-hidden
            />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
