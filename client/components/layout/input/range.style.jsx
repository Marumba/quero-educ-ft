import { css } from '@emotion/core';

const rangeThumb = css`
	border-radius: 50%;
	cursor: pointer;
	border: 2px solid var(--color-blue-main);
	background-color: #fff;
	width: 26px;
	height: 26px;
	appearance: none;
	margin-top: -11px;
`;

const rangeTrack = css`
	width: 100%;
	height: 4px;
	appearance: none;
	border-radius: 3px;
	background-color: var(--color-blue-main);
	margin: 12px 0;
`;

const Range = css`
	width: 100%;
`;

const RangeTag = css`
	width: 100%;
	appearance: none;
	padding-top: 15px;

	&::-moz-range-track {
		${rangeTrack}
	}

	&::-moz-range-thumb {
		${rangeThumb}
	}

	&::-ms-track {
		${rangeTrack}
	}

	&::-ms-thumb {
		${rangeThumb}
	}

	&::-webkit-slider-runnable-track {
		${rangeTrack}
	}

	&::-webkit-slider-thumb {
		${rangeThumb}
	}

`;

const RangeValue = css`
	width: 100%;
	font-size: 1.6rem;
	display: block;
	padding-top: 3px;
`;

export { Range, RangeTag, RangeValue };
