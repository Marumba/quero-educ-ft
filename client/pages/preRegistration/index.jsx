/** @jsx jsx */
import { jsx } from '@emotion/core';

import DefaultTheme from '@themes/default';
import Container from '@layout/container';

import * as Style from './style';

function PreRegistration() {
	return (
		<DefaultTheme>
			<section>
				<Container>
					<h1 css={Style.PageTitle}><strong>Pré-matrícula</strong></h1>
					<h2 css={Style.PageSubTitle}>Faça aqui sua pré-matrícula</h2>
				</Container>
			</section>
		</DefaultTheme>
	);
}

export default PreRegistration;
