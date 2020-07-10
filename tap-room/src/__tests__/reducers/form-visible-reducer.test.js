import formVisibleReducer from '../../reducers/form-visible-reducer';

describe('formVisibleReducer', () => {
	// Test One
	test('Should return default state if no action type is recognized', () => {
		expect(formVisibleReducer(false, { type: null })).toEqual(false);
	});

	// Test Two
	test('should toggle form visible if state is true', () => {
		expect(formVisibleReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);
	});
});
