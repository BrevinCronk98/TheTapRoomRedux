import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
	let action;

	// Test One
	test('Should return default state if no action type is recognized', () => {
		expect(kegListReducer({}, { type: null })).toEqual({});
	});
});
