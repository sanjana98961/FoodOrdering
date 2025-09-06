/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './app/**/*.{js,ts,jsx,tsx}',      // if you're using app router
    './pages/**/*.{js,ts,jsx,tsx}',    // for pages
    './components/**/*.{js,ts,jsx,tsx}', // for component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

