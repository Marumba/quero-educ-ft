import { css } from '@emotion/core';

const Reset = css`
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	:focus {
		outline: 0;
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}

	body {
		line-height: 1;
		text-rendering: optimizelegibility;
	}

	ol,
	ul {
		list-style: none;
	}

	blockquote,
	q {
		quotes: none;
	}

	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	input[type='search']::-webkit-search-cancel-button,
	input[type='search']::-webkit-search-decoration,
	input[type='search']::-webkit-search-results-button,
	input[type='search']::-webkit-search-results-decoration {
		-webkit-appearance: none;
		-moz-appearance: none;
	}

	input[type='search'] {
		-webkit-appearance: none;
		-moz-appearance: none;
		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
	}

	textarea {
		overflow: auto;
		vertical-align: top;
		resize: vertical;
	}

	audio,
	canvas,
	video {
		display: inline-block;
		*display: inline;
		*zoom: 1;
		max-width: 100%;
	}

	audio:not([controls]) {
		display: none;
		height: 0;
	}

	[hidden] {
		display: none;
	}

	a:focus {
		outline: thin dotted;
	}

	a:active,
	a:hover {
		outline: 0;
	}

	img {
		border: 0;
		-ms-interpolation-mode: bicubic;
	}

	figure {
		margin: 0;
	}

	form {
		margin: 0;
	}

	fieldset {
		border: 1px solid #c0c0c0;
		margin: 0 2px;
		padding: 0.35em 0.625em 0.75em;
	}

	legend {
		border: 0;
		padding: 0;
		white-space: normal;
		*margin-left: -7px;
	}

	button {
		-webkit-appearance: none;
		border: none;
		margin: 0;
		padding: 0;
		width: auto;
		overflow: visible;
		background: transparent;
		color: inherit;
		font: inherit;
		text-align: inherit;
		&::-moz-focus-inner {
			border: 0;
			padding: 0;
		}
		&:focus {
			outline: 0;
			border: 0;
		}
	}

	button,
	input,
	select,
	textarea {
		font-size: 100%;
		margin: 0;
		vertical-align: baseline;
		*vertical-align: middle;
	}

	select {
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
		border: none;
		outline: 0;
		&::-ms-expand {
			display: none;
		}
	}

	button,
	input {
		line-height: normal;
	}

	button,
	select {
		text-transform: none;
	}

	button,
	html input[type="button"],
	input[type="reset"],
	input[type="submit"] {
		-webkit-appearance: button;
		cursor: pointer;
		*overflow: visible;
	}

	button[disabled],
	html input[disabled] {
		cursor: default;
	}

	input[type='checkbox'],
	input[type='radio'] {
		box-sizing: border-box;
		padding: 0;
		*height: 13px;
		*width: 13px;
	}

	input[type='search'] {
		-webkit-appearance: textfield;
		-moz-box-sizing: content-box;
		-webkit-box-sizing: content-box;
		box-sizing: content-box;
	}

	input[type='search']::-webkit-search-cancel-button,
	input[type='search']::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	button::-moz-focus-inner,
	input::-moz-focus-inner {
		border: 0;
		padding: 0;
	}

	textarea {
		overflow: auto;
		vertical-align: top;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	::-moz-selection {
		background: #b3d4fc;
		text-shadow: none;
	}

	::selection {
		background: #b3d4fc;
		text-shadow: none;
	}

	img {
		vertical-align: middle;
	}

	fieldset {
		border: 0;
		margin: 0;
		padding: 0;
	}

	textarea {
		resize: vertical;
	}

	.chromeframe {
		margin: 0.2em 0;
		background: #ccc;
		color: #000;
		padding: 0.2em 0;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;

		&:after,
		&:before {
			box-sizing: border-box;
		}
	}

	html {
		font-size: 100%;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-ms-text-size-adjust: 100%;
		scroll-behavior: smooth;
	}

	body {
		color: var(--color-black);
		font-family: var(--default-font-family);
	}

	a {
		color: inherit;
  		text-decoration: inherit;
	}

	strong {
		font-weight: bold;
	}
`;

export default Reset;
