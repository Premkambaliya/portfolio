/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00C4CC',
        accent: '#1B1F3B',
        text: '#222222',
      },
    },
  },
  plugins: [],
};