/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Redirect } from 'react-router';

import DefaultTheme from '@themes/default';
import Container from '@layout/container';

import * as Style from './style';

function Home() {
	return (
		<DefaultTheme>
			<section>
				<Redirect to="/minha-conta/bolsas-favoritas" />
				<Container>
					<h1 css={Style.PageTitle}><strong>Home</strong></h1>
					<h2 css={Style.PageSubTitle}>Home!</h2>
				</Container>
			</section>
		</DefaultTheme>
	);
}

export default Home;
