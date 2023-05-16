import { COLORS } from './src/constants/color-palette';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...COLORS,
      },
    },
  },
  plugins: [],
};
