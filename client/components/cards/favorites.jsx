/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Fragment } from 'react';
import { uid } from 'react-uid';
import { useDispatch } from 'react-redux';

import Score from '@components/score';
import { modalTypes } from '@ducks/modal';
import Button from '@layout/button/button';
import { numberToCurrency } from '@helpers/utils';

import * as Style from './favorites.style';

function Favorites({ favItems, removeItem }) {
	const theme = useTheme();
	const dispatch = useDispatch();

	const addNewFavoriteCard = () => (
		<li css={Style.FavoritesAddNew}>
			<div onClick={() => dispatch({ type: modalTypes.show })}>
				<span css={Style.FavoritesAddNewIcon} />
				<h4>Adicionar bolsa</h4>
				<p>
					Clique para adicionar bolsas
					<br />
					de cursos do seu interesse
				</p>
			</div>
		</li>
	);

	const favoriteCardList = () => favItems
		&& favItems.map(item => (
			<li css={Style.FavoritesItem} key={'favorite-' + uid(item)}>
				<div css={Style.FavoritesItemUniversity}>
					<img alt={item.university.name} src={item.university.logo_url} loading="lazy" />
					<h3>
						{item.university.name}
						<strong>{item.course.name}</strong>
					</h3>
					<div>{item.university.score} <Score points={item.university.score} item={item} /></div>
				</div>
				<div css={Style.FavoritesItemCourse}>
					<h4>
						{item.course.kind} • {item.course.shift}
					</h4>
					<p>Início das aulas em: {item.start_date}</p>
				</div>
				<div css={Style.FavoritesItemPrice}>
					<p>
						{item.enabled ? (
							<Fragment>
								<strong>Mensalidade com o Quero Bolsa:</strong>
								<span>
									<del>R$ {numberToCurrency(item.full_price)}</del>
									<strong>R$ {numberToCurrency(item.price_with_discount)}</strong>
									/mês
								</span>
							</Fragment>
						) : (
							<strong>Bolsa indisponível.</strong>
						)}
					</p>
					{!item.enabled ? <p>Entre em contato com nosso atendimento para saber mais.</p> : null}
				</div>
				<div css={Style.FavoritesItemBtns}>
					<Button type="button" secondaryCta borderColor={theme.colors.blueSecondary} color={theme.colors.blueSecondary} onClick={removeItem} itemId={item.id}>
						Excluir
					</Button>
					<Button
						type="button"
						borderColor={item.enabled ? theme.colors.yellowSecondary : undefined}
						bgColor={item.enabled ? theme.colors.yellowMain : undefined}
						disabled={!item.enabled}
					>
						{item.enabled ? 'Ver oferta' : 'Indisponível'}
					</Button>
				</div>
			</li>
		));

	return (
		<ul css={Style.Favorite}>
			{addNewFavoriteCard()}
			{favoriteCardList()}
		</ul>
	);
}

export default Favorites;
