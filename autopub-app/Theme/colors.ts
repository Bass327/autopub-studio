export const colors = {
  blue: "#0D5EA6",
  blueDark: "#083B6E",
  yellow: "#F5C400",
  yellowSoft: "#FFE38A",
  bg: "#0A3E73",
  text: "#0F172A",
  white: "#FFFFFF",
  muted: "#94A3B8",
} as const;

export const gradient: readonly [string, string] = ["#0D5EA6", "#083B6E"] as const;

export type AppColors = typeof colors;

