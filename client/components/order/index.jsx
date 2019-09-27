/** @jsx jsx */
import { jsx } from '@emotion/core';
import { uid } from 'react-uid';

import * as Style from './style';

function Order({ customStyle, label, onChange, options, value }) {
	return (
		<div css={[Style.Order, customStyle]}>
			<span css={Style.OrderLabel}>{label}</span>
			<div css={Style.OrderSelectHolder}>
				<select onChange={el => onChange(el.target.value)} value={value}>
					{options
						&& options.map(item => (
							<option key={'order-' + uid(item)} value={item.value} dataid={JSON.stringify({ key: item.key, deepType: item.deepKey, desc: item.desc, asc: item.asc })}>
								{item.title}
							</option>
						))}
				</select>
			</div>
		</div>
	);
}

export default Order;
