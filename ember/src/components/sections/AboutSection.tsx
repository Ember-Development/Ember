export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: Copy */}
        <div className="flex flex-col justify-center">
          <div className="mb-5 h-0.5 w-12 rounded-full bg-[var(--color-primary)]" />
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            About{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-black bg-clip-text text-transparent">
              Ember
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-base">
            Ember is a product engineering studio focused on modern web and
            mobile applications. We partner with sports programs, media brands,
            and mission-driven organizations to design, build, and scale digital
            products that actually get used.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-base">
            From first prototype to long-term support, we cover the full
            lifecycle — product thinking, UX/UI, engineering, DevOps, and
            ongoing iteration. Clients work directly with the people shipping
            their product, not layers of account management.
          </p>

          {/* Value Props */}
          <div className="mt-8 space-y-4">
            {[
              {
                title: "Delivery You Can See",
                desc: "Weekly demos, transparent boards, and CI/CD so progress is visible and shippable at all times.",
              },
              {
                title: "Straightforward to Work With",
                desc: "Clear scopes, honest timelines, and communication in plain language — no buzzword soup.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-2xl border border-black/5 bg-neutral-50 p-4"
              >
                <div className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-primary)]" />
                <div>
                  <div className="text-sm font-semibold text-neutral-900">
                    {item.title}
                  </div>
                  <div className="mt-0.5 text-sm text-neutral-600">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Stats + Info */}
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10+", label: "Projects & Features Shipped" },
              { value: "5+", label: "Active Organizations" },
              { value: "98", label: "Lighthouse Score (Best Case)" },
              { value: "<24h", label: "Avg. Client Response Time" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-black/[0.06] bg-white/80 p-5 text-center shadow-sm backdrop-blur-md"
              >
                <div className="text-2xl font-semibold text-neutral-900">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-neutral-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-md">
            <div className="mb-4 text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase">
              Core Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Expo",
                "React Native",
                "Tailwind",
                "Node.js",
                "Python",
                "PostgreSQL",
                "Prisma",
                "AWS",
                "Vercel",
                "GitHub Actions",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black/10 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Quote/Callout */}
          <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">
            <p className="text-sm leading-relaxed text-neutral-700 italic">
              “Our goal is simple: ship reliable software that feels great to
              use, and be the most responsive technical partner our clients work
              with.”
            </p>
            <div className="mt-3 text-xs font-medium text-neutral-600">
              — Ember Team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
