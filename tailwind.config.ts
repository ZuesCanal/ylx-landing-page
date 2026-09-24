import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "hsl(var(--canvas) / <alpha-value>)",
        ink: "hsl(var(--ink) / <alpha-value>)",
        graphite: "hsl(var(--graphite) / <alpha-value>)",
        panel: "hsl(var(--panel) / <alpha-value>)",
        rule: "hsl(var(--rule) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        evidence: "hsl(var(--evidence) / <alpha-value>)",
        review: "hsl(var(--review) / <alpha-value>)",
        alert: "hsl(var(--alert) / <alpha-value>)",
        navy: "hsl(var(--ink) / <alpha-value>)",
        charcoal: "hsl(var(--muted) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
