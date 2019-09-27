import { css } from '@emotion/core';

const Icon = type => css`
	display: flex;
	align-items: center;
	justify-contents: center;

	${type
		? `&:before {
				content: "";
				display: block;
				width: 24px;
				height: 24px;
				background: url('/img/icons/icon-${type}.svg') no-repeat center;
				background-size: 24px auto;
			}`
		: ''
	}
`;

export { Icon };
