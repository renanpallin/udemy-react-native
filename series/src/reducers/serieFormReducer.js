import {
	SET_FIELD,
	SERIE_SAVED_SUCCESS,
	SET_WHOLE_SERIE,
	RESET_FORM,
} from '../actions';

const INITIAL_STATE = {
	id: null,
	title: '',
	gender: 'Policial',
	rate: 0,
	img64: '',
	description: ''
}

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_FIELD:
			const newState = { ...state };
			newState[action.field] = action.value;
			return newState;
		case SET_WHOLE_SERIE:
			return action.serie;
		case RESET_FORM:
		case SERIE_SAVED_SUCCESS:
			return INITIAL_STATE;
		default:
			return state;
	}
}