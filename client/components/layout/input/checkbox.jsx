/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as Style from './checkbox.style';

function Checkbox({ checked, customStyle, onChange, htmlFor, label, value }) {
	return (
		<div css={[Style.Checkbox, customStyle]}>
			<label css={Style.CheckboxLabel(checked)} htmlFor={htmlFor}>
				<input css={Style.CheckboxTag} type="checkbox" value={value} checked={checked} onChange={el => onChange(el)} />
				{label}
			</label>
		</div>
	);
}

export default Checkbox;
