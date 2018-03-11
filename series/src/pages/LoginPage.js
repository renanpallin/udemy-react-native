import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';


import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mail: '',
			password: '',
		}
	}

	componentDidMount() {
		const config = {
			apiKey: "AIzaSyAlfu1ev1S38uEAWXeNGaoMgEdHpQ1jk2I",
			authDomain: "series-ac513.firebaseapp.com",
			databaseURL: "https://series-ac513.firebaseio.com",
			projectId: "series-ac513",
			storageBucket: "series-ac513.appspot.com",
			messagingSenderId: "720879270280"
		};
		firebase.initializeApp(config);

		firebase
			.auth()
			.signInWithEmailAndPassword('teste@mail.com', '123123')
			.then(user => {
				console.log('Usuário autenticado!', user);
			})
			.catch(error => {
				console.log('Usuário NÃO encontrado', error);
			})
	}

	onChangeHandler(field, value) {
		this.setState({
			[field]: value
		});
	}

	tryLogin() {
		console.log(this.state);
	}

	render() {
		return (
			<View style={styles.container}>
				<FormRow first>
					<TextInput
						style={styles.input}
						placeholder="user@mail.com"
						value={this.state.mail}
						onChangeText={value => this.onChangeHandler('mail', value)}
					 />
				</FormRow>
				<FormRow last>
					<TextInput
						style={styles.input}
						placeholder="******"
						secureTextEntry
						value={this.state.password}
						onChangeText={value => this.onChangeHandler('password', value)}
					/>
				</FormRow>
				<Button
					title="Entrar"
					onPress={() => this.tryLogin()}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
	},
	input: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
	},
});