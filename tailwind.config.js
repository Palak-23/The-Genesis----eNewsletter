/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        background: "#f5f5f5",
        primary: "#1a1a1a",
      },
      fontSize: {
        "6xl": ["4rem", "1"],
        "5xl": ["3rem", "1"],
        "4xl": ["2.5rem", "1.1"],
      },
    },
  },
  plugins: [],
};
