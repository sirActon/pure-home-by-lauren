import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          deep: "#A37162",
          DEFAULT: "#C99A8D",
          primary: "#C99A8D",
          soft: "#E8C9BF",
        },
        border: {
          strong: "#C9BBB3",
          subtle: "#E5DCD7",
        },
        fg: {
          inverse: "#FAF6F4",
          "on-pink": "#3D2A24",
          primary: "#241F1C",
          secondary: "#6B5F58",
          tertiary: "#9A8B83",
        },
        surface: {
          card: "#FFFFFF",
          inverse: "#2A2420",
          primary: "#FAF6F4",
          secondary: "#F0E3DD",
          tertiary: "#E8D5CD",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Playfair Display", "serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        pill: "999px",
      },
      maxWidth: {
        container: "1440px",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
