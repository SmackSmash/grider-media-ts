/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'poimandres-yellow': '#FFFAC2',
        'poimandres-lightgreen': '#5DE4C7',
        'poimandres-midgreen': '#5FB3A1',
        'poimandres-darkgreen': '#41675A',
        'poimandres-lightblue': '#89DDFF',
        'poimandres-midblue': '#ADD7FF',
        'poimandres-darkblue': '#90B4D5',
        'poimandres-darkerblue': '#7390AA',
        'poimandres-darkpink': '#D0669D',
        'poimandres-lightpink': '#F087BD',
        'poimandres-midgrey': '#A6ACCD',
        'poimandres-darkgrey': '#767C9D',
        'poimandres-midslate': '#506477',
        'poimandres-darkslate': '#303340',
        'poimandres-blackslate': '#1B1E28',
        'poimandres-lighterblue': '#E4F0FB',
        'poimandres-lightgrey': '#D4D6DE',
        'poimandres-white': '#FFFFFF'
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite'
      }
    }
  },
  plugins: []
};
