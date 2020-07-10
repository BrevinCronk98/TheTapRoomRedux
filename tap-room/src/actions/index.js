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
		kegAlcoPerc,
		kegQuantity,
		id
	};
};

export const toggleUpdateKeg = (id) => ({
	type: c.TOGGLE_EDIT_FORM,
	id
});

export const selectKeg = (id) => ({
	type: c.SELECT_KEG,
	id
});
