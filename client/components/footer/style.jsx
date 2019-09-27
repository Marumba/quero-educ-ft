import { css } from '@emotion/core';

const FooterContainer = css`
	padding: 0;
`;

const FooterHolder = css`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 100%;
	height: 84px;
	color: #fff;
	font-size: 1.3rem;
	background-color: var(--color-blue-main);

	&:first-of-type {
		font-size: 1.6rem;
		text-align: left;
		height: 100%;
		background-color: var(--color-blue-secondary);
	}

	@media screen and (min-width: 992px) {
		height: 120px;

		&:first-of-type {
			height: 127px;
		}

	}
`;

const FooterList = css`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-wrap: wrap;

	@media screen and (min-width: 992px) {
		justify-content: space-between;
	}
`;

const FooterListItem = css`
	height: 90px;
	flex: 1;

	strong {
		display: block;
	}

	& > * {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		font-weight: 600;
		flex-direction: column;
		line-height: 2.2rem;
	}

	&:nth-of-type(1) {
		flex: 1 0 100%;
		height: 70px;
		border-bottom: 2px solid var(--color-blue-main);

		& > * {
			flex-direction: row;
			font-weight: 300;
			strong {
				font-weight: 600;
			}
			&:before {
				margin-right: 15px;
			}
		}
	}

	&:nth-of-type(2) {
		border-right: 1px solid var(--color-blue-main);
	}

	&:nth-of-type(3) {
		border-left: 1px solid var(--color-blue-main);
		border-right: 1px solid var(--color-blue-main);
	}

	&:nth-of-type(4) {
		border-left: 1px solid var(--color-blue-main);
	}

	@media screen and (min-width: 992px) {
		&:nth-of-type(n) {
			flex: none;
			border: 0;

			& > * {
				flex-direction: row;
				font-weight: 300;
				strong {
					font-weight: 600;
				}
				&:before {
					margin-right: 15px;
				}
			}
		}

	}
`;

const FooterListItemIcon = css`
	&:before {
		width: 44px;
		height: 44px;
		background-size: 100%;
	}
`;

const FooterParagraph = css`
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;

	& > span {
		display: inline-block;
		height: 24px;
		background: url(/img/icons/icon-heart-white.svg) no-repeat center;
		width: 34px;
		background-size: 34px auto;
	}
`;

export { FooterHolder, FooterList, FooterListItem, FooterListItemIcon, FooterParagraph, FooterContainer };
