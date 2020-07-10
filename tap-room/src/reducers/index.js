import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	formVisibleOnPage: formVisibleReducer,
	kegList: kegListReducer
});

export default rootReducer;
