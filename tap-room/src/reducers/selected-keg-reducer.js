import * as c from './../actions/actionTypes';

export default (state = null, action) => {
	const { kegBrand, kegName, kegPrice, kegAlcoPerc, kegQuantity, key, id } = action;
	switch (action.type) {
		case c.SELECT_KEG:
			return {
				kegBrand: kegBrand,
				kegName: kegName,
				kegPrice: kegPrice,
				kegAlcoPerc: kegAlcoPerc,
				kegQuantity: kegQuantity,
				id: id,
				key: key
			};
		default:
			return state;
	}
};
