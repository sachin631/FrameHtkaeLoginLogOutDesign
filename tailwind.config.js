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
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
