/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-custom": "hsl(0, 0%, 75%)",
        "grayish-violet-custom": "hsl(257, 7%, 63%)",
        "very-dark-blue-custom": "hsl(255, 11%, 22%)",
        "very-dark-violet-custom": "hsl(260, 8%, 14%)",
        "cyan-custom": "hsl(180, 66%, 49%)",
        "dark-violet-custom": "hsl(257, 27%, 26%)",
        "red-custom": "hsl(0, 87%, 67%)",
      },
    },
  },
  plugins: [],
};
