module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      primary: '#107c10',
      secondary: '#054b16',
      tertiary: '#9bf00b',
      black: '#000000',
      white: '#ffffff',
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      'extra-light-gray': '#f2f2f2',
      'light-gray': '#e6e6e6',
      gray: '#d2d2d2',
      'medium-gray': '#737373',
      'dark-gray': '#505050',
      'extra-dark-gray': '#2f2f2f',
    },
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.light-gray', 'currentColor'),
    }),
    fontFamily: {
      sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      md: ['1.125rem', { lineHeight: '1.625rem' }],
      lg: ['1.25rem', { lineHeight: '1.75rem' }],
      xl: ['2rem', { lineHeight: '2.75rem' }],
      '2xl': ['3.25rem', { lineHeight: '3.5rem' }],
    },
  },
};
