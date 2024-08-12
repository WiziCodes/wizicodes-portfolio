/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xl: { max: "1220px" },
      lg: { max: "1023px" },
      md: { max: "750px" },
      sm: { max: "340px" },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      League: ["League Gothic", "sans-serif"],
    },
  },
  plugins: [],
};
