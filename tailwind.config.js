/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#146EB4",
        white: "#FFFFFF",
        black12: "#1A181E",
        black30: "#4D4D4D",
        black98: "#FAFAFA",
        black95: "#F2F2F2",
        black85: "#D9D9D9",
      },
      fontFamily: {
        galanoReg: "galanoReg",
        galanoMed: "galanoMed",
        galanoSB: "galanoSB",
      },
    },
  },
  plugins: [],
};
