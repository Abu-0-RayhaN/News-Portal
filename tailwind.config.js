/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        neucha: ["Neucha", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
        kdam: ["Kdam Thmor Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
