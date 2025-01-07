/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-pink": "#f8b3d1", // Light pink
        "rose-pink": "#ff6b81", // Medium rose pink
        "dark-pink": "#c72c4e", // Dark pink
        "pale-rose": "#f7c5d5", // Pale rose for backgrounds
        "white-snow": "#fefefe", // Almost white
        "blush-white": "#f9f9f9", // Soft white
      },
      
      scale: {
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
        '104': '1.04',
      },
    },
  },
  plugins: [],
}

