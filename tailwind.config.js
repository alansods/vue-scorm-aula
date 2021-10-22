module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class' or 'false'
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins'
      },
      colors: {
        'primary-color': '#3F51B5',
        'secondary-color': '#21be8f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
