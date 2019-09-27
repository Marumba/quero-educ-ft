import { css } from '@emotion/core';

const Header = css`
	display: block;
	width: 100%;
	position: relative;
	background: #fff;
	box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.09);
	z-index: 20;
`;

const HeaderContainer = css`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	padding: 0;
	height: 60px;
	transition: height 0.2s ease-in-out;

	@media screen and (min-width: 992px) {
		height: 80px;
		justify-content: space-between;
	}
`;

const HeaderLogo = css`
	display: block;
	margin: 0 auto;
	width: 115px;
	transition: all 0.2s ease-in-out;

	img {
		width: 100%;
		height: auto;
		display: block;
	}

	@media screen and (min-width: 992px) {
		width: 140px;
		position: absolute;
		left: 50%;
		margin-left: -70px;
		top: 14px;
	}
`;

const HeaderIcon = leftContentIcon => css`
	flex-direction: column;
	padding: 0 20px;
	color: var(--color-blue-secondary);
	font-weight: 700;
	font-size: 1.3rem;
	${leftContentIcon ? 'border-right: 2px solid var(--color-gray);' : 'border-left: 2px solid var(--color-gray);'}

	&:before {
		margin-bottom: 5px;
	}

	@media screen and (min-width: 992px) {
		flex-direction: row;
		border-left: 0;
		height: 48px;
		${leftContentIcon
			? 	`border-right: 2px solid var(--color-gray);
				 padding-right: 25px;
			`
			: `&:last-of-type:not([href*="api"]) {
					flex-direction: row-reverse;
					&:before {
						margin: 0 0 0 8px;
					}
				}
			`
		}
		&:before {
			margin: 0 8px 0 0;
		}
	}
`;

const HeaderLeftContent = css`
	display: flex;

	& > *:last-of-type {
		display: none;
	}

	@media screen and (min-width: 992px) {
		padding-left: 20px;
		& > * {
			&:first-of-type {
				padding-left: 0;
			}
			&:last-of-type {
				display: flex;
				padding-left: 18px;
				color: var(--color-blue-secondary);
				font-size: 1.3rem;
				line-height: 2.3rem;
				strong {
					font-size: 1.6rem;
					display: block;
				}
				&:before {
					width: 35px;
					height: 35px;
					background-size: 100%;
					margin-right: 5px;
				}
			}
		}
	}
`;

export { Header, HeaderContainer, HeaderLogo, HeaderIcon, HeaderLeftContent };
