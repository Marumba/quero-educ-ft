/** @jsx jsx */
import { useEffect, useState, Suspense } from 'react';
import { connect, useDispatch } from 'react-redux';
import { jsx } from '@emotion/core';

import Loader from '@components/loader';
import useLocalStorage from '@components/storage';
import DefaultTheme from '@themes/default';
import Container from '@layout/container';
import SemesterFilter from '@filters/semester';
import Favorites from '@components/cards/favorites';
import ScholarshipModal from '@components/modal/scholarship';
import { fetchScholarship } from '@ducks/scholarship';
import { favoritesTypes } from '@ducks/favorites';
import { STORE_NAME } from '@helpers/constants';

import * as Style from './scholarships.style';

function FavoriteScholarships({ favorites }) {
	const dispatch = useDispatch();
	const [localName, setLocalName] = useLocalStorage(STORE_NAME);
	const [favoriteItems, setFavoritesItems] = useState();
	const [semester, setSemester] = useState();

	useEffect(() => {
		dispatch(fetchScholarship());
		dispatch({ type: favoritesTypes.save, payload: localName });
	}, []);

	useEffect(() => {
		if (favorites.added || favorites.removed) setLocalName(favorites.result);
		setFavoritesItems(semester ? favorites.result.filter(item => item.enrollment_semester === semester) : favorites.result);
	}, [favorites, semester]);

	return (
		<Suspense fallback={<Loader />}>
			<DefaultTheme>
				<section>
					<Container>
						<h1 css={Style.PageTitle}>
							<strong>Bolsas favoritas</strong>
						</h1>
						<h2 css={Style.PageSubTitle}>Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.</h2>
						<SemesterFilter onSetSemester={newSemester => setSemester(newSemester)} />
						<Favorites favItems={favoriteItems} removeItem={id => dispatch({ type: favoritesTypes.remove, payload: favorites.result.filter(item => item.id !== id) })} />
					</Container>
				</section>
				<ScholarshipModal />
			</DefaultTheme>
		</Suspense>
	);
}

export default connect(state => ({ scholarship: state.scholarship, favorites: state.favorites }))(FavoriteScholarships);
