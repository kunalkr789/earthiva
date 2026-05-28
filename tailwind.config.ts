import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f6efe5',
        sand: '#e8d9c5',
        clay: '#c48a5a',
        bark: '#5d4532',
        leaf: '#233929',
        leafDark: '#16241a',
        olive: '#6f804a',
        sage: '#a4b28f',
        moss: '#4f673f',
        petal: '#cb8ea0',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(47, 34, 22, 0.08)',
        lift: '0 28px 70px rgba(47, 34, 22, 0.14)',
      },
      backgroundImage: {
        'soil-glow': 'radial-gradient(circle at top, rgba(233, 197, 146, 0.45), transparent 42%)',
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};

export default config;
