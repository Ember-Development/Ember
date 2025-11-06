import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How do we start a project?", a: "Short discovery → proposal & SOW → kickoff after deposit." },
  { q: "What’s your pricing model?", a: "Fixed for defined scopes; retainers/T&M for ongoing work." },
  { q: "Who owns the code?", a: "You do. Repos in your org or transferred at handoff." },
  { q: "What tech do you use?", a: "Vite/React/Tailwind, Expo/React Native, IaC + CI/CD." },
  { q: "Post-launch support?", a: "30 days included on fixed scopes; retainers after." }
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-center text-3xl font-bold tracking-tight">FAQ</h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-neutral-600 dark:text-neutral-300">
        Quick answers about scope, timelines, and how we work.
      </p>

      <div className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white/70 backdrop-blur dark:divide-white/10 dark:border-white/10 dark:bg-neutral-900/60">
        {faqs.map(({ q, a }, i) => (
          <details key={i} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
              <span className="font-medium">{q}</span>
              <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:-rotate-180" />
            </summary>
            <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              {a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
