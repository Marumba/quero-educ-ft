/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as Style from './button.style';

function Button(props) {
	const { customStyle, secondaryCta, type, bgColor, borderColor, color, children, itemId, onClick, ...otherProps } = props;
	return (
		<button
			type={type}
			css={[Style.Button(bgColor, borderColor), secondaryCta ? Style.ButtonSecondaryCta(borderColor, color) : undefined, customStyle]}
			onClick={() => onClick(itemId)}
			{...otherProps}
		>
			{children}
		</button>
	);
}

export default Button;
