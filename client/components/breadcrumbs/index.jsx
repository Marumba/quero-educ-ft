/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Container from '@layout/container';
import { useMediaQuery } from '@components/mediaQuery';
import { clearArray } from '@helpers/utils';

import * as Style from './style';

function Breadcrumbs(props) {
	const mobile = useMediaQuery() === 'mobile';

	const cleanLinks = clearArray(props.match.path.split('/'), '');

	const links = cleanLinks.length ? cleanLinks.map((link, index) => {
		return ({
			title: link[0].toUpperCase() + link.substr(1).replace(/-/g, ' '),
			link: '/' + link,
			id: index + 2
		});
	}) : [];

	const linksList = [
		{
			title: 'Home',
			link: '/',
			id: 1
		}
	].concat(links);
	const linksLength = linksList.length;

	const breadcrumbsList = () => {
		if (mobile) {
			const link = linksLength > 1 ? linksList[linksLength - 2].link : undefined;
			const title = linksLength > 1 ? linksList[linksLength - 2].title : linksList[0].title;
			return (
				<li key="breacrumb-item-0" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" css={Style.BreadcrumbsListItem(linksLength)}>
					{
						link
							? <Link itemProp="item" to={link}> <span itemProp="name">{title}</span> </Link>
							: <span itemProp="name">{title}</span>
					}
					<meta itemProp="position" content="1" />
				</li>
			);
		}

		return linksList.map((item, index) => {
			return (
				<li key={'breacrumb-item-' + item.id} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" css={Style.BreadcrumbsListItem(linksLength)}>
					{
						index === linksLength - 1
							? <span itemProp="name">{item.title}</span>
							: <Link itemProp="item" to={item.link}> <span itemProp="name">{item.title}</span> </Link>
					}
					<meta itemProp="position" content={index + 1} />
				</li>
			);
		});
	};

	return (
		<div css={Style.Breadcrumbs}>
			<Container customStyle={Style.BreadcrumbsContainer}>
				<ol itemScope itemType="http://schema.org/BreadcrumbList" css={Style.BreadcrumbsList}>
					{breadcrumbsList()}
				</ol>
			</Container>
		</div>
	);
}

export default withRouter(Breadcrumbs);
