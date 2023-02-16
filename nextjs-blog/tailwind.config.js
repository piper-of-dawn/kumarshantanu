/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   phone: "568px",
    //   tablet: "1200px",
    //   desktop: "1440px",
    // },
    extend: {
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      }
  },
  fontFamily: {
    'sans': ['Roboto','Sofia Sans','Arial', 'sans-serif'],
    'mono': ['JetBrains Mono','Consolas', 'sans-serif'],
},

  fontSize: {
    'huge': '5rem',
    'normal': '13px',
    'large': '1rem',
    'big': '2rem',
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