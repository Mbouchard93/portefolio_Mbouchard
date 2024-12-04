/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: { black: '#151414', blueLight: '#EAF7FC', blueDark: '#2B2B34', accent: '#D9F11C' },
			fontFamily: {
				logo: ['Geostar', 'serif'],
				heading: ['Courier Prime', 'serif'],
				body: ['Jura', 'serif']
			},
			boxShadow: {
				btnContact: '4px 4px 2px 0px #D9F11C',
				btnContactHover: '2px 2px 0px 0px #D9F11C',
				btnMedias: '6px 6px 2px 0px #2B2B34',
				btnMediasHover: '2px 2px 0px 0px #2B2B34'
			}
		}
	},

	plugins: []
};
