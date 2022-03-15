module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gold': {
          DEFAULT: '#FFD600',
          '50': '#FFF4B8',
          '100': '#FFF0A3',
          '200': '#FFEA7A',
          '300': '#FFE352',
          '400': '#FFDD29',
          '500': '#FFD600',
          '600': '#C7A700',
          '700': '#8F7800',
          '800': '#574900',
          '900': '#1F1A00'
        },
        'flamingo': {
          DEFAULT: '#EF4444',
          '50': '#FDEDED',
          '100': '#FCDADA',
          '200': '#F9B5B5',
          '300': '#F58F8F',
          '400': '#F26A6A',
          '500': '#EF4444',
          '600': '#E71414',
          '700': '#B30F0F',
          '800': '#800B0B',
          '900': '#4C0707'
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        marquee3: 'marquee3 5s linear infinite',
        marquee4: 'marquee4 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee3: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        marquee4: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      fontFamily: {
        Assistant: ['Assistant'],
        Barlow: ['Barlow'],
        ReadexPro: ['Readex Pro'],
        LondrinaOutline: ['Londrina Outline'],
        SourceSansPro: ['Source Sans Pro'],
        Anton:['Anton']

      },
      cursor: {
        'zero': 'url(/zero_cursor.png), pointer',
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
