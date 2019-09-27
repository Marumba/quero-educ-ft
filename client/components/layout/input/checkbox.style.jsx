import { css } from '@emotion/core';

const Checkbox = css`
	display: inline-block;
`;

const CheckboxLabel = checked => css`
	min-height: 16px;
	display: block;
	cursor: pointer;
	line-height: 1.6rem;
	font-size: 1.6rem;
	position: relative;
	padding-left: 16px;
	text-indent: 9px;

	&:before {
		width: 16px;
		height: 16px;
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		display: block;
		border: 1px solid #293133;
		border-radius: 2px;

		${checked
		? ` background: url('/img/icons/icon-check.svg') no-repeat scroll center center;
			background-size: 24px auto;
			border: none;
		`
		: ''}
	}
`;

const CheckboxTag = css`
	cursor: pointer;
	width: 16px;
	height: 16px;
	opacity: 0.01;
	position: absolute;
	top: 0;
	left: 0;
`;

export { Checkbox, CheckboxLabel, CheckboxTag };
