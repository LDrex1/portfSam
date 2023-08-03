/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primary1: "#0C3247",
        primary2: "#012760",
        bright: "#F5F5F5",
        dark: "#121212",
        grey: "#5B6061",
        "bright-yellow": "#FFF9EE",
      },
      fontSize: {
        md: "1.25rem",
        xl: "3rem",
        "2xl": "3.75rem",
        "3xl": "4rem",
      },
    },
  },
  plugins: [],
};
