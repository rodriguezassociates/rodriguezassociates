/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
          muted: '#555555',
          soft: '#7a7a7a',
        },
        navy: {
          DEFAULT: '#1a2332',
          light: '#243044',
          deep: '#121a26',
        },
        gold: {
          DEFAULT: '#b8956a',
          light: '#c9a87d',
          dark: '#9a7a50',
          muted: '#a08862',
        },
        cream: '#faf8f5',
        offwhite: '#f5f3ef',
        warmwhite: '#fdfcfa',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.2em',
        'ultra-wide': '0.3em',
      },
    },
  },
  plugins: [],
};
