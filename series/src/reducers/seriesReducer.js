// import seriesMock from '../../series.json';
import { SET_SERIES	} from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case SET_SERIES:
			return action.series;
		default:
			return state;
	}
}