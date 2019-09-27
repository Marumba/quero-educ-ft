/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as Style from './style';

function Label({ children, customStyle, htmlFor }) {
	return (
		<label css={[Style.Label, customStyle]} htmlFor={htmlFor}>
			{children}
		</label>
	);
}

export default Label;
