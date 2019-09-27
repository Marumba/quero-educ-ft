/* eslint-disable no-nested-ternary */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as Style from './style';

function Score({ points, item }) {
	const score = points.toString();

	const stars = [...new Array(5)].map((data, index) => {
		return <span css={Style.ScoreStar(index < score[0] ? 'full' : index == score[0] && score[2] ? 'half' : '')} />;
	});
	return <div css={Style.Score}>{stars}</div>;
}

export default Score;
