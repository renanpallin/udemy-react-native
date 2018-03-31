import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TodoApp extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Olá!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 30
	}
});