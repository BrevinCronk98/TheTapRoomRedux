import rootReducer from '../../reducers/index';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', () => {
	// Test One
	test('Should return default state if no action type is recognized', () => {
		expect(rootReducer({}, { type: null })).toEqual({
			kegList: {},
			formVisibleOnPage: false
		});
	});
});
