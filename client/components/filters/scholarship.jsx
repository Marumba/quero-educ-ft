/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Checkbox from '@layout/input/checkbox';
import Label from '@layout/label';
import Range from '@layout/input/range';
import Select from '@layout/select';

import { createList, createSet } from '@helpers/utils';

import * as Style from './scholarship.style';

function ScholarshipFilter({ onSetFilter, scholarship }) {
	const [chosenCity, setChosenCity] = useState();
	const [chonsenCourse, setChosenCourse] = useState();
	const [checkedModality, setChosenModality] = useState([]);
	const [chosenMaxValue, setChosenMaxValue] = useState(10000);
	const [cities, setCities] = useState();
	const [courses, setCourses] = useState();
	const [modality, setModality] = useState();

	useEffect(() => {
		const modalityList = createSet(scholarship.result, ['course', 'kind'], true);
		setModality(createList(modalityList, ['title', 'value']));
		setChosenModality(modalityList);
		setCities(createList(createSet(scholarship.result, ['campus', 'city'], true), ['title', 'value']));
		setCourses(createList(createSet(scholarship.result, ['course', 'name'], true), ['title', 'value']));
	}, [scholarship.fetched]);

	useEffect(() => {
		onSetFilter({
			city: chosenCity,
			course: chonsenCourse,
			modality: checkedModality,
			maxValue: chosenMaxValue
		});
	}, [chosenCity, chonsenCourse, checkedModality, chosenMaxValue]);

	return (
		<div css={Style.ScholarshipFilter}>
			<Select customStyle={Style.ScholarshipFilterSelect} label="Selecione sua cidade" onChange={value => setChosenCity(value)} options={cities} value={chosenCity} />
			<Select
				customStyle={Style.ScholarshipFilterSelect}
				label="Selecione o curso de sua preferência"
				onChange={value => setChosenCourse(value)}
				options={courses}
				value={chonsenCourse}
			/>
			<div css={Style.ScholarshipFilterModality}>
				<Label> Como você quer estudar? </Label>
				<Checkbox
					customStyle={css`
						margin-right: 20px;
						margin-top: 30px;
					`}
					checked={checkedModality.includes('EaD')}
					label="A distância"
					onChange={el => {
						if (el.target.checked) return setChosenModality([...checkedModality, 'EaD']);
						return setChosenModality(checkedModality.filter(kind => kind !== 'EaD'));
					}}
					value="EaD"
				/>
				<Checkbox
					checked={checkedModality.includes('Presencial')}
					label="Presencial"
					onChange={el => {
						if (el.target.checked) return setChosenModality([...checkedModality, 'Presencial']);
						return setChosenModality(checkedModality.filter(kind => kind !== 'Presencial'));
					}}
					value="Presencial"
				/>
			</div>
			<Range
				customStyle={Style.ScholarshipFilterRange}
				label="Até quanto pode pagar?"
				min={0}
				max={10000}
				onChange={el => setChosenMaxValue(el.target.value)}
				value={chosenMaxValue}
			/>
		</div>
	);
}

export default connect(state => ({ scholarship: state.scholarship }))(ScholarshipFilter);
