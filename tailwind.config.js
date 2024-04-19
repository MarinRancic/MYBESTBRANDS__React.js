/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        54: "13.5rem",
      },
      colors: {
        price: "#797979",
        disPrice: "#e13232",
        lPrice: "#B8B8B8",
        labelHover: "#ff00e7",
        detailsDiscount: "#9B9B9B",
        detailsText: "#A5A5A5",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      fontSize: {
        mini: "10px",
      },
      screens: {
        "2xl": "1550px",
        'ml': "890px",
      },
    },
  },
  plugins: [],
};
