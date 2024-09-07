/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      brand: "#F7FFEF",
      primary: "#43056C",
      secondary: "#4DAF4E",
      ternary: "#6c8c6c",
      warning: "#f87171",
      "brand-primary": "#FFFFFE",
      black: "#000000",
      "fade-black": "#323232",
      white: "#fff",
      grey: "#d6d6d6",
    },
    extend: {
      keyframes: {
        "progress-bar-width": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "progress-bar-width": "progress-bar-width 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
