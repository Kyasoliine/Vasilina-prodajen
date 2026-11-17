/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FFF9FA',
          100: '#FFF0F3',
          200: '#FFE0E7',
          300: '#FFC2D1',
          400: '#FF8FA3',
          500: '#FB6F92',
          600: '#E05779',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
