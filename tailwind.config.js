/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./project/*.{html,js}"],
  theme: {
    screens: {
      sm: "450px",
      sd: "542px",
      ma: "590px",
      my: "700px",
      md: "891px",
      cd: "996px",
      mw: "1060px",
      vd: "1183px",
      lg: "1330px",
      xl: "1440px",
    },
    extend: {
      margin: {
        100: "60rem",
      },

      spacing: {
        thirty: "30%",
        seven: "66.5%",
        four: "49%",
        vs: "95rem",
        small: "115rem",
        med: "290rem",
        fa: "70px",
      },
      colors: {
        white: "#ffffff",
        green: "#2c8139",
        gray: "#686c6f",
        lightGreen: "#39b54a",
        text1: "#8087a6",
        lightGray: "#e6e6e6",
        imgGray: "#686868",
        lightBlack: "#4d4a44",
        partBlack: "#697272",
        blackfirst: "#151515",
        blacksecond: "#121212",
        lastBlack: "#0c0c0c",
      },
      backgroundImage: {
        "header-img": "url('images/alberto-bobbera.jpg')",
        "img-black": "url('images/black-gold-marble.jpg')",
        "black-image": "url('images/luxury-abstract.avif')",
      },
    },
  },
  plugins: [],
};
