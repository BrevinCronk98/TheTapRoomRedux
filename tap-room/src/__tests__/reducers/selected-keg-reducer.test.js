import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from '../../actions/actionTypes';

describe('selectedKegReducer', () => {
	let action;
	let defaultData = {
		1: {
			kegBrand: 'Corona',
			kegName: 'Premier',
			kegPrice: 5,
			kegAlcoPerc: '4.2',
			kegQuantity: 5,
			id: 1,
			key: 1
		},
		2: {
			kegBrand: 'Elysian Brewery',
			kegName: 'Space Dust',
			kegPrice: 5,
			kegAlcoPerc: '8.3',
			kegQuantity: 5,
			id: 2,
			key: 2
		}
	};

	// Test One
	test('Should return default state if no action type is recognized', () => {
		expect(selectedKegReducer(null, { type: null })).toEqual(null);
	});

	// Test Two
	test('Should select a keg on click', () => {
		action = {
			type: c.SELECT_KEG,
			kegBrand: 'Corona',
			kegName: 'Premier',
			kegPrice: 5,
			kegAlcoPerc: '4.2',
			kegQuantity: 5,
			id: 1,
			key: 1
		};
		expect(selectedKegReducer(null, action)).toEqual({
			kegBrand: 'Corona',
			kegName: 'Premier',
			kegPrice: 5,
			kegAlcoPerc: '4.2',
			kegQuantity: 5,
			id: 1,
			key: 1
		});
	});
});
