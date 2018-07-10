import firebase from 'firebase';

export const watchSeries = () => {
	const { currentUser } = firebase.auth();
	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/series`)
			.on('value', snapshot => {
				console.log(snapshot.val())
			});
	}
}
