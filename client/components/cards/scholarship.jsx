/** @jsx jsx */
import { useEffect, useState, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { uid } from 'react-uid';

import Order from '@components/order';
import { numberToCurrency } from '@helpers/utils';
import { ORDER_OPTIONS } from '@helpers/constants';
import Checkbox from '@layout/input/checkbox';
import Button from '@layout/button/button';
import { favoritesTypes } from '@ducks/favorites';

import * as Style from './scholarship.style';

function ScholarshipCard({ closeModal, customTitle, filters, scholarship, favorites }) {
	const theme = useTheme();
	const dispatch = useDispatch();
	const [order, setOrder] = useState(ORDER_OPTIONS[0]);
	const [scholarshipList, setScholarshipList] = useState([]);
	const [scholarshipWithId, setScholarshipWithId] = useState([]);
	const [checkedScholarship, setCheckedScholarship] = useState([]);

	const keepFavoritesChecked = () => {
		if (favorites.result.length && checkedScholarship.length) {
			return checkedScholarship.filter(item => favorites.result.find(a => a.id === item.id));
		}
		return [];
	};

	useEffect(() => {
		if (scholarship.fetched) {
			const cloneOriginal = JSON.parse(JSON.stringify(scholarship.result));
			cloneOriginal.map((item, index) => {
				item.id = index;
				return true;
			});
			setScholarshipWithId(cloneOriginal);
		}
	}, []);

	useEffect(() => {
		setCheckedScholarship(keepFavoritesChecked());
	}, [scholarshipList]);

	useEffect(() => {
		const orderScholarshipsBy = data => {
			if (order.deepKey) return data.sort((a, b) => ((a[order.key][order.deepKey] > b[order.key][order.deepKey]) ? order.desc : order.desc * -1));
			return data.sort((a, b) => ((a[order.key] > b[order.key]) ? order.desc : order.desc * -1));
		};

		let data = [...scholarshipWithId];
		data = filters.city ? data.filter(item => item.campus.city === filters.city) : data;
		data = filters.course ? data.filter(item => item.course.name === filters.course) : data;
		data = data.filter(item => filters.modality.includes(item.course.kind));
		data = data.filter(item => item.price_with_discount <= filters.maxValue);
		data = orderScholarshipsBy(data);

		setScholarshipList(data);
	}, [filters, order]);

	const handleFavoriteSelection = (el, item) => {
		el.preventDefault();
		el.stopPropagation();

		if (checkedScholarship.includes(item.id)) return setCheckedScholarship(checkedScholarship.filter(id => id !== item.id));
		return setCheckedScholarship([...checkedScholarship, item.id]);
	};

	const setFavorite = () => {
		const filteredChecked = checkedScholarship.filter(item => (favorites.result.length ? favorites.result.filter(data => data.id === item) > -1 : true));
		const newFavorites = filteredChecked.map(item => scholarshipWithId[item]);

		dispatch({ type: favoritesTypes.save, payload: newFavorites });
		closeModal();
	};

	const renderScholarships = () => (
		<div css={Style.ScholarshipCards}>
			<div css={Style.ScholarshipCardsInfo}>
				{
					customTitle
						? (
							<h3>
								{customTitle}
							</h3>
						)
						: null
				}
				<Order
					label="Ordenar por"
					onChange={el => setOrder(ORDER_OPTIONS.find(item => item.value === el))}
					options={ORDER_OPTIONS}
					value={ORDER_OPTIONS.value}
				/>
			</div>
			{scholarshipList.map(item => (
				<div key={'scholarship-card-' + uid(item)} css={Style.ScholarshipCardsItem} onClick={el => handleFavoriteSelection(el, item)}>
					<Checkbox checked={checkedScholarship.includes(item.id)} value={item.id} onChange={el => el.preventDefault()} />

					<img alt={'Logo' + item.university.name} css={Style.ScholarshipCardsItemImg} src={item.university.logo_url} />
					<div css={Style.ScholarshipCardsItemInfo}>
						<h3 css={Style.ScholarshipCardsItemCourse}>
							{item.course.name}
							<span>{item.course.level}</span>
						</h3>
						<span css={Style.ScholarshipCardsItemPrice}>
							Bolsa de <strong>{Math.round(item.discount_percentage)}%</strong>
							<strong>R$ {numberToCurrency(Math.round(item.price_with_discount))}/mês</strong>
						</span>
					</div>
				</div>
			))}
		</div>
	);

	const renderBtns = () => (
		<div css={Style.ScholarshipCardsBtnHolder}>
			<Button
				type="button"
				customStyle={Style.ScholarshipCardsBtn}
				secondaryCta
				borderColor={theme.colors.blueSecondary}
				color={theme.colors.blueSecondary}
				onClick={() => closeModal()}
			>
				Cancelar
			</Button>
			<Button
				type="button"
				customStyle={Style.ScholarshipCardsBtn}
				borderColor={checkedScholarship.length > 0 ? theme.colors.yellowSecondary : undefined}
				bgColor={checkedScholarship.length > 0 ? theme.colors.yellowMain : undefined}
				disabled={!(checkedScholarship.length > 0)}
				onClick={() => setFavorite()}
			>
				Adicionar bolsa(s)
			</Button>
		</div>
	);

	return (
		<Fragment>
			{renderScholarships()}
			{renderBtns()}
		</Fragment>
	);
}

export default connect(state => ({
	scholarship: state.scholarship,
	favorites: state.favorites
}))(ScholarshipCard);
