// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      phone: "576px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
