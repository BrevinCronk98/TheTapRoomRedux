import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from '../../actions/actionTypes';

describe('formVisibleReducer', () => {
	// Test One
	test('Should return default state if no action type is recognized', () => {
		expect(formVisibleReducer(false, { type: null })).toEqual(false);
	});

	// Test Two
	test('should toggle form visible if state is true', () => {
		expect(formVisibleReducer(false, { type: c.TOGGLE_FORM })).toEqual(true);
	});
});
