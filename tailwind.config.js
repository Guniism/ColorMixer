/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'bas': '#161618',
      'bd': '#333333',
      'con': '#222222',
      'wht': '#ffffff',
      'whte': '#eeeeee',
      'gray': '#444444',
      'green': '#40C173',
      'lgreen': '#52eb73',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'gun': '0.45rem',
    }
  },
  plugins: [],
}