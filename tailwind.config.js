/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2D2D34',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        },
        'accent': '#26C485',
        'background': '#101823'
      }
    },
  },
  plugins: [],
}