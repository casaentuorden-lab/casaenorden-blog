import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bottle: {
          DEFAULT: "#2F4A3C",
          light: "#3E6350",
          dark: "#243A2F",
        },
        bone: {
          DEFAULT: "#F1E9D8",
          light: "#F8F3E9",
          dark: "#E6DAC0",
        },
        brass: {
          DEFAULT: "#C4923D",
          light: "#D6AC63",
          dark: "#A6772B",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "ui-serif", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -4px rgba(47, 74, 60, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
