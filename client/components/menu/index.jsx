/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import Container from '@layout/container';
import { useMediaQuery } from '@components/mediaQuery';

import * as Style from './style';

function Menu({ match }) {
	const [showMenu, setShowMenu] = useState(false);
	const mobile = useMediaQuery() === 'mobile';

	const home = '/minha-conta';

	const links = {
		favourites: `${home}/bolsas-favoritas`,
		home,
		registration: `${home}/pre-matriculas`
	};

	const commonLinks = [
		<li key="menu-item-1" css={Style.NavListItem(match.path === links.registration)}>
			<NavLink exact to={`${home}/pre-matriculas`}>Pré-matrículas</NavLink>
		</li>,
		<li key="menu-item-2" css={Style.NavListItem(match.path === links.favourites)}>
			<NavLink exact to={`${home}/bolsas-favoritas`}>Bolsas favoritas</NavLink>
		</li>
	];

	return (
		<nav css={Style.Nav}>
			<Container customStyle={Style.NavContainer}>
				<ul css={Style.NavList}>
					<li css={Style.NavListItem(match.path === home)}>
						<NavLink exact to={home}>Minha conta</NavLink>
					</li>
					{mobile ? (
						<li css={[Style.NavListItem, Style.NavListItemMenu(showMenu)]}>
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

export default withRouter(Menu);
