/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // <-- include all React files
  ],
  theme: {
    extend: {
      rotate:{
        '-2' : '-2deg',
      }
    },
  },
  plugins: [],
}
