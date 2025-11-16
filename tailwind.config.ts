/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primaryGreen: "var(--primaryGreen)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        outfit: "var(--font-outfit)",
        mono: "var(--font-mono)",
      },
    },
  },
  darkMode: "media",
};
