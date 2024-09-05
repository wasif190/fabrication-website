/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        monsterrat: ['Montserrat', 'sans-serif']
      },
      screens: {
        "mobile": "500px"
      }
    },
  },
  plugins: [],
}

