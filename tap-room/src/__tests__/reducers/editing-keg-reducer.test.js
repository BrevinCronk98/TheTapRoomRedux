import editFormReducer from '../../reducers/editing-keg-reducer';
import * as c from '../../actions/actionTypes';

describe('editFormReducer', () => {
	// Test One
	test('Should return default state if no action type is recognized', () => {
		expect(editFormReducer(false, { type: null })).toEqual(false);
	});

	// Test Two
	test('should toggle form visible if state is true', () => {
		expect(editFormReducer(false, { type: c.TOGGLE_EDIT_FORM })).toEqual(true);
	});
});
