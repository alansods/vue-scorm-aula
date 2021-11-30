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
        'primary-color-hover': '#3B52D0',
        'secondary-color': '#21be8f',
        'dark-color': '#464555',
      },
      backgroundImage: theme => ({
        'video-apresentacao': 'url(../img/padrao/bg-apresentacao.png)'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
