/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
    theme: {
        screens: {
            phone: "360px",
            // => @media (min-width: 360px) { ... }
            sm: "440px",
            // => @media (min-width: 640px) { ... }

            md: "660px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
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
