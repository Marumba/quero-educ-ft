/** @jsx jsx */
import { jsx } from '@emotion/core';

import Container from '@layout/container';
import Icon from '@layout/button/icon';
import { isMobile } from '@components/mediaQuery';

import * as Style from './style';

function Footer() {
	return (
		<footer>
			<div css={Style.FooterHolder}>
				<Container customStyle={Style.FooterContainer}>
					<ul css={Style.FooterList}>
						<li css={Style.FooterListItem}>
							<Icon type="custom" name="whatsapp-white" link={config.whatsappUrl} customStyle={Style.FooterListItemIcon}>
								<span>
									<strong>0800 123 2222</strong>
									{isMobile() ? 'Segunda a sexta de 8h às 22h' : 'Seg - Sex 8h-22h'}
								</span>
							</Icon>
						</li>
						<li css={Style.FooterListItem}>
							<Icon name="chat-white" link={config.appIndexUrl} customStyle={Style.FooterListItemIcon}>
								{isMobile() ? (
									'Chat'
								) : (
									<span>
										<strong>Chat ao vivo</strong>
										Seg - Sex 8h-22h
									</span>
								)}
							</Icon>
						</li>
						<li css={Style.FooterListItem}>
							<Icon type="custom" name="mail-white" link="mailto::email@email.com.br" customStyle={Style.FooterListItemIcon}>
								{isMobile() ? (
									'E-mail'
								) : (
									<span>
										<strong>Mande um e-mail</strong>
										Respondemos rapidinho
									</span>
								)}
							</Icon>
						</li>
						<li css={Style.FooterListItem}>
							<Icon name="information-white" link={config.appIndexUrl} customStyle={Style.FooterListItemIcon}>
								{isMobile() ? (
									'Ajuda'
								) : (
									<span>
										<strong>Central de ajuda</strong>
										Encontre todas as respostas
									</span>
								)}
							</Icon>
						</li>
					</ul>
				</Container>
			</div>
			<div css={Style.FooterHolder}>
				<Container customStyle={Style.FooterContainer}>
					<p css={Style.FooterParagraph}>
						Feito com <span /> pela Quero Educação
					</p>
				</Container>
			</div>
		</footer>
	);
}

export default Footer;
