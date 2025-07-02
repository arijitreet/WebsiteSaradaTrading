/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'shake': 'shake 0.5s ease-in-out',
        'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%': { 
            transform: 'translateY(0) scale(1)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0 30px rgba(245, 158, 11, 0.3)'
          },
          '100%': { 
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 40px rgba(245, 158, 11, 0.5)'
          },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        'bounce-in': {
          '0%': { 
            transform: 'scale(0.3) translateY(100px)',
            opacity: '0'
          },
          '50%': { 
            transform: 'scale(1.1) translateY(-10px)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scale(1) translateY(0)'
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}