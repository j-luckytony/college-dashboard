/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        gray: {
          faint: "#F0F4FF",
          soft: "#F7F8FB",
          light: "#E8E8E8",
          medium: "#D9D9D9",
          "medium-dark": "#8B8B8B",
          muted: "#979797",
          dim: "#A3AED0",
          line: "#F1F1F1",
          dark: "#191919",
        },
        blue: {
          primary: "#0468BE",
          baby: "#78BED8",
          deep: "#076ABF",
          soft: "#157EBF",
          accent: "#4880FF",
        },
        yellow: {
          base: "#F2AE2F",
        },
        orange: {
          base: "#DA580D",
        },
        purple: {
          base: "#7039F1",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "Metropolis",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        metropolis: [
          "Metropolis",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        inter: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        "roboto-condensed": [
          "Roboto Condensed",
          "Roboto",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SF Mono",
          "Monaco",
          "Inconsolata",
          "Fira Code",
          "Droid Sans Mono",
          "monospace",
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        4.25: "1.0625rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        5.75: "1.4375rem",
        6.5: "1.625rem",
        8.5: "2.125rem",
        9: "2.25rem",
        9.25: "2.3125rem",
        12.25: "3.0625rem",
        12.5: "3.125rem",
        15: "3.75rem",
        27: "6.75rem",
        51.5: "12.875rem",
        57.75: "14.4375rem",
      },
      fontSize: {
        "1.5xl": "1.375rem",
        10: "2.5rem",
        20: "5rem",
      },
      borderRadius: {
        3.75: "0.9375rem",
        15.25: "3.8125rem",
      },
      lineHeight: {
        3.5: "0.875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        5.75: "1.4375rem",
        full: "100%",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
