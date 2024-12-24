/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoColor: "#e1a61c",
        bgColor: "#fbf1e7",
      },
    },
  },
  plugins: [],
};
