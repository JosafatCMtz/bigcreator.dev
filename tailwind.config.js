/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "smoky-black": "#101010",
      cultured: "#F8F8F8",
      "cyber-yellow": "#FFD51E",
    },
    fontFamily: {
      headline: ["Now Bold"],
      subheadline: ['"Now Medium"'],
      body: ['"Now"'],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('../images/header-image.jpeg')",
      },
      colors: {
        cultured: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
