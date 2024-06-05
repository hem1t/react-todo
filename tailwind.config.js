/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apporange: "#F3074E",
        appborder: "#FF5F5F"
      }
    },
  },
  plugins: [],
}

