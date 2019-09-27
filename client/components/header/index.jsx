/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

import Menu from '@components/menu';

import Container from '@layout/container';
import Icon from '@layout/button/icon';
import { useMediaQuery } from '@components/mediaQuery';

import * as Style from './style';

function Header() {
	const mobile = useMediaQuery() === 'mobile';

	return (
		<header css={Style.Header}>
			<Container customStyle={Style.HeaderContainer}>
				<div css={Style.HeaderLeftContent}>
					<Icon link={config.appIndexUrl} name="information-blue-secondary" customStyle={Style.HeaderIcon(true)}>
						{mobile ? 'Ajuda' : 'Como Funciona'}
					</Icon>
					<Icon type="custom" name="whatsapp-green" link={config.whatsappUrl} customStyle={Style.HeaderIcon()}><span><strong>0800 123 2222</strong> Envie mensagem ou ligue</span></Icon>
				</div>
				<Link to={config.appIndexUrl} css={Style.HeaderLogo}>
					<img alt="Quero Bolsa" src="/img/brands/brand-querobolsa.svg" />
				</Link>
				<Icon link={config.appIndexUrl} name="user-blue-secondary" customStyle={Style.HeaderIcon()}>
					{mobile ? 'Conta' : 'Rodrigo Costa'}
				</Icon>
			</Container>
			<Menu />
		</header>
	)
}

export default Header;
