import { css } from '@emotion/core';

const Button = (bgColor, borderColor) => css`
	height: 48px;
	font-size: 1.4rem;
	font-weight: 600;
	border-radius: 5px;
	padding: 0 25px;
	text-align: center;
	cursor: pointer;
	width: 65%;
	max-width: 250px;

	background-color: ${bgColor || 'transparent'};
	border: 1px solid ${borderColor || 'transparent'};

	&:hover {
		background-color: var(--color-yellow-hover-light);
		border-color: var(--color-yellow-main);
	}
	transition: all .2s ease-in-out;

	&:disabled {
		color: #83888a;
		background-color: #cacccd;
		border-color: #a6a9aa;
		pointer-events: none;
	}

	@media screen and (min-width: 992px) {
		width: 122px;
		height: 32px;
		padding: 0 15px;
	}
`;

const ButtonSecondaryCta = (borderColor, color) => css`
	background-color: transparent;
	border-color: ${borderColor || 'transparent'};
	color: ${color};
	padding: 0;
	width: 32%;
	max-width: 123px;
	&:hover {
		background-color: var(--color-blue-hover-medium);
		border-color: ${borderColor || 'transparent'};
		color: #fff;
	}
	transition: all .2s ease-in-out;

	@media screen and (min-width: 992px) {
		width: 86px;
		text-align: center;
		padding: 0;
	}
`;

export { Button, ButtonSecondaryCta };
