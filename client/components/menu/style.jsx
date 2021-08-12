import { css } from '@emotion/core';

const Nav = css`
    background: var(--color-blue-main);
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 10;
`;

const NavContainer = css`
    padding: 0;
    overflow: visible;
`;

const NavList = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media screen and (min-width: 992px) {
        justify-content: flex-start;
    }
`;

const NavListItem = activeLink => css`
	font-size: 1.6rem;
	color: #fff;
	font-weight: 600;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.3);

	${activeLink ? `background-color: var(--color-blue-secondary);` : ``}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: inherit;
		color: inherit;
		height: 40px;
		padding: 0 20px;
		cursor: pointer;
		&:hover {
			&.active {
				background-color: var(--color-blue-hover-medium)};
			}
		}
		transition: background-color .2s ease-in-out;
	}

	@media screen and (min-width: 992px) {
		&:first-of-type a {
			font-size: 1.9rem;
		}
	}
`;

const NavListItemMenu = opened => css`
    height: 40px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    }

    &:after {
        content: '';
        margin-left: 10px;
        width: 10px;
        height: 100%;
        background: url('/img/icons/icon-arrow-down-white.svg') no-repeat center;
        background-size: 10px auto;
        transition: all 0.3s ease-in-out;

        ${opened
            ? `	transform: rotate(180deg);
				transition: transform .3s ease-in-out;
				`
            : ''}
    }

    @media screen and (min-width: 992px) {
        display: none;
    }
`;

const NavListItemMenuHidden = opened => css`
    height: 0;
    width: 100%;
    overflow: hidden;
    display: flex;
    position: absolute;
    top: 40px;
    left: 0;
    background: var(--color-blue-secondary);
    transition: height 0.3s ease-in-out;

    li {
        margin-left: -20px;
        transition: margin 0.5s ease-in-out;
        & > * {
            font-size: 1.4rem;
        }
        & + li {
            border-left: 1px solid #fff;
        }
    }

    ${opened
        ? `	height: 100%;
			li {
				margin-left: 0;
			}
            `
        : ''}
`;
export { Nav, NavList, NavListItem, NavListItemMenu, NavListItemMenuHidden, NavContainer };
