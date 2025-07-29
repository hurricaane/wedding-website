# TailwindCSS v4 Wedding Website Configuration Guide

## Overview

Your TailwindCSS v4 configuration has been optimized for an elegant wedding website with an ivory, champagne, and gold color scheme. This guide covers all the enhancements and how to use them effectively.

## Key TailwindCSS v4 Features Implemented

### 1. CSS-First Configuration
- Uses `@import "tailwindcss"` instead of the old `@tailwind` directives
- Configuration is done directly in CSS using `@theme` and custom utilities
- No `tailwind.config.js` file needed

### 2. OKLCH Color Space
- All colors use the modern OKLCH color space for better consistency
- More vivid colors and better contrast ratios
- Future-proof color system

### 3. Dynamic Utility Values
- Can use any spacing value like `w-103` or `p-17` without predefinition
- More flexible than v3's fixed utility classes

## Color Palette

### Wedding Theme Colors

#### Ivory Scale
```css
ivory-50   /* oklch(0.99 0.002 85.87) - Pure ivory */
ivory-100  /* oklch(0.98 0.004 85.87) - Soft ivory */
ivory-200  /* oklch(0.96 0.008 85.87) - Light ivory */
/* ... through ivory-900 */
```

#### Champagne Scale
```css
champagne-50   /* oklch(0.95 0.015 85.87) - Lightest champagne */
champagne-300  /* oklch(0.82 0.045 85.87) - Primary champagne */
champagne-500  /* oklch(0.75 0.065 85.87) - Rich champagne */
/* ... through champagne-900 */
```

#### Gold Scale
```css
gold-50    /* oklch(0.92 0.040 95.24) - Light gold */
gold-400   /* oklch(0.75 0.120 95.24) - Warm gold */
gold-600   /* oklch(0.65 0.160 95.24) - Deep gold */
/* ... through gold-900 */
```

#### Rose Gold Scale
```css
rose-gold-50   /* oklch(0.92 0.025 75.46) - Light rose gold */
rose-gold-500  /* oklch(0.72 0.100 75.46) - Rich rose gold */
rose-gold-800  /* oklch(0.55 0.160 75.46) - Deep rose gold */
```

### Semantic Colors
- `primary` - Elegant champagne for main actions
- `secondary` - Warm gold for secondary elements
- `accent` - Rose gold for highlights
- `background` - Soft ivory background
- `foreground` - Deep charcoal text

## Typography System

### Font Families
```css
--font-serif: "Playfair Display", "Times New Roman", serif;
--font-sans: "Inter", "Helvetica Neue", sans-serif;
--font-script: "Dancing Script", cursive;
```

### Usage Classes
```html
<!-- Elegant headlines -->
<h1 class="font-serif">Wedding Title</h1>

<!-- Script accent text -->
<p class="wedding-script text-gold-500">Save the Date</p>

<!-- Body text -->
<p class="font-sans">Wedding details...</p>
```

### Typography Scale
- `h1`: 4xl/6xl, font-light, tracking-tight
- `h2`: 3xl/4xl, font-light, tracking-tight
- `h3`: 2xl/3xl, font-light, tracking-tight
- `p`: base/lg, leading-relaxed

## Custom Variants

### Wedding-Specific Variants
```html
<!-- Elegant hover effects -->
<button class="elegant-hover:bg-champagne-300">Button</button>

<!-- Group hover effects -->
<div class="group">
  <span class="group-elegant:text-gold-500">Hover parent</span>
</div>

<!-- Wedding focus styles -->
<input class="wedding-focus:ring-gold-400" />
```

## Custom Utilities

### Elegant Effects
```html
<!-- Elegant shadow -->
<div class="elegant-shadow">Card with soft shadow</div>

<!-- Gold shimmer animation -->
<div class="gold-shimmer">Shimmering gold element</div>

<!-- Champagne gradient -->
<div class="champagne-gradient">Gradient background</div>

<!-- Gentle floating animation -->
<div class="gentle-float">Floating element</div>

<!-- Fade in up animation -->
<div class="elegant-animation">Animated entrance</div>
```

