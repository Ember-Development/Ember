const stats = [
  { k: "20+", v: "Apps shipped" },
  { k: "4–6 wks", v: "Typical website" },
  { k: "99.9%", v: "Infra uptime" },
  { k: "24h", v: "Avg. response" },
];

export default function StatsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-black/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-neutral-900/60 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.v}>
            <div className="text-2xl font-bold">{s.k}</div>
            <div className="mt-1 text-sm text-neutral-600">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
