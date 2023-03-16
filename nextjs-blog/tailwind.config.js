/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      }
  },
  fontFamily: {
    'sans': ['Roboto','Sofia Sans','Arial', 'sans-serif'],
    'mono': ['JetBrains Mono','Consolas', 'sans-serif'],
    'serif': ['Old Standard TT','Georgia', 'serif'],
},

  fontSize: {
    'huge': '5rem',
    'normal': '13px',
    'large': '1rem',
    'verylarge': '1.5rem',
    'big': '2rem',
    'verybig': '3rem',
    'subtitle':'0.75rem',
    'small': '0.6rem',
    'tiny': '0.4rem',
    '14px': '0.875rem',

},
},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}