## Spacing & Sizing

### Extended Spacing Scale
- `spacing-18` (4.5rem)
- `spacing-22` (5.5rem)
- `spacing-26` (6.5rem)
- `spacing-30` (7.5rem)

### Border Radius
- `rounded-sm` - Slightly rounded
- `rounded-md` - Default elegant radius
- `rounded-lg` - More rounded
- `rounded-xl` - Very rounded
- `rounded-2xl` - Maximum elegance

## Component Examples

### Hero Section
```html
<section class="bg-background py-spacing-30">
  <div class="container mx-auto px-4 text-center">
    <h1 class="wedding-script text-gold-500 elegant-animation">
      Yannick & Louise
    </h1>
    <p class="text-champagne-600 mt-6">
      We're getting married!
    </p>
    <button class="bg-champagne-300 text-champagne-900 px-8 py-4 rounded-lg elegant-hover:bg-champagne-400 elegant-shadow">
      RSVP Now
    </button>
  </div>
</section>
```

### Card Component
```html
<div class="bg-card border border-border rounded-lg p-6 elegant-shadow">
  <h3 class="text-champagne-700 mb-4">Wedding Details</h3>
  <p class="text-muted-foreground">
    Join us for our special day...
  </p>
</div>
```

### Form Elements
```html
<form class="space-y-6">
  <div>
    <label class="text-champagne-700 font-medium">Name</label>
    <input 
      type="text" 
      class="w-full p-3 border border-border rounded-md bg-input wedding-focus:ring-gold-400"
    />
  </div>
  <button class="gold-shimmer text-gold-900 px-6 py-3 rounded-md font-medium">
    Submit
  </button>
</form>
```

## Dark Mode Support

Your configuration includes dark mode variants. Toggle with the `dark` class:

```html
<div class="bg-background dark:bg-background text-foreground dark:text-foreground">
  Content that adapts to dark mode
</div>
```

## Best Practices

### 1. Accessibility
- Always maintain sufficient contrast ratios
- Use focus styles with `wedding-focus:` variants
- Ensure touch targets are at least 44px

### 2. Performance
- Use `@theme inline` for referencing existing CSS variables
- Leverage TailwindCSS v4's improved build performance
- Utilize dynamic utilities for one-off values

### 3. Wedding Design
- Use serif fonts for elegant headings
- Apply gentle animations sparingly for elegance
- Maintain consistent spacing with the extended scale
- Use the champagne gradient for special sections

### 4. Color Usage
- **Ivory**: Backgrounds and light elements
- **Champagne**: Primary actions and important content
- **Gold**: Accents and hover states
- **Rose Gold**: Special highlights and decorative elements

## Migration from v3 to v4

Key differences in your implementation:

1. **Import Style**: `@import "tailwindcss"` instead of `@tailwind` directives
2. **Configuration**: CSS-first with `@theme` instead of JavaScript config
3. **Colors**: OKLCH color space for better consistency
4. **Utilities**: Custom utilities defined in CSS with `@utility`
5. **Variants**: Custom variants with `@custom-variant`

## Font Loading

Don't forget to load your fonts in your HTML head or Nuxt configuration:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500&family=Inter:wght@400;500;600&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
```

## Troubleshooting

### Colors Not Working
- Ensure you're using the correct color names (e.g., `ivory-300`, not `ivory-3`)
- Check that the `@theme inline` block is properly closed
- Verify OKLCH syntax is correct

### Animations Not Playing
- Check that keyframes are defined before use
- Ensure animation classes are applied correctly
- Verify browser support for the animations used

### Build Issues
- Ensure `@tailwindcss/vite` is properly installed
- Check that the Vite plugin is correctly configured in `nuxt.config.ts`
- Clear cache and rebuild if colors aren't updating

This configuration provides a solid foundation for an elegant wedding website with TailwindCSS v4's modern features and your beautiful color palette.