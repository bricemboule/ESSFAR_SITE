/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                tangeri: ['"Tangerine"', "cursive"],
                messiri: ["El Messiri", "sans-serif"],
                corne: ["Cormorant Infant", "sans-serif"],
            },
        },
        animation: {
            marquee: "marquee 15s linear infinite",
            "spin-slow": "spin 40s linear infinite",
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
                "0%": { transform: "translateX(0%)" },
                "100%": { transform: "translateX(-100%)" },
            },
        },
    },
    plugins: [],
};
