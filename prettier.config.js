/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'avoid',
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
