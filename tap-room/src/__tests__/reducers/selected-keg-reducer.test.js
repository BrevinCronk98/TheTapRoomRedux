import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from '../../actions/actionTypes';

// Test One
test('Should return default state if no action type is recognized', () => {
	expect(selectedKegReducer({}, { type: null })).toEqual({});
});
