const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      yellow: colors.amber,
      green: colors.lime,
      blue: colors.sky,
      red: colors.red,
      'white': '#ffffff',
      'black': '#000000',
      'primary': '#004C69',
      'secundary': '#B2D235',
      'secundaryDarker': '#9CB82E',
      'accent': '#7FA5B4',
      gray: {
        900: '#202225',
        800: '#2f3136',
        700: '#36393f',
        600: '#4f545c',
        500: '#585C63',
        400: '#d4d7dc',
        300: '#e3e5e8',
        200: '#ebedef',
        100: '#f2f3f5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
