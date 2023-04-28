/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#283618",
        "secondary": "#606c38",
        "semi-white": "#D6E6F2",
        "pastel": "#dda15e",
        "dark-pastel": "#bc6c25"
      }
    },

  },
  plugins: [],
}

