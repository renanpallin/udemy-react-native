import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Input from './Input';

export default class TodoForm extends React.Component {
	render() {
		return (
			<View>
				<View>
					<Input />
				</View>
				<View>
					{/* botão */}
				</View>
			</View>
		);
	}
}