import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/container/**/*.{js,ts,jsx,tsx,mdx}'
    
  ],
  theme: {
    extend: {
      fontFamily: {
        regular :['poppins-regular'],
        medium :['poppins-medium'],
        bold :['poppins-bold'],
        extrabold:['poppins-extrabold'],
        thin: ['poppins-thin'],
        italic : ['poppins-italic'],
        semibold : ['poppins-semibold']
      },
      colors: {
        primary: "#FFFAE0",
        secondary: "#8EFFB9",
      }
    },
  },
  plugins: [],
}
export default config
