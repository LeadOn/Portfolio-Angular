/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      primary: "#424549",
      primaryDarker: "#282b30",
      secondary: "#c94d29",
    },
  },
  plugins: [require("flowbite/plugin")],
};
