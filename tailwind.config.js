/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // CRITICAL: This tells Tailwind to look inside your src folder
  ],
  theme: {
    extend: {
      // Add your custom font-family here to match the HTML
      fontFamily: {
        sans: ["Work Sans", "Inter", "sans-serif"],
      },
      // You can also define your custom colors for better maintenance
      colors: {
        "accent-purple": "#d8b4fe",
        "dark-text": "#2d2d2d",
        "light-bg": "#f9f9f9",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
