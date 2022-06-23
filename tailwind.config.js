/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        big: '17vmin',
        'less-big': '10vmin',
      },
      lineHeight: {
        'less-none': '0.8',
      },
    },
  },
  plugins: [],
};
