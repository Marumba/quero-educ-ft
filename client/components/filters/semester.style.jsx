import { css } from '@emotion/core';

const SemesterFilterList = css`
	border: 1px solid var(--color-blue-secondary);
	border-radius: 5px;
	margin: 35px 0 30px;
	width: 100%;

	@media screen and (min-width: 992px) {
		display: flex;
		margin-left: auto;
		width: 585px;
	}
`;

const SemesterFilterListItem = chosen => css`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${chosen ? 'var(--color-blue-secondary)' : '#fff'};
	border-bottom: 1px solid var(--color-blue-secondary);
	color: ${chosen ? '#fff' : 'var(--color-blue-secondary)'};
	height: 48px;
	width: 100%;
	user-select: none;
	&:hover {
		background-color: ${!chosen ? 'var(--color-blue-main); color: #fff;' : ''};
	}
	transition: all .2s ease-in-out;

	button {
		display: block;
		height: 100%;
		font-size: 1.6rem;
		font-weight: 600;
		width: 100%;
		text-align: center;
		cursor: pointer;
	}

	&:first-of-type {
		border-radius: 5px 5px 0 0;
	}

	&:last-of-type {
		border-bottom: none;
		border-radius: 0 0 5px 5px;
	}

	@media screen and (min-width: 992px) {
		border-bottom: none;
		border-right: 1px solid var(--color-blue-secondary);
		height: 32px;
		width: calc(100% / 3);

		&:first-of-type {
			border-radius: 5px 0 0 5px;
		}

		&:last-of-type {
			border-right: none;
			border-radius: 0 5px 5px 0;
		}
	}
`;

export { SemesterFilterList, SemesterFilterListItem };
