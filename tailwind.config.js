/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#000080', // Navy blue from logo
          50: '#e6e6ff',
          100: '#b3b3ff',
          200: '#8080ff',
          300: '#4d4dff',
          400: '#1a1aff',
          500: '#000080',
          600: '#000066',
          700: '#00004d',
          800: '#000033',
          900: '#00001a',
        },
        accent: {
          DEFAULT: '#D4AF37', // Gold from logo
          50: '#fff7e6',
          100: '#ffedb3',
          200: '#ffe480',
          300: '#ffd94d',
          400: '#ffcf1a',
          500: '#D4AF37',
          600: '#b38f00',
          700: '#806600',
          800: '#4d3d00',
          900: '#1a1400',
        },
      },
      textColor: {
        dark: {
          primary: 'rgba(255, 255, 255, 0.95)',
          secondary: 'rgba(255, 255, 255, 0.7)',
          tertiary: 'rgba(255, 255, 255, 0.5)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};