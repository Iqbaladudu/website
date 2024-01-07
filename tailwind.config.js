/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#009bff",

          secondary: "#9a2000",

          accent: "#bac300",

          neutral: "#010d16",

          "base-100": "#1a2724",

          info: "#009ccc",

          success: "#00974c",

          warning: "#ffbb00",

          error: "#ff7e8f",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
