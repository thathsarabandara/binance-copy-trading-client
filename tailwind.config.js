/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffbf0',
          100: '#fef3e2',
          200: '#fde8c4',
          300: '#fcd89a',
          400: '#fac26e',
          500: '#f7a842',
          600: '#f09d2e',
          700: '#d97706',
          800: '#b45309',
          900: '#92400e',
        },
        accent: {
          yellow: '#fbbf24',
          white: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
