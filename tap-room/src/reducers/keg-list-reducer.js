import * as c from './../actions/actionTypes';

export default (state = {}, action) => {
	const { kegBrand, kegName, kegPrice, kegAlcoPerc, kegQuantity, id } = action;
	switch (action.type) {
		case c.ADD_KEG:
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
		case 'DELETE_KEG':
			const newState = { ...state };
			delete newState[id];
			return newState;
		default:
			return state;
	}
};
