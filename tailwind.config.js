/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        primary: {
          darkest: 'rgb(var(--primary-darkest))',
          darker: 'rgb(var(--primary-darker))',
          dark: 'rgb(var(--primary-dark))',
          DEFAULT: 'rgb(var(--primary-default))',
          light: 'rgb(var(--primary-light))',
          lighter: 'rgb(var(--primary-lighter))',
          lightest: 'rgb(var(--primary-lightest))',
        },
        secondary: {
          darker: 'rgb(var(--secondary-darker))',
          dark: 'rgb(var(--secondary-dark))',
          DEFAULT: 'rgb(var(--secondary-default))',
          light: 'rgb(var(--secondary-light))',
          lighter: 'rgb(var(--secondary-lighter))',
          lightest: 'rgb(var(--secondary-lightest))',
        },
        gray: {
          darkest: 'rgb(var(--gray-darkest))',
          darker: 'rgb(var(--gray-darker))',
          dark: 'rgb(var(--gray-dark))',
          DEFAULT: 'rgb(var(--gray-default))',
          light: 'rgb(var(--gray-light))',
          lighter: 'rgb(var(--gray-lighter))',
          lightest: {
            DEFAULT: 'rgb(var(--gray-lightest))',
            2: 'rgb(var(--gray-lightest-2))',
          },
        },
        status: {
          info: 'rgb(var(--info))',
          success: {
            light: 'rgb(var(--success-light))',
            DEFAULT: 'rgb(var(--success))',
            dark: 'rgb(var(--success-dark))',
          },
          warning: {
            light: 'rgb(var(--warning-light))',
            DEFAULT: 'rgb(var(--warning))',
            dark: 'rgb(var(--warning-dark))',
          },
          error: {
            light: 'rgb(var(--error-light))',
            DEFAULT: 'rgb(var(--error))',
            dark: 'rgb(var(--error-dark))',
          },
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)'],
        body: ['var(--font-dm-sans)'],
      },
    },
  },
  plugins: [],
}
