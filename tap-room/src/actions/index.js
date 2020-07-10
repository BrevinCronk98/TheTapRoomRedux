import * as c from './actionTypes';

export const deleteKeg = (id) => ({
	type: c.DELETE_KEG,
	id
});

export const toggleForm = () => ({
	type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
	const { kegBrand, kegName, kegPrice, kegAlcoPerc, kegQuantity, id } = keg;
	return {
		type: c.ADD_KEG,
		kegBrand: kegBrand,
		kegName: kegName,
		kegPrice: kegPrice,
		kegAlcoPerc: kegAlcoPerc,
		kegQuantity: kegQuantity,
		id
	};
};

export const toggleUpdateKeg = (id) => ({
	type: c.TOGGLE_EDIT_FORM,
	id
});

export const selectKeg = (keg) => {
	if (keg !== null) {
		const { kegBrand, kegName, kegPrice, kegAlcoPerc, kegQuantity, id, key } = keg;
		return {
			type: c.SELECT_KEG,
			kegBrand: kegBrand,
			kegName: kegName,
			kegPrice: kegPrice,
			kegAlcoPerc: kegAlcoPerc,
			kegQuantity: kegQuantity,
			key: key,
			id: id
		};
	} else {
		return {
			type: c.SELECT_KEG
		};
	}
};
