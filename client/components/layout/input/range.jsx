/** @jsx jsx */
import { jsx } from '@emotion/core';

import Label from '@layout/label';
import { numberToCurrency } from '@helpers/utils';

import * as Style from './range.style';

function Range({ customStyle, label, max, min, onChange, value }) {
	return (
		<div css={[Style.Range, customStyle]}>
			<Label>
				{label}
			</Label>
			<span css={Style.RangeValue}>R${numberToCurrency(parseInt(value))}</span>
			<input css={Style.RangeTag} type="range" min={min} max={max} value={value} onChange={el => onChange(el)} />
		</div>
	);
}

export default Range;
