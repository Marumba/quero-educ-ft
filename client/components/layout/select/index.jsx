/** @jsx jsx */
import { jsx } from '@emotion/core';
import { uid } from 'react-uid';

import Label from '@layout/label';

import * as Style from './style';

function Select({ customStyle, defaultValue, defaultTitle, htmlFor, label, onChange, options, value }) {
	return (
		<div css={[Style.Select, customStyle]}>
			<Label htmlFor={htmlFor}>
				{label}
			</Label>
			<div css={Style.SelectHolder}>
				<select css={Style.SelectTag} onChange={el => onChange(el.target.value)} value={value}>
					<option hidden value={defaultValue || ''}>
						{defaultTitle || ''}
					</option>
					{options
						&& options.map(item => (
							<option key={'option-' + uid(item)} value={item.value}>
								{item.title}
							</option>
						))}
				</select>
			</div>
		</div>
	);
}

export default Select;
