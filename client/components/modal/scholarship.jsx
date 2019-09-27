/** @jsx jsx */
import { useState, Fragment } from 'react';
import { jsx } from '@emotion/core';

import ScholarshipFilter from '@components/filters/scholarship';
import ScholarshipCard from '@components/cards/scholarship';

import withModal from './withModal';
import * as Style from './scholarship.style';

function ScholarshipModal({ closeModal }) {
	const [filters, setFilters] = useState([]);

	return (
		<Fragment>
			<h1 css={Style.ScholarshipModalTitle}>Adicionar bolsa</h1>
			<p css={Style.ScholarshipModalParagraph}>Filtre e adicione as bolsas de seu interesse.</p>
			<ScholarshipFilter onSetFilter={newFilters => setFilters(newFilters)} />
			<ScholarshipCard filters={filters} closeModal={closeModal} customTitle="Resultado:" />
		</Fragment>
	);
}

export default withModal(ScholarshipModal);
