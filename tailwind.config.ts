import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    container: {
      center: true,
      // padding: "1rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        h1: ["5rem", { lineHeight: "7.5rem" }],
        h2: ["4rem", { lineHeight: "6rem" }],
        h3: ["3rem", { lineHeight: "4.5rem" }],
        h4: ["2.5rem", { lineHeight: "3.75rem" }],
        h5: ["2rem", { lineHeight: "3rem" }],
        h6: ["1.75rem", { lineHeight: "2.625rem" }],
      },
      colors: {
        "web-green": "#DA9060",
        "bityo": "#4ECE80",
        "body": "#788293",
        "body-dark": "rgb(149,156,177)",
        "txt-dark": "rgba(41,44,53)",
        primary: {
          "black-100": "#000000",
          "black-200": "#373737",
          "black-300": "#1C1C1C",
          "black-400": "#CECECE",
          "black-500": "#EEF0F6",
        },
        neutral: {
          white: "#FFFFFF",
          black: "#1A1A1A",
          900: "#3D3D3D",
          800: "#545454",
          700: "#6B6B6B",
          600: "#828282",
          500: "#999999",
          400: "#B0B0B0",
          300: "#C7C7C7",
          200: "#DEDEDE",
          100: "#F5F5F5",
          "tone-700": "#F2F3F5",
        },
        wireframe: {
          700: "#BCBACD",
        },
        func: {
          error: "#D82027",
          info: "#208BD8",
          warning: "#EDE405",
          success: "#20D880",
        },
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        "logo": "0px 0px 5px #000",
        "strong": "0px 4px 10px rgba(0, 0, 0, 0.3)",
        "light": "0px 2px 5px rgba(0, 0, 0, 0.1)"
      }
      
    },
  },
  plugins: [],
};

export default config;
