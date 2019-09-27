import axios from 'axios';
import Immutable from 'immutee';

export const scholarshipTypes = {
	pending: 'FETCH_SCHOLARSHIP_PEDING',
	fulfilled: 'FETCH_SCHOLARSHIP_FULFILLED',
	failure: 'FETCH_SCHOLARSHIP_FAILURE'
};

const initialState = {
	pending: false,
	fetched: false,
	result: [],
	error: null
};

export default function reducer(state = initialState, action) {
	const immutable = Immutable(state);
	switch (action.type) {
		case scholarshipTypes.pending:
			return immutable
				.set('pending', true)
				.set('fetched', false)
				.set('result', [])
				.done();

		case scholarshipTypes.fulfilled:
			return immutable
				.set('pending', false)
				.set('result', action.payload)
				.set('fetched', true)
				.done();

		case scholarshipTypes.failure:
			return immutable
				.set('pending', false)
				.set('error', action.payload)
				.set('result', [])
				.set('fetched', false)
				.done();
		default:
			return state;
	}
}

export function fetchScholarship() {
	return async dispatch => {
		dispatch({ type: scholarshipTypes.pending });
		try {
			const { data } = await axios.get(config.apiScholarship);
			dispatch({ type: scholarshipTypes.fulfilled, payload: data });
		} catch (err) {
			dispatch({ type: scholarshipTypes.failure, payload: err });
		}
	};
}
