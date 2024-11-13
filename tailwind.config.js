/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'exm':'420px',
        'sm': '512px',
        'smd': '600px',
        'md': '800px',
        'lg': '1150px',
        'xl': '1250px',
        '2xl':'1500px',
        '3xl' : '1800px',
      },
      colors:{
        marron:"#262626",
        rojo :"#A63D33",
        naranja:"#A64B37",
        amarillo: "#F2B872",
        blanco:"#F2F2F2",
        oscuro: "rgba(166, 75, 55, 0.8)",
        field: "#202020"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(255,255,255,1) 10%, rgba(0,0,0,0) 50%, rgba(255,255,255,1) 90%)',
      },
    },
  },
  plugins: [],
}

