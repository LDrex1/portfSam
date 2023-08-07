/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "white-lin":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%)",
        "white-lin2": "linear-gradient(#FFFFFF 0%, #FFFFFF 20%)",
        "green-rad": "radial-gradient(#0FADDF, #B3741700)",
        "dark-rad": "radial-gradient(#39546D, #15151500)",
      },
      colors: {
        primary1: "#0C3247",
        primary2: "#012760",
        bright: "#F5F5F5",
        dark: "#121212",
        grey: "#5B6061",
        purple: "#4859F2",
        linkedin: "#0A66C2",
        call: "#49B568",
        gmail: "#BB001B",
        "light-blue": "#D3E2F8",
        "sky-blue": "#F2FCFE",
        "bright-yellow": "#FFF9EE",
      },
      fontSize: {
        md: "1.25rem",
        "sub-head": "2.5rem",
        xl: "3rem",
        "2xl": "3.75rem",
        "3xl": "4rem",
      },
      boxShadow: {
        shade1: "0px 24px 50px -12px rgba(0, 52, 66, 0.50)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(theme("bgGradientDeg", {}), {
            10: "10deg",
            20: "20deg",
            30: "30deg",
            40: "40deg",
            50: "50deg",
            60: "60deg",
            80: "70deg",
            90: "80deg",
            100: "90deg",
            120: "120deg",
            145: "145deg",
            160: "160deg",
            170: "170deg",
          }),
        }
      );
    }),
  ],
};
