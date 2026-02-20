/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'cat-acquisition': 'var(--cat-acquisition)',
        'cat-activation': 'var(--cat-activation)',
        'cat-retention': 'var(--cat-retention)',
        'cat-revenue': 'var(--cat-revenue)',
        'cat-referral': 'var(--cat-referral)',
        vanity: 'var(--vanity)',
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
}
