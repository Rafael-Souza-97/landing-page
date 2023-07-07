/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'great-vibes': ['Great Vibes', 'cursive'],
      'raleway': ['Raleway', 'cursive'],
      'barlow': ['Barlow', 'sans-serif']
    },
    extend: {
      spacing: {
        '22': '98px',
        '750': '750px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#0b79f2",
        secondary: "#f7fafc",
        background: "#e9eefc",
      },
    },
  },
  plugins: [],
}
