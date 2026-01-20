/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000", // preto principal
          light: "#1a1a1a", // preto suave
          dark: "#0a0a0a", // preto profundo
        },
        secondary: {
          DEFAULT: "#2d2d2d", // cinza escuro
          light: "#4a4a4a", // cinza médio
          dark: "#1a1a1a", // cinza muito escuro
        },
        background: {
          dark: "#0a0a0a", // fundo preto
          light: "#f5f5f5", // branco gelo
        },
        accent: {
          yellow: "#fbbf24", // âmbar moderno
          purple: "#8b5cf6", // roxo vibrante
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
