/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans":['Inter', 'sans-serif']
      },
      colors: {
        primary: {
          400: "#F3733D"
        }
      },
      boxShadow: {
        '3xl': '0px 0px 8px rgba(127, 127, 124, 0.2)',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
