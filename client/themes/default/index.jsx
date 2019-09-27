/** @jsx jsx */
import { Global, jsx } from '@emotion/core';

import Breadcrumbs from '@components/breadcrumbs';
import Header from '@components/header';
import MediaQueryProvider from '@components/mediaQuery';
import Footer from '@components/footer';
import Routes from '../../routes';

import * as Style from './style';
import Reset from './reset';

function DefaultTheme({ children }) {
	return (
		<MediaQueryProvider>
			<Global styles={[Reset, Style.DefaultStyle]} />
			<div css={Style.DefaultStyleContainer}>
				<Header />
				<Breadcrumbs routes={Routes} />
				<main css={Style.DefaultStyleMain}>
					{children}
				</main>
				<Footer />
			</div>
		</MediaQueryProvider>
	);
}

export default DefaultTheme;
