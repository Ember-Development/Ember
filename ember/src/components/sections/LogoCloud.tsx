// src/components/LogoCloud.tsx
type Logo = { src: string; alt?: string; href?: string };

const DEFAULT_LOGOS: Logo[] = [
  { src: "/logos/TCS.png", alt: "Triple Crown Sports" },
  { src: "/logos/Bombers.png", alt: "Bombers Fastpitch" },
  { src: "/logos/BaseballAlliance.png", alt: "Baseball Alliance" },
  { src: "/logos/Goatnet-Logo-full-black-transparent-1024x567.png", alt: "Goatnet" },
  { src: "/logos/Chart-IQ-blue.png", alt: "ChartIQ" },
];

function LogoImg({ l, heightClass }: { l: Logo; heightClass: string }) {
  const img = (
    <img
      src={l.src}
      alt={l.alt ?? "Logo"}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      className={`${heightClass} w-auto object-contain opacity-80 grayscale transition hover:opacity-100`}
    />
  );
  return l.href ? (
    <a href={l.href} target="_blank" rel="noreferrer" className="shrink-0">
      {img}
    </a>
  ) : (
    <div className="shrink-0">{img}</div>
  );
}

export default function LogoCloud({
  items = DEFAULT_LOGOS,
  heightClass = "h-12 md:h-16",
  gapClass = "gap-16 md:gap-20 lg:gap-24",
  speedSec = 28,
}: {
  items?: Logo[];
  heightClass?: string;
  gapClass?: string;
  speedSec?: number;
}) {
  // Duplicate once so translating -50% equals exactly one full set width → seamless loop
  const track = [...items, ...items];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12" aria-label="Trusted by">
      <p className="text-center text-sm text-neutral-500">
        Trusted by teams big &amp; small
      </p>

      <div
        className="
          relative mt-6 overflow-hidden
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          dark:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]
        "
      >
        <ul
          className={`
            flex w-[200%] items-center ${gapClass}
            motion-safe:animate-marquee-x motion-reduce:animate-none
            hover:[animation-play-state:paused]
            will-change-transform
          `}
          style={{ ["--marquee-duration" as any]: `${speedSec}s` }}
        >
          {track.map((l, i) => (
            <li
              key={`${l.src}-${i}`}
              className="shrink-0"
              aria-hidden={i >= items.length ? true : undefined}
            >
              <LogoImg l={l} heightClass={heightClass} />
            </li>
          ))}
        </ul>
      </div>

      {/* Reduced-motion fallback */}
      <div className="mx-auto mt-6 hidden max-w-5xl grid-cols-2 place-items-center gap-8 motion-reduce:grid sm:grid-cols-3 md:grid-cols-5">
        {items.map((l) => (
          <img
            key={l.src}
            src={l.src}
            alt={l.alt ?? "Logo"}
            className={`${heightClass} w-auto object-contain opacity-80 grayscale`}
          />
        ))}
      </div>
    </section>
  );
}
