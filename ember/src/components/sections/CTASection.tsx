import { useState } from "react";
import ContactModal from "../ContactModal";

export default function CTABand() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl border border-black/[0.04] bg-white p-10 text-center shadow-[0_18px_50px_rgba(15,15,15,0.04)] backdrop-blur-md">
          <div className="mx-auto mb-5 h-0.5 w-12 rounded-full bg-[var(--color-primary)]" />
          <h3 className="text-2xl font-semibold">Ready to ship faster?</h3>
          <p className="mt-3 leading-relaxed text-neutral-600">
            Tell us about your project. We'll propose scope, timeline, and cost.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-semibold text-black shadow-md shadow-[rgba(0,0,0,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get a quote
            </button>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:border-[var(--color-primary)]/60"
            >
              See our work
            </a>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService="General Inquiry"
      />
    </>
  );
}
