import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   sm: "320px",
    //   ...defaultTheme.screens,
    //   // "2xl": { max: "1535px" },
    //   // // => @media (max-width: 1535px) { ... }

    //   // xl: { max: "1279px" },
    //   // // => @media (max-width: 1279px) { ... }

    //   // lg: { max: "1023px" },
    //   // // => @media (max-width: 1023px) { ... }

    //   // md: { max: "767px" },
    //   // // => @media (max-width: 767px) { ... }

    //   // sm: { max: "639px" },
    //   // sm: { max: "480px" },
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#f77a40",
      },
      fontFamily: {
        bebas: "BebasNeue",
      },
    },
  },
  plugins: [],
};

export default withMT(config);
