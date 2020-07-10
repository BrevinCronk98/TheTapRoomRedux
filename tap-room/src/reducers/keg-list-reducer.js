import * as c from './../actions/actionTypes';

export default (state = {}, action) => {
	const { kegBrand, kegName, kegPrice, kegAlcoPerc, kegQuantity, id } = action;
	switch (action.type) {
		case c.ADD_TICKET:
			return Object.assign({}, state, {
				[id]: {
					kegBrand: kegBrand,
					kegName: kegName,
					kegPrice: kegPrice,
					kegAlcoPerc: kegAlcoPerc,
					kegQuantity: kegQuantity,
					id: id
				}
			});
		case c.DELETE_TICKET:
			const newState = { ...state };
			delete newState[id];
			return newState;
		case c.UPDATE_TIME:
			const newKeg = Object.assign({}, state[id]);
			const updatedState = Object.assign({}, state, {
				[id]: newKeg
			});
			return updatedState;
		default:
			return state;
	}
};
