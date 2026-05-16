import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { leaf:'#6F7651', clay:'#D9823B', rose:'#C97886', cream:'#F7EFE3', ink:'#2E3320', card:'#FFF8EE' },
    fontFamily: { serif:['var(--font-serif)'], sans:['var(--font-sans)'] },
    boxShadow: { soft:'0 24px 80px rgba(46,51,32,.14)' }
  } },
  plugins: []
};
export default config;
