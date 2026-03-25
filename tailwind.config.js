const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.html"],
  safelist: ["active"],
  theme: {
    fontFamily: {
      header: ["Raleway", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },

    colors: {
      transparent: "transparent",
      primary: "#000000",
      secondary: "#121212",
      white: "#ffffff",
      black: "#f5f5f5",
      yellow: "#f9e71c",
      lila: "#2a2a2a",
      "grey-10": "#d1d1d1",
      "grey-20": "#b8b8b8",
      "grey-30": "#9c9c9c",
      "grey-40": "#7d7d7d",
      "grey-50": "#111111",
      "grey-60": "#1a1a1a",
      "grey-70": "#2d2d2d",
      "hero-gradient-from": "rgba(0, 0, 0, 0.92)",
      "hero-gradient-to": "rgba(18, 18, 18, 0.92)",
      "blog-gradient-from": "#2a2a2a",
      "blog-gradient-to": "#000000",
    },

    container: {
      center: true,
      padding: "1rem",
    },

    shadows: {
      default: "0 2px 18px rgba(0, 0, 0, 0.06)",
      md: "0 -3px 36px rgba(0, 0, 0, 0.12)",
    },

    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        42: "10.5rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        188: "47rem",
        190: "48rem",
        194: "49rem",
        200: "50rem",
        204: "51rem",
      },
      zIndex: {
        "-1": "-1",
        60: "60",
        70: "70",
      },
      inset: {
        "2/5": "40%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
