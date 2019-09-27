import { css } from '@emotion/core';

const cssTransitionTime = 5;

const ModalHolder = css`
	overflow-y: scroll;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 80;
`;

const ModalOverlay = active => css`
	width: 100%;
	height: 100%;
	background-color: var(--color-black);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 90;
	opacity: 0;
	transition: opacity .${cssTransitionTime}s ease-in-out;
	will-change: opacity;
	cursor: pointer;
	${active ? 'opacity: .88;' : ''}
`;

const ModalOutsideBox = active => css`
	background: #fff;
	box-shadow: 0 24px 24px -12px rgba(46,45,55,0.6);
	position: absolute;
	z-index: 100;
	bottom: auto;
	left: 0;
	right: auto;
	top: 40%;
	width: 100%;
	opacity: 0;
	${active ? 'top: 55px; opacity: 1;' : ''}
	transition: top .${cssTransitionTime}s ease-in-out, opacity .${cssTransitionTime}s ease-in-out;
	will-change: transform, opacity;

	@media screen and (min-width: 992px) {
		width: 750px;
		left: 50%;
		margin: 0 0 35px -375px;
		${active ? 'top: 15%;' : ''}
	}
`;

const ModalInsideBox = css`
	position: relative;
	width: 100%;
	height: 100%;
	display: block;
	padding: 28px 22px;


	@media screen and (min-width: 992px) {
		padding: 44px  35px;
	}
`;

const ModalInsideBoxButtons = css`
	display: flex;
	margin-top: 30px;
	justify-content: left;

	button + button {
		margin-left: 10px;
		background: transparent;
		border: 0;
		color: #f3123c;
		box-shadow: none;
		border: 1px solid transparent;
	}
`;

const ModalInsideBoxCloseBtn = css`
	position: absolute;
	top: -53px;
    right: 40px;
	width: 15px;
	height: 15px;
	cursor: pointer;

	&:before,
	&:after {
		position: absolute;
		left: 15px;
		content: ' ';
		height: 33px;
		width: 4px;
		background-color: #fff;
		transform: rotate(-45deg)
	  }

	&:before {
		transform: rotate(45deg);
	}

	@media screen and (min-width: 992px) {
		width: 32px;
		height: 32px;
		top: -70px;
		right: 0;
	}
`;

const ModalInsideBoxButton = css`
	width: 192px;
	box-shadow: 0 8px 12px -8px rgba(243, 18, 60, 0.6);
	border-radius: 8px;
	transition: all ease-in-out 0.3s;

	&:hover {
		box-shadow: none;
	}
`;

export {
	ModalInsideBox,
	ModalInsideBoxButton,
	ModalInsideBoxButtons,
	ModalInsideBoxCloseBtn,
	ModalHolder,
	ModalOverlay,
	ModalOutsideBox
};
