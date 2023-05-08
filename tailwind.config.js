/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D0352F',
        primaryDashboard: '#3F3F46',
        primaryText: '#D5D5D5',
        secondaryText: '#A6A6A6',
      },
    },
  },
  plugins: [],
};
