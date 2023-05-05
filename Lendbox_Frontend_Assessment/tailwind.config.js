/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '480px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '481px', 'max': '768px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '769px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
  },
  plugins: [
    require('tailwindcss')
  ],
}

