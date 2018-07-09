import { combineReducers } from 'redux';

import userReducer from './userReducer';
import serieFormReducer from './serieFormReducer';
import serieReducer from './serieReducer';

export default combineReducers({
	user: userReducer,
	serieForm: serieFormReducer,
	series: serieReducer,
});