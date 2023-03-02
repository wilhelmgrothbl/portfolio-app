/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend:
    {
      fontFamily: {
        'sans': ['Nunito', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
  content: [
    './src/**/*.html',
    './src/**/*.component.ts'
  ],
}
