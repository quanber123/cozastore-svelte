/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '24px'
			}
		},
		screens: {
			mobile: '380px',
			mobileLg: '480px',
			tablet: '640px',
			laptop: '780px',
			desktop: '1280px'
		},
		colors: {
			black: 'var(--black)',
			blue: 'var(--blue)',
			boldBlue: 'var(--bold-blue)',
			gray: 'var(--gray)',
			green: 'var(--green)',
			bgGray: 'var(--bg-gray)',
			lightGreen: 'var(--light-green)',
			lightGray: 'var(--light-gray)',
			lightRed: 'var(--light-red)',
			bgRed: 'var(--bg-red)',
			mediumGray: 'var(--medium-gray)',
			semiBoldGray: 'var(--semi-gray)',
			darkGray: 'var(--bold-gray)',
			darkRed: 'var(--dark-red)',
			darkBlue: 'var(--dark-blue)',
			purple: 'var(--purple)',
			red: 'var(--red)',
			yellow: 'var(--yellow)',
			white: 'var(--white)',
			overlayGray: 'var(--overlay-gray)',
			overlayBlack: 'var(--overlay-black)',
			overlayPurple: 'var(--overlay-purple)'
		},
		fontSize: {
			sm: '14px',
			base: '16px',
			md: '18px',
			lg: '24px',
			xl: '28px',
			'2xl': '36px',
			'3xl': '50px',
			'4xl': '60px'
		},
		fontWeight: {
			thin: '300',
			normal: '400',
			medium: '500',
			semiBold: '600',
			bold: '700'
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
