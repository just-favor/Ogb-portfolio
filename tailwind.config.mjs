/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4a6cf7',
        secondary: '#6a3ef7',
        dark: '#2d3e50',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(100px)' },
        },
        fly: {
          'from': { top: '40px', right: '-350px' },
          'to': { top: '-70px', right: '200px' },
        },
      },
      animation: {
        float: 'float 15s ease-in-out infinite',
        fly: 'fly 10s ease-in-out alternate',
      },
    },
  },
  plugins: [],
};

export default config;
