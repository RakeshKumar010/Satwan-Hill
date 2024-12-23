/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoColor: "#41622c",
        bgColor: "#fbf1e7",
      },
    },
  },
  plugins: [],
};
