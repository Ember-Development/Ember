export default function HeroFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 bg-neutral-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_40px]" />
    </div>
  );
}
