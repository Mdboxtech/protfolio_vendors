import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          400: '#34D399',
          500: '#22C55E',
          600: '#16A34A',
        },
        accent: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          400: '#10B981',
          500: '#059669',
          600: '#047857',
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
} satisfies Config
