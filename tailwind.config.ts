import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	colors: {
  		beige: {
  			'100': '#F8F4F0',
  			'500': '#98908B'
  		},
  		grey: {
  			'100': '#F2F2F2',
  			'500': '#696868',
  			'900': '#201F24'
  		},
  		secondary: {
  			green: '#277C78',
  			yellow: '#F2CDAC',
  			cyan: '#82C9D7',
  			navy: '#626070',
  			red: '#C94736',
  			purple: '#826CB0'
  		},
  		other: {
  			purple: '#AF81BA',
  			turquoise: '#597C7C',
  			brown: '#93674F',
  			magneta: '#934F6F',
  			blue: '#3F82B2',
  			navyGrey: '#97A0AC',
  			armyGreen: '#7F9161',
  			gold: '#CAB361',
  			orange: '#BE6C49'
  		},
  		white: '#FFFFFF'
  	},
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
