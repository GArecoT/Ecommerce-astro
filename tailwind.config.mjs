const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#23395B",
          "secondary": "#C49991",
          "accent": "#88292F",
          "neutral": "#161925",
          "base-100": "#F7F7FF",
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: [
          "Montserrat",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
};
