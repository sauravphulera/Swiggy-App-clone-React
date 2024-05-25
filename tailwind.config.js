//import { colors } from 'tailwind'
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shitty-white': '#ffffff'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(rgb(255, 255, 255) -6.71%, rgb(235, 235, 242) 56.19%, rgb(223, 223, 231) 106.56%)',
      },
    },
    colors: {
      ...colors,
      gray: 'rgb(191 205 227)',
      orange: 'rgb(217 40 6)',
    }
  },
  plugins: [],
}

