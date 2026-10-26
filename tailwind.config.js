/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#bcdaff',
          300: '#8ec3ff',
          400: '#599fff',
          500: '#3478f6',
          600: '#1f5be0',
          700: '#1947b8',
          800: '#163c93',
          900: '#162f63',
        },
      },
    },
  },
  plugins: [],
};
