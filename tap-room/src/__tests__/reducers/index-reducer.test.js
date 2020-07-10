import rootReducer from '../../reducers/index.js';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import { createStore } from 'redux';
import * as c from '../../actions/actionTypes';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import editFormReducer from '../../reducers/editing-keg-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
	// Test One
	test('Should return default state if no action type is recognized', () => {
		expect(rootReducer({}, { type: null })).toEqual({
			kegList: {},
			formVisibleOnPage: false,
			editing: false,
			selectedKeg: null
		});
	});

	// Test Two
	test('Check that the initial state of kegListReducer matches root reducer', () => {
		const action = {
			type: c.ADD_KEG,
			kegBrand: 'Corona',
			kegName: 'Premier',
			kegPrice: 5,
			kegAlcoPerc: '4.2',
			kegQuantity: 5,
			id: 1
		};
		store.dispatch(action);
		expect(store.getState().kegList).toEqual(kegListReducer(undefined, action));
	});

	// Test Three
	test('Check that the initial state of formVisibleReducer matches rootReducer', () => {
		const action = {
			type: c.TOGGLE_FORM
		};
		store.dispatch(action);
		expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
	});

	// Test Four
	test('Check that the initial state of selectedKegReducer matches rootReducer', () => {
		const action = {
			type: c.SELECT_KEG
		};
		store.dispatch(action);
		expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
	});

	// Test Five
	test('Check that the initial state of editFormReducer matches root reducer ', () => {
		const action = {
			type: c.TOGGLE_EDIT_FORM
		};
		store.dispatch(action);
		expect(store.getState().editing).toEqual(editFormReducer(undefined, action));
	});
});
