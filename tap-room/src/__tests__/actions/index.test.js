import * as actions from '../../actions';
import * as c from '../../actions/actionTypes';

describe('help queue actions', () => {
	// Test One
	it('deleteKeg should create DELETE_KEGaction', () => {
		expect(actions.deleteKeg(1)).toEqual({
			type: c.DELETE_KEG,
			id: 1
		});
	});

	// Test Two
	it('toggleForm should create TOGGLE_FORM action', () => {
		expect(actions.toggleForm()).toEqual({
			type: c.TOGGLE_FORM
		});
	});

	// Test Three
	it('addKeg should create ADD_KEG action', () => {
		expect(
			actions.addKeg({
				kegBrand: 'Elysian Brewery',
				kegName: 'Space Dust',
				kegPrice: 5,
				kegAlcoPerc: '8.2%',
				kegQuantity: 124,
				id: '0'
			})
		).toEqual({
			type: c.ADD_KEG,
			kegBrand: 'Elysian Brewery',
			kegName: 'Space Dust',
			kegPrice: 5,
			kegAlcoPerc: '8.2%',
			kegQuantity: 124,
			id: '0'
		});
	});

	// Test Four
	it('toggleUpdateKeg should create TOGGLE_EDIT_FORM action', () => {
		expect(actions.toggleUpdateKeg()).toEqual({
			type: c.TOGGLE_EDIT_FORM
		});
	});
});
