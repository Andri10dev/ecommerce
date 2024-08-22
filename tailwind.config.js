const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#03A9F5",
        "custom-yellow": "#FDBC16",
      },
    },
  },
  plugins: [flowbite.plugin(), require("rippleui")],
};
