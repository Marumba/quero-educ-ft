import { css } from '@emotion/core';


const Breadcrumbs = css`
	width: 100%;
`;

const BreadcrumbsContainer = css`
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: left;
`;

const BreadcrumbsList = css`
	display: flex;
	height: 40px;
	align-items: center;
	justify-content: left;
	margin: 15px 0;
`;

const BreadcrumbsListItem = itemsCount => css`
	display: flex;
	align-items: center;
	justify-content: left;
	height: 100%;
	font-size: 1.3rem;
	font-weight: 600;
	color: var(--color-blue-secondary);

	a,
	span {
		display: flex;
		font-size: inherit;
		color: inherit;
		height: inherit;
		align-items: center;
		justify-content: left;
	}

	${itemsCount > 1
		? `	&:last-of-type {
				&:before {
					content: "";
					margin: 0 auto;
					width: 20px;
					height: 100%;
					background: url('/img/icons/icon-arrow-left-blue-secondary.svg') no-repeat scroll center left;
					background-size: auto 14px;
				}
			}
		`
		: 'color: var(--color-black);'
	}

	@media screen and (min-width: 992px) {
		a {
			padding: 0 8px;
		}

		&:first-of-type {
			a {
				padding: 0 8px 0 0;
			}
			span {
				padding-left: 0;
			}
		}

		& > span {
			padding-left: 8px;
			color: var(--color-black);
		}

		&:after {
			content: '/';
			display: inline-block;
			color: var(--color-black);
		}

		&:last-of-type {
			&:after {
				content: none;
			}
			&:before {
				content: none;
			}
		}
	}
`;

export { Breadcrumbs, BreadcrumbsContainer, BreadcrumbsList, BreadcrumbsListItem };
