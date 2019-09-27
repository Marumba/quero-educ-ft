import { css, keyframes } from '@emotion/core';

const loaderSpin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const Loader = css`
	width: calc(100% - 34px);
	z-index: 80;
	position: fixed;
	top: 50%;
	left: 17px;
	display: block;
	transition: opacity 250ms ease;
`;

const LoaderOverlay = css`
	width: 100%;
	height: 100%;
	background-color: ;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 90;
	opacity: 0;
	transition: opacity .5s ease-in-out;
	will-change: opacity;
	opacity: .88;
`;

const LoaderInner = css`
	width: 100%;
	position: relative;
	z-index: 1;
	padding: 30px 0;
	top: 0;
	left: 0;
`;

const LoaderSpin = css`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 5px solid rgba(255, 255, 255, 0.2);
	border-top-color: $color_19;
	animation: ${loaderSpin} 1000ms infinite linear;
	display: block;
	margin: 0 auto;
`;

export { Loader, LoaderInner, LoaderSpin, LoaderOverlay };
