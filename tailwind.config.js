/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D0352F',
        secondary: '#26272B',
        dashboardBg: '#18181B',
        dashboardWhite: '#FFFFFF',
        dashboardWhite100: '#F4F4F5',
        tableCell: '#26272B',
        tableCellText: '#EBEBEB',
        tableHeader: '#1E1E21',
        iconBg: '#3F3F46',
        cellDividerStoke: ' #424242',
      },
    },
  },
  plugins: [],
};
