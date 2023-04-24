/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './container/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'bioRhyme': ['var(--font-bioRhyme)'],
      },
      colors: {
        'primary-textColour': '#f2e9e4',
        'primary-BG': '#22223b',
        'secondary-bg': '#f8f8f9',
        'text-blue': '#121FCF',
        'text-red': '#CF1512',
        'card-bg': 'rgb(239 239 239 / 38%)',
        'card-hover': 'rgb(239 239 239)',
        'header-bg': '#0f0f0f',
        'main-bg': '#121212',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
