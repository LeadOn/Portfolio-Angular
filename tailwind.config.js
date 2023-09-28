/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      primary: "#333333",
      primaryDarker: "#1F1F1F",
      primaryDarkerer: "#141414",
      secondary: "#219C90",
      secondaryDarker: "#19766D",
      csharp: "#4e1268",
      azure: "#0082cb",
      agile: "#e6c00f",
      now: "#80B6A1",
    },
  },
  plugins: [require("flowbite/plugin")],
};
