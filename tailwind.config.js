/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        normal: '#A8A979ff',
        fire: '#F18130ff',
        fighting: '#C03129ff',
        water: '#6990F1ff',
        flying: '#A891F1ff',
        grass: '#78C850ff',
        poison: '#A040A0ff',
        electric: '#F8D131ff',
        ground: '#E0C169ff',
        psychic: '#F95889ff',
        rock: '#B8A038ff',
        ice: '#99D8D9ff',
        bug: '#A9B920ff',
        dragon: '#7139F8ff',
        ghost: '#715899ff',
        dark: '#715948ff',
        steel: '#B8B8D0ff',
        fairy: '#EB97A9ff',
        unkown: '#69A190ff',
        shadow: '#715899ff',
      },
    },
  },
  plugins: [],
}

