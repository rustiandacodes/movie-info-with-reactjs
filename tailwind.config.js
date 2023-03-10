/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-basic': '#0F0F0F',
        'black-darker': '#070707',
        'black-for-card': '#343434',
        'black-for-content': '#1E1E1E',
      },
    },
  },
  plugins: [],
}
