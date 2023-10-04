/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
    white: "#ffffff",
    gray: '#D1D1D1',
    accentText: "#DF2935",
    baseText: "#2e2e2e",
    bg: "#F7DAD9",
    },
    customClasses: {
      factBox: 'p-2 font-medium border-2 border-accentText rounded-xl m-1 bg-bg',
    },
     fontFamily: {
      titillium: ["Titillium Web", "sans-serif" ]
     }
    },
  plugins: [], 
}

