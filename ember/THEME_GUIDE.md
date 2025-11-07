# Ember Theme Guide

## Overview

Ember uses a sophisticated dark theme with radial gradient background and elegant gold accents. The theme is built on CSS custom properties (variables) and works seamlessly with Tailwind CSS v4.

## Background

The primary background is a radial gradient from gray to black:

```css
background: radial-gradient(
  circle,
  rgba(71, 71, 71, 1) 0%,
  rgba(0, 0, 0, 1) 100%
);
```

This creates a soft, professional look that draws attention to the center of the viewport.

## Color Palette

### Gold Tones (Primary Accents)

| Variable           | Hex       | Usage                          |
| ------------------ | --------- | ------------------------------ |
| `--color-gold-50`  | `#fffbeb` | Lightest gold, backgrounds     |
| `--color-gold-100` | `#fef3c7` | Very light gold                |
| `--color-gold-200` | `#fde68a` | Light gold                     |
| `--color-gold-300` | `#fcd34d` | Medium-light gold              |
| `--color-gold-400` | `#fbbf24` | Medium gold, hover states      |
| `--color-gold-500` | `#f59e0b` | **Primary gold** - main accent |
| `--color-gold-600` | `#d97706` | Dark gold                      |
| `--color-gold-700` | `#b45309` | Darker gold                    |
| `--color-gold-800` | `#92400e` | Very dark gold                 |
| `--color-gold-900` | `#78350f` | Darkest gold                   |

### Primary Colors

- `--color-primary`: Main accent color (gold-500)
- `--color-primary-hover`: Hover state (gold-400)
- `--color-primary-dark`: Dark variant (gold-600)

### Text Colors

- `--color-text-primary`: `#ffffff` - Main text, headings
- `--color-text-secondary`: `#d1d5db` - Body text, descriptions
- `--color-text-muted`: `#9ca3af` - Captions, secondary info

### Surface Colors (Cards/Panels)

- `--color-surface`: `rgba(71, 71, 71, 0.5)` - Glass card background
- `--color-surface-hover`: `rgba(71, 71, 71, 0.7)` - Hover state
- `--color-surface-border`: `rgba(245, 158, 11, 0.2)` - Gold border tint

## Gradients

### Pre-defined Gradients

```css
--gradient-primary: radial-gradient(
  circle,
  rgba(71, 71, 71, 1) 0%,
  rgba(0, 0, 0, 1) 100%
);
--gradient-gold: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
--gradient-gold-radial: radial-gradient(
  circle,
  rgba(251, 191, 36, 0.2) 0%,
  rgba(217, 119, 6, 0) 70%
);
```

## Utility Classes

### Text Gold Gradient

```jsx
<h1 className="text-gold-gradient">Ember</h1>
```

Creates a beautiful gradient text effect with gold colors.

### Glass Card

```jsx
<div className="glass-card p-6">{/* Content */}</div>
```

Creates a glassmorphic card with:

- Semi-transparent background
- Backdrop blur
- Gold border
- Hover effects

### Buttons

#### Gold Primary Button

```jsx
<button className="btn-gold">Click me</button>
```

- Gold gradient background
- Black text
- Gold glow on hover
- Lift effect on hover

#### Gold Outline Button

```jsx
<button className="btn-gold-outline">Learn more</button>
```

- Transparent background
- Gold border
- Fills with gold on hover

### Other Utilities

#### Accent Line

```jsx
<div className="accent-line w-24" />
```

Creates a 3px gold gradient line, useful for visual separation.

#### Gold Glow

```jsx
<div className="gold-glow">{/* Content with gold shadow */}</div>
```

#### Card Hover Effect

```jsx
<div className="card-hover">{/* Lifts and glows on hover */}</div>
```

#### Section Container

```jsx
<div className="section-container">
  {/* Max-width 1280px, centered, with padding */}
</div>
```

## Using CSS Variables in Tailwind

You can use the CSS variables directly in your Tailwind classes:

```jsx
// Background colors
<div className="bg-[var(--color-surface)]">

// Text colors
<p className="text-[var(--color-text-primary)]">

// Borders
<div className="border border-[var(--color-surface-border)]">

// Custom values
<div className="shadow-[var(--shadow-gold)]">
```

## Shadows

The theme includes pre-defined shadows with gold tints:

- `--shadow-sm`: Subtle shadow
- `--shadow-md`: Medium shadow with gold tint
- `--shadow-lg`: Large shadow with gold tint
- `--shadow-xl`: Extra large shadow with gold tint
- `--shadow-gold`: Pure gold glow effect

## Best Practices

### 1. Contrast

Always ensure sufficient contrast between text and backgrounds:

- Use `--color-text-primary` for headings on dark backgrounds
- Use `--color-text-secondary` for body text
- Use `--color-text-muted` for less important information

### 2. Gold Accents

Use gold sparingly for maximum impact:

- Primary CTAs and buttons
- Active states
- Important headings
- Accent elements

### 3. Glass Cards

Use `.glass-card` for content sections that need to stand out from the background while maintaining visual hierarchy.

### 4. Hover States

All interactive elements should have clear hover states. The gold glow effect is great for this.

## Component Examples

### Hero Section

```jsx
<div className="section-container text-center">
  <h1 className="mb-4 text-6xl font-bold">
    <span className="text-gold-gradient">Ember</span>
  </h1>
  <p className="text-xl text-[var(--color-text-secondary)]">
    Your tagline here
  </p>
  <div className="accent-line mx-auto mt-6 w-24" />
</div>
```

### Feature Card

```jsx
<div className="glass-card p-6">
  <div className="gold-glow mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]">
    <Icon />
  </div>
  <h3 className="mb-2 text-xl font-semibold text-[var(--color-text-primary)]">
    Feature Title
  </h3>
  <p className="text-[var(--color-text-secondary)]">Feature description</p>
</div>
```

### CTA Section

```jsx
<div className="glass-card p-12 text-center">
  <h2 className="text-gold-gradient mb-4 text-4xl font-bold">
    Ready to get started?
  </h2>
  <p className="mb-8 text-[var(--color-text-secondary)]">
    Join us today and experience the difference
  </p>
  <button className="btn-gold">Get Started</button>
</div>
```

## Customization

To customize the theme, edit `src/index.css`:

1. **Change gold tones**: Modify the `--color-gold-*` variables
2. **Adjust background**: Update the `radial-gradient` values in the `body` style
3. **Add new shadows**: Define new shadow variables in `:root`
4. **Create new gradients**: Add gradients to `:root` for reuse

## Demo Component

A complete theme demo is available at `src/components/ThemeDemo.tsx`. Import and render this component to see all theme features in action:

```jsx
import ThemeDemo from "./components/ThemeDemo";

// In your page
<ThemeDemo />;
```

This showcases:

- Typography scale
- Color palette
- Button variants
- Glass cards
- Gold effects
- Hover states

## Support

For questions or suggestions about the theme, please contact the development team.
