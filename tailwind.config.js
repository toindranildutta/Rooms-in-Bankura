/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#B6D6CC", // light blue (hover effect)
        secondary: "#E4FFDF", // light green
        
      },
    },
  },
  plugins: [],
}

