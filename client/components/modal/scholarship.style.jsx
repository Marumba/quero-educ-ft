import { css } from '@emotion/core';

const ScholarshipModalTitle = css`
	font-weight: 600;
	font-size: 2.8rem;
	margin-bottom: 10px;
`;

const ScholarshipModalParagraph = css`
	font-size: 1.6rem;
`;

const ScholarshipModalBtns = css`
	width: 100%;
	padding-top: 24px;
	display: flex;
	justify-content: space-between;

	@media screen and (min-width: 992px) {
		justify-content: flex-end;

		button {
			margin-left: 12px;
		}
	}
`;

export { ScholarshipModalTitle, ScholarshipModalParagraph, ScholarshipModalBtns };
