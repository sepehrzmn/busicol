/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ...defaultColors, "custom-gray": "#28AE60" },
      container: {
        center: true,
        padding: "4px",
        margin: "4px",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1140px",
          xl: "1140px",
        },
      },
    },
  },
  plugins: [],
};
