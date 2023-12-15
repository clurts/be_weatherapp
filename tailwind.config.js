/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extends: {
      colors: {
        darkCompBg: "#48319D",
        darkDropShadow: "#4A397F"
      }
    }
  },
  plugins: [],
}
