/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#fdf6e3",
        ink: "#22223b",
        gold: "#f4c542",
        bronze: "#cc7722",
        "renaissance-gold": "#DAA520",
        "renaissance-cream": "#F5F5DC",
      },
      fontFamily: {
        title: ["'Cinzel Decorative'", "serif"],
        body: ["'Crimson Pro'", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
