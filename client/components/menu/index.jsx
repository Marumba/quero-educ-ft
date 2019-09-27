/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Container from '@layout/container';
import { useMediaQuery } from '@components/mediaQuery';

import * as Style from './style';

function Menu() {
	const [showMenu, setShowMenu] = useState(false);
	const [activePage, setActivePage] = useState();
	const mobile = useMediaQuery() === 'mobile';

	const isActive = url => match => {
		if (match && match.isExact) setActivePage(url);
		return match;
	};
	const checkActivePage = page => activePage === page;
	const preFix = '/minha-conta';

	const commonLinks = [
		<li key="menu-item-1" css={Style.NavListItem(checkActivePage(preFix + '/pre-matriculas'))}>
			<NavLink isActive={isActive(preFix + '/pre-matriculas')} to="/minha-conta/pre-matriculas">Pré-matrículas</NavLink>
		</li>,
		<li key="menu-item-2" css={Style.NavListItem(checkActivePage(preFix + '/bolsas-favoritas'))}>
			<NavLink isActive={isActive(preFix + '/bolsas-favoritas')} to="/minha-conta/bolsas-favoritas">Bolsas favoritas</NavLink>
		</li>
	];

	return (
		<nav css={Style.Nav}>
			<Container customStyle={Style.NavContainer}>
				<ul css={Style.NavList}>
					<li css={Style.NavListItem(checkActivePage('/minha-conta'))}>
						<NavLink isActive={isActive('/minha-conta')} to="/minha-conta">Minha conta</NavLink>
					</li>
					{mobile ? (
						<li css={[Style.NavListItem(), Style.NavListItemMenu(showMenu)]}>
							<button type="button" onClick={() => setShowMenu(!showMenu)}>
								Menu
							</button>
							<ul css={Style.NavListItemMenuHidden(showMenu)}>{commonLinks}</ul>
						</li>
					) : (
						<Fragment>{commonLinks}</Fragment>
					)}
				</ul>
			</Container>
		</nav>
	);
}

export default Menu;
