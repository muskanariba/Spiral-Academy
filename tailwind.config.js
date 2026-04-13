/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    fontFamily: {
      tiempos: ["Tiempos", "serif"],
      aceh: ["Aceh", "sans-serif"],
    },
  },
},
  plugins: [],
}
