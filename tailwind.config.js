/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-primary-blue-saturated': 'hsl(212, 100%, 50%)',
        'app-primary-lm-blue-grayish': 'hsl(217, 20%, 51%)',
        'app-primary-lm-blue-desaturated': 'hsl(217, 35%, 45%)',
        'app-primary-lm-gray-dark': 'hsl(217, 21%, 21%)',
        'app-neutral-gray-lightest': 'hsl(227, 100%, 98%)',
        'app-primary-dm-gray-dark': 'hsl(220, 40%, 13%)',
        'app-primary-dm-blue-dark': 'hsl(222, 41%, 20%)',
      },
    },
  },
  plugins: [],
};
