/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // add this line
  ],
  theme: {
    extend: {
      colors:{
        "secondary": "#6A1039",
        "tertiary": "#ab2e68",
        "background": "#eec4d7"
      },
    },
  },
  plugins: [],
}
