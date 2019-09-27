import { css } from '@emotion/core';

const ScholarshipCards = css`
	width: 100%;
	height: auto;
	margin-top: 32px;
`;

const ScholarshipCardsBtn = css`
	@media screen and (min-width: 992px) {
		height: 48px;
		font-size: 1.6rem;
		width: 113px;

		&:last-of-type {
			width: 178px;
		}
	}
`;

const ScholarshipCardsBtnHolder = css`
	padding-top: 24px;
	display: flex;
	justify-content: flex-end;

	button {
		margin-left: 12px;
	}
`;

const ScholarshipCardsInfo = css`
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid #eeeeee;
	padding-bottom: 24px;
	width: 100%;

	h3 {
		font-size: 1.6rem;
		font-weight: bold;
	}

	@media screen and (min-width: 992px) {
		align-items: center;
	}
`;

const ScholarshipCardsItem = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 16px 0;
	border-bottom: 2px solid #eeeeee;
	transition: border .2s ease-in-out;

	&:hover {
		border-color: #d3d3d3;
	}

	@media screen and (min-width: 992px) {
		cursor: pointer;
	}
`;

const ScholarshipCardsItemImg = css`
	width: 50%;
	height: 60px;
	padding: 0 24px;
	object-fit: contain;

	@media screen and (min-width: 992px) {
		width: 128px;
	}
`;

const ScholarshipCardsItemInfo = css`
	width: 50%;

	@media screen and (min-width: 992px) {
		width: calc(100% - 144px);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const ScholarshipCardsItemCourse = css`
	color: var(--color-secondary-blue);
	font-size: 1.6rem;
	line-height: 2.3rem;
	margin-bottom: 3px;
	width: 100%;

	span {
		font-size: 1.3rem;
		display: block;
		font-weight: 300;
		width: 100%;
		color: var(--color-black);
		margin-bottom: unset;
	}
`;

const ScholarshipCardsItemPrice = css`
	font-size: 1.6rem;
	margin-top: 19px;
	line-height: 2.3rem;
	display: block;
	width: 100%;

	@media screen and (min-width: 992px) {
		margin-top: unset;
		display: inline-table;
		text-align: right;
	}

	strong {
		color: var(--color-green);

		&:last-child {
			display: block;
		}
	}
`;

export {
	ScholarshipCards,
	ScholarshipCardsInfo,
	ScholarshipCardsItem,
	ScholarshipCardsItemImg,
	ScholarshipCardsItemInfo,
	ScholarshipCardsItemCourse,
	ScholarshipCardsItemPrice,
	ScholarshipCardsBtn,
	ScholarshipCardsBtnHolder
};
