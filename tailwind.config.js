/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "~/components/**/*.{vue,js}",
    "~/layouts/**/*.vue",
    "~/pages/**/*.vue",
    "~/plugins/**/*.{js,ts}",
    "~/nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        "lg-padding": '1056px',
        xl: '1280px',
      },
      colors: {
        'primary': 'var(--primary-color)',
        'secondary': 'var(--secondary-color)',
        'gray': '#39383A',
        'gray-light': '#919093',
        'black': '#000000',
        'white': '#ffffff',
      },
      fontSize: {
        "sm": "0.625rem",
        "base": "1rem",
        "md": "1.1rem",
        "lg": "1.25rem",
        "xl": "1.4rem",
        "2xl": "2.75rem",
        "3xl": "5rem",
      },
      lineHeight: {
        "sm": "0.625rem",
        "base": "1rem",
        "md": "1.1rem",
        "lg": "1.25rem",
        "xl": "1.4rem",
        "2xl": "2.3rem",
        "3xl": "5rem",
      },
      borderRadius: {
        'md': '0.625rem',
      },
      spacing: {
        'sm': '2.2rem',
        'md': '5.56rem',
        'lg': '6.25rem'
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'karla': ['Karla', 'sans-serif']
      },
    },
  },
  plugins: [],
};