import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import "../../index.css";
import "../../App.css";

export default function BomberCollectiveHome() {
  const products = [
    {
      number: "01",
      name: "NIL",
      description:
        "Name, Image, and Likeness platform empowering student athletes to monetize their personal brand and maximize opportunities.",
      link: "#", // Replace with actual NIL product link
      external: true,
    },
    {
      number: "02",
      name: "Ember",
      description:
        "Professional development and digital solutions delivering cutting-edge technology for modern businesses.",
      link: "/ember",
      external: false,
    },
    {
      number: "03",
      name: "Recruiting",
      description:
        "Streamlined recruiting and talent acquisition platform connecting top talent with exceptional opportunities.",
      link: "#", // Replace with actual Recruiting product link
      external: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Pulse Wave Background Effect */}
        <div className="absolute inset-0 -z-10">
          {/* Main Pulse Wave */}
          <div
            className="absolute top-0 left-1/2 h-[600px] w-[1400px] -translate-x-1/2 opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse, rgba(255, 195, 11, 0.2) 0%, rgba(230, 165, 0, 0.1) 50%, transparent 100%)",
              borderRadius: "50%",
            }}
          />

          {/* Secondary Pulse Wave */}
          <div
            className="absolute top-20 left-1/2 h-[500px] w-[1200px] -translate-x-1/2 opacity-60 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse, rgba(255, 216, 82, 0.15) 0%, rgba(255, 195, 11, 0.08) 60%, transparent 100%)",
              borderRadius: "50%",
            }}
          />

          {/* Accent Glow */}
          <div
            className="absolute top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-[80px]"
            style={{
              background: "rgba(255, 195, 11, 0.1)",
            }}
          />
        </div>

        {/* Decorative Gold Circle - Top Right */}
        <div className="absolute top-20 right-20 hidden h-3 w-3 rounded-full bg-[var(--color-primary)] lg:block" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:-mt-40 lg:grid-cols-2">
          {/* Left Content */}
          <Reveal>
            <div className="space-y-8">
              {/* Gold Accent Line */}
              <div className="h-0.5 w-16 bg-gradient-to-r from-[var(--color-primary)] to-transparent" />

              {/* Main Headline */}
              <h1 className="text-5xl leading-tight font-bold text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
                Now it's{" "}
                <span className="text-gold-gradient">Bomber Collective</span>
              </h1>

              {/* Sub-headline */}
              <p className="max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl">
                Innovative solutions across sports, development, and
                recruiting—delivering excellence in every aspect of our work
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-6">
                <button className="btn-gold px-8 py-3 text-base">
                  Explore More
                </button>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-base font-medium text-[var(--color-text-primary)] transition-all hover:gap-3"
                >
                  Contact Us
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Visual */}
          <Reveal>
            <div className="relative hidden lg:flex lg:items-center lg:justify-center">
              <div className="relative h-[500px] w-[500px]">
                {/* Interstellar Vector Rings */}

                {/* Outer Ring - Dashed */}
                <div className="absolute inset-0 animate-[spin_40s_linear_infinite] rounded-full border-2 border-dashed border-[var(--color-primary)] opacity-20" />

                {/* Second Ring - Solid */}
                <div className="absolute inset-8 animate-[spin_30s_linear_infinite_reverse] rounded-full border border-[var(--color-primary)]/40" />

                {/* Third Ring - Dotted */}
                <div className="absolute inset-16 animate-[spin_35s_linear_infinite] rounded-full border-2 border-dotted border-[var(--color-primary)]/25" />

                {/* Logo Container with Dark Core */}
                <div className="absolute inset-24 flex items-center justify-center rounded-full bg-gradient-to-br from-[#3a3a3a] to-[#1a1a1a] shadow-2xl">
                  {/* Inner Vector Ring */}
                  <div className="absolute inset-8 rounded-full border border-[var(--color-primary)]/30" />

                  {/* Bomber Collective Logo */}
                  <div className="relative z-10 flex items-center justify-center p-8">
                    <img
                      src="https://res.cloudinary.com/duwgrvngn/image/upload/v1762464403/Bomber_Collective-removebg-preview_lwlw2q.png"
                      alt="Bomber Collective"
                      className="h-auto w-full max-w-[200px] object-contain"
                    />
                  </div>

                  {/* Gold Glow Accents */}
                  <div className="absolute top-8 right-8 h-16 w-16 rounded-full bg-[var(--color-primary)] opacity-20 blur-2xl" />
                  <div className="absolute bottom-8 left-8 h-12 w-12 rounded-full bg-[var(--color-primary)] opacity-15 blur-xl" />
                </div>

                {/* Orbital Dots */}
                <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--color-primary)] opacity-60" />
                <div className="absolute top-1/2 right-0 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--color-primary)] opacity-60" />
                <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--color-primary)] opacity-60" />
                <div className="absolute top-1/2 left-0 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--color-primary)] opacity-60" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Partners Section - Below Both Columns */}
        <div className="absolute right-0 bottom-22 left-0 z-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="mb-8 text-xs tracking-wider text-[var(--color-text-muted)] uppercase">
                Trusted by leading organizations
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                {[
                  {
                    name: "Baseball Alliance",
                    logo: "/logos/BaseballAlliance.png",
                  },
                  { name: "Bombers", logo: "/logos/Bombers.png" },
                  { name: "Chart IQ", logo: "/logos/Chart-IQ-blue.png" },
                  {
                    name: "Goatnet",
                    logo: "/logos/Goatnet-Logo-full-black-transparent-1024x567.png",
                  },
                  { name: "TCS", logo: "/logos/TCS.png" },
                ].map((partner) => (
                  <div
                    key={partner.name}
                    className="opacity-70 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Bottom Left */}
        <div className="absolute bottom-24 left-8 hidden lg:block">
          <div className="flex flex-col items-center gap-3">
            <span className="font-sans text-sm font-medium tracking-wider text-[var(--color-text-secondary)] uppercase [writing-mode:vertical-lr]">
              scroll down
            </span>
            <div className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="">
        <div className="mx-auto">
          <div className="grid w-full auto-rows-fr md:grid-cols-3">
            {products.map((product, idx) => (
              <Reveal key={product.name}>
                <div
                  className={`group relative flex h-full transition-all duration-500 ${
                    idx === 1 ? "md:-translate-y-2" : ""
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Gradient Card Container */}
                  <div className="flex w-full gap-6 rounded-3xl bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] p-8 pb-10 shadow-xl transition-all duration-300 hover:shadow-[var(--color-primary)]/10 hover:shadow-2xl">
                    {/* Gold Number Badge - Left Side */}
                    <div className="flex-shrink-0">
                      <span className="text-gold-gradient text-6xl leading-none font-bold lg:text-7xl">
                        {product.number}
                      </span>
                    </div>

                    {/* Content Column - Right Side */}
                    <div className="flex flex-1 flex-col">
                      {/* Title */}
                      <h3 className="mb-4 text-2xl font-bold text-[var(--color-text-primary)] lg:text-3xl">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="mb-6 flex-1 text-base leading-relaxed text-[var(--color-text-secondary)]">
                        {product.description}
                      </p>

                      {/* Action Link */}
                      <div className="mt-auto">
                        {product.external ? (
                          <a
                            href={product.link}
                            className="group/link inline-flex items-center gap-2 text-[var(--color-primary)] transition-all hover:gap-3"
                          >
                            <span className="font-medium">Learn More</span>
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </a>
                        ) : (
                          <Link
                            to={product.link}
                            className="group/link inline-flex items-center gap-2 text-[var(--color-primary)] transition-all hover:gap-3"
                          >
                            <span className="font-medium">Explore</span>
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="glass-card p-10 text-center md:p-16">
              <div className="accent-line mx-auto mb-8 w-20" />
              <h2 className="text-gold-gradient mb-8 text-4xl font-bold md:text-5xl">
                About Bomber Collective
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
                A parent company driving innovation across multiple
                industries—empowering student athletes, delivering cutting-edge
                development solutions, and revolutionizing recruiting processes.
              </p>
              <p className="mx-auto max-w-xl text-base text-[var(--color-text-muted)]">
                Each product is designed with purpose, built with precision, and
                delivered with passion.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
