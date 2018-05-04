import firebase from 'firebase';
import { Alert } from 'react-native';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = user => ({
	type: USER_LOGIN_SUCCESS,
	user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
	type: USER_LOGOUT,
});

export const tryLogin = ({ email, password }) => dispatch => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(user => {
			const action = userLoginSuccess(user);
			dispatch(action);
			return user;
		})
		.catch(error => {
			if (error.code === 'auth/user-not-found') {
				return new Promise((resolve, reject) => {
					Alert.alert(
						'Usuário não encontrado',
						'Deseja criar um cadastro com as informações inseridas?',
						[{
							text: 'Não',
							onPress: () => resolve(),
							style: 'cancel' // IOS
						}, {
							text: 'Sim',
							onPress: () => {
								firebase
									.auth()
									.createUserWithEmailAndPassword(email, password)
									.then(resolve)
									.catch(reject)
							}
						}],
						{ cancelable: false }
					)
				})
			}
			return Promise.reject(error)
		})
}