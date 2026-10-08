module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { navy: '#0a0a0a', deep: '#111111', panel: '#161616', ice: '#ef2b36', ice2: '#ff4d57', chrome: '#f2f1ec' },
    fontFamily: { display: ['var(--font-display)', 'system-ui', 'sans-serif'], body: ['var(--font-body)', 'system-ui', 'sans-serif'] },
  } },
  plugins: [],
};
