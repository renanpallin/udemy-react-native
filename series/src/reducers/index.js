import { combineReducers } from 'redux';

import userReducer from './userReducer';
import serieFormReducer from './serieFormReducer';

export default combineReducers({
	user: userReducer,
	serieForm: serieFormReducer,
});