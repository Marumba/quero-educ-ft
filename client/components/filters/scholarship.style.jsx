import { css } from '@emotion/core';

const ScholarshipFilter = css`
	width: 100%;
	margin-top: 32px;

	@media screen and (min-width: 992px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;

const ScholarshipFilterModality = css`
	width: 100%;
	margin-bottom: 32px;

	@media screen and (min-width: 992px) {
		width: 50%;
		padding-left: 7px;
	}
`;

const ScholarshipFilterSelect = css`
	margin-bottom: 27px;

	@media screen and (min-width: 992px) {
		width: 50%;
		padding-left: 7px;
	}
`;

const ScholarshipFilterRange = css`
	@media screen and (min-width: 992px) {
		width: 50%;
		padding-left: 7px;
	}
`;

export { ScholarshipFilter, ScholarshipFilterModality, ScholarshipFilterSelect, ScholarshipFilterRange };
