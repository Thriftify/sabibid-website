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
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#005BB5",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#FF7043",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        blue: {
          600: "#005BB5",
          700: "#004a94",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "urgent-pulse": "urgentPulse 1s ease-in-out infinite",
        "live-pulse": "livePulse 2s infinite",
        "countdown-urgent": "countdownUrgent 0.5s ease-in-out infinite",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0, 91, 181, 0.3)",
        "glow-orange": "0 0 20px rgba(255, 112, 67, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
