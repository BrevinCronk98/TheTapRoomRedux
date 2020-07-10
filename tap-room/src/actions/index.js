export const deleteKeg = (id) => ({
	type: 'DELETE_KEG',
	id
});

export const toggleForm = () => ({
	type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
	const { kegBrand, kegName, kegPrice, kegAlcoPerc, kegQuantity, id } = keg;
	return {
		type: 'ADD_KEG',
		kegBrand: kegBrand,
		kegName: kegName,
		kegPrice: kegPrice,
		kegAlcoPerc,
		kegQuantity,
		id
	};
};

export const toggleUpdateKeg = () => ({
	type: 'TOGGLE_EDIT_FORM'
});
