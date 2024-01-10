/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tangeri: ['"Tangerine"','cursive']
      }
    },
    animation: {
      marquee: 'marquee 15s linear infinite',
      "spin-slow" : "spin 40s linear infinite",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      }
    },
  },
  plugins: [],
}

