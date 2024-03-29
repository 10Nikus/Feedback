/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "450px",
      sm: "660px",
      md: "768px",
      lg: "993px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lilac: "hsla(282, 83%, 52%, 1)",
        blue: "hsla(230, 76%, 59%, 1)",
        navyBlue: "hsla(230, 31%, 31%, 1)",
        pastelPurple: "hsla(231, 100%, 97%, 1)",
        lightPastel: "hsla(230, 60%, 98%, 1)",
        darkNavy: "hsla(231, 33%, 34%, 1)",
        lightGrey: "hsla(224, 20%, 49%, 1)",
        peach: "hsla(14, 83%, 74%, 1)",
        lightBlue: "hsla(204, 94%, 68%, 1)",
        red: "hsla(0, 67%, 53%, 1)",
        tealBlue: "hsla(230, 100%, 91%, 1)",
      },
      backgroundImage: {
        descHeader: "url('/desc-background-header.png')",
        mobHeader: "url('/mob-background-header.png')",
        tabHeader: "url('/tab-background-header.png')",
      },
    },
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },
  },
  plugins: [],
};
