/** @jsx jsx */
import { jsx } from '@emotion/core';

import DefaultTheme from '@themes/default';
import Container from '@layout/container';

import * as Style from './style';

function MyAccount() {
	return (
		<DefaultTheme>
			<section>
				<Container>
					<h1 css={Style.PageTitle}><strong>Minha Conta</strong></h1>
					<h2 css={Style.PageSubTitle}>Bem vindo a sua conta!</h2>
				</Container>
			</section>
		</DefaultTheme>
	);
}

export default MyAccount;
