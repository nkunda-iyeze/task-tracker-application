/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      background:' #0D0745',
      generalBackground:'#ebedec',
      white: '#FFFFFF',
      orange:'#FE928F;',
      buttonBackground: '#393dbd',
      gray:'#9f9fa1'
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    extend: {},
  },
  plugins: [],
}