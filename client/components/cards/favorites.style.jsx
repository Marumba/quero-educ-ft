import { css } from '@emotion/core';

const Favorite = css`
	display: flex;
	flex-wrap: wrap;
	margin-top: 32px;
	padding-bottom: 20px;

	@media screen and (min-width: 992px) {
		align-content: center;
		margin-top: 40px;
	}
`;

const FavoritesAddNew = css`
	background-color: #fff;
	box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.1);
	height: 199px;
	width: 100%;

	& > div {
		width: 100%;
		height: 100%;
		cursor: pointer;
		position: relative;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
	}

	h4 {
		font-weight: 700;
		display: block;
		font-size: 1.9rem;
		text-align: center;
		line-height: 100%;
		margin: 7px auto 3px auto;
		user-select: none;
		width: 100%;
	}

	p {
		line-height: 150%;
		font-size: 1.3rem;
		text-align: center;
		user-select: none;
		width: 100%;
	}

	@media screen and (min-width: 992px) {
		flex: 1 0 calc(25% - 28px);
		min-width: 190px;
		max-width: 269px;
		height: auto;
		min-height: 457px;
		margin-top: 0;
		margin: 0 28px 28px 0;
		padding: 24px;
		display: flex;
		flex-wrap: wrap;
	}
`;

const FavoritesAddNewIcon = css`
	width: 64px;
	height: 64px;
	position: relative;
	display: block;
	margin: 0 auto 20px auto;
	background: url('/img/icons/icon-add-blue-main.svg') no-repeat scroll center center;
`;

const FavoritesItem = css`
	width: 100%;
	height: auto;
	padding: 20px 16px 16px 16px;
	background-color: #fff;
	box-shadow: 0px 2px 5px 0px rgba(210, 210, 210, 1);
	position: relative;
	margin-top: 24px;

	@media screen and (min-width: 992px) {
		flex: 1 0 calc(25% - 28px);
		min-width: 190px;
		max-width: 269px;
		margin: 0 28px 28px 0;
		padding: 24px;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;

		&:nth-of-type(4n) {
			margin-right: 0;
		}
	}
`;

const FavoritesItemBtns = css`
	display: flex;
	justify-content: center;
	width: 100%;

	& button + button {
		margin-left: 8px;
	}

	@media screen and (min-width: 992px) {
		justify-content: space-between;
	}
`;

const FavoritesItemCourse = css`
	width: 100%;
	padding: 20px 0 19px 0;
	border-bottom: 2px solid #eeeeee;

	h4 {
		display: block;
		line-height: 100%;
		font-size: 1.3rem;
		text-transform: uppercase;
		text-align: center;
		margin-bottom: 14px;
	}

	p {
		display: block;
		font-size: 1.3rem;
		line-height: 17px;
		text-align: center;
	}
`;

const FavoritesItemPrice = css`
	width: 100%;
	padding: 19px 0 26px 0;

	p {
		line-height: 150%;
		font-size: 1.3rem;
		text-align: center;
		& + p {
			margin-top: 15px;
		}
	}

	span {
		display: flex;
		flex-wrap: wrap;
		margin-top: 15px;
		justify-content: center;
		font-size: 1.3rem;
		align-items: baseline;

		del {
			width: 100%;
			font-size: 1.2rem;
			text-align: center;
		}

		strong {
			font-size: 1.9rem;
			color: var(--color-green);
			margin: 4px 5px 0 0;
		}
	}
`;

const FavoritesItemUniversity = css`
	width: 100%;
	padding-bottom: 17px;
	border-bottom: 2px solid #eeeeee;

	& > img {
		width: 100%;
		height: 55px;
		object-fit: contain;
		object-position: center;
		display: block;

		@media screen and (min-width: 992px) {
			height: 40px;
		}
	}

	h3 {
		width: 100%;
		text-transform: uppercase;
		line-height: 2.5rem;
		text-align: center;
		margin: 28px auto 6px auto;
		font-size: 1.3rem;

		strong {
			font-size: 1.6rem;
			text-transform: none;
			display: block;
			color: var(--color-blue-secondary);
		}
	}

	& > div {
		width: 100%;
		line-height: 100%;
		font-weight: 700;
		font-size: 1.6rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 16px;
	}
`;

export {
	Favorite,
	FavoritesAddNew,
	FavoritesAddNewIcon,
	FavoritesItem,
	FavoritesItemBtns,
	FavoritesItemCourse,
	FavoritesItemPrice,
	FavoritesItemUniversity
};
