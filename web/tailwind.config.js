const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    screens: {
      xs: '450px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    colors: {
      transparent: 'var(--transparent)',
      black: 'var(--black)',
      white: 'var(--white)',
      gray: 'var(--gray)',
    },
    fontFamily: {
      sans: ['GT', ...defaultTheme.fontFamily.sans],
      serif: ['Georgia', ...defaultTheme.fontFamily.serif],
      mono: ['"Courier New"', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      14: '1.4rem',
      large: 'var(--large)',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      base: '-0.015em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    extend: {
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
        24: 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },
      gridColumnStart: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
      },
      transitionDuration: {
        0: '0ms',
        400: '400ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
        1200: '1200ms',
        1400: '1400ms',
        1600: '1600ms',
        1800: '1800ms',
        2000: '2000ms',
      },
      transitionTimingFunction: {
        linear: 'var(--ease-linear)',
        'in-quad': 'var(--ease-in-quad)',
        'out-quad': 'var(--ease-out-quad)',
        'in-out-quad': 'var(--ease-in-out-quad)',
        'in-cubic': 'var(--ease-in-cubic)',
        'out-cubic': 'var(--ease-out-cubic)',
        'in-out-cubic': 'var(--ease-in-out-cubic)',
        'in-quart': 'var(--ease-in-quart)',
        'out-quart': 'var(--ease-out-quart)',
        'in-out-quart': 'var(--ease-in-out-quart)',
        'in-quint': 'var(--ease-in-quint)',
        'out-quint': 'var(--ease-out-quint)',
        'in-out-quint': 'var(--ease-in-out-quint)',
        'in-expo': 'var(--ease-in-expo)',
        'out-expo': 'var(--ease-out-expo)',
        'in-out-expo': 'var(--ease-in-out-expo)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
