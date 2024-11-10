import type { Config } from 'tailwindcss';
import { COLORS } from './Constants';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primaryOrange: COLORS.PRIMARY_COLOR,
        darkBlue: COLORS.DARK_BLUE,
        primaryBlue: COLORS.PRIMARY_BLUE,
      },
      screens: {
        '2xl': '1536px',
        '3xl': '1920px',
      },
      fontFamily: {
        montagu: ['"MontaguSlab"', 'sans-serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
