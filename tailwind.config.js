/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor : "#0A192F",
        designColor :"#64ffda",
        lightText :"#ccd6f6",
        darkText :"#8892b0",
        hoverColor : "rgba(100, 225, 218,0.1)"
      },
      fontFamily:{
        bodyFont : ['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}