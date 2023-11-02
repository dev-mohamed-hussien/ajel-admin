/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: { 
      colors: {
				MorningBlue: '#8E9AA0',
				LightSeaGreen: '#1EBBA3',
				BlueGreen:'#bb84e8',
				DarkGunmetal:'#1D252D',
        MintCream:"#F3FFFA"
      },
      fontFamily:{
        ExtraBold:"ExtraBold",
        SemiBold:"SemiBold",
        Bold:"Bold",
        Regular:"Regular",
        Medium:"Medium",
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false // <== disable this!
  },
}