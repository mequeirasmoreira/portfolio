/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Adiciona suporte para todos os arquivos dentro da pasta app
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Habilita o modo escuro usando classes
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['var(--font-urbanist)'],
      },
      colors: {
        dark: {
          background: '#0d0d0de6',
          text: '#ffffff',
        },
        light: {
          background: '#f4f4f4',
          text: '#000000',
        },
      },
    },
  },
  plugins: [],
};