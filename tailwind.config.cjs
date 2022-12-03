/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato'],
        maklight: ['MakLight'],
      },
      colors: {
        clay: '#E1DFD8',
      },
    },
  },
  plugins: [],
};
