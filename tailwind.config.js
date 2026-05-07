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
        'azure-blue': '#0078D4',
        'azure-light': '#50a8e8',
        'slate-dark': '#1e293b',
        'slate-darker': '#0f172a',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.7s ease-out both',
        'fadeInLeft': 'fadeInLeft 0.7s ease-out both',
        'fadeInRight': 'fadeInRight 0.7s ease-out both',
        'scaleIn': 'scaleIn 0.5s ease-out both',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradient 4s ease infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'draw-line': 'drawLine 1.5s ease-out both',
        'ping-slow': 'ping 2.5s cubic-bezier(0,0,0.2,1) infinite',
        'spin-slow': 'spin 10s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(4deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-3deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.75)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 15px rgba(0,120,212,0.4),0 0 30px rgba(0,120,212,0.1)' },
          '50%': { boxShadow: '0 0 35px rgba(0,120,212,0.9),0 0 70px rgba(0,120,212,0.3)' },
        },
        drawLine: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}