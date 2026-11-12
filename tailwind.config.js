/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070b",
          900: "#090c13",
          800: "#0f1420",
          700: "#161d2d",
          600: "#222b3f",
        },
        flux: {
          cyan: "#22e4f2",
          teal: "#14b8c7",
          red: "#ff3d57",
          violet: "#7c5cff",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        glow: { "0%,100%": { opacity: ".55" }, "50%": { opacity: "1" } },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
