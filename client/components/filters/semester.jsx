/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as Style from './semester.style';

function SemesterFilter({ onSetSemester, scholarship }) {
	const [chosenSemester, setChosenSemester] = useState(0);

	useEffect(() => {
		onSetSemester(chosenSemester);
	}, [chosenSemester]);

	const semestersList = [
		{ title: 'Todos os semestres', value: 0 },
		...new Map(
			scholarship.result.map(item => [
				item.enrollment_semester,
				{
					title: item.enrollment_semester.substr(5, 1) + 'º semestre de ' + item.enrollment_semester.substr(0, 4),
					value: item.enrollment_semester
				}
			])
		).values()
	];

	return (
		<ul css={Style.SemesterFilterList}>
			{semestersList.map(item => (
				<li key={'semester-' + item.value} css={Style.SemesterFilterListItem(chosenSemester === item.value)}>
					<button type="button" onClick={() => setChosenSemester(item.value)}>
						{item.title}
					</button>
				</li>
			))}
		</ul>
	);
}

export default connect(state => ({ scholarship: state.scholarship }))(SemesterFilter);
