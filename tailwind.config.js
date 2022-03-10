module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        jurple: '#7000ff',
        jrey: '#eee',
      },
      scale: { 101: '101%' },
    },
    fontFamily: { mono: ['Fira Code', 'monospace'] },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
