import type { Config } from 'tailwindcss'

import fluid, { extract, fontSize, screens } from 'fluid-tailwind'

export default {
  content: {
    extract,
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  },
  plugins: [
    fluid
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
    fontSize,
    screens,
  },
} satisfies Config
