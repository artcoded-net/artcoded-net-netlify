/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2C98AD",
          light: "#D4EDF4", // light blueish green
          dark: "#345C72", // dark blueish green
        },
        dark: {
          DEFAULT: "#2A2E30", // dark gray
        },
        accent: {
          DEFAULT: "#F46530", // orange
          light: "#FF9E7A", // light orange
          dark: "#db5727", // darker orange
        },
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
