/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      backgroundColor: {
        'theme-primary': 'var(--color-bg-primary)',
        'theme-primary-transparent': 'var(--color-bg-primary-transparent)',
        'theme-secondary': 'var(--color-bg-secondary)',
      },
      textColor: {
        'theme-primary': 'var(--color-text-primary)',
        'theme-secondary': 'var(--color-text-secondary)',
      },
      borderColor: {
        'theme-primary': 'var(--color-text-primary)',
        'theme-secondary': 'var(--color-text-secondary)',
      },
      divideColor: {
        'theme-primary': 'var(--color-text-primary)',
        'theme-secondary': 'var(--color-text-secondary)',
      },
    },
  },
  plugins: [],
};
