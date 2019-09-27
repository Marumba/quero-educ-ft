/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {Fragment} from 'react'

import * as Style from './style';

function Loader() {
	return (
		<Fragment>
			<div css={Style.LoaderOverlay} />
			<div css={Style.Loader}>
				<div css={css`display: block;`}>
					<div className={Style.LoaderSpin}>&nbsp;</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Loader;
