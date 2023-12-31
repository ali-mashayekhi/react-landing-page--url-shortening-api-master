/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-custom": "hsl(0, 0%, 75%)",
        "gray-transparent-custom": "hsla(0, 0%, 75%, 0.3)",
        "grayish-violet-custom": "hsl(257, 7%, 63%)",
        "very-dark-blue-custom": "hsl(255, 11%, 22%)",
        "very-dark-violet-custom": "hsl(260, 8%, 14%)",
        "cyan-custom": "hsl(180, 66%, 49%)",
        "cyan-custom-tint": "#95e7e7",
        "dark-violet-custom": "hsl(257, 27%, 26%)",
        "dark-violet-custom-tint": "#3b3054",
        "red-custom": "hsl(0, 87%, 67%)",
      },

      backgroundImage: {
        "url-pattern-mobile": "url(../../assests/bg-shorten-mobile.svg)",
      },

      gridRow: {
        "span-7": "span 7 / span 7",
      },
    },
  },
  plugins: [],
};
