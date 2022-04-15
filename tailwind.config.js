const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        metropolis: ['Metropolis', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateRows: {
        layout: 'auto auto 1fr',
      },
    },
  },
  plugins: [],
};
