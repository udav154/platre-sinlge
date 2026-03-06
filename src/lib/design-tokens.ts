/**
 * Design tokens for PLATRE portfolio
 * Centralized values for consistent styling across the app
 */

export const colors = {
  /** Primary dark brown - headings, text, accents */
  brand: {
    dark: "#3d2914",
    cream: "#faf8f3",
    creamAlt: "#f7f3e9",
    creamLight: "#f0ead6",
    gold: "#d4af37",
    goldMuted: "#c4b89a",
    beige: "#e8e0d4",
    footer: "#271e15",
  },
} as const;

export const typography = {
  /** Section titles - mobile to desktop */
  sectionTitle: "text-3xl sm:text-4xl md:text-6xl",
  /** Card/block titles */
  cardTitle: "text-lg md:text-2xl",
  /** Large card titles (e.g. modal) */
  cardTitleLarge: "text-xl md:text-3xl",
  /** Body text - standard */
  body: "text-base md:text-lg",
  /** Body text - large */
  bodyLarge: "text-lg md:text-xl",
  /** Small labels, categories */
  label: "text-sm md:text-base",
  /** Extra small (mobile) */
  labelSmall: "text-xs md:text-sm",
  /** Hero subtitle (by Sokolova Olga) */
  heroSubtitle: "text-sm md:text-xl",
  /** Hero main title */
  heroTitle: "text-5xl sm:text-6xl md:text-9xl",
  /** Hero tagline */
  heroTagline: "text-xl sm:text-2xl md:text-4xl",
  /** Subtitle/description */
  subtitle: "text-base md:text-xl",
  /** Serif font for headings */
  fontSerif: "font-serif",
  /** Tracking for headings */
  trackingWide: "tracking-wide",
  trackingWider: "tracking-[0.15em]",
  trackingWidest: "tracking-[0.2em] md:tracking-[0.3em]",
} as const;

export const spacing = {
  /** Section vertical padding */
  sectionY: "py-12 md:py-24",
  /** Footer vertical padding (slightly less) */
  footerY: "py-12 md:py-20",
  /** Section horizontal padding */
  sectionX: "px-4 sm:px-6",
  /** Header block margin bottom */
  headerMb: "mb-10 md:mb-20",
  /** Content block spacing */
  blockGap: "gap-8 md:gap-12",
  blockGapLarge: "gap-10 md:gap-20",
  /** Decorative line margins */
  lineMb: "mb-4 md:mb-8",
  lineMbLarge: "mb-6 md:mb-12",
  /** Grid gaps */
  gridGap: "gap-4 md:gap-8",
  gridGapLarge: "gap-4 md:gap-10",
} as const;

export const layout = {
  /** Max width for content */
  maxWidth: "max-w-7xl",
  maxWidthNarrow: "max-w-5xl",
  maxWidthWide: "max-w-3xl",
  /** Container center */
  center: "mx-auto",
} as const;
