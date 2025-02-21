import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        terracotta: '#F87060',
      },
      fontFamily: {
        typewolf: ['Typewolf', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
