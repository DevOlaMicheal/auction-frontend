/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000f14',
        secondary: '#191970'
      },

      fontFamily: {
        primary: ['Poppins'],
        secondary: 'Montserrat',
        tertairy: 'Quicksand'
      }
    },
  },
  plugins: [],
}