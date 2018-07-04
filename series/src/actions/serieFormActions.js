import firebase from 'firebase';

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
	return {
		type: SET_FIELD,
		field,
		value,
	}
}

export const SERIE_SAVED_SUCCESS = 'SERIE_SAVED_SUCCESS';
const serieSavedSuccess = () => ({
	type: SERIE_SAVED_SUCCESS
});

export const saveSerie = serie => {
	const { currentUser } = firebase.auth();
	return async dispatch => {
		await firebase
			.database()
			.ref(`/users/${currentUser.uid}/series`)
			.push(serie);
		dispatch(serieSavedSuccess())
	}
}