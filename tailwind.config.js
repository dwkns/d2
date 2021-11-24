const tailwindTheme = require('tailwindcss/defaultTheme');
const debugScreens = require('tailwindcss-debug-screens');


module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.njk',
    './src/**/*.js',
    './src/**/*.md',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1300px',
      '2xl': '1500px',
      '3xl': '1600px',
    },
    fontFamily: {
      // 'sans': ['Inter', ...tailwindTheme.fontFamily.sans],
      'sans': ['Plex', ...tailwindTheme.fontFamily.sans],
      // 'sans': ['Inter'],
    },
    extend: {
      colors: {
        'brand': '#0B86EB',
        'brand-alt': '#15609F',
      },
      spacing: {
        'u2-pad': 'clamp(1rem, 4vw, 8rem)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [debugScreens],
}
