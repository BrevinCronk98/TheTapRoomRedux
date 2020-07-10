import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
	let action;

	const currentState = {
		1: {
			kegBrand: 'Corona',
			kegName: 'Premier',
			kegPrice: 5,
			kegAlcoPerc: '4.2',
			kegQuantity: 5,
			id: 1
		}
	};

	const kegData = {
		kegBrand: 'Corona',
		kegName: 'Premier',
		kegPrice: 5,
		kegAlcoPerc: '4.2',
		kegQuantity: 5,
		id: 1
	};

	// Test One
	test('Should return default state if no action type is recognized', () => {
		expect(kegListReducer({}, { type: null })).toEqual({});
	});

	// Test Two
	test('Should succesfully add new keg datat to masterKegList', () => {
		const { kegBrand, kegName, kegPrice, kegAlcoPerc, kegQuantity, id } = kegData;
		action = {
			type: 'ADD_KEG',
			kegBrand: kegBrand,
			kegName: kegName,
			kegPrice: kegPrice,
			kegAlcoPerc: kegAlcoPerc,
			kegQuantity: kegQuantity,
			id: id
		};
		expect(kegListReducer({}, action)).toEqual({
			[id]: {
				kegBrand: kegBrand,
				kegName: kegName,
				kegPrice: kegPrice,
				kegAlcoPerc: kegAlcoPerc,
				kegQuantity: kegQuantity,
				id: id
			}
		});
	});
});
