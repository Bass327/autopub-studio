/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#083B6E",
        secondary: "#F5C400",
        text: "#0F172A",
        background: "#0A3E73",
      },
    },
  },
  plugins: [],
}

