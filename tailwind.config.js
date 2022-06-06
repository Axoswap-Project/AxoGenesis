module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#070000',
      'rose': '#E42F7AD2',
      'purple': '#A80BAD',
      'fuschia': '#EE97DB',
    },
    extend: {
      fontFamily: {
        PhantomRush: 'PhantomRush'
      },
      animation: {
        bounce: 'bounce 0.3s infinite',
        wiggle: 'wiggle 1s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
          transform: 'scale(1.2) rotate(7deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(7deg)',
          },
      },
    },
  },
},

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}