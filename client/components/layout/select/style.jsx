import { css } from '@emotion/core';

const Select = css`
	width: 100%;
`;

const SelectHolder = css`
	position: relative;
	border: 1px solid #cacdcd;
	border-radius: 5px;
	width: 100%;
	height: 48px;

	&:after {
		content: '';
		position: absolute;
		top: 2px;
		right: 1px;
		width: 34px;
		height: 44px;
		display: block;
		background: #fff url('/img/icons/icon-arrow-down-gray.svg') no-repeat center left 12px;
		background-size: 10px auto;
		border-radius: 0 5px 5px 0;
	}
`;

const SelectTag = css`
	position: relative;
	z-index: 10;
	background-color: transparent;
	font-size: 1.6rem;
	width: 100%;
	height: 100%;
	border-radius: 5px;
	padding: 0 28px 0 14px;
	cursor: pointer;
`;

export { Select, SelectHolder, SelectTag };
