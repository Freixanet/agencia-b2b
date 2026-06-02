/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#000000',
          900: '#141414',
          800: '#191919',
          700: '#222222',
          600: '#333333',
          500: '#666666',
          400: '#868686',
          300: '#999999',
          200: '#b3b3b3',
          100: '#eeeeee',
        },
      },
      maxWidth: {
        container: '64rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
        spin: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        spin: 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
};
