/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      // see styles.css for global styles instead
      // fontSize: {
      //   titles: ["3rem", "1"], // 48px
      //   subtitles: ["1.875rem", "2.25rem"], // 30px
      //   paragraph: ["1.5rem", "2rem"], // 24px
      //   small: ["1rem", "1.5rem"], // 16px
      // },
      colors: {
        softblack: "#2C2C2C",
        softwhite: "#F5F5F5",
        softgray: "#818181",
        fadedgray: "#CCCCCC",
        confirm: "#3DBC01",
        reject: "#D13A3A",
        warning: "#E0FFFF",
        accent: "#007BFF",
        softaccent: "#E0FFFF",
      },
    },
  },
  plugins: [],
};
