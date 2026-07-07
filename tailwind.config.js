/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // brand palette - se design-brief for skemalagt.dk
        'teal-950': '#0A1B20', // mørkeste, card-headers/footers, mockup-chrome
        'teal-900': '#0D3B44', // primær mørk baggrund - hero, footer
        'teal-800': '#0F252B', // mockup-card body
        cream: '#F4F1EC', // lyse sektion-baggrunde
        copper: '#C6743A', // primær accent
        'copper-light': '#E3986A', // sekundær accent, badges
      },
    },
  },
  plugins: [],
}
