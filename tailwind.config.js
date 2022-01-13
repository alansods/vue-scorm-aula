module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
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
        'video-apresentacao': 'url(../img/padrao/bg-apresentacao-1.png)'
      }),
      height: {
        'bg-apresentacao': 'calc(100vh - 2.5rem)'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['active'],
      translateX: ['active'],
      translateY: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
