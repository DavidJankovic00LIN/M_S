/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#c5a773',
        'brand-gold-light': '#e6d3aa',
        'text-black': '#000000',
        'clean-white': '#ffffff',
        'soft-gray': '#f5f5f5'
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        markus: {
          "primary": "#c5a773",
          "secondary": "#e6d3aa",
          "accent": "#d8eefe",
          "neutral": "#f5f5f5",
          "base-100": "#ffffff",
          "info": "#93c5fd",
          "success": "#86efac",
          "warning": "#fde68a",
          "error": "#fca5a5",
        },
      },
    ],
  },
}
