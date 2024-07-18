/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': [ {'min': '109px', 'max': '767px'},
   
    ],

    'laptop': [ {'min': '768px', 'max': '1700px'},
    {'min': '1110px'}
  ],

  'desktop': [ {'min': '1025', 'max': '2000px'},
  {'min': '2100px'}
],
    
    },

    extend: {
      fontFamily: {
        'roboto':["Roboto", "sans-serif"], 
      },
    },
  },
  plugins: [],
}

