import Immutable from 'immutee';

export const favoritesTypes = {
	save: 'FETCH_FAVORITES_SAVED',
	remove: 'FETCH_FAVORITES_REMOVED'
};

const initialState = {
	result: [],
	added: false,
	removed: false
};

export default function reducer(state = initialState, action) {
	const immutable = Immutable(state);
	switch (action.type) {
		case favoritesTypes.save:
			return immutable
				.set('removed', false)
				.set('added', true)
				.set('result', [...state.result, ...action.payload])
				.done();
		case favoritesTypes.remove:
			return immutable
				.set('removed', true)
				.set('added', false)
				.set('result', action.payload)
				.done();
		default:
			return state;
	}
}
