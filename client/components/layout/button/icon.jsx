/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

import * as Style from './icon.style';

function Icon({ name, type, link, customStyle, children }) {
	if (type === 'custom' && link) {
		return (
			<a href={link} css={[Style.Icon(name), customStyle]}>
				{children}
			</a>
		);
	}

	if (link) {
		return (
			<Link to={link} css={[Style.Icon(name), customStyle]}>
				{children}
			</Link>
		);
	}

	return (
		<span css={[Style.Icon(name), customStyle]}>
			{children}
		</span>
	);
}

export default Icon;
