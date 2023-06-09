/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      Red: "hsl(0, 100%, 74%)",
      Green: "hsl(154, 59%, 51%)",
      Blue: "hsl(248, 32%, 49%)",
      neutralDarkBlue: "hsl(249, 10%, 26%)",
      neutralGrayishBlue: "hsl(246, 25%, 77%)",
      neutralWhite: "#fff",
      neutralGray: "hsl(204, 8%, 76%);",
    },
    boxShadow: {
      xl: "0 7px 2px  rgba(0, 0, 0, 0.3)",
    },
  },
  plugins: [],
};
