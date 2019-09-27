/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx } from '@emotion/core';

import DefaultTheme from '@themes/default';
import Container from '@layout/container';

import * as Style from './style';

function Home() {
	return (
		<DefaultTheme>
			<section>
				<Container>
					<h1 css={Style.PageTitle}><strong>404</strong></h1>
					<h2 css={Style.PageSubTitle}>=[</h2>
				</Container>
			</section>
		</DefaultTheme>
	);
}

export default Home;
