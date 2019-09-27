/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as Style from './style';

function Container({ children, customStyle }) {
	return (
		<div css={[Style.Container, customStyle]}>
			{children}
		</div>
	)
}

export default Container;
