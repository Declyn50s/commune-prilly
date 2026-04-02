import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        prilly: {
          red: "hsl(var(--prilly-red))",
          yellow: "hsl(var(--prilly-yellow))",
          green: "hsl(var(--prilly-green))",
          coal: "hsl(var(--prilly-coal))",
          soft: "hsl(var(--prilly-soft))",
          sky: "hsl(var(--prilly-sky))",
        },
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 16px 42px rgba(61, 61, 61, 0.08)",
        float: "0 24px 60px rgba(61, 61, 61, 0.14)",
      },
      fontFamily: {
        sans: ["Segoe UI", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top left, rgba(255, 206, 0, 0.22), transparent 30%), radial-gradient(circle at top center, rgba(235, 35, 35, 0.16), transparent 34%), radial-gradient(circle at bottom left, rgba(34, 160, 72, 0.16), transparent 28%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
