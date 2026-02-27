/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/modals/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5E7D',
        'primary-dark': '#E04C68',
        secondary: '#7860FF',
        'secondary-dark': '#6550DB',
        accent: '#FFCC4A',
        success: '#36D399',
        info: '#3ABFF8',
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
