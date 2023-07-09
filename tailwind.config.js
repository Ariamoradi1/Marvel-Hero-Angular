/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    // enabled: process.env.TAILWIND_MODE === 'build',
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
    },
    container: {
      padding: '2rem',
    },
    fontFamily: {
      'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
    }
  },
  variants: {},
  plugins: [],
};

