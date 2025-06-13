/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-blue-500',
    'text-white',
    'p-4',
    'rounded',
    'hover:bg-blue-600',
    'transition-colors'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}