const { buildQueries } = require('@testing-library/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        reactjs: "#32456d",
      },
    }, 
  },
  plugins: [],
}

