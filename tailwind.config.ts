import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Palette
        background: {
          DEFAULT: "#040316",
          section: "#08082C",
          card: "#0F1036",
        },
        grid: "#17185A",
        divider: "#1F2070",
        // Neon Accent Palette
        neon: {
          blue: "#3B5CFF",
          purple: "#8B5CF6",
          violet: "#A855F7",
          cyan: "#22D3EE",
          pink: "#EC4899",
        },
        // Text Colors
        heading: "#EDE9FE",
        subtext: "#C4B5FD",
        muted: "#9CA3AF",
        placeholder: "#6B7280",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "neon-purple": "0 0 12px rgba(139,92,246,0.6)",
        "neon-blue": "0 0 20px rgba(59,92,255,0.35)",
        "neon-button": "0 0 18px rgba(168,85,247,0.6)",
        "neon-card": "0 0 30px rgba(139,92,246,0.3)",
        "neon-glow": "0 0 40px rgba(139,92,246,0.4), 0 0 80px rgba(59,92,255,0.2)",
      },
      backgroundImage: {
        "gradient-neon": "linear-gradient(90deg, #8B5CF6, #3B5CFF)",
        "gradient-violet-cyan": "linear-gradient(90deg, #A855F7, #22D3EE)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "typewriter": "typewriter 4s steps(40) 1s forwards",
        "blink": "blink 1s step-end infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "grid-flow": "grid-flow 20s linear infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 18px rgba(168,85,247,0.6)" },
          "50%": { boxShadow: "0 0 30px rgba(168,85,247,0.9)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "typewriter": {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "blink": {
          "50%": { borderColor: "transparent" },
        },
        "fade-in-up": {
          "from": { opacity: "0", transform: "translateY(30px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "from": { opacity: "0", transform: "translateX(-50px)" },
          "to": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "from": { opacity: "0", transform: "translateX(50px)" },
          "to": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "from": { opacity: "0", transform: "scale(0.9)" },
          "to": { opacity: "1", transform: "scale(1)" },
        },
        "grid-flow": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;