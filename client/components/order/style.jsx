import { css } from '@emotion/core';

const Order = css`
	width: auto;

	@media screen and (min-width: 992px) {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
`;

const OrderLabel = css`
	text-align: right;
	white-space: nowrap;
	display: block;
	font-size: 1.6rem;
	font-weight: bold;
`;

const OrderSelectHolder = css`
	height: 25px;
	position: relative;

	&:after {
		content: '';
		width: 20px;
		height: 25px;
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		background: #fff url('/img/icons/icon-arrow-down-blue-secondary.svg') no-repeat center right;
		background-size: 12px auto;
	}

	select {
		cursor: pointer;
		position: relative;
		z-index: 10;
		background-color: transparent;
		width: 100%;
		height: 100%;
		padding: 0 20px 0 8px;
		font-size: 1.6rem;
		font-weight: 600;
		color: var(--color-blue-secondary);
		appearance: none;
	}
`;

export { Order, OrderLabel, OrderSelectHolder };
