/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {screens:{
      xs:'450px'
    },
    backgroundImage: {
      'coffee-main-bg': "url('/src/assets/coffe-bg.png')",
      'pink-bg' :"url('/src/assets/pinkBg.png')"
      
    }},

  },
  plugins: [],
}