import Immutable from 'immutee';

export const modalTypes = {
	hide: 'FETCH_MODAL_HIDE',
	show: 'FETCH_MODAL_SHOW'
};

const initialState = {
	show: false
};

export default function reducer(state = initialState, action) {
	const immutable = Immutable(state);
	switch (action.type) {
		case modalTypes.hide:
			return immutable
				.set('show', false)
				.done();
		case modalTypes.show:
			return immutable
				.set('show', true)
				.done();
		default:
			return state;
	}
}
