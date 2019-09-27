/* eslint-disable no-nested-ternary */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { uid } from 'react-uid';

import * as Style from './style';

function Score({ points, item }) {
	const score = points.toString();
	const keys = ['discount_percentage', 'enrollment_semester', 'full_price', 'price_with_discount', 'start_date'];

	const stars = [...new Array(5)].map((data, index) => {
		console.log(item[keys[index]]);

		return <span key={'score-start-' + uid(item[keys[index]])} css={Style.ScoreStar(index < score[0] ? 'full' : index == score[0] && score[2] ? 'half' : '')} />;
	});
	return <div css={Style.Score}>{stars}</div>;
}

export default Score;
