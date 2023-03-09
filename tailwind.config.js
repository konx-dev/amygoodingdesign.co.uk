module.exports = {
  mode: 'jit',
  content: [
      '~/pages/**/*.vue',
      '~/components/**/*.vue',
  ],
  theme: {
    fontFamily: {
      'anton': ['Anton','sans-serif'],
      'raleway': ['Raleway','sans-serif']
    },
    colors: {
      brand: {
        black: '#0A0A0A',
        grey: '#F2F2F2',
        white: '#F6FAFA'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}