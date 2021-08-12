import { css } from '@emotion/core';

import fullStarIcon from '@images/icons/icon-star-yellow.svg';
import halfStarIcon from '@images/icons/icon-star-half-yellow.svg';

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
    ${star === 'half' && `background: url(${halfStarIcon}) no-repeat center;`}
    ${star === 'full' && `background: url(${fullStarIcon}) no-repeat center;`}
    background-size: auto 100%;
`;

export { Score, ScoreStar };
