/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00AEEF',
        bgcolor: '#0a0a0a',
        surface: '#171717',
        'surface-hover': '#262626',
        'text-main': '#ededed',
        'text-muted': '#a3a3a3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
