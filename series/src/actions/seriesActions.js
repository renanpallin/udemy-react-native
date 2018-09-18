import firebase from 'firebase';
import { Alert } from 'react-native';

export const SET_SERIES = 'SET_SERIES';
const setSeries = series => ({
	type: SET_SERIES,
	series,
});

export const watchSeries = () => {
	const { currentUser } = firebase.auth();
	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/series`)
			.on('value', snapshot => {
				const series = snapshot.val();

				if (!series) {
					return dispatch(setSeries({}))
				}

				const action = setSeries(series);
				dispatch(action)
			});
	}
}

export const deleteSerie = serie => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			Alert.alert(
				'Deletar',
				`Deseja deletar a serie ${serie.title}`,
				[{
					text: 'Não',
					onPress: () => {
						resolve(false);
					},
					style: 'cancel' // IOS
				},{
					text: 'Sim',
					onPress: async () => {
						const { currentUser } = firebase.auth();
						try {
							await firebase
								.database()
								.ref(`/users/${currentUser.uid}/series/${serie.id}`)
								.remove();
							resolve(true);
						} catch(e) {
							reject(e);
						}
					},
				}],
				{ cancelable: false }
			)
		})
	}
}