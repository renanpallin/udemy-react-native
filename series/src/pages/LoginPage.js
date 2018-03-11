import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mail: '',
			password: '',
		}
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