import { css } from '@emotion/core';

const PageTitle = css`
	font-size: 3.3rem;

	@media screen and (min-width: 992px) {
		font-size: 4rem;
	}
`;

const PageSubTitle = css`
	font-size: 1.6rem;
	line-height: 2.5rem;
	margin-top: 15px;
`;

export { PageSubTitle, PageTitle };
