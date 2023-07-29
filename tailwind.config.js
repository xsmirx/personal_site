/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkest: 'var(--primary-darkest)',
          darker: 'var(--primary-darker)',
          dark: 'var(--primary-dark)',
          DEFAULT: 'var(--primary-default)',
          light: 'var(--primary-light)',
          lighter: 'var(--primary-lighter)',
          lightest: 'var(--primary-lightest)',
        },
        secondary: {
          darker: 'var(--secondary-darker)',
          dark: 'var(--secondary-dark)',
          DEFAULT: 'var(--secondary-default)',
          light: 'var(--secondary-light)',
          lighter: 'var(--secondary-lighter)',
          lightest: 'var(--secondary-lightest)',
        },
        gray: {
          darkest: 'var(--gray-darkest)',
          darker: 'var(--gray-darker)',
          dark: 'var(--gray-dark)',
          DEFAULT: 'var(--gray-default)',
          light: 'var(--gray-light)',
          lighter: 'var(--gray-lighter)',
          lightest: {
            DEFAULT: 'var(--gray-lightest)',
            2: 'var(--gray-lightest-2)',
          },
        },
        status: {
          info: 'var(--info)',
          success: {
            light: 'var(--success-light)',
            DEFAULT: 'var(--success)',
            dark: 'var(--success-dark)',
          },
          warning: {
            light: 'var(--warning-light)',
            DEFAULT: 'var(--warning)',
            dark: 'var(--warning-dark)',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)'],
      },
    },
  },
  plugins: [],
}
