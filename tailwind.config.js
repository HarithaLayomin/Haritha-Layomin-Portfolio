/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azure-blue': '#0078D4',
        'slate-dark': '#1e293b',
        'slate-darker': '#0f172a',
      },
    },
  },
  plugins: [],
}