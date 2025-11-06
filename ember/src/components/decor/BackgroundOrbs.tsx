export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute -top-20 left-10 h-56 w-56 rounded-full bg-amber-500/20 blur-3xl"
        style={{ animation: "float 10s ease-in-out infinite" }}
      />
      <div
        className="absolute top-32 right-10 h-48 w-48 rounded-full bg-rose-500/20 blur-3xl"
        style={{ animation: "float 12s 0.5s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl"
        style={{ animation: "float 14s 0.8s ease-in-out infinite" }}
      />
    </div>
  );
}
