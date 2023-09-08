/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ghost: '#F7F7FF',
        mosaic: {
          50: '#faf8fb',
          100: '#f4f0f7',
          200: '#e8e0ee',
          300: '#d7c7e0',
          400: '#bfa5cd',
          500: '#a481b4',
          600: '#7f5c8e',
          700: '#6f4f7c',
          800: '#5c4266',
          900: '#4f3a55',
          950: '#2f1e34',
        },
        baltic: {
          50: '#f7f7f8',
          100: '#efeef0',
          200: '#dbdadd',
          300: '#bcbabf',
          400: '#98959b',
          500: '#7b787f',
          600: '#646168',
          700: '#524f55',
          800: '#454448',
          900: '#3d3b3f',
          950: '#242325',
        },
      },
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
