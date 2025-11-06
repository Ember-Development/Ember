import { Code2, Smartphone, ServerCog, Wrench } from "lucide-react";

const items = [
  { icon: Code2, label: "Web Apps" },
  { icon: Smartphone, label: "Mobile (Expo)" },
  { icon: ServerCog, label: "Infra & DevOps" },
  { icon: Wrench, label: "Maintenance" }
];

export default function FeatureGlance() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="group rounded-2xl border border-black/10 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-neutral-900"
          >
            <Icon className="mx-auto h-5 w-5 transition group-hover:scale-110" />
            <div className="mt-2 text-sm font-medium">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
