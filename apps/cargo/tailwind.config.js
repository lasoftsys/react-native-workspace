// apps/mobile/tailwind.config.js

const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#41D5FB',
        secondary: '#FB4A46',
        dark: '#222B45',
        grey: '#E3E8F2',
      },
    },
  },
  plugins: [],
};
