/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#202231',
        'light-dark-gray': '#666171',
      },
      fontFamily: {
        Roboto: ['"Roboto"', 'sans-serif']
      }
    },
  },
  plugins: [],
}