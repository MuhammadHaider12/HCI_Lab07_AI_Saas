/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111312",
        paper: "#f5f5f0",
        lime: "#d8ff3e",
        lilac: "#b9a7ff"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"]
      },
      boxShadow: {
        card: "0 16px 40px rgba(17, 19, 18, .08)"
      }
    }
  },
  plugins: []
};
