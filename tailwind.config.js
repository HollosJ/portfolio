module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        jurple: '#7700ff',
        'jurple-dark': '#5800bd',
        jrey: '#eee',
        'light-grey': '#d3d3d3',
      },
      scale: { 101: '101%' },
    },
    fontFamily: { mono: ['Fira Code', 'monospace'] },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
