/**
 * Theme Demo Component
 * Showcases the gold theme with various UI elements
 */

export default function ThemeDemo() {
  return (
    <div className="section-container">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-6xl font-bold">
          <span className="text-gold-gradient">Ember</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-[var(--color-text-secondary)]">
          Experience the power of clean design with our radial gradient
          background and elegant gold accents
        </p>
        <div className="accent-line mx-auto mt-6 w-24" />
      </div>

      {/* Button Examples */}
      <div className="mb-16 flex flex-wrap justify-center gap-4">
        <button className="btn-gold">Gold Primary Button</button>
        <button className="btn-gold-outline">Gold Outline Button</button>
      </div>

      {/* Glass Cards Grid */}
      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="glass-card p-6">
          <div className="gold-glow mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]">
            <span className="text-2xl">✨</span>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-[var(--color-text-primary)]">
            Clean Design
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Modern glassmorphism with subtle gold accents for a premium feel
          </p>
        </div>

        <div className="glass-card p-6">
          <div className="gold-glow mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]">
            <span className="text-2xl">🎨</span>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-[var(--color-text-primary)]">
            Gold Palette
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Carefully crafted gold tones from light to dark for perfect contrast
          </p>
        </div>

        <div className="glass-card p-6">
          <div className="gold-glow mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-[var(--color-text-primary)]">
            Smooth Effects
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Hover effects with gold glows and smooth transitions throughout
          </p>
        </div>
      </div>

      {/* Color Palette Display */}
      <div className="glass-card p-8">
        <h2 className="mb-6 text-center text-3xl font-bold">
          <span className="text-gold-gradient">Gold Color Palette</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {[
            { name: "Gold 400", color: "#fbbf24" },
            { name: "Gold 500", color: "#f59e0b" },
            { name: "Gold 600", color: "#d97706" },
            { name: "Gold 700", color: "#b45309" },
            { name: "Gold 800", color: "#92400e" },
          ].map((item) => (
            <div key={item.name} className="text-center">
              <div
                className="card-hover mb-2 h-20 w-full rounded-lg"
                style={{ backgroundColor: item.color }}
              />
              <p className="text-sm text-[var(--color-text-secondary)]">
                {item.name}
              </p>
              <p className="font-mono text-xs text-[var(--color-text-muted)]">
                {item.color}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Typography Samples */}
      <div className="glass-card mt-8 p-8">
        <h2 className="text-gold-gradient mb-6 text-3xl font-bold">
          Typography Samples
        </h2>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-[var(--color-text-primary)]">
            Heading 1 - 5xl
          </h1>
          <h2 className="text-4xl font-bold text-[var(--color-text-primary)]">
            Heading 2 - 4xl
          </h2>
          <h3 className="text-3xl font-semibold text-[var(--color-text-primary)]">
            Heading 3 - 3xl
          </h3>
          <p className="text-xl text-[var(--color-text-secondary)]">
            Body text - Large (xl) - Perfect for introductions and important
            content
          </p>
          <p className="text-base text-[var(--color-text-secondary)]">
            Body text - Base (md) - Ideal for general content and paragraphs
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            Small text - For captions and secondary information
          </p>
        </div>
      </div>
    </div>
  );
}
