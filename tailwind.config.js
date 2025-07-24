/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
    
      },
      keyframes: {
        'divdot-move1': {
          '0%': { top: '-6px', left: '6px' },
          '25%': { top: '-6px', left: '97%' },
          '50%': { top: '97%', left: '97%' },
          '75%': { top: '97%', left: '-6px' },
          '100%': { top: '-6px', left: '-6px' },
        },
      },
      animation: {
      'pulse-slow': 'pulse 8s infinite',
    },

    },
    
  },
  plugins: [],
};
