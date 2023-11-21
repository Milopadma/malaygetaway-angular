/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors:{
      softblack: '#2C2C2C',
      softwhite: '#F5F5F5',
      softgray: '#818181',
      fadedgray: '#CCCCCC',
      confirm: '#3DBC01',
      reject: '#D13A3A',
      accent: '#007BFF',
      softaccent: '#E0FFFF',
    }
  },
  plugins: [],
}

