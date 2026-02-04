/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "rgb(var(--c-bg) / <alpha-value>)",
        navy: "rgb(var(--c-primary) / <alpha-value>)",
        "navy-light": "rgb(var(--c-primary-light) / <alpha-value>)",
        terra: "rgb(var(--c-accent) / <alpha-value>)",
        "terra-light": "rgb(var(--c-accent-light) / <alpha-value>)",
        "terra-dark": "rgb(var(--c-accent-dark) / <alpha-value>)",
        steel: "rgb(var(--c-secondary) / <alpha-value>)",
        "steel-light": "rgb(var(--c-secondary-light) / <alpha-value>)",
        sage: "rgb(var(--c-success) / <alpha-value>)",
        "sage-light": "rgb(var(--c-success-light) / <alpha-value>)",
        sand: "rgb(var(--c-warning) / <alpha-value>)",
        "sand-light": "rgb(var(--c-warning-light) / <alpha-value>)",
        slate: "rgb(var(--c-muted) / <alpha-value>)",
        /* Theme-aware neutrals */
        card: "rgb(var(--c-card) / <alpha-value>)",
        "card-alt": "rgb(var(--c-card-alt) / <alpha-value>)",
        subtle: "rgb(var(--c-subtle) / <alpha-value>)",
        "subtle-dark": "rgb(var(--c-subtle-dark) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        /* Sidebar & Buttons */
        sidebar: "rgb(var(--c-sidebar) / <alpha-value>)",
        "sidebar-light": "rgb(var(--c-sidebar-light) / <alpha-value>)",
        btn: "rgb(var(--c-btn) / <alpha-value>)",
        "btn-hover": "rgb(var(--c-btn-hover) / <alpha-value>)",
        /* Status */
        error: "rgb(var(--c-error) / <alpha-value>)",
        "error-light": "rgb(var(--c-error-light) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Nunito", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },
    },
  },
  plugins: [],
};
