import { css } from '@emotion/core';

const Score = css`
	display: flex;
	justify-content: space-between;
	width: 88px;
	margin: -2px 10px 0 10px;
`;

const ScoreStar = star => css`
	width: 14px;
	height: 14px;
	display: block;
	background: url('/img/icons/icon-star-empty.svg') no-repeat center;
	background-size: auto 100%;

	${star === 'half' ? 'background: url("/img/icons/icon-star-half-yellow.svg") no-repeat center;' : ''}
	${star === 'full' ? 'background: url("/img/icons/icon-star-yellow.svg") no-repeat center;' : ''}
`;

export { Score, ScoreStar };
