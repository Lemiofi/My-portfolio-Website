import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0a0a0c",
          surface: "#111115",
          elevated: "#18181f",
          border: "#23232c",
        },
        cream: {
          100: "#faf7f2",
          200: "#f4f0ea",
          300: "#eae4d8",
          400: "#c7c1b5",
          500: "#9a9589",
          600: "#635f55",
        },
        accent: {
          lime: "#ccff00",
          cyan: "#38bdf8",
          orange: "#ff6b35",
          yellow: "#eab308",
          coral: "#ff4757",
          purple: "#a855f7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-bebas)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 35s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "hero-gradient": "radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.08) 0%, rgba(10, 10, 12, 0) 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
