import { SET_SERIES	} from '../actions';

export default function(state = null, action) {
	switch (action.type) {
		case SET_SERIES:
			return action.series;
		default:
			return state;
	}
}