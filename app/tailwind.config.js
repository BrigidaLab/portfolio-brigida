/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'Neue Montreal' replacement (using Inter/Instrument as fallback)
        sans: ['"Instrument Sans"', 'Inter', 'sans-serif'],
        // Actual font found in dump for "UX Designer" tags
        mono: ['"JetBrains Mono"', 'monospace'],
        // Alternative for "Denim INK"
        serif: ['"Nanum Myeongjo"', 'serif'],
      },
      colors: {
        background: '#fefefa', // Exact match from dump
        text: '#1d1d1d',       // Exact match from dump
        accent: '#00c047',     // Green circle
        primary: '#2060df',    // Blue token
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, transparent 0%, #fefefa 100%)',
      }
    },
  },
  plugins: [],
}
