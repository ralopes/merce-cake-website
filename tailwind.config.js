/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'peach-rose': '#F08BAA',
        'cream-white': '#FFF3E8',
        'soft-gold': '#CC9520',
        'light-blush': '#FCD0D7',
        'warm-white': '#FFFAF5',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      boxShadow: {
        clay: '6px 6px 14px rgba(0,0,0,0.13), -4px -4px 10px rgba(255,255,255,0.85), inset 2px 2px 5px rgba(255,255,255,0.65), inset -2px -2px 6px rgba(0,0,0,0.07)',
        'clay-lg': '8px 8px 18px rgba(0,0,0,0.15), -5px -5px 12px rgba(255,255,255,0.85), inset 3px 3px 6px rgba(255,255,255,0.7), inset -3px -3px 8px rgba(0,0,0,0.08)',
        'clay-sm': '3px 3px 8px rgba(0,0,0,0.1), -2px -2px 6px rgba(255,255,255,0.8), inset 1px 1px 3px rgba(255,255,255,0.5), inset -1px -1px 3px rgba(0,0,0,0.06)',
        glass: '0 8px 32px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
