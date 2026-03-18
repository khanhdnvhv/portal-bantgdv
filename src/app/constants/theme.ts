// ── Theme Constants ─────────────────────────────────────
// Centralized design tokens for the portal

export const COLORS = {
  primary: "#C41E2A",
  primaryDark: "#A01520",
  primaryDeep: "#8b1a1a",
  gold: "#C0891F",
  goldDark: "#8b6914",
  goldAccent: "#d4a853",
  white: "#ffffff",
  black: "#000000",
  text: "#1a1a1a",
  textSecondary: "#333333",
  textMuted: "#666666",
  textLight: "#999999",
  border: "#ededed",
  borderLight: "#f0f0f0",
  bgWarm: "#fffcf4",
  bgCream: "#fdfcfa",
} as const;

export const FONTS = {
  display: "'Playfair Display', serif",
  body: "'Lora', serif",
  sans: "'Inter', sans-serif",
  accent: "'Protest Strike', sans-serif",
  headline: "'Black Ops One', sans-serif",
  condensed: "'Barlow Condensed', sans-serif",
} as const;

export const SHADOWS = {
  card: "0 4px 6px rgba(0,0,0,0.03), 0 12px 28px -6px rgba(196,30,42,0.10)",
  cardGold: "0 4px 6px rgba(0,0,0,0.03), 0 12px 28px -6px rgba(192,137,31,0.10)",
  cardHover: "0 16px 40px -8px rgba(196,30,42,0.2), 0 8px 20px -6px rgba(0,0,0,0.12)",
  section: `
    0 4px 6px rgba(0,0,0,0.03),
    0 12px 28px -6px rgba(196,30,42,0.10),
    0 28px 56px -12px rgba(0,0,0,0.08),
    0 40px 80px -20px rgba(196,30,42,0.12)
  `,
  sectionGold: `
    0 4px 6px rgba(0,0,0,0.03),
    0 12px 28px -6px rgba(192,137,31,0.10),
    0 28px 56px -12px rgba(0,0,0,0.08),
    0 40px 80px -20px rgba(192,137,31,0.12)
  `,
} as const;

export const LAYOUT = {
  maxWidth: 1360,
  contentWidth: 1320,
} as const;

// Gradient presets
export const GRADIENTS = {
  primaryAccent: "linear-gradient(135deg, #C41E2A 0%, #A01520 100%)",
  goldAccent: "linear-gradient(135deg, #C0891F 0%, #A07419 100%)",
  sectionBorderTop: "linear-gradient(90deg, #c41e2a 0%, #d4a853 50%, #c41e2a 100%)",
  titleBar: "linear-gradient(180deg, #c41e2a 0%, #8b1a1a 100%)",
} as const;
