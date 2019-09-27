import { css } from '@emotion/core';

export const Theme = {
	colors: {
		black: '#1F2D30',
		blueMain: '#18ACC4',
		blueSecondary: '#007A8D',
		gray: '#FBFBFB',
		green: '#0FA866',
		yellowMain: '#FDCB13',
		yellowSecondary: '#DE9E1F'
	},
	font: {
		small: '1.3rem',
		regular: '1.6rem',
		large: '1.8rem',
		h1: '3.2rem',
		h2: '2.8rem',
		h3: '2.4rem',
		h4: '2.0rem',
		h5: '1.6rem',
		h6: '1.4rem'
	},
	mediaQuery: {
		desktop: 'min-width: 992px',
		mobile: 'max-width: 991px'
	},
	radius: {
		small: '2px',
		regular: '5px',
		large: '8px',
		round: '50%'
	}
};

export const DefaultStyle = css`
	:root {
		--color-black: #1F2D30;
		--color-blue-main: #18ACC4;
		--color-blue-secondary: #007A8D;
		--color-blue-hover-light: #08c9e9;
		--color-blue-hover-medium: #0494ac;
		--color-gray: #FBFBFB;
		--color-green: #0FA866;
		--color-yellow-main: #FDCB13;
		--color-yellow-secondary: #DE9E1F;
		--color-yellow-hover-light: #ffee00;
		--default-font-family: proxima-nova, sans-serif;
	}

	html {
		font-size: 10px;
	}

	body {
		width: 100%;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		font-weight: 600;
	}
`;

export const DefaultStyleMain = css`
	min-height: calc(100vh - 320px);
	width: 100%;
	padding-bottom: 40px;

	@media screen and (${Theme.mediaQuery.desktop}) {
		min-height: calc(100vh - 437px);
	}
`;

export const DefaultStyleContainer = css`
	background-color: var(--color-gray);
	min-height: 100vh;
	width: 100%;
`;
