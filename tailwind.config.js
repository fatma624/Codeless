module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        light_blue: { 600: "#1099e1", 900: "#0a5699" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
        gray: {
          50: "#fafafa",
          100: "#f2f2f2",
          400: "#c2c2c2",
          500: "#919191",
          600: "#757575",
          "500_02": "#999999",
          "500_99": "#99999999",
          "500_01": "#acacac",
        },
        blue_gray: { 100: "#d9d9d9", 900: "#363636" },
        blue: { 500: "#1fa6ef" },
        teal: { 50: "#dbeff7" },
      },
      boxShadow: { xs: "-1px -1px  10px 0px #00000026", sm: "0px 4px  10px 0px #00000026" },
      fontFamily: { lamasans: "Lama Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
