# Theme Quick Reference

## 🎨 Colors

### In Tailwind Classes

```jsx
// Text colors
className = "text-[var(--color-text-primary)]"; // White
className = "text-[var(--color-text-secondary)]"; // Light gray
className = "text-[var(--color-text-muted)]"; // Muted gray

// Background colors
className = "bg-[var(--color-surface)]"; // Glass card background
className = "bg-[var(--color-primary)]"; // Gold

// Borders
className = "border-[var(--color-surface-border)]"; // Gold tint border
className = "border-[var(--color-primary)]"; // Solid gold border
```

### Gold Palette

Use directly in Tailwind or via CSS:

- `--color-gold-400` - `#fbbf24` (Light gold, hover states)
- `--color-gold-500` - `#f59e0b` (Primary gold)
- `--color-gold-600` - `#d97706` (Dark gold)

## 🧩 Utility Classes

### Text Effects

```jsx
<h1 className="text-gold-gradient">Heading</h1>
```

### Buttons

```jsx
// Primary gold button
<button className="btn-gold">Click me</button>

// Outline button
<button className="btn-gold-outline">Learn more</button>
```

### Cards

```jsx
// Glass morphism card with hover effects
<div className="glass-card p-6">Content</div>

// Simple hover effect
<div className="card-hover">Content</div>
```

### Layout

```jsx
// Section container (max-width + padding)
<div className="section-container">Content</div>

// Accent line
<div className="accent-line w-24" />
```

### Effects

```jsx
// Gold glow shadow
<div className="gold-glow">Content</div>
```

## 📏 Spacing Scale

```jsx
className = "p-4"; // 1rem (16px)
className = "p-6"; // 1.5rem (24px)
className = "p-8"; // 2rem (32px)
className = "p-12"; // 3rem (48px)

className = "mb-4"; // margin-bottom: 1rem
className = "mt-16"; // margin-top: 4rem
```

## 🎭 Common Patterns

### Hero Section

```jsx
<div className="section-container text-center">
  <h1 className="mb-4 text-6xl font-bold">
    <span className="text-gold-gradient">Title</span>
  </h1>
  <p className="text-xl text-[var(--color-text-secondary)]">Subtitle</p>
  <div className="accent-line mx-auto mt-6 w-24" />
</div>
```

### Feature Card

```jsx
<div className="glass-card p-6">
  <div className="gold-glow mb-4 h-12 w-12 rounded-full bg-[var(--color-primary)]">
    {/* Icon */}
  </div>
  <h3 className="mb-2 text-xl font-semibold text-[var(--color-text-primary)]">
    Title
  </h3>
  <p className="text-[var(--color-text-secondary)]">Description</p>
</div>
```

### Button Group

```jsx
<div className="flex gap-4">
  <button className="btn-gold">Primary</button>
  <button className="btn-gold-outline">Secondary</button>
</div>
```

### Card Grid

```jsx
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
  <div className="glass-card p-6">{/* Card 1 */}</div>
  <div className="glass-card p-6">{/* Card 2 */}</div>
  <div className="glass-card p-6">{/* Card 3 */}</div>
</div>
```

## 🎯 Typography

```jsx
// Headings
<h1 className="text-6xl font-bold text-[var(--color-text-primary)]">
<h2 className="text-4xl font-bold text-gold-gradient">
<h3 className="text-3xl font-semibold text-[var(--color-text-primary)]">

// Body text
<p className="text-xl text-[var(--color-text-secondary)]">  // Large
<p className="text-base text-[var(--color-text-secondary)]"> // Normal
<p className="text-sm text-[var(--color-text-muted)]">      // Small
```

## 🌟 Special Effects

### Gradient Background

The page background is automatically applied to `<body>`.

### Custom Gradients

```jsx
// Gold gradient (already defined)
style={{ background: 'var(--gradient-gold)' }}

// Custom radial gradient
style={{ background: 'var(--gradient-gold-radial)' }}
```

### Shadows

```jsx
className = "shadow-[var(--shadow-sm)]"; // Subtle
className = "shadow-[var(--shadow-md)]"; // Medium
className = "shadow-[var(--shadow-lg)]"; // Large
className = "shadow-[var(--shadow-xl)]"; // Extra large
className = "shadow-[var(--shadow-gold)]"; // Gold glow
```

## 🔗 Resources

- Full documentation: [THEME_GUIDE.md](./THEME_GUIDE.md)
- Theme demo: Visit `/theme-demo` in your browser
- Component examples: `src/components/ThemeDemo.tsx`
