module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        jurple: '#7000ff',
        jink: '#e43f5a',
        javy: '#192446',
        jrey: '#eee',
      },
      scale: { 101: '101%' },
    },
    fontFamily: { mono: ['Fira Code', 'monospace'] },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
