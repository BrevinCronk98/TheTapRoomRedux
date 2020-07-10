import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import editFormReducer from './editing-keg-reducer';
import selectedKegReducer from './selected-keg-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	selectedKeg: selectedKegReducer,
	formVisibleOnPage: formVisibleReducer,
	kegList: kegListReducer,
	editing: editFormReducer
});

export default rootReducer;
