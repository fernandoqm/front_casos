/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
          "./index.html",
          "./src/**/*.{js,jsx,ts,tsx}"
        ],
  theme: {
    extend: {
      colors:{
        verde_neaon:"#1aff00",
        primary: "#EE6C4D",
        coloric: "#00a6ff",
        bg_header: "5d00ff",
        secondary:{
          100: "#1E1F25",
          900: "#131517",
        },
      }
    },
  },
  plugins: [],
});