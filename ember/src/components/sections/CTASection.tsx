export default function CTABand() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-white to-neutral-50 p-8 text-center shadow-sm dark:border-white/10 dark:from-neutral-900 dark:to-neutral-900/80">
        <h3 className="text-2xl font-semibold">Ready to ship faster?</h3>
        <p className="mt-2 text-neutral-600">
          Tell us about your project. We’ll propose scope, timeline, and cost.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <a
            href="/ember/contact"
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Get a quote
          </a>
          <a
            href="/ember/work"
            className="rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/90 dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}
