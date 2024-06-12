/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
    },
    extend: {
      colors: {
        apporange: "#F3074E",
        appborder: "#FF5F5F"
      },
      boxShadow: {
        week: "0px 0px 5px rgba(0, 0, 0, 0.89)"
      }
    },
  },
  plugins: [],
}

