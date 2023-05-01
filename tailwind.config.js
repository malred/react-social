/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'blue1': '#1877f2'
      },
      flex: {
        '3': '3',
        '4': '4',
        '5': '5',
      },
      boxShadow: {
        'share': '0px 0px 16px -8px rgba(0,0,0,0.68)'
      },
      borderRadius: {
        'half': '50%'
      }
    },
  },
  plugins: [],
